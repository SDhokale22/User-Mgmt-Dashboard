import { createSlice } from "@reduxjs/toolkit"
import { userList } from "./Data"

const userSlice = createSlice({
    name: "users",
    initialState: userList,
    reducers: {
       addUser: (state, action) => {
        state.push(action.payload)
       },
       updateUser: (state, action) => {
        const {id, firstName, lastName, email, department} = action.payload;
        const updUser = state.find(user => user.id == id);
        if(updUser) {
            updUser.firstName = firstName;
            updUser.lastName = lastName;
            updUser.email = email;
            updUser.department = department;
        }
       },
       deleteUser: (state, action) => {
        const {id} = action.payload;
        const updUser = state.find(user => user.id == id);
        if(updUser) {
           return state.filter(f => f.id !== id);
        }
       },
    }
})

export const {addUser, updateUser, deleteUser} = userSlice.actions;
export default userSlice.reducer;