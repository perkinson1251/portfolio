import type { IContact, IProject, ITech } from '@/types'

export const techStack: ITech[] = [
  { name: 'Vue 3', icon: 'logos:vue' },
  { name: 'Nuxt.js', icon: 'logos:nuxt-icon' },
  { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
  { name: 'TypeScript', icon: 'logos:typescript-icon' },
  { name: 'JavaScript', icon: 'logos:javascript' },
  { name: 'Node.js', icon: 'logos:nodejs-icon' },
  { name: 'Docker', icon: 'logos:docker-icon' },
  { name: 'Git', icon: 'logos:git-icon' },
  { name: 'GitHub', icon: 'logos:github-icon' },
  { name: 'Figma', icon: 'logos:figma' },
  { name: 'Storybook', icon: 'logos:storybook-icon' },
  { name: 'Vite', icon: 'logos:vitejs' },
  { name: 'Pinia', icon: 'logos:pinia' },
  { name: 'ESLint', icon: 'logos:eslint' },
  { name: 'Prettier', icon: 'logos:prettier' },
]

export const contacts: IContact[] = [
  {
    name: 'GitHub',
    icon: 'ph:github-logo',
    link: 'https://github.com/perkinson1251',
    description: 'aboutMeSection.contactsSection.github',
  },
  {
    name: 'LinkedIn',
    icon: 'ph:linkedin-logo',
    link: 'https://linkedin.com/in/roman-trashutin',
    description: 'aboutMeSection.contactsSection.linkedin',
  },
  {
    name: 'Email',
    icon: 'ph:envelope-simple',
    link: 'mailto:tttrashutin@gmail.com',
    description: 'aboutMeSection.contactsSection.email',
  },
  {
    name: 'Telegram',
    icon: 'ph:telegram-logo',
    link: 'https://t.me/sanddash',
    description: 'aboutMeSection.contactsSection.telegram',
  },
]

export const projects: IProject[] = [
  {
    name: 'projects.mindenitUi.title',
    description: 'projects.mindenitUi.description',
    githubUrl: 'https://github.com/mindenit/ui',
    previewUrl: 'https://mindenit.github.io/ui/',
    technologies: [
      techStack.find((tech) => tech.name === 'Vue 3')!,
      techStack.find((tech) => tech.name === 'TypeScript')!,
      techStack.find((tech) => tech.name === 'Tailwind CSS')!,
      techStack.find((tech) => tech.name === 'Storybook')!,
    ],
    featured: true,
    createdAt: new Date('2024-03-06'),
    status: 'active',
  },
  {
    name: 'projects.nureScheduleVue.title',
    description: 'projects.nureScheduleVue.description',
    githubUrl: 'https://github.com/mindenit/nure-schedule-vue',
    previewUrl: 'https://sh.mindenit.org',
    technologies: [
      techStack.find((tech) => tech.name === 'Vue 3')!,
      techStack.find((tech) => tech.name === 'TypeScript')!,
      techStack.find((tech) => tech.name === 'Pinia')!,
      techStack.find((tech) => tech.name === 'Tailwind CSS')!,
    ],
    featured: true,
    createdAt: new Date('2024-01-11'),
    status: 'active',
  },
  {
    name: 'projects.movieSearch.title',
    description: 'projects.movieSearch.description',
    githubUrl: 'https://github.com/perkinson1251/react-ts-movie-search',
    technologies: [
      techStack.find((tech) => tech.name === 'React')!,
      techStack.find((tech) => tech.name === 'TypeScript')!,
      techStack.find((tech) => tech.name === 'Tailwind CSS')!,
    ],
    featured: false,
    createdAt: new Date('2022-03-01'),
    status: 'archived',
  },
  {
    name: 'projects.codeEditor.title',
    description: 'projects.codeEditor.description',
    githubUrl: 'https://github.com/perkinson1251/react-code-editor',
    technologies: [
      techStack.find((tech) => tech.name === 'React')!,
      techStack.find((tech) => tech.name === 'TypeScript')!,
    ],
    featured: false,
    createdAt: new Date('2022-06-10'),
    status: 'archived',
  },
]
