
import { User } from "../../utils/types/User";


export interface Auth {
  user?: User | null;
  token_type: string;
  access_token?: string | null;
  isLoading?: boolean;
  expires_in: number;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface AuthResponse {
  data: User;
}

export interface CheckpointEmailResponse {
  data: {
    email: string;
    is_email_free: boolean;
  };
}

export interface CheckpointUsernameResponse {
  data: {
    username: string;
    is_username_free: boolean;
  };
}
export interface ForgotPayload {
  email: string | null;
}

export interface ResetPayload {
  token: string;
  password: string;
  confirm_password: string;
}
export interface RegisterPayload {
  email: string;
  password: string;
}


export interface CheckpointQueryPayload {
  query: string;
}

export interface UpdatePasswordPayload {
  email: string | null;
  password: string;
}