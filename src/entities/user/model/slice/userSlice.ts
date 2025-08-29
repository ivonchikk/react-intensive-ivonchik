import { createEntityAdapter, createSlice, type EntityState } from "@reduxjs/toolkit"
import type { User } from "../interface"
import type { RootState } from "../../../../app/providers/store/store"
import { usersApi } from "../../api/usersApi"


const postsAdapter = createEntityAdapter<User>({
    sortComparer: (a, b) => a.name.localeCompare(b.name)
})

const initialState: EntityState<User, number> = postsAdapter.getInitialState()

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addMatcher(usersApi.endpoints.getUsers.matchFulfilled, (state, action) => {
                postsAdapter.setAll(state, action.payload)
            }
            )
    }
})

export const {
    selectAll: selectAllUsers,
    selectById: selectUserById
} = postsAdapter.getSelectors((state: RootState) => state.users)

export default userSlice.reducer




