import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'

export interface Post {
  id?: string | undefined
  title: string | undefined
  content: string | undefined
  createdAt?: string
  updatedAt?: string
}

interface PostState {
  posts: Post[]
  viewingPost: Post | null
  editingPost: Post | null
  isCreating: boolean
  page: 'postEditor' | 'postList'
}

const initialState: PostState = {
  posts: [],
  viewingPost: null,
  editingPost: {
    title: '',
    content: ''
  },
  isCreating: false,
  page: 'postList'
}

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    startCreating: (state) => {
      state.editingPost = {
        id: nanoid(),
        title: '',
        content: '',
        createdAt: new Date().toISOString()
      }
      state.isCreating = true
    },
    updateEditingTitle: (state, action: PayloadAction<Post['title']>) => {
      if (state.editingPost) {
        state.editingPost.title = action.payload
      }
    },
    updateEditingContent: (state, action: PayloadAction<Post['content']>) => {
      if (state.editingPost) {
        state.editingPost.content = action.payload
      }
    },
    startEditing: (state, action: PayloadAction<string | undefined>) => {
      const post = state.posts.find(p => p.id === action.payload)
      state.editingPost = post ??
        {
          id: action.payload,
          title: '',
          content: ''
        }
    },
    savePost: (state) => {
      if (state.editingPost) {
        const now = new Date().toISOString()
        const newPost = {
          ...state.editingPost
        }
        if (state.isCreating) {
          state.posts.push({ ...newPost, createdAt: now })
        } else {
          state.posts = state.posts.map(post =>
            post.id === newPost.id
              ? { ...newPost, updatedAt: now }
              : post
          )
        }
        state.editingPost = initialState.editingPost
        state.isCreating = false
      }
    },
    cancelEditing: (state) => {
      state.editingPost = initialState.editingPost
      state.isCreating = false
    },
    deletePost: (state, action: PayloadAction<string | undefined>) => {
      state.posts = state.posts.filter(post => post.id !== action.payload)
      if (state.viewingPost?.id === action.payload) {
        state.viewingPost = null
      }
      if (state.editingPost?.id === action.payload) {
        state.editingPost = null
      }
    },
    setViewingPost: (state, action: PayloadAction<string | undefined>) => {
      state.viewingPost = state.posts.find(p => p.id === action.payload) ?? null
    },
    clearViewingPost: (state) => {
      state.viewingPost = null
    },
    setPage: (state, action: PayloadAction<'postEditor' | 'postList'>) => {
      state.page = action.payload
    }
  }
})

export const {
  startCreating,
  startEditing,
  updateEditingTitle,
  updateEditingContent,
  savePost,
  cancelEditing,
  deletePost,
  setViewingPost,
  clearViewingPost,
  setPage
} = postSlice.actions
export default postSlice.reducer