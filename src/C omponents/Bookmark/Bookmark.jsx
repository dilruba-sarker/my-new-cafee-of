

const Bookmark = ({bookmark ,handleRemoveUi}) => {
    const {id}=bookmark
    return (
        <div>
            <h1 className="text-2xl">{bookmark.title}</h1>
           <button onClick={()=>{handleRemoveUi(id)}}
           className="bg-blue-500 rounded-xl p-2" type="button">remove</button>
        </div>
    );
};

export default Bookmark;