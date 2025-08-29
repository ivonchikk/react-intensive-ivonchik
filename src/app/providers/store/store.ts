import { albumsApi } from './../../../entities/album/api/albumsApi';
import { configureStore } from "@reduxjs/toolkit";
import { postsApi } from "../../../entities/post/api/postsApi";
import { commentsApi } from "../../../entities/comment/api/commentsApi";
import { todosApi } from "../../../entities/todo/api/commentsApi";

import postReducer from '../../../entities/post/model/slice/postSlice';
import userReducer from '../../../entities/user/model/slice/userSlice'
import { usersApi } from '../../../entities/user/api/usersApi';

export const store = configureStore({
    reducer: {
        [postsApi.reducerPath]: postsApi.reducer,
        [commentsApi.reducerPath]: commentsApi.reducer,
        [todosApi.reducerPath]: todosApi.reducer,
        [albumsApi.reducerPath]: albumsApi.reducer,
        [usersApi.reducerPath]: usersApi.reducer,

        posts: postReducer,
        users: userReducer,
    },

    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(
            postsApi.middleware,
            usersApi.middleware,
            commentsApi.middleware,
            todosApi.middleware,
            albumsApi.middleware,
        )
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch