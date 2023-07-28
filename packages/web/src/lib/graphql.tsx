/* eslint-disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: string;
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  refreshToken: Scalars['String'];
  token: Scalars['String'];
  user: User;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type EnumPostTypeFilter = {
  equals?: InputMaybe<PostType>;
  in?: InputMaybe<Array<PostType>>;
  not?: InputMaybe<NestedEnumPostTypeFilter>;
  notIn?: InputMaybe<Array<PostType>>;
};

export type EnumRoleFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createPostSuggestion: Scalars['Boolean'];
  createUser: User;
  createVote: Scalars['Boolean'];
  destroyAccount: Scalars['Boolean'];
  forgotPassword: Scalars['Boolean'];
  login: AuthResponse;
  register: AuthResponse;
  resetPassword: Scalars['Boolean'];
  updateMe: User;
};


export type MutationCreatePostSuggestionArgs = {
  deviceId: Scalars['String'];
  title: Scalars['String'];
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateVoteArgs = {
  deviceId: Scalars['String'];
  postId: Scalars['String'];
  skip: Scalars['Boolean'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  data: LoginInput;
};


export type MutationRegisterArgs = {
  data: RegisterInput;
};


export type MutationResetPasswordArgs = {
  data: ResetPasswordInput;
};


export type MutationUpdateMeArgs = {
  data: UpdateUserInput;
};

export type MyVotesResponse = {
  __typename?: 'MyVotesResponse';
  postId: Scalars['String'];
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedEnumPostTypeFilter = {
  equals?: InputMaybe<PostType>;
  in?: InputMaybe<Array<PostType>>;
  not?: InputMaybe<NestedEnumPostTypeFilter>;
  notIn?: InputMaybe<Array<PostType>>;
};

export type NestedEnumRoleFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedUuidFilter = {
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedUuidFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
};

export enum NullsOrder {
  First = 'first',
  Last = 'last'
}

export type Post = {
  __typename?: 'Post';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  type: PostType;
  updatedAt: Scalars['DateTime'];
  voteCount: Scalars['Float'];
  votes: VotesResponse;
};

export type PostOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrderInput>;
  title?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  votes?: InputMaybe<VoteOrderByRelationAggregateInput>;
};

export type PostRelationFilter = {
  is?: InputMaybe<PostWhereInput>;
  isNot?: InputMaybe<PostWhereInput>;
};

export enum PostScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Image = 'image',
  Title = 'title',
  Type = 'type',
  UpdatedAt = 'updatedAt'
}

export enum PostType {
  Animals = 'ANIMALS',
  Country = 'COUNTRY',
  Groups = 'GROUPS',
  Organisation = 'ORGANISATION',
  Person = 'PERSON',
  Thing = 'THING'
}

export type PostWhereInput = {
  AND?: InputMaybe<Array<PostWhereInput>>;
  NOT?: InputMaybe<Array<PostWhereInput>>;
  OR?: InputMaybe<Array<PostWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<UuidFilter>;
  image?: InputMaybe<StringNullableFilter>;
  title?: InputMaybe<StringFilter>;
  type?: InputMaybe<EnumPostTypeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  votes?: InputMaybe<VoteListRelationFilter>;
};

export type PostWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type PostsResponse = {
  __typename?: 'PostsResponse';
  count: Scalars['Int'];
  items: Array<Post>;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  myVotes: Array<MyVotesResponse>;
  post?: Maybe<Post>;
  posts: PostsResponse;
  randomPost?: Maybe<Post>;
  refreshToken?: Maybe<RefreshTokenResponse>;
  user?: Maybe<User>;
  users: UsersResponse;
};


export type QueryMyVotesArgs = {
  deviceId: Scalars['String'];
};


export type QueryPostArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>;
  distinct?: InputMaybe<Array<PostScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PostOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostWhereInput>;
};


export type QueryPostsArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>;
  distinct?: InputMaybe<Array<PostScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PostOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostWhereInput>;
};


export type QueryRandomPostArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>;
  deviceId: Scalars['String'];
  distinct?: InputMaybe<Array<PostScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PostOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostWhereInput>;
};


export type QueryRefreshTokenArgs = {
  refreshToken: Scalars['String'];
};


export type QueryUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type RefreshTokenResponse = {
  __typename?: 'RefreshTokenResponse';
  refreshToken: Scalars['String'];
  token: Scalars['String'];
};

export type RegisterInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
};

export type ResetPasswordInput = {
  password: Scalars['String'];
  token: Scalars['String'];
};

export enum Role {
  Admin = 'ADMIN',
  User = 'USER'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type SortOrderInput = {
  nulls?: InputMaybe<NullsOrder>;
  sort: SortOrder;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['String'];
  role: Role;
  updatedAt: Scalars['DateTime'];
};

export type UserCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  role?: InputMaybe<Role>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  Email = 'email',
  Id = 'id',
  Password = 'password',
  Role = 'role',
  UpdatedAt = 'updatedAt'
}

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  password?: InputMaybe<StringFilter>;
  role?: InputMaybe<EnumRoleFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};

export type UsersResponse = {
  __typename?: 'UsersResponse';
  count: Scalars['Int'];
  items: Array<User>;
};

export type UuidFilter = {
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedUuidFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
};

export type Vote = {
  __typename?: 'Vote';
  createdAt: Scalars['DateTime'];
  deviceId: Scalars['String'];
  id: Scalars['String'];
  postId: Scalars['String'];
  skip: Scalars['Boolean'];
  updatedAt: Scalars['DateTime'];
};

export type VoteListRelationFilter = {
  every?: InputMaybe<VoteWhereInput>;
  none?: InputMaybe<VoteWhereInput>;
  some?: InputMaybe<VoteWhereInput>;
};

export type VoteOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type VoteWhereInput = {
  AND?: InputMaybe<Array<VoteWhereInput>>;
  NOT?: InputMaybe<Array<VoteWhereInput>>;
  OR?: InputMaybe<Array<VoteWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deviceId?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  post?: InputMaybe<PostRelationFilter>;
  postId?: InputMaybe<UuidFilter>;
  skip?: InputMaybe<BoolFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type VotesResponse = {
  __typename?: 'VotesResponse';
  count: Scalars['Int'];
  items: Array<Vote>;
};

export type AdminCreateUserMutationVariables = Exact<{
  data: UserCreateInput;
}>;


export type AdminCreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', id: string } };

export type SuggestPostMutationVariables = Exact<{
  title: Scalars['String'];
  deviceId: Scalars['String'];
}>;


export type SuggestPostMutation = { __typename?: 'Mutation', createPostSuggestion: boolean };

export type PostItemFragment = { __typename?: 'Post', id: string, title: string, image?: string | null, voteCount: number };

export type PostsQueryVariables = Exact<{
  orderBy?: InputMaybe<Array<PostOrderByWithRelationInput> | PostOrderByWithRelationInput>;
}>;


export type PostsQuery = { __typename?: 'Query', posts: { __typename?: 'PostsResponse', count: number, items: Array<{ __typename?: 'Post', id: string, title: string, image?: string | null, voteCount: number }> } };

export type MyVotesQueryVariables = Exact<{
  deviceId: Scalars['String'];
}>;


export type MyVotesQuery = { __typename?: 'Query', myVotes: Array<{ __typename?: 'MyVotesResponse', postId: string }> };

export type RandomPostFragment = { __typename?: 'Post', id: string, title: string, image?: string | null, type: PostType };

export type GetRandomPostQueryVariables = Exact<{
  deviceId: Scalars['String'];
}>;


export type GetRandomPostQuery = { __typename?: 'Query', randomPost?: { __typename?: 'Post', id: string, title: string, image?: string | null, type: PostType } | null };

export type VoteMutationVariables = Exact<{
  postId: Scalars['String'];
  deviceId: Scalars['String'];
  skip: Scalars['Boolean'];
}>;


export type VoteMutation = { __typename?: 'Mutation', createVote: boolean };

export type MeFragment = { __typename?: 'User', id: string, email: string, role: Role };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, email: string, role: Role } | null };

export type UserDetailFragment = { __typename?: 'User', id: string, email: string, createdAt: string };

export type GetUserQueryVariables = Exact<{
  where?: InputMaybe<UserWhereInput>;
}>;


export type GetUserQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string, email: string, createdAt: string } | null };

export type UserItemFragment = { __typename?: 'User', id: string, email: string, createdAt: string };

export type GetUsersQueryVariables = Exact<{
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput> | UserOrderByWithRelationInput>;
  where?: InputMaybe<UserWhereInput>;
  skip?: InputMaybe<Scalars['Int']>;
}>;


export type GetUsersQuery = { __typename?: 'Query', users: { __typename?: 'UsersResponse', count: number, items: Array<{ __typename?: 'User', id: string, email: string, createdAt: string }> } };

export type RefreshTokenQueryVariables = Exact<{
  refreshToken: Scalars['String'];
}>;


export type RefreshTokenQuery = { __typename?: 'Query', refreshToken?: { __typename?: 'RefreshTokenResponse', token: string, refreshToken: string } | null };

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', forgotPassword: boolean };

export type LoginMutationVariables = Exact<{
  data: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthResponse', token: string, refreshToken: string, user: { __typename?: 'User', id: string, email: string, role: Role } } };

export type UpdateMeMutationVariables = Exact<{
  data: UpdateUserInput;
}>;


export type UpdateMeMutation = { __typename?: 'Mutation', updateMe: { __typename?: 'User', id: string, email: string, role: Role } };

export type DestroyAccountMutationVariables = Exact<{ [key: string]: never; }>;


export type DestroyAccountMutation = { __typename?: 'Mutation', destroyAccount: boolean };

export type RegisterMutationVariables = Exact<{
  data: RegisterInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'AuthResponse', token: string, refreshToken: string, user: { __typename?: 'User', id: string, email: string, role: Role } } };

export type ResetPasswordMutationVariables = Exact<{
  data: ResetPasswordInput;
}>;


export type ResetPasswordMutation = { __typename?: 'Mutation', resetPassword: boolean };

export const PostItemFragmentDoc = gql`
    fragment PostItem on Post {
  id
  title
  image
  voteCount
}
    `;
export const RandomPostFragmentDoc = gql`
    fragment RandomPost on Post {
  id
  title
  image
  type
}
    `;
export const MeFragmentDoc = gql`
    fragment Me on User {
  id
  email
  role
}
    `;
export const UserDetailFragmentDoc = gql`
    fragment UserDetail on User {
  id
  email
  createdAt
}
    `;
export const UserItemFragmentDoc = gql`
    fragment UserItem on User {
  id
  email
  createdAt
}
    `;
export const AdminCreateUserDocument = gql`
    mutation AdminCreateUser($data: UserCreateInput!) {
  createUser(data: $data) {
    id
  }
}
    `;
export function useAdminCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<AdminCreateUserMutation, AdminCreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AdminCreateUserMutation, AdminCreateUserMutationVariables>(AdminCreateUserDocument, options);
      }
export type AdminCreateUserMutationHookResult = ReturnType<typeof useAdminCreateUserMutation>;
export type AdminCreateUserMutationResult = Apollo.MutationResult<AdminCreateUserMutation>;
export type AdminCreateUserMutationOptions = Apollo.BaseMutationOptions<AdminCreateUserMutation, AdminCreateUserMutationVariables>;
export const SuggestPostDocument = gql`
    mutation SuggestPost($title: String!, $deviceId: String!) {
  createPostSuggestion(title: $title, deviceId: $deviceId)
}
    `;
export function useSuggestPostMutation(baseOptions?: Apollo.MutationHookOptions<SuggestPostMutation, SuggestPostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SuggestPostMutation, SuggestPostMutationVariables>(SuggestPostDocument, options);
      }
export type SuggestPostMutationHookResult = ReturnType<typeof useSuggestPostMutation>;
export type SuggestPostMutationResult = Apollo.MutationResult<SuggestPostMutation>;
export type SuggestPostMutationOptions = Apollo.BaseMutationOptions<SuggestPostMutation, SuggestPostMutationVariables>;
export const PostsDocument = gql`
    query Posts($orderBy: [PostOrderByWithRelationInput!]) {
  posts(orderBy: $orderBy) {
    items {
      ...PostItem
    }
    count
  }
}
    ${PostItemFragmentDoc}`;
export function usePostsQuery(baseOptions?: Apollo.QueryHookOptions<PostsQuery, PostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
      }
export function usePostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostsQuery, PostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
        }
export type PostsQueryHookResult = ReturnType<typeof usePostsQuery>;
export type PostsLazyQueryHookResult = ReturnType<typeof usePostsLazyQuery>;
export type PostsQueryResult = Apollo.QueryResult<PostsQuery, PostsQueryVariables>;
export const MyVotesDocument = gql`
    query MyVotes($deviceId: String!) {
  myVotes(deviceId: $deviceId) {
    postId
  }
}
    `;
export function useMyVotesQuery(baseOptions: Apollo.QueryHookOptions<MyVotesQuery, MyVotesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyVotesQuery, MyVotesQueryVariables>(MyVotesDocument, options);
      }
export function useMyVotesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyVotesQuery, MyVotesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyVotesQuery, MyVotesQueryVariables>(MyVotesDocument, options);
        }
export type MyVotesQueryHookResult = ReturnType<typeof useMyVotesQuery>;
export type MyVotesLazyQueryHookResult = ReturnType<typeof useMyVotesLazyQuery>;
export type MyVotesQueryResult = Apollo.QueryResult<MyVotesQuery, MyVotesQueryVariables>;
export const GetRandomPostDocument = gql`
    query GetRandomPost($deviceId: String!) {
  randomPost(deviceId: $deviceId) {
    ...RandomPost
  }
}
    ${RandomPostFragmentDoc}`;
export function useGetRandomPostQuery(baseOptions: Apollo.QueryHookOptions<GetRandomPostQuery, GetRandomPostQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRandomPostQuery, GetRandomPostQueryVariables>(GetRandomPostDocument, options);
      }
export function useGetRandomPostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRandomPostQuery, GetRandomPostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRandomPostQuery, GetRandomPostQueryVariables>(GetRandomPostDocument, options);
        }
export type GetRandomPostQueryHookResult = ReturnType<typeof useGetRandomPostQuery>;
export type GetRandomPostLazyQueryHookResult = ReturnType<typeof useGetRandomPostLazyQuery>;
export type GetRandomPostQueryResult = Apollo.QueryResult<GetRandomPostQuery, GetRandomPostQueryVariables>;
export const VoteDocument = gql`
    mutation Vote($postId: String!, $deviceId: String!, $skip: Boolean!) {
  createVote(postId: $postId, deviceId: $deviceId, skip: $skip)
}
    `;
export function useVoteMutation(baseOptions?: Apollo.MutationHookOptions<VoteMutation, VoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VoteMutation, VoteMutationVariables>(VoteDocument, options);
      }
export type VoteMutationHookResult = ReturnType<typeof useVoteMutation>;
export type VoteMutationResult = Apollo.MutationResult<VoteMutation>;
export type VoteMutationOptions = Apollo.BaseMutationOptions<VoteMutation, VoteMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...Me
  }
}
    ${MeFragmentDoc}`;
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const GetUserDocument = gql`
    query GetUser($where: UserWhereInput) {
  user(where: $where) {
    ...UserDetail
  }
}
    ${UserDetailFragmentDoc}`;
export function useGetUserQuery(baseOptions?: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const GetUsersDocument = gql`
    query GetUsers($orderBy: [UserOrderByWithRelationInput!], $where: UserWhereInput, $skip: Int) {
  users(take: 10, orderBy: $orderBy, where: $where, skip: $skip) {
    items {
      ...UserItem
    }
    count
  }
}
    ${UserItemFragmentDoc}`;
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export const RefreshTokenDocument = gql`
    query RefreshToken($refreshToken: String!) {
  refreshToken(refreshToken: $refreshToken) {
    token
    refreshToken
  }
}
    `;
export function useRefreshTokenQuery(baseOptions: Apollo.QueryHookOptions<RefreshTokenQuery, RefreshTokenQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RefreshTokenQuery, RefreshTokenQueryVariables>(RefreshTokenDocument, options);
      }
export function useRefreshTokenLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RefreshTokenQuery, RefreshTokenQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RefreshTokenQuery, RefreshTokenQueryVariables>(RefreshTokenDocument, options);
        }
export type RefreshTokenQueryHookResult = ReturnType<typeof useRefreshTokenQuery>;
export type RefreshTokenLazyQueryHookResult = ReturnType<typeof useRefreshTokenLazyQuery>;
export type RefreshTokenQueryResult = Apollo.QueryResult<RefreshTokenQuery, RefreshTokenQueryVariables>;
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($email: String!) {
  forgotPassword(email: $email)
}
    `;
export function useForgotPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument, options);
      }
export type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>;
export type ForgotPasswordMutationResult = Apollo.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const LoginDocument = gql`
    mutation Login($data: LoginInput!) {
  login(data: $data) {
    user {
      ...Me
    }
    token
    refreshToken
  }
}
    ${MeFragmentDoc}`;
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const UpdateMeDocument = gql`
    mutation UpdateMe($data: UpdateUserInput!) {
  updateMe(data: $data) {
    ...Me
  }
}
    ${MeFragmentDoc}`;
export function useUpdateMeMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMeMutation, UpdateMeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMeMutation, UpdateMeMutationVariables>(UpdateMeDocument, options);
      }
export type UpdateMeMutationHookResult = ReturnType<typeof useUpdateMeMutation>;
export type UpdateMeMutationResult = Apollo.MutationResult<UpdateMeMutation>;
export type UpdateMeMutationOptions = Apollo.BaseMutationOptions<UpdateMeMutation, UpdateMeMutationVariables>;
export const DestroyAccountDocument = gql`
    mutation DestroyAccount {
  destroyAccount
}
    `;
export function useDestroyAccountMutation(baseOptions?: Apollo.MutationHookOptions<DestroyAccountMutation, DestroyAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DestroyAccountMutation, DestroyAccountMutationVariables>(DestroyAccountDocument, options);
      }
export type DestroyAccountMutationHookResult = ReturnType<typeof useDestroyAccountMutation>;
export type DestroyAccountMutationResult = Apollo.MutationResult<DestroyAccountMutation>;
export type DestroyAccountMutationOptions = Apollo.BaseMutationOptions<DestroyAccountMutation, DestroyAccountMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($data: RegisterInput!) {
  register(data: $data) {
    user {
      ...Me
    }
    token
    refreshToken
  }
}
    ${MeFragmentDoc}`;
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const ResetPasswordDocument = gql`
    mutation ResetPassword($data: ResetPasswordInput!) {
  resetPassword(data: $data)
}
    `;
export function useResetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, options);
      }
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = Apollo.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables>;