import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface PostData {
  title: undefined | string
  content: undefined | string
}

const initialState: PostData = {
  title: undefined,
  content: undefined,
}

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPostTitle: (state, action: PayloadAction<PostData['title']>) => {
      state.title = action.payload
    },
    setPostContent: (state, action: PayloadAction<PostData['content']>) => {
      state.content = action.payload
    },
  },
})

export const { setPostTitle, setPostContent } = postSlice.actions

export default postSlice.reducer