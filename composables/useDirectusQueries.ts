import type { IContact, IProject, ITech, ITimelineItem } from '~/types'

export const useDirectusQueries = () => {
  const { locale } = useI18n()
  const { getItems } = useDirectusItems()
  const { getFiles } = useDirectusFiles()
  const config = useRuntimeConfig()

  const getTranslatedItems = async <T>(
    collection: string,
    params: {
      deep?: any
      fields?: string[]
      filter?: any
    } = {}
  ) => {
    const { deep, fields, filter, ...restParams } = params

    return getItems<T>({
      collection,
      params: {
        deep: {
          translations: {
            _filter: {
              languages_key: locale.value,
            },
            limit: 1,
          },
          ...deep,
        },
        fields: ['*', 'translations.*', ...(fields || [])],
        filter,
        ...restParams,
      },
    })
  }

  const getTechnologies = () => {
    return useAsyncData(
      'technologies',
      () => getItems<ITech>({ collection: 'technologies' }),
      { immediate: true, server: false }
    )
  }

  const getStackTechnologies = () => {
    return useAsyncData(
      'stack-technologies',
      () =>
        getItems<ITech>({
          collection: 'technologies',
          params: { filter: { stack: true } },
        }),
      { immediate: true, server: false }
    )
  }

  const getProjects = (featured = false) => {
    return useAsyncData(
      `projects-${featured ? 'featured' : 'all'}`,
      () =>
        getTranslatedItems<IProject>('projects', {
          deep: {
            tech: { limit: -1 },
          },
          fields: ['tech.*'],
          filter: featured ? { featured: true } : undefined,
        }),
      {
        immediate: true,
        server: false,
        watch: [locale],
      }
    )
  }

  const getExperience = () => {
    return useAsyncData(
      'experience',
      () =>
        getTranslatedItems<ITimelineItem>('experiences', {
          deep: {
            tech: { limit: -1 },
          },
          fields: ['tech.*'],
        }),
      {
        immediate: true,
        server: false,
        watch: [locale],
      }
    )
  }

  const getContacts = () => {
    return useAsyncData(
      'contacts',
      () => getTranslatedItems<IContact>('contacts'),
      {
        transform: (response) => {
          return response.map((contact) => ({
            ...contact,
            description: contact.translations[0]?.description,
          }))
        },
        immediate: true,
        server: false,
        watch: [locale],
      }
    )
  }

  const getCV = () => {
    const { data: cv } = useAsyncData<{ id: string }[]>(
      'cv-file',
      () =>
        getFiles({
          params: {
            filter: {
              title: `cv_${locale.value}`,
            },
            fields: ['id'],
          },
        }),
      {
        immediate: true,
        server: false,
        watch: [locale],
      }
    )

    const cvUrl = computed(() => {
      if (cv.value?.[0]?.id) {
        return `${config.public.directus.url}/assets/${cv.value[0].id}`
      }
      return undefined
    })

    return {
      cv,
      cvUrl,
    }
  }

  return {
    getTechnologies,
    getStackTechnologies,
    getProjects,
    getExperience,
    getContacts,
    getCV,
  }
}
