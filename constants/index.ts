import type { IContact, IProject, ITech, TimelineItem } from '@/types'
import { ETechName } from '@/types'
import { findTech } from '@/utils/tech'

export const allTechnologies: ITech[] = [
  { name: ETechName.VUE, icon: 'logos:vue' },
  { name: ETechName.NUXT, icon: 'logos:nuxt-icon' },
  { name: ETechName.REACT, icon: 'logos:react' },
  { name: ETechName.NEXT, icon: 'logos:nextjs' },
  { name: ETechName.TAILWIND, icon: 'logos:tailwindcss-icon' },
  { name: ETechName.SCSS, icon: 'logos:sass' },
  { name: ETechName.TYPESCRIPT, icon: 'logos:typescript-icon' },
  { name: ETechName.JAVASCRIPT, icon: 'logos:javascript' },
  { name: ETechName.NODE, icon: 'logos:nodejs-icon' },
  { name: ETechName.BUN, icon: 'logos:bun' },
  { name: ETechName.DOCKER, icon: 'logos:docker-icon' },
  { name: ETechName.GIT, icon: 'logos:git-icon' },
  { name: ETechName.GITHUB, icon: 'logos:github-icon' },
  { name: ETechName.FIGMA, icon: 'logos:figma' },
  { name: ETechName.STORYBOOK, icon: 'logos:storybook-icon' },
  { name: ETechName.VITE, icon: 'logos:vitejs' },
  { name: ETechName.WEBPACK, icon: 'logos:webpack' },
  { name: ETechName.PINIA, icon: 'logos:pinia' },
  { name: ETechName.REDUX, icon: 'logos:redux' },
  { name: ETechName.ESLINT, icon: 'logos:eslint' },
  { name: ETechName.PRETTIER, icon: 'logos:prettier' },
]

export const techStack: ITech[] = [
  { name: ETechName.VUE, icon: 'logos:vue' },
  { name: ETechName.NUXT, icon: 'logos:nuxt-icon' },
  { name: ETechName.TAILWIND, icon: 'logos:tailwindcss-icon' },
  { name: ETechName.TYPESCRIPT, icon: 'logos:typescript-icon' },
  { name: ETechName.JAVASCRIPT, icon: 'logos:javascript' },
  { name: ETechName.NODE, icon: 'logos:nodejs-icon' },
  { name: ETechName.DOCKER, icon: 'logos:docker-icon' },
  { name: ETechName.GIT, icon: 'logos:git-icon' },
  { name: ETechName.GITHUB, icon: 'logos:github-icon' },
  { name: ETechName.FIGMA, icon: 'logos:figma' },
  { name: ETechName.STORYBOOK, icon: 'logos:storybook-icon' },
  { name: ETechName.VITE, icon: 'logos:vitejs' },
  { name: ETechName.PINIA, icon: 'logos:pinia' },
  { name: ETechName.ESLINT, icon: 'logos:eslint' },
  { name: ETechName.PRETTIER, icon: 'logos:prettier' },
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
      findTech(ETechName.VUE),
      findTech(ETechName.TYPESCRIPT),
      findTech(ETechName.TAILWIND),
      findTech(ETechName.STORYBOOK),
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
      findTech(ETechName.VUE),
      findTech(ETechName.TYPESCRIPT),
      findTech(ETechName.TAILWIND),
      findTech(ETechName.PINIA),
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
      findTech(ETechName.REACT),
      findTech(ETechName.TYPESCRIPT),
      findTech(ETechName.TAILWIND),
    ],
    featured: false,
    createdAt: new Date('2022-03-01'),
    status: 'archived',
  },
  {
    name: 'projects.codeEditor.title',
    description: 'projects.codeEditor.description',
    githubUrl: 'https://github.com/perkinson1251/react-code-editor',
    technologies: [findTech(ETechName.REACT), findTech(ETechName.TYPESCRIPT)],
    featured: false,
    createdAt: new Date('2022-06-10'),
    status: 'archived',
  },
]

export const experienceItems: TimelineItem[] = [
  {
    startDate: new Date('2023-09-01'),
    title: 'experience.mindenit.title',
    type: 'work',
    company: 'experience.mindenit.company',
    location: 'experience.mindenit.location',
    description: 'experience.mindenit.description',
    technologies: [
      findTech(ETechName.VUE),
      findTech(ETechName.NUXT),
      findTech(ETechName.TYPESCRIPT),
      findTech(ETechName.TAILWIND),
      findTech(ETechName.STORYBOOK),
      findTech(ETechName.PINIA),
      findTech(ETechName.GIT),
      findTech(ETechName.DOCKER),
      findTech(ETechName.ESLINT),
      findTech(ETechName.PRETTIER),
    ],
    link: {
      url: 'https://mindenit.org',
      label: 'experience.mindenit.link',
    },
  },
  {
    startDate: new Date('2024-09-01'),
    type: 'education',
    title: 'experience.nure.title',
    company: 'experience.nure.company',
    location: 'experience.nure.location',
    description: 'experience.nure.description',
    link: {
      url: 'https://nure.ua',
      label: 'experience.nure.link',
    },
  },
  {
    startDate: new Date('2018-09-01'),
    endDate: new Date('2021-09-01'),
    type: 'education',
    title: 'experience.itstep.title',
    company: 'experience.itstep.company',
    location: 'experience.itstep.location',
    description: 'experience.itstep.description',
  },
]
