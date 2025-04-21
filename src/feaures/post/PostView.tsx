import { useSelector } from 'react-redux' 
import { RootState } from '../../store'

const PostView = () => {
  const post = useSelector((state: RootState) => state.post.viewingPost)

  return (
    <>
      <h1>{post?.title}</h1>
      <p dangerouslySetInnerHTML={{ __html: post?.content ?? '' }} />
      <p>{post?.createdAt}</p>
      <p>{post?.updatedAt}</p>
    </>
  )
}

export default PostView
