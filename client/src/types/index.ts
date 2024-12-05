import { PagedData, User, Role } from '../../../server/src/models'

export type PagedClientUser = PagedData<User>
export type PagedClientRole = PagedData<Role>
export type ClientRole = Role
export type ClientUser = User
