import { projects } from '@/constants'
import type { IProject } from '@/types'

export function useProjects() {
  const getFeaturedProjects = (): IProject[] => {
    return projects.filter((project) => project.featured)
  }
  const sortProjectsByDate = (projectsList: IProject[]): IProject[] => {
    return [...projectsList].sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    )
  }

  return {
    getFeaturedProjects,
    sortProjectsByDate,
  }
}
