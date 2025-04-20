import { useDispatch, useSelector } from 'react-redux';
import ReactQuill from 'react-quill-new'
import 'react-quill-new/dist/quill.snow.css'
import { setPostContent } from './postSlice'
import { RootState } from '../../store';

function Editor() {
  const dispatch = useDispatch()
  const content = useSelector((state: RootState) => state.post.content)
  const handleChange = (value: string) => {
    dispatch(setPostContent({ content: value }))
  }
  return (
    <div style={{ background: '#242424', width: '100%', minHeight: '100vh',display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <ReactQuill theme="snow" value={content} onChange={handleChange}/>
    </div>
  )
}

export default Editor
