import './PostAddForm.css'
const PostAddForm = () => {
      return (
            <form className="bottom-panel d-flex">
            <input
            type="text"
            placeholder="당신 무엇에 대한 생각합니까?"
            className="form-control new-post-label"
            />
            <button
            type="submit"
            className="btn btn-outline-secondary">
            댓글
            </button>
            </form>
      )
}
export default PostAddForm