export interface Book {
  id?: string;
  title: string;
  longDescription: string;
  shortDescription: string;
  pageCount?: number;
  thumbnailUrl?: string;
  categories?: string[];
  authors?: string | string[];
}

