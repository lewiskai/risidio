import { Review } from "./Review";
import { PromUser } from "./User";

export type Script = {
  title: string;
  type: string | "movie";
  status: string; // for example finished
  pagesAmount: number;
  genres: string[]; //['Comedy', 'drama']
  privacy: "private script" | "public script" | "shared upon request";
  author: PromUser;
  cowriters: PromUser[];
  description: string;
  reviews?: Review[];
};
