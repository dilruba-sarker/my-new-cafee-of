

const getStoredDate=()=>{
    const getStoredDate= localStorage.getItem("item")
    if(getStoredDate){
        return JSON.parse(getStoredDate)
    } return []
}

const saveData=(item)=>{

    const stingify= JSON.stringify(item)
    localStorage.setItem("item",stingify)
    
}
const addToLS=id=>{
    const item=getStoredDate()
    item.push(id)
    saveData(item)

}
export{addToLS,getStoredDate}
// const getStoredDate = () => {
//     const storedData = localStorage.getItem("item");
//     return storedData ? JSON.parse(storedData) : [];
// };

// const saveData = (items) => {
//     localStorage.setItem("item", JSON.stringify(items));
// };

// const addToLS = (id) => {
//     const storedItems = getStoredDate();
//     if (!storedItems.includes(id)) {
//         storedItems.push(id);
//         saveData(storedItems);
//     }
// };

// export { addToLS, getStoredDate };
