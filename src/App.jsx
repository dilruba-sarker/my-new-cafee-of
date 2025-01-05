
import { useEffect, useState } from 'react'
import './App.css'
import Blogs from './C omponents/Blogs/Blogs'
import Bookmarks from './C omponents/Bookmarks/Bookmarks'
import Header from './C omponents/Header/Header'
import { addToLS, getStoredDate, removeFLSto } from './C omponents/addtoLs/LocalStorage'

function App() {
 
const [bookmarks,setBookmarks]=useState([])
const [readingTime, setReadingTime]=useState(0)

// 
const [blogs,setBlogs]=useState([])
useEffect(()=>{
fetch("blogs.json")
.then(res=>res.json())
.then(data=>setBlogs(data))
},[])
useEffect(()=>{
  if(blogs.length){
    const loadedataFS=getStoredDate()
    const saveItem=[]
    for(const id of loadedataFS){
      const blog= blogs.find(blog=>blog.id ==id)
      if(blog){
saveItem.push(blog)
      }
    }setBookmarks(saveItem)
  } 
},[blogs])


const handleReading=(time,id )=>{
  
  setReadingTime(readingTime + time)
  const remaings=bookmarks.filter(bookmark=>bookmark.id !== id)
  setBookmarks(remaings)

}

const handleRemoveUi=(id)=>{
const remaings =bookmarks.filter(bookmark=>bookmark.id !== id)
setBookmarks(remaings)
}

const handleBookmarks=(blog)=>{
  const newBookmarks= [...bookmarks,blog]
  setBookmarks(newBookmarks)
addToLS(blog.id)

}
const handleRemoveLS=(id)=>{
  removeFLSto(id)
  const remaings =bookmarks.filter(bookmark=>bookmark.id !== id)
  setBookmarks(remaings)

}

  return (
    <>
    <Header></Header>
    <div className='flex justify-between max-w-5xl mx-auto'>
      <Blogs handleBookmark={handleBookmarks}   
      handleReading={handleReading}
      ></Blogs>
      <Bookmarks bookmarks={bookmarks}
      handleRemoveLS={handleRemoveLS}
      handleRemoveUi={handleRemoveUi}
      handleBookmarks={handleBookmarks}
      readingTime={readingTime}
      ></Bookmarks>
    </div>
    
  
          
    </>
  )
}

export default App
