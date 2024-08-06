import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../hooks";
import { GetScripts, PostScriptPayload, ScriptState } from "./interface";

const initialState: ScriptState = {
  scripts: null,
  script: null,
  isLoading: false,
  error: null,
};

const scriptsSlice = createSlice({
  name: "scripts",
  initialState,
  reducers: {
    setScripts(state, { payload: { scripts } }: PayloadAction<{ scripts: GetScripts[] }>) {
      state.scripts = scripts;
      state.isLoading = false;
      state.error = null;
    },
    setScript(state, { payload: { script } }: PayloadAction<{ script: PostScriptPayload }>) {
      state.script = script;
      state.isLoading = false;
      state.error = null;
    },
    setLoading(state, { payload: { isLoading } }: PayloadAction<{ isLoading: boolean }>) {
      state.isLoading = isLoading;
    },
    setError(state, { payload: { error } }: PayloadAction<{ error: string }>) {
      state.error = error;
      state.isLoading = false;
    },
  },
});

export const { setScripts, setScript, setLoading, setError } = scriptsSlice.actions;

export default scriptsSlice.reducer;

// Selectors
export const selectScripts = (state: RootState): GetScripts[] | null | undefined => state.scripts.scripts;
export const selectScript = (state: RootState): PostScriptPayload | null | undefined => state.scripts.script;
export const selectIsLoading = (state: RootState): boolean => state.scripts.isLoading;
export const selectError = (state: RootState): string | null | undefined => state.scripts.error;
