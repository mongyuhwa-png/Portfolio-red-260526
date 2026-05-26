/**
 * Shared Type Definitions for Songhee Lee Portfolio
 */

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  tags: string[];
  client: string;
  year: string;
  link?: string;
  liveUrl?: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}
