import { useSelector } from 'react-redux' 
import { RootState } from './store'
import PostEditor from './feaures/post/PostEditor'
import PostList from './feaures/post/PostList'
import Menu from './components/Menu'

function App() {
  const page = useSelector((state: RootState) => state.post.page)

  return (
    <div
      style={{
        background: '#242424',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: 50
      }}
    >
      <Menu />
      {
        page === 'postEditor' && <PostEditor />
      }
      {
        page === 'postList' && <PostList />
      }
    </div>
  )
}

export default App
