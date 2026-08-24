import { projects } from "./data/projects";
import { site } from "./data/site";

export interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  fork: boolean;
  pushed_at: string;
  stargazers_count: number;
}

const curatedRepoNames = new Set(projects.map((p) => p.repo));

export async function fetchMoreRepos(): Promise<GithubRepo[]> {
  const res = await fetch(`https://api.github.com/users/${site.github}/repos?per_page=100&sort=pushed`, {
    headers: { Accept: "application/vnd.github+json" },
  });

  if (!res.ok) {
    throw new Error(`GitHub API responded with ${res.status}`);
  }

  const repos: GithubRepo[] = await res.json();

  return repos
    .filter((repo) => !repo.fork && repo.description && !curatedRepoNames.has(repo.name))
    .sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime());
}
