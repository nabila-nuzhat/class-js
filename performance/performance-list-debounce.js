// search items from list, dynamic created data,
const data = Array.from({length:101}, (_, i)=>`item${i}`);
console.log(data);

const searchInputElm = document.querySelector("#searchInput");
const searchListElm = document.querySelector("#searchList");
                                                        // searchInputElm.addEventListener("search",(e)=>{
searchInputElm.addEventListener("input",(e)=>{
// // console.log(e);
    const query = e.target.value.toLowerCase();
    // searchData(query);
// console.log(query);
  if(query.trim()){ // avoid hit-result for blank-space in input before searching item
    // console.log(query.trim);
    
      searchData(query);
  }
});

function searchData(query){
    console.log("search Performance", performance.now());
    
    searchListElm.innerHTML = "";
    const filteredData = data
    .filter((value)=> value.includes(query))
    .slice(0, 10); // show 1st 10 items(similar seach result) among searched item(optional)
// console.log(filteredData);

    filteredData.forEach((value, index)=>{
        const li = document.createElement("li");
        li.textContent = value;
        searchListElm.append(li);
    })
}


// const searchListItems 
// const searchedItems
