import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: "user",
    initialState:{
        name: "Thuy Trang",
        age: 23,
        about: "I'm Tiktoker",
        avaUrl: 'http://mcvideomd1fr.keeng.net/playnow/images/channel/avatar/20191002/84348262486_20191002230831.jpg',
        theme: "#ff9051",
        pending: false,
        error: false
    },
    reducers:{
        updateStart: state => {
            state.pending = true
        },
        updateError: state => {
            state.pending = false
            state.error = true
        },

        updateSuccess:(state, action) => {
            state.pending = false
            state.error = false
            state.name = action.payload.name
            state.age = action.payload.age
            state.about = action.payload.about
            state.avaUrl = action.payload.avaUrl
            state.theme = action.payload.theme
        }
    }     
})

export const { updateStart, updateError, updateSuccess } = userSlice.actions
export default userSlice.reducer