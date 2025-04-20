import { configureStore } from '@reduxjs/toolkit'
import postRuducer from './feaures/post/postSlice'

export const store = configureStore({
  reducer: {
    post: postRuducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch