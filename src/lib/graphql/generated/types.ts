/* eslint-disable */
/**
 * WARNING: THIS FILE IS AUTO-GENERATED, DO NOT EDIT IT DIRECTLY!
 */

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  Date: { input: any; output: any };
};

export type CheckExistUser = {
  __typename?: 'CheckExistUser';
  email?: Maybe<Scalars['Boolean']['output']>;
  phoneNumber?: Maybe<Scalars['Boolean']['output']>;
};

export type CheckExistUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export enum Gender {
  Female = 'FEMALE',
  Male = 'MALE',
  NoGender = 'NO_GENDER',
  Others = 'OTHERS',
  Secret = 'SECRET'
}

export type Mutation = {
  __typename?: 'Mutation';
  user_checkExistUser?: Maybe<CheckExistUser>;
  user_login?: Maybe<UserAuth>;
  user_register?: Maybe<UserAuth>;
};

export type MutationUser_CheckExistUserArgs = {
  input?: InputMaybe<CheckExistUserInput>;
};

export type MutationUser_LoginArgs = {
  input?: InputMaybe<UserLoginInput>;
};

export type MutationUser_RegisterArgs = {
  input?: InputMaybe<UserRegisterInput>;
};

export type Query = {
  __typename?: 'Query';
  user_getUserById?: Maybe<User>;
  user_getUsers?: Maybe<Array<Maybe<User>>>;
  user_me?: Maybe<User>;
};

export type QueryUser_GetUserByIdArgs = {
  _id: Scalars['ID']['input'];
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID']['output'];
  dateOfBirth: Scalars['Date']['output'];
  displayName: Scalars['String']['output'];
  email?: Maybe<Scalars['String']['output']>;
  gender: Gender;
  likedSongs?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  notGetMarketingMessage: Scalars['Boolean']['output'];
  password: Scalars['String']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
  playlists?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  shareData: Scalars['Boolean']['output'];
};

export type UserAuth = {
  __typename?: 'UserAuth';
  refreshToken?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

export type UserLoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type UserRegisterInput = {
  dateOfBirth: Scalars['Date']['input'];
  displayName: Scalars['String']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  gender: Gender;
  notGetMarketingMessage: Scalars['Boolean']['input'];
  password: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  shareData: Scalars['Boolean']['input'];
};
