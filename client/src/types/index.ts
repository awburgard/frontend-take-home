import { PagedData, Role, User } from '@/server/models'

export type PagedClientUser = PagedData<User>
export type PagedClientRole = PagedData<Role>
export type ClientRole = Role
export type ClientUser = User

export type DialogType = 'edit' | 'delete' | null
