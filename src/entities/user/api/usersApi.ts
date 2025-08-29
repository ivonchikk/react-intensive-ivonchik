import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { User } from "../model/interface";

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/',
    }),
    tagTypes: ['User'],
    endpoints: builder => ({
        getUsers: builder.query<User[], void>({
            query: () => '/users',
            providesTags: ['User']
        }),
    }),
})

export const { useGetUsersQuery } = usersApi;