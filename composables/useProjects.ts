import type { IProject } from '~/types'

export const useProjects = () => {
  const searchQuery = ref('')
  const sortBy = ref<'date' | 'name'>('date')
  const sortDirection = ref<'asc' | 'desc'>('desc')

  const filterAndSortProjects = (projects: IProject[] | null) => {
    if (!projects) return []

    const filtered = projects.filter((project) => {
      const translation = project.translations[0]
      if (!translation) return false

      const searchLower = searchQuery.value.toLowerCase()
      return (
        translation.name.toLowerCase().includes(searchLower) ||
        translation.description.toLowerCase().includes(searchLower)
      )
    })

    return [...filtered].sort((a, b) => {
      const translationA = a.translations[0]
      const translationB = b.translations[0]

      if (sortBy.value === 'date') {
        const dateA = new Date(a.started_at).getTime()
        const dateB = new Date(b.started_at).getTime()
        return sortDirection.value === 'desc' ? dateB - dateA : dateA - dateB
      } else {
        if (!translationA || !translationB) return 0
        return sortDirection.value === 'desc'
          ? translationB.name.localeCompare(translationA.name)
          : translationA.name.localeCompare(translationB.name)
      }
    })
  }

  return {
    searchQuery,
    sortBy,
    sortDirection,
    filterAndSortProjects,
  }
}
