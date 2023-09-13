import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setBookmarks]=useState([]);
  const handleAddToBookmarks= blog =>{
      const newBookmarks=[...bookmarks, blog];
      setBookmarks(newBookmarks);
  }
  return (
    <div className='max-w-7xl mx-auto'>
      <Header></Header>
      <div className='md:flex gap-10'>
        <Blogs handleAddToBookmarks={handleAddToBookmarks}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </div>
  )
}

export default App
