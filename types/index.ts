export type TStatus = 'searching' | 'hired'

export interface ITech {
  id?: number
  name: string
  icon: string
  stack?: boolean | null
}

export interface IProjectTranslation {
  id: number
  projects_id: number
  languages_key: string
  name: string
  description: string
}

export interface IProjectTech {
  id: number
  projects_id: number
  technologies_id: number
}

export interface IProject {
  id: number
  github_url: string
  preview_url: string
  featured: boolean
  started_at: string
  status: 'active' | 'archived'
  translations: IProjectTranslation[]
  tech: IProjectTech[]
}

interface IContactTranslations {
  description: string
}

export interface IContact {
  name: string
  icon: string
  link: string
  translations: IContactTranslations[]
}

export type SortType = 'date' | 'name'
export type SortDirection = 'asc' | 'desc'
export type SortValue = `${SortType}-${SortDirection}`
export interface SortOption {
  value: SortValue
  label: string
}

export type TimelineItemType = 'work' | 'education'

export interface ITimelineTranslation {
  id: number
  experiences_id: number
  languages_key: string
  title: string
  company: string
  location: string
  link_name: string | null
  description: string
}

export interface ITimelineItem {
  id: number
  type: 'work' | 'education'
  start_date: string
  end_date: string | null
  link: string | null
  translations: ITimelineTranslation[]
  tech: IProjectTech[]
}

export interface Article {
  id: string
  title: string
  description: string
  date: Date
  tags: string[]
  readTime: number
  url: string
}
