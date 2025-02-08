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

export interface ITransformedProject {
  id: number
  github_url: string
  preview_url: string
  featured: boolean
  started_at: string
  status: 'active' | 'archived'
  name: string
  description: string
  tech: ITech[]
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

export interface DirectusFile {
  charset?: string | null
  description?: string | null
  duration?: number | null
  embed?: string | null
  filename_disk?: string | null
  filename_download: string
  filesize?: number | null
  folder?: string | null
  height?: number | null
  id: string
  location?: string | null
  metadata?: unknown | null
  modified_by?: string | null
  modified_on: string
  storage: string
  tags?: unknown | null
  title?: string | null
  type?: string | null
  uploaded_by?: string | null
  uploaded_on: string
  width?: number | null
  [key: string]: any
}
