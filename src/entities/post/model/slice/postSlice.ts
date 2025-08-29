import { createEntityAdapter, createSlice, type EntityState } from "@reduxjs/toolkit";
import type { Post } from "../interface";
import { postsApi } from "../../api/postsApi";
import type { RootState } from "../../../../app/providers/store/store";

const postsAdapter = createEntityAdapter<Post>({
    sortComparer: (a, b) => a.title.localeCompare(b.title)
})

const initialState:  EntityState<Post, number> = postsAdapter.getInitialState()

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addMatcher(postsApi.endpoints.getPosts.matchFulfilled, (state, action) => {
                postsAdapter.setAll(state, action.payload)
            })
    }
})

export const {
    selectById: selectPostById,
    selectAll: selectAllPosts,
} = postsAdapter.getSelectors((state: RootState) => state.posts)

export default postSlice.reducer