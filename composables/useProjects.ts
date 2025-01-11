import { projects } from '@/constants'
import { useI18n } from 'vue-i18n'

export function useProjects() {
  const { t } = useI18n()
  const searchQuery = ref('')
  const sortBy = ref<'date' | 'name'>('date')
  const sortDirection = ref<'asc' | 'desc'>('desc')

  const filteredProjects = computed(() => {
    return projects.filter(
      (project) =>
        t(project.name)
          .toLowerCase()
          .includes(searchQuery.value.toLowerCase()) ||
        t(project.description)
          .toLowerCase()
          .includes(searchQuery.value.toLowerCase())
    )
  })

  const sortedProjects = computed(() => {
    return [...filteredProjects.value].sort((a, b) => {
      if (sortBy.value === 'date') {
        return sortDirection.value === 'desc'
          ? b.createdAt.getTime() - a.createdAt.getTime()
          : a.createdAt.getTime() - b.createdAt.getTime()
      } else {
        return sortDirection.value === 'desc'
          ? t(b.name).localeCompare(t(a.name))
          : t(a.name).localeCompare(t(b.name))
      }
    })
  })

  return {
    searchQuery,
    sortBy,
    sortDirection,
    sortedProjects,
    getFeaturedProjects: () => projects.filter((project) => project.featured),
  }
}
