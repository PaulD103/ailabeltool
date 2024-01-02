import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLoggedIn: false,
        name: "...",
        username: undefined,
        password: undefined
    },
    reducers: {
        login(state, action) {
            const logInData = action.payload;
            state.isLoggedIn = true;

            state.name = logInData.name;
            state.username = logInData.username;
            state.password = logInData.password;
        },
        logout(state, action) {
            const loggedOutData = action.payload;
            state.isLoggedIn = false;

            state.name = loggedOutData.logOutName;
            state.username = undefined;
            state.password = undefined;
        }
    }
});

export const authActions = authSlice.actions;
export default authSlice;