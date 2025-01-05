import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import { getStoredDate } from "../addtoLs/LocalStorage";

const Blogs = ({handleBookmark,handleReading ,bookmarks ,handleShowSelected}) => {
const [blogs,setBlogs]=useState([])
useEffect(()=>{
fetch("blogs.json")
.then(res=>res.json())
.then(data=>setBlogs(data))
},[])



    return (
        <div className=" w-2/3">
            <h1>Blogs:{blogs.length}</h1>
            {blogs.map(blog=><Blog key={blog.id} blog={blog}
            handleReading={handleReading}
            bookmarks={bookmarks}
            handleShowSelected={handleShowSelected}
             handleBookmark={handleBookmark}></Blog>)}

        </div>
    );
};

export default Blogs;