import { allTechnologies } from '@/constants'
import type { ITech } from '@/types'

export const findTech = (name: string): ITech => {
  const tech = allTechnologies.find((tech) => tech.name === name)
  if (!tech) {
    console.warn(`Technology "${name}" not found in techStack, using fallback`)
    return {
      name,
      icon: 'ph:code',
    }
  }
  return tech
}
