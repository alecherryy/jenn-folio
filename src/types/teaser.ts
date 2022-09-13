// interface for single blog post
export type TeaserItem = {
  date: string,
  title: string,
  subtitle?: string,
  path?: string,
  newTab?: boolean,
  download?: boolean
};