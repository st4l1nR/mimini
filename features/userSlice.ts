import { createSlice, PayloadAction } from "@reduxjs/toolkit";




export interface user {
  _id:string
  username: string;
  role:string
  loggedIn: boolean;
}

const initialState: user =  {
  _id:'',
  username:'',
  role:'',  
  loggedIn:false
};  

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<user>) => {
      state = action.payload;
    },
    logout: (state) => {
      state = initialState;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
