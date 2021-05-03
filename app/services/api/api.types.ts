import { GeneralApiProblem } from "./api-problem"

export interface User {
  id: number
  name: string
}

export interface Person {
  id: number
  name: string
}

export type GetUsersResult = { kind: "ok"; users: User[] } | GeneralApiProblem
export type GetPersonsResult = { kind: "ok"; persons: Person[] } | GeneralApiProblem
export type GetUserResult = { kind: "ok"; user: User } | GeneralApiProblem
