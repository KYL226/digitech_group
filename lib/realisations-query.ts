import type { Project } from "@/data/projects";

export const REALISATIONS_PAGE_SIZE = 6;

export type SortOption = "name-asc" | "name-desc" | "date-asc" | "date-desc";

export const SORT_LABELS: Record<SortOption, string> = {
  "date-desc": "Date (plus recent)",
  "date-asc": "Date (plus ancien)",
  "name-asc": "Nom (A-Z)",
  "name-desc": "Nom (Z-A)",
};

const SORT_VALUES: SortOption[] = ["date-desc", "date-asc", "name-asc", "name-desc"];

export function parseSortParam(value: string | undefined): SortOption {
  if (value && SORT_VALUES.includes(value as SortOption)) {
    return value as SortOption;
  }
  return "date-desc";
}

export function parsePageParam(value: string | undefined): number {
  const n = Number.parseInt(value ?? "1", 10);
  if (Number.isNaN(n) || n < 1) return 1;
  return n;
}

export function sortProjects(list: Project[], sort: SortOption): Project[] {
  const copy = [...list];
  switch (sort) {
    case "name-asc":
      return copy.sort((a, b) => a.name.localeCompare(b.name, "fr"));
    case "name-desc":
      return copy.sort((a, b) => b.name.localeCompare(a.name, "fr"));
    case "date-asc":
      return copy.sort(
        (a, b) => new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime(),
      );
    case "date-desc":
    default:
      return copy.sort(
        (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
      );
  }
}

export function buildRealisationsHref(opts: {
  q?: string;
  cat?: string;
  sort?: SortOption;
  page?: number;
}): string {
  const sp = new URLSearchParams();
  if (opts.q?.trim()) sp.set("q", opts.q.trim());
  if (opts.cat) sp.set("cat", opts.cat);
  if (opts.sort && opts.sort !== "date-desc") sp.set("sort", opts.sort);
  if (opts.page && opts.page > 1) sp.set("page", String(opts.page));
  const qs = sp.toString();
  return qs ? `/realisations?${qs}` : "/realisations";
}
