import { colors } from '../../langs-colors.json'

export const prerender = false

const excludedRepos = ['mateo-14']

export interface GithubRepostory {
  name: string
  description: string
  html_url: string
  pushed_at: string
  stargazers_count: number
  language: keyof typeof colors
  fork: boolean
  color: string
}

export async function get() {
  const res = await fetch('https://api.github.com/users/mateo-14/repos?sort=pushed&per_page=10', {
    headers: {
      Authorization: `token ${import.meta.env.GITHUB_ACCESS_TOKEN}`
    }
  })

  let repos: GithubRepostory[] = []
  if (res.status === 200) {
    repos = await res.json()
    repos = repos.filter(repo => !repo.fork && !excludedRepos.includes(repo.name)).slice(0, 5)
    repos = repos.map(repo => ({
      name: repo.name,
      description: repo.description,
      html_url: repo.html_url,
      pushed_at: repo.pushed_at,
      stargazers_count: repo.stargazers_count,
      language: repo.language,
      fork: repo.fork,
      color: colors[repo.language]?.color ?? '#fff'
    }))
  }

  return new Response(JSON.stringify(repos), {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}