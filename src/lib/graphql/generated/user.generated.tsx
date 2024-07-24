/* eslint-disable */
/**
 * WARNING: THIS FILE IS AUTO-GENERATED, DO NOT EDIT IT DIRECTLY!
 */

import type * as Types from './types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type MeQueryVariables = Types.Exact<{ [key: string]: never }>;

export type MeQuery = {
  __typename?: 'Query';
  user_me?: {
    __typename?: 'User';
    _id: string;
    displayName: string;
    email?: string | null;
    phoneNumber?: string | null;
    password: string;
    dateOfBirth: any;
    gender: Types.Gender;
    playlists?: Array<string | null> | null;
    likedSongs?: Array<string | null> | null;
    notGetMarketingMessage: boolean;
    shareData: boolean;
  } | null;
};

export type User_RegisterMutationVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.UserRegisterInput>;
}>;

export type User_RegisterMutation = { __typename?: 'Mutation'; user_register?: { __typename?: 'UserAuth'; refreshToken?: string | null; token?: string | null } | null };

export type User_LoginMutationVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.UserLoginInput>;
}>;

export type User_LoginMutation = { __typename?: 'Mutation'; user_login?: { __typename?: 'UserAuth'; refreshToken?: string | null; token?: string | null } | null };

export type User_CheckExistUserMutationVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.CheckExistUserInput>;
}>;

export type User_CheckExistUserMutation = { __typename?: 'Mutation'; user_checkExistUser?: { __typename?: 'CheckExistUser'; email?: boolean | null; phoneNumber?: boolean | null } | null };

export const MeDocument = gql`
  query me {
    user_me {
      _id
      displayName
      email
      phoneNumber
      password
      dateOfBirth
      gender
      playlists
      likedSongs
      notGetMarketingMessage
      shareData
    }
  }
`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}
export function useMeSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<MeQuery, MeQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeSuspenseQueryHookResult = ReturnType<typeof useMeSuspenseQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const User_RegisterDocument = gql`
  mutation User_register($input: UserRegisterInput) {
    user_register(input: $input) {
      refreshToken
      token
    }
  }
`;
export type User_RegisterMutationFn = Apollo.MutationFunction<User_RegisterMutation, User_RegisterMutationVariables>;

/**
 * __useUser_RegisterMutation__
 *
 * To run a mutation, you first call `useUser_RegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUser_RegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userRegisterMutation, { data, loading, error }] = useUser_RegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUser_RegisterMutation(baseOptions?: Apollo.MutationHookOptions<User_RegisterMutation, User_RegisterMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<User_RegisterMutation, User_RegisterMutationVariables>(User_RegisterDocument, options);
}
export type User_RegisterMutationHookResult = ReturnType<typeof useUser_RegisterMutation>;
export type User_RegisterMutationResult = Apollo.MutationResult<User_RegisterMutation>;
export type User_RegisterMutationOptions = Apollo.BaseMutationOptions<User_RegisterMutation, User_RegisterMutationVariables>;
export const User_LoginDocument = gql`
  mutation User_login($input: UserLoginInput) {
    user_login(input: $input) {
      refreshToken
      token
    }
  }
`;
export type User_LoginMutationFn = Apollo.MutationFunction<User_LoginMutation, User_LoginMutationVariables>;

/**
 * __useUser_LoginMutation__
 *
 * To run a mutation, you first call `useUser_LoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUser_LoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userLoginMutation, { data, loading, error }] = useUser_LoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUser_LoginMutation(baseOptions?: Apollo.MutationHookOptions<User_LoginMutation, User_LoginMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<User_LoginMutation, User_LoginMutationVariables>(User_LoginDocument, options);
}
export type User_LoginMutationHookResult = ReturnType<typeof useUser_LoginMutation>;
export type User_LoginMutationResult = Apollo.MutationResult<User_LoginMutation>;
export type User_LoginMutationOptions = Apollo.BaseMutationOptions<User_LoginMutation, User_LoginMutationVariables>;
export const User_CheckExistUserDocument = gql`
  mutation User_checkExistUser($input: CheckExistUserInput) {
    user_checkExistUser(input: $input) {
      email
      phoneNumber
    }
  }
`;
export type User_CheckExistUserMutationFn = Apollo.MutationFunction<User_CheckExistUserMutation, User_CheckExistUserMutationVariables>;

/**
 * __useUser_CheckExistUserMutation__
 *
 * To run a mutation, you first call `useUser_CheckExistUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUser_CheckExistUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userCheckExistUserMutation, { data, loading, error }] = useUser_CheckExistUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUser_CheckExistUserMutation(baseOptions?: Apollo.MutationHookOptions<User_CheckExistUserMutation, User_CheckExistUserMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<User_CheckExistUserMutation, User_CheckExistUserMutationVariables>(User_CheckExistUserDocument, options);
}
export type User_CheckExistUserMutationHookResult = ReturnType<typeof useUser_CheckExistUserMutation>;
export type User_CheckExistUserMutationResult = Apollo.MutationResult<User_CheckExistUserMutation>;
export type User_CheckExistUserMutationOptions = Apollo.BaseMutationOptions<User_CheckExistUserMutation, User_CheckExistUserMutationVariables>;
