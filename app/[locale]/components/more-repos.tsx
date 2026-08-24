"use client";

import { useEffect, useState } from "react";
import { fetchMoreRepos, type GithubRepo } from "@/lib/github";
import type { Dictionary } from "@/lib/i18n/dictionary";
import { site } from "@/lib/data/site";
import { Reveal } from "./reveal";
import { ArrowUpRightIcon } from "./icons";

type Status = "loading" | "ready" | "error";

export function MoreRepos({ dict }: { dict: Dictionary }) {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    let cancelled = false;
    fetchMoreRepos()
      .then((data) => {
        if (!cancelled) {
          setRepos(data.slice(0, 6));
          setStatus("ready");
        }
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="mt-20 border-t border-border pt-14">
      <Reveal className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">{dict.projects.moreKicker}</p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-fg">{dict.projects.moreHeading}</h3>
          <p className="mt-2 max-w-xl text-sm text-fg-muted">{dict.projects.moreIntro}</p>
        </div>
        <a
          href={site.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm text-fg-muted transition-colors hover:border-border-strong hover:text-fg"
        >
          {dict.projects.viewAllOnGithub}
          <ArrowUpRightIcon className="h-3.5 w-3.5" />
        </a>
      </Reveal>

      {status === "loading" ? (
        <p className="font-mono text-sm text-fg-dim">{dict.projects.loading}</p>
      ) : status === "error" ? (
        <p className="text-sm text-fg-muted">{dict.projects.error}</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo, i) => (
            <Reveal key={repo.id} delay={(i % 3) * 0.06}>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="group block h-full rounded-xl border border-border bg-bg-elevated/40 p-5 transition-colors hover:border-accent/40"
              >
                <div className="flex items-center justify-between gap-2">
                  <h4 className="font-mono text-sm text-fg">{repo.name}</h4>
                  <ArrowUpRightIcon className="h-3.5 w-3.5 shrink-0 text-fg-dim transition-colors group-hover:text-accent" />
                </div>
                {repo.description ? (
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-fg-muted">{repo.description}</p>
                ) : null}
                {repo.language ? (
                  <span className="mt-3 inline-block rounded-md border border-border bg-bg px-2 py-0.5 text-xs text-fg-dim">
                    {repo.language}
                  </span>
                ) : null}
              </a>
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
