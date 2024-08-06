import { PromUser } from "./User"

export type Review = {
author: PromUser,
review: string,
rate?: number,
date : Date, // date of publication
}