export declare interface UserData {
	id?: UserId
	name?: UserName
	email?: UserEmail
	id_token?: id_token
	access_token?: access_token
}

export declare type UserId = number
export declare type UserName = string
export declare type UserEmail = string
export declare type id_token = string
export declare type access_token = string
// export declare type UserStoreState = UserData