import { useMemo } from "react";
import { useSelector } from "react-redux";
import {
  selectScripts,
  selectScript,
  selectIsLoading,
  selectError,
} from "./slice";
import {
  useGetScriptsQuery,
  useGetScriptsByIdQuery,
  usePostScriptsMutation,
} from "./api";
import { PostScriptPayload } from "./interface";

// Custom hook to use script state and API interactions
export const useScripts = () => {
  const scripts = useSelector(selectScripts);
  const script = useSelector(selectScript);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  // Fetch scripts
  const { data: fetchedScripts, refetch: refetchScripts } = useGetScriptsQuery(null);

  // Fetch script by ID
  const fetchScriptById = (id: string) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data: fetchedScript } = useGetScriptsByIdQuery(id);
    return fetchedScript;
  };

  // Create a new script
  const [postScript, { isLoading: isPosting }] = usePostScriptsMutation();

  const createScript = async (newScript: PostScriptPayload) => {
    try {
      await postScript(newScript).unwrap();
      refetchScripts(); 
    } catch (error) {
      console.error("Failed to post script:", error);
    }
  };

  return useMemo(
    () => ({
      scripts: fetchedScripts?.data || scripts,
      script,
      isLoading: isLoading || isPosting,
      error,
      fetchScriptById,
      createScript,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [scripts, script, isLoading, isPosting, error, fetchedScripts]
  );
};

// Custom hook to log errors (if needed)
export const useScriptError = () => {
  const error = useSelector(selectError);
  return error;
};


