import { useState } from 'react'
import ReactQuill from 'react-quill-new'
import 'react-quill-new/dist/quill.snow.css'

function Editor() {
  const [value, setValue] = useState('');
  return (
    <div style={{ background: '#242424', width: '100%', height: '100vh',display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <ReactQuill theme="snow" value={value} onChange={setValue}/>
    </div>
  )
}

export default Editor
