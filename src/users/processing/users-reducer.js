import {createSlice} from "@reduxjs/toolkit";
import {
    createUserThunk,
    getProfileThunk,
    getUsersThunk,
    logInUserThunk,
    logOutUserThunk,
    updateProfileThunk
} from "./user-thunks";

const initialState = {
    user: {
        username: "Anon",
        password: "N/A",
        bio: "",
        following: [],
        type: "ANON"
    },
    users: [],
    loading: false,
    failed: false
}


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logOut(state, action) {
            state.user = {
                username: "Anon",
                password: "N/A",
                bio: "",
                following: [],
                type: "ANON"
            }
        }
    },
    extraReducers: {
        [createUserThunk.pending]:
            (state) => {
                state.loading = true
                state.failed = false
            },
        [createUserThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.user = payload
                state.failed = (state.user.username === "Anon")
            },
        [createUserThunk.rejected]:
            (state) => {
                state.loading = false
                state.failed = true
            },
        [logInUserThunk.pending]:
            (state) => {
                state.loading = true
                state.failed = false
            },
        [logInUserThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.failed = false
                state.user = payload
            },
        [logInUserThunk.rejected]:
            (state) => {
                state.loading = false
                state.failed = true
            },
        [getProfileThunk.fulfilled]:
            (state, {payload}) => {
                state.user = payload
                state.failed = (state.user.username === "Anon")
            },
        [logOutUserThunk.fulfilled]:
            (state, {payload}) => {
                state.user = payload
            },
        [updateProfileThunk.fulfilled]:
            (state, {payload}) => {
                state.user = payload
            },
        [getUsersThunk.fulfilled]:
            (state, {payload}) => {
                state.users = payload
            },
        [getUsersThunk.pending]:
            (state) => {
                state.users = []
            },


    },

});

export const {logOut} = userSlice.actions
export default userSlice.reducer;