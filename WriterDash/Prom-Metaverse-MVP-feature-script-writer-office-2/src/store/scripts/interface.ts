export interface GetScriptsById {
  id: string;
}

export interface GetScripts {
  pagNumber: number;
  pagSize: number;
  sortDir: string;
}

export interface PostScriptPayload {
    title: string;
    genre: string;
    status: string;
    synopsis: string;
    collaborators: string;
    isUploadAnonymous: boolean;
    isUploaded: boolean;
    scriptFileUrl: string; 
    scriptImageUrl: string; 
  }
export interface ScriptState {
  scripts: GetScripts[] | null;
  script: PostScriptPayload | null;
  isLoading: boolean;
  error: string | null;
}