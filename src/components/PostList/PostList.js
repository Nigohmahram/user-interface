import PostListItem from "../PostListItem"
import './PostList.css'

const PostList = ({props}) => {
      const elements = props.map((item) => {
            const {id, ...itemProps}= item
            return(
                  <li key={item.id} className='list-group-item'>
                  <PostListItem {...itemProps}/>
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