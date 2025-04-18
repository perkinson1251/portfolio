export type TStatus = 'searching' | 'hired'

export interface ITech {
  name: string
  icon: string
}

export interface IProject {
  name: string
  description: string
  githubUrl: string
  previewUrl?: string
  technologies: ITech[]
  featured: boolean
  createdAt: Date
  status: 'active' | 'archived'
}

export interface IContact {
  name: string
  icon: string
  link: string
  description: string
}

export enum ETechName {
  VUE = 'Vue 3',
  NUXT = 'Nuxt.js',
  REACT = 'React',
  NEXT = 'Next.js',
  TAILWIND = 'Tailwind CSS',
  SCSS = 'SCSS',
  TYPESCRIPT = 'TypeScript',
  JAVASCRIPT = 'JavaScript',
  NODE = 'Node.js',
  BUN = 'Bun',
  DOCKER = 'Docker',
  GIT = 'Git',
  GITHUB = 'GitHub',
  FIGMA = 'Figma',
  STORYBOOK = 'Storybook',
  VITE = 'Vite',
  WEBPACK = 'Webpack',
  PINIA = 'Pinia',
  REDUX = 'Redux',
  ESLINT = 'ESLint',
  PRETTIER = 'Prettier',
}

export type SortType = 'date' | 'name'
export type SortDirection = 'asc' | 'desc'
export type SortValue = `${SortType}-${SortDirection}`
export interface SortOption {
  value: SortValue
  label: string
}

export type TimelineItemType = 'work' | 'education'

export interface TimelineItem {
  startDate: Date
  endDate?: Date
  title: string
  description: string
  company?: string
  location?: string
  type: TimelineItemType
  link?: {
    url: string
    label: string
  }
  technologies?: ITech[]
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
