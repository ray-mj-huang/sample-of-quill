import { useDispatch } from 'react-redux'
import { setPage } from '../feaures/post/postSlice'

const Menu = () => {
  const dispatch = useDispatch()

  return (
    <div
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        width: '100%',
        height: '50px',
        background: '#111111'
      }}
    >
      <button onClick={() => dispatch(setPage('postList'))}>Post List</button>  
      <button onClick={() => dispatch(setPage('postEditor'))}>Post Editor</button>
    </div>
  )
}

export default Menu
