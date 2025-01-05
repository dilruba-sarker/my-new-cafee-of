

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

const removeFLSto=(id)=>{
    const items = getStoredDate()
    const remains=items.filter(idx=>idx !== id)
    saveData(remains)
}
// const removeFromLs=(id)=>{
//     const item=getStoredItem()
//     const remaining=item.filter(idx=>idx !==id)
//     saveToLocalStorage(remaining)
//     }
    

export{addToLS,getStoredDate,removeFLSto}

