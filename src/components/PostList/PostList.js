import PostListItem from "../PostListItem"
import './PostList.css'

const PostList = ({props}) => {
      const elements = props.map((item) => {
            return(
                  <li className='list-group-item'>
                  <PostListItem {...item}/>
                  </li>
            )
      })
      return(
           <ul className="app-list list-group d-flex">
           {elements}
           </ul>
      )
}
export default PostList