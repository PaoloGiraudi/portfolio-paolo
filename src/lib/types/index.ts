export interface Meta {
  code: string;
  date: string;
  demo: string;
  title: string;
  description: string;
  stack: string[];
}

export interface Project {
  meta: Meta;
  path: string;
}
