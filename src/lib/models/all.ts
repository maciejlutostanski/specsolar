export type MenuItem = {
  title: string;
  link?: string;
  children?: Array<{
    title: string;
    link: string;
    desc: string;
  }>;
};
