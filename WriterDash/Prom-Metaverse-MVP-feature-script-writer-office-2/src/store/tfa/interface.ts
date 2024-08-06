export interface Check2FAStatusPayload {
  email: string | null;
}

export interface EnableDisablePayload {
  email: string | null | undefined;
}
export interface ResendEmailPayload {
  email: string | null;
}

export interface VerifyPayload {
  code: string | null;
  email: string | null;
}

export interface SetTFAReminderPayload {
  status: string;
}

export interface SetTFAReminderResponse {
  currentStatus: string
}

// export interface No2FALoginResponse {
//   id: string;
//   email: string;
//   name: string;
//   pronouns: string[];
//   cinemaWorker: boolean;
//   roles: string[];
//   profileCompleted: boolean;
//   isTourComplete: boolean;
//   tourStage: number;
//   accountState: string;
//   registered: string;
//   token: string;
//   updatedAt: string;
//   allowTFA: boolean;
//   tfaReminderStatus: string;
//   tfaReminderDate: string | null;
//   tfaReminder: boolean;
// }