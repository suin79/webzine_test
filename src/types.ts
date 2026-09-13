export type NavigationTab = 'MAIN' | 'ARCHIVE' | 'SUBSCRIBE' | 'WRITERS';

export interface Writer {
  id: string;
  name: string;
  englishName: string;
  role: string;
  bio: string;
  philosophy: string;
  avatar: string;
  location: string;
  worksCount: number;
}

export interface Article {
  id: string;
  issueId: string;
  issueNumber: string; // '01', '02', '03', '04'
  title: string;
  subtitle: string;
  authorId: string;
  authorName: string;
  authorRole: string;
  coverImage: string;
  publishedDate: string; // '2026.09'
  readingTime: string; // '7 min'
  tags: string[];
  excerpt: string;
  pullQuote?: string;
  paragraphs: string[];
}

export interface Issue {
  id: string; // '2026-09'
  year: number;
  month: string; // 'SEPTEMBER'
  monthNumber: number; // 9
  monthKorean: string; // '9월'
  themeTitle: string; // '우리가 이번 달에 발견한 것들'
  themeSubtext: string;
  coverImage: string;
  editorNote: string;
  articleIds: string[];
}
