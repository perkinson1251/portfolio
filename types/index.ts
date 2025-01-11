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
