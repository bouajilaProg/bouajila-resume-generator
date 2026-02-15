// projects info
interface Project {
  id: number;
  title: string;
  summary?: string;
  highlights?: string[];
  tools: string,
  projectLink?: string,
}

export type { Project };
