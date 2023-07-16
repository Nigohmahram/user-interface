import './PostListItem.css'
const PostListItem = ({label, important}) => {
      let classNames = 'app-list-item d-flex justify-content-between'
      if(important) {
            classNames += ' important';
      }
      return(
            <li className={classNames}>
            <span className="app-list-item-label">
            {label}
            </span>
            <div className="d-flex justify-content-center align-items-center">

            <button type="button" className="btn-star btn-sm">
            <i className="fa fa-star"></i>
            </button>

            <button type="button" className="btn-trash btn-sm">
            <i className="fa-solid fa-trash-can"></i>
            </button>
            <i className="fa-regular fa-heart"></i>


            </div>
            </li>
      )
}
export default PostListItem