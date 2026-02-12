// search items from list, dynamic created data,
const dataList = Array.from({length:100}, (_, i)=>`item-${i}`);
console.log(dataList);

const searchElm = document.querySelector("#searchItem");
const searchListElm = document.querySelector("#searchList");
searchElm.addEventListener("search",(e)=>{
    // e.target.value
})


// const searchListItems 
// const searchedItems
