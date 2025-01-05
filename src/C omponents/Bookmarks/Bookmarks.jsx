import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,handleBookmarks, readingTime ,handleRemoveUi,handleRemoveLS}) => {
    return (
        <div className='w-1/3'>
            <h1>Bookmarks : {bookmarks.length}</h1>
            <p>Reading time:{readingTime} </p>
            {bookmarks.map((bookmark,idx)=><Bookmark key={idx} 
            handleBookmarks={handleBookmarks}
            handleRemoveLS={handleRemoveLS}
            handleRemoveUi={handleRemoveUi}
            bookmark={bookmark}></Bookmark>)}
        </div>
    );
};

export default Bookmarks;