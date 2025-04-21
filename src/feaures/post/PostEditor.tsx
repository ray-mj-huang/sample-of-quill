import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReactQuill from 'react-quill-new'
import 'react-quill-new/dist/quill.snow.css'
import { startCreating, updateEditingTitle, updateEditingContent, Post, savePost, cancelEditing, setPage } from './postSlice'
import { RootState } from '../../store'

function PostEditor() {
  const dispatch = useDispatch()
  const isCreating = useSelector((state: RootState) => state.post.isCreating)
  const editingPost = useSelector((state: RootState) => state.post.editingPost)
  const title = useSelector((state: RootState) => state.post.editingPost?.title)
  const content = useSelector((state: RootState) => state.post.editingPost?.content)

  useEffect(() => {
    if (!editingPost?.id) {
      dispatch(startCreating())
    }
  }, [])

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateEditingTitle(e.target.value)) 
  }
  
  const handleContentChange = (value: Post['content']) => {
    dispatch(updateEditingContent(value)) 
  }

  return (
    <>
      <h1>Post Editor - {isCreating ? 'Create' : 'Edit'}</h1>
      <input type="text" value={title} onChange={handleTitleChange} />
      <ReactQuill theme="snow" value={content} onChange={handleContentChange}/>
      <button
        onClick={() => {
          dispatch(savePost())
          dispatch(setPage('postList'))
        }}>
          Save
        </button>
      <button
        onClick={() => {
          dispatch(cancelEditing())
          dispatch(setPage('postList')) 
        }}>
          Cancel
        </button>
    </>
  )
}

export default PostEditor
