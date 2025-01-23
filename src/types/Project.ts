export type Project = {
  title: string
  imgs: string[]
  languages: {
    name: string
    icon: string
  }[]
  desc: string
  repoName: string
  githubLink: string
  hostedLink: string | null
}
