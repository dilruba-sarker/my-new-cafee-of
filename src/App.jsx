
import { useEffect, useState } from 'react'
import './App.css'
import Blogs from './C omponents/Blogs/Blogs'
import Bookmarks from './C omponents/Bookmarks/Bookmarks'
import Header from './C omponents/Header/Header'
import { addToLS, getStoredDate, removeFLSto } from './C omponents/addtoLs/LocalStorage'

// function App() {
 
// const [bookmarks,setBookmarks]=useState([])
// const [readingTime, setReadingTime]=useState(0)
// // selected
// const [showSelected, setShowSelected] = useState(false);
// // 
// const [blogs,setBlogs]=useState([])
// useEffect(()=>{
// fetch("blogs.json")
// .then(res=>res.json())
// .then(data=>setBlogs(data))
// },[])
// useEffect(()=>{
//   if(blogs.length){
//     const loadedataFS=getStoredDate()
//     const saveItem=[]
//     for(const id of loadedataFS){
//       const blog= blogs.find(blog=>blog.id ==id)
//       if(blog){
// saveItem.push(blog)
//       }
//     }setBookmarks(saveItem)
//   } 
// },[blogs])


// const handleReading=(time,id )=>{
  
//   setReadingTime(readingTime + time)
//   const remaings=bookmarks.filter(bookmark=>bookmark.id !== id)
//   setBookmarks(remaings)

// }

// const handleRemoveUi=(id)=>{
// const remaings =bookmarks.filter(bookmark=>bookmark.id !== id)
// setBookmarks(remaings)
// }

// const handleBookmarks=(blog)=>{
//   const newBookmarks= [...bookmarks,blog]
//   if(newBookmarks.length <= 6){
//   setBookmarks(newBookmarks)}
// addToLS(blog.id)

// }
// const handleRemoveLS=(id)=>{
//   removeFLSto(id)
//   const remaings =bookmarks.filter(bookmark=>bookmark.id !== id)
//   setBookmarks(remaings)

// }
// // selecte
// const handleShowSelected = (blog) => {
//   setShowSelected(true);
//   console.log("title",blog);
// };

//   return (
//     <>
//     <Header></Header>
//     <div className='flex justify-between max-w-5xl mx-auto'>
//       <Blogs handleBookmark={handleBookmarks}   
//       handleReading={handleReading}
//       bookmarks={bookmarks}
//       handleShowSelected={handleShowSelected}
//       ></Blogs>
//       <Bookmarks bookmarks={bookmarks}
//       handleRemoveLS={handleRemoveLS}
//       handleRemoveUi={handleRemoveUi}
//       handleBookmarks={handleBookmarks}
//       readingTime={readingTime}
//       ></Bookmarks>
//     </div>
    
  
          
//     </>
//   )
// }

// export default App



function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const [selectedBookmarks, setSelectedBookmarks] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [showSelected, setShowSelected] = useState(false); // Flag to toggle views

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  useEffect(() => {
    if (blogs.length) {
      const loadedDataFS = getStoredDate();
      const savedItems = [];
      for (const id of loadedDataFS) {
        const blog = blogs.find((blog) => blog.id == id);
        if (blog) {
          savedItems.push(blog);
        }
      }
      setBookmarks(savedItems);
    }
  }, [blogs]);

  const handleReading = (time, id) => {
    setReadingTime(readingTime + time);
    const remaining = bookmarks.filter((bookmark) => bookmark.id !== id);
    setBookmarks(remaining);
  };

  const handleRemoveUi = (id) => {
    const remaining = bookmarks.filter((bookmark) => bookmark.id !== id);
    setBookmarks(remaining);
  };

  const handleBookmarks = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    if (newBookmarks.length <= 6) {
      setBookmarks(newBookmarks);
    }
    addToLS(blog.id);
  };

  const handleRemoveLS = (id) => {
    removeFLSto(id);
    const remaining = bookmarks.filter((bookmark) => bookmark.id !== id);
    setBookmarks(remaining);
  };

  const handleShowSelected = () => {
    setShowSelected(true); // Show only selected bookmarks
    setSelectedBookmarks(bookmarks); // Set the bookmarks to display
  };

  const handleShowAllBlogs = () => {
    setShowSelected(false); // Show all blogs again
  };

  return (
    <>
      <Header />
      <div className="flex justify-between max-w-5xl mx-auto">
        {showSelected ? (
          // Render selected bookmarks only
          <div className="w-full">
            <button
              onClick={handleShowAllBlogs}
              className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
            >
              Show All Blogs
            </button>
            <h2 className="text-2xl font-bold">Selected Bookmarks</h2>
            {selectedBookmarks.length > 0 ? (
              <ul>
                {selectedBookmarks.map((bookmark) => (
                  <li key={bookmark.id} className="mt-4">
                    <h3 className="text-lg font-medium">{bookmark.title}</h3>
                    <p>{bookmark.author}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No bookmarks selected.</p>
            )}
          </div>
        ) : (
          // Render blogs and bookmarks
          <>
            <Blogs
              handleBookmark={handleBookmarks}
              handleReading={handleReading}
              bookmarks={bookmarks}
            />
            <Bookmarks
              bookmarks={bookmarks}
              handleRemoveLS={handleRemoveLS}
              handleRemoveUi={handleRemoveUi}
              handleBookmarks={handleBookmarks}
              readingTime={readingTime}
            />
          </>
        )}
      </div>

      {!showSelected && (
        <div className="mt-10">
          <button
            onClick={handleShowSelected}
            className="bg-green-500 text-white px-4 py-2 rounded-md"
          >
            Show Selected
          </button>
        </div>
      )}
    </>
  );
}

export default App;


