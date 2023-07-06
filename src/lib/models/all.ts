export type MenuItem = {
  title: string;
  link?: string;
  children?: Array<{
    title: string;
    link: string;
    desc: string;
    iconUrl?: string;
  }>;
};

export type LeadType = {
  imageUrl: string;
  title: string;
  subtitle: string;
  desc: string;
  points: Array<{ name: string; desc: string }>;
}

export type FaqItemType = {
  question: string;
  answer: string;
}
