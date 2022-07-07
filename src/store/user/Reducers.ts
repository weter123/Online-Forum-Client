import {createSlice} from '@reduxjs/toolkit'

export const UserProfileSetType = "USER_PROFILE_SET";

export interface UserProfileState{
    id: string;
    username: string;
}


const initialState: UserProfileState = {
    id: '',
    username: ''
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        userProfile: (state, action) => {
            state.id = action.payload.id
            state.username =action.payload.username
        }
    }
})


export const {userProfile} = userSlice.actions;

export default userSlice.reducer;