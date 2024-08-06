import { CustomAxiosHeaders } from "../../utils/types/CustomAxios";

export interface Profile {
  id: string;
  email: string;
  name: string;
  pronouns: string[];
  cinemaWorker: boolean;
  roles: string[];
  profileCompleted: boolean;
  isTourComplete: boolean;
  tourStage: number;
  accountState: string;
  registered: string;
  token: string;
  updatedAt: string;
  avatar: null;
}

export interface UpdateAvatarUrl {
  body: {
    avatar: {
      url: string;
    }
  }
}

export interface UpdateProfilePayload {
  body: {
    name: string;
    pronouns: string[];
    avatar: {
      skinColor: string;
      hair: {
        color: string;
        type: string;
      };
      top: {
        color: string;
        type: string;
      };
      bottom: {
        color: string;
        type: string;
      };
      accessory: string;
    };
    isCinemaWorker: boolean;
    roles: string[];
  };
  headers: CustomAxiosHeaders;
}

export interface ProfileState {
  userName: string;
  userData: Profile;
  isLoading?: boolean | null;
}