import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import PostStatusFilter from '../PostStatusFilter';
import PostList from '../PostList/PostList';
import PostAddForm from '../PoastAddForm';
import './App.css'
const App = () => {

      const data = [
            {label: 'React JS를 배우려고 했음...', important: true},
            {label: '출연했던 장병근씨 아내인 것으로 확인됐다!!!', important: false},
            {label: '지점이라고 당국은 밝혔다?', important: false},
      ]
      return(
            <div className='app'>
            <AppHeader />
            <div className='search-panel d-flex'>
            <SearchPanel />
            <PostStatusFilter />
            </div>
            <PostList props={data}/>
            <PostAddForm />
            </div>
      )
}

export default  App