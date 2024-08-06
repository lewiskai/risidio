import { reactLocalStorage } from "reactjs-localstorage";
import { useMemo } from "react";
import {
  setCredential,
  useIsLoading,
  useSelectAccessToken,
  useSelectCurrentUser,
} from "./slice";
import { useAppDispatch } from "../hooks";
import { User } from "../../utils/types/User";
import { useSelector } from "react-redux";

export const useAuth = () => {
  const user = useSelector(useSelectCurrentUser);
  const token = useSelector(useSelectAccessToken);
  const isLoading = useSelector(useIsLoading);
  let SUser: User | null = null;
  let SToken: string | null = null;

  try {
    const storedUser = reactLocalStorage.get("@prom_user");
    const jsonStored = storedUser ? JSON.parse(storedUser as string) : null;
    SUser = jsonStored ? jsonStored.user : null;
    SToken = jsonStored ? jsonStored.access_token : null;
  } catch (error) {
    console.log(error);
  }

  return useMemo(
    () => ({ user: user ? user : SUser, isLoading, token: token ?? SToken }),
    [user, SUser, isLoading, token, SToken]
  );
};

export const useLogout = () => {
  const dispatch = useAppDispatch();
  return () => {
    dispatch(setCredential({}));
  };
};
