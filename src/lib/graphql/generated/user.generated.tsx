/* eslint-disable */
/**
 * WARNING: THIS FILE IS AUTO-GENERATED, DO NOT EDIT IT DIRECTLY!
 */

import type * as Types from './types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type QueryVariables = Types.Exact<{ [key: string]: never }>;

export type Query = { __typename?: 'Query'; me?: { __typename?: 'User'; _id: string; displayName: string } | null };

export type UsersQueryVariables = Types.Exact<{ [key: string]: never }>;

export type UsersQuery = { __typename?: 'Query'; users?: Array<{ __typename?: 'User'; _id: string; displayName: string } | null> | null };

export type User_RegisterMutationVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.UserRegisterInput>;
}>;

export type User_RegisterMutation = { __typename?: 'Mutation'; register?: { __typename?: 'UserAuth'; refreshToken?: string | null; token?: string | null } | null };

export const QueryDocument = gql`
  query Query {
    me {
      _id
      displayName
    }
  }
`;

/**
 * __useQuery__
 *
 * To run a query within a React component, call `useQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuery({
 *   variables: {
 *   },
 * });
 */
export function useQuery(baseOptions?: Apollo.QueryHookOptions<Query, QueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<Query, QueryVariables>(QueryDocument, options);
}
export function useQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Query, QueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<Query, QueryVariables>(QueryDocument, options);
}
export function useQuerySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<Query, QueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<Query, QueryVariables>(QueryDocument, options);
}
export type QueryHookResult = ReturnType<typeof useQuery>;
export type QueryLazyQueryHookResult = ReturnType<typeof useQueryLazyQuery>;
export type QuerySuspenseQueryHookResult = ReturnType<typeof useQuerySuspenseQuery>;
export type QueryQueryResult = Apollo.QueryResult<Query, QueryVariables>;
export const UsersDocument = gql`
  query Users {
    users {
      _id
      displayName
    }
  }
`;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
}
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
}
export function useUsersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<UsersQuery, UsersQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
}
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersSuspenseQueryHookResult = ReturnType<typeof useUsersSuspenseQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;
export const User_RegisterDocument = gql`
  mutation User_register($input: UserRegisterInput) {
    register(input: $input) {
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
