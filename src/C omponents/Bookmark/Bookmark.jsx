

const Bookmark = ({bookmark ,handleRemoveUi ,handleRemoveLS}) => {
    const {id}=bookmark
    return (
        <div>
            <h1 className="text-2xl">{bookmark.title}</h1>
            <button
            onClick={()=>{handleRemoveLS(id)}}
            className="mr-4 border-2" type="button">delete FlS</button>
           <button onClick={()=>{handleRemoveUi(id)}}
           className="bg-blue-500 rounded-xl p-2" type="button">remove</button>
        </div>
    );
};

export default Bookmark;