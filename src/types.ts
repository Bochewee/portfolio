export type SkillCategory = {
  name: string;
  skills: Skill[];
};

export type Skill = {
  name: string;
  icon: string;
};

export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
};

export type NavItem = {
  label: string;
  to: string;
};