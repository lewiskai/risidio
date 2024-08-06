export interface File {
  name: string; 
  size: number; // size of the file in bytes
  type: string; // MIME-тype of file
  lastModified: number; // time of last modification 
}