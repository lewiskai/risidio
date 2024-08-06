import { PromUser } from "./User";

export type Message = {
  sender: PromUser;
  content: string;
  timestamp: Date;
};
