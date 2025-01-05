
import { IoBookmarks } from "react-icons/io5";
const Blog = ({blog,handleBookmark ,bookmarks, handleReading, handleShowSelected}) => {
    

    const {id,cover,title,author_img,author,posted_date,reading_time,hashtags}=blog
    return (
        <div className=" ">
            <button onClick={()=>{handleShowSelected(blog)}}>Selected: {bookmarks.length}/6 </button>
            <p className="space-y-10"><img src={cover} alt="" /></p>
            <div className="flex justify-between">
                <div className="flex justify-between">
                    <h1><img src={author_img} alt=""width={"100px"}/></h1>
                    <div className="ml-6">
                        <h1>{author}</h1>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>

                    <p>
                        <span>{reading_time} min read</span>
                        <button onClick={()=>{handleBookmark(blog)}}><IoBookmarks />
                        </button>
                    </p>

                </div>
                
            </div>
            <h1 className=" space-y-4 text-2xl mb-10">{title}</h1>
       <button onClick={()=>{handleReading(reading_time,id)}} className="text-red-700 mb-10">Marks As read</button>
        </div>
    );
};

export default Blog;