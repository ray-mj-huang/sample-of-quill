import { useDispatch, useSelector } from 'react-redux';
import ReactQuill from 'react-quill-new'
import 'react-quill-new/dist/quill.snow.css'
import { setPostTitle, setPostContent, PostData } from './postSlice'
import { RootState } from '../../store';

function Editor() {
  const dispatch = useDispatch()
  const title = useSelector((state: RootState) => state.post.title)
  const content = useSelector((state: RootState) => state.post.content)

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPostTitle(e.target.value)) 
  }
  
  const handleContentChange = (value: PostData['content']) => {
    dispatch(setPostContent(value)) 
  }

  return (
    <div style={{ background: '#242424', width: '100%', minHeight: '100vh',display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <input type="text" value={title} onChange={handleTitleChange} />
      <ReactQuill theme="snow" value={content} onChange={handleContentChange}/>
    </div>
  )
}

export default Editor
