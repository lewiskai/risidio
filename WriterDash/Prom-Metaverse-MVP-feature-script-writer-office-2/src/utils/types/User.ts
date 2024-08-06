import { Script } from "./Script";

export interface User {
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
  allowTFA: boolean;
  tfaReminder: boolean;
  tfaReminderDate: string | null;
  tfaReminderStatus: string;
  avatar: string | null;
}

export type PromUser = {
  userName: string;
  roles?: string[];
  status: string;
  pronouns?: string;
  scripts?: Script[];
  collaborators?: User[];
  views?: string[]; // 'Open-minded',
};
