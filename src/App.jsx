import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {


  const [bookmarks, setBookmarks] = useState([]);

  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmarks = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }


  const handleMarkAsRead = (id, time) => {
    const NewReadingTime = readingTime + time;
    setReadingTime(NewReadingTime);
    // remove read time from bookmarks
    // console.log("Remove book marks from id", id)
    const remainingBookMarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookMarks);
  }
  return (
    <div className='max-w-7xl mx-auto'>
      <Header></Header>
      <div className='md:flex gap-10'>
        <Blogs handleAddToBookmarks={handleAddToBookmarks} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
      </div>
    </div>
  )
}

export default App
