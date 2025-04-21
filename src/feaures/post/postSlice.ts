import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface PostData {
  content: undefined | string
}

const initialState: PostData = {
  content: undefined,
}

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPostContent: (state, action: PayloadAction<PostData['content']>) => {
      state.content = action.payload
    },
  },
})

export const { setPostContent } = postSlice.actions

export default postSlice.reducer