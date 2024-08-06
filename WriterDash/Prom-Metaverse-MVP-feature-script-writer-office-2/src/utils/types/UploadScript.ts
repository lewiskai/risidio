import { PromUser } from "./User";

export interface UploadScriptForm {
  title: string;
  genre: string[];
  status: string;
  synopsis: string;
  contributors: PromUser[];
  pdfFile: File[]; // was never
  imageFile: File[]; // was never
}
