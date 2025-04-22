import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import PostView from './PostView'
import { setViewingPost, clearViewingPost, startEditing, deletePost, setPage } from './postSlice'

const PostList = () => {
  const posts = useSelector((state: RootState) => state.post.posts)
  const viewingPost = useSelector((state: RootState) => state.post.viewingPost)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(clearViewingPost());
  }, [dispatch]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {viewingPost && (
        <>
          <PostView />
          <button onClick={() => dispatch(clearViewingPost())}>Back</button>
        </>
      )}

      {!viewingPost && (
        <>
          <h1>Post List</h1>
          {posts?.length > 0
            ? posts.map((post, index) => (
              <div
                key={post.id}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '10px',
                  border: '0.1px solid #444',
                  borderRadius: '5px',
                  marginBottom: '10px'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '10px'
                  }}
                >
                  <div>{index + 1}</div>
                  <b>{post.title}</b>
                  <button onClick={() => dispatch(setViewingPost(post.id))}>View</button>
                  <button
                    onClick={() => {
                      dispatch(startEditing(post.id))
                      dispatch(setPage('postEditor'))
                    }}>
                      Edit
                  </button>
                  <button onClick={() => dispatch(deletePost(post.id))}>Delete</button>
                </div>
              </div>
            ))
            : 'No posts yet'
          }
          <button onClick={() => dispatch(setPage('postEditor'))}>Create Post</button>
        </>
      )}
    </div>
  )
}

export default PostList
