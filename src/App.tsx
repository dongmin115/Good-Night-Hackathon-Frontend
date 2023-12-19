import { Route, Routes } from 'react-router-dom'
import './App.css'
import RegisterMovie from './page/register-movie'
import MovieList from './page/movie-list'
import UpdateMovieList from './page/update-movielist'

function App() {

  return (
    <div className='w-full h-full bg-gray-900'>
      <Routes>
      <Route path='/' element={<MovieList/>}/>
      <Route path='/register' element={<RegisterMovie/>}/>
      <Route path='/put/:id' element={<UpdateMovieList/>}/>
      </Routes>
    </div>
  )
}

export default App
