import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface PostContent {
  content: undefined | string
}

const initialState: PostContent = {
  content: undefined,
}

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPostContent: (state, action: PayloadAction<PostContent>) => {
      state.content = action.payload.content
    },
  },
})

export const { setPostContent } = postSlice.actions

export default postSlice.reducer