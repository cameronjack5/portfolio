type Reference = BookReference | WebsiteReference | JournalArticleReference | NewsArticleReference

type BookReference = {
  type: "book";
  id: number;
  authors: {
    firstName: string;
    lastName: string;
  }[];
  title: string;
  pages: string;
  edition?: string;
  publisher: string;
  year: number;
  isbn: string;
}

type WebsiteReference = {
  type: "website";
  id: number;
  authors: {
    firstName: string;
    lastName: string;
  }[];
  website: string;
  title: string;
  url: string;
  dateAccessed: string;
}

type JournalArticleReference = {
  type: "journal";
  id: number;
  authors: {
    firstName: string;
    lastName: string;
  }[];
  title: string;
  journal: string;
  volume: number;
  number: number;
  year: number;
  pages?: string;
  doi?: string;
  onlineInfo?: {
    url: string;
    dateAccessed: string;
  }
}

type NewsArticleReference = {
  type: "news";
  id: number;
  authors: {
    firstName: string;
    lastName: string;
  }[];
  title: string;
  organisation: string;
  date: string;
  pages?: string;
  onlineInfo?: {
    url: string;
    dateAccessed: string;
  }
}