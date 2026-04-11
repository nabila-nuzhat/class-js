// search items from list, dynamic created data,
const data = Array.from({length:10000}, (_, i)=>`item${i}`);
console.log(data);

const searchInputElm = document.querySelector("#searchInput");
const searchListElm = document.querySelector("#searchList");

// debounce with 500 ms delay
const debounceSearch = debounce(searchData, 500);
                                        // searchInputElm.addEventListener("search",(e)=>{
searchInputElm.addEventListener("input",(e)=>{
                                        // // console.log(e);
    const query = e.target.value.toLowerCase();
                                         // searchData(query);
                                        // console.log(query);
  if(query.trim()){ // avoid hit-result for blank-space in input before searching item
                                        // console.log(query.trim);
                                        //   searchData(query);
    debounceSearch(query);
  }
});

// target functionm which we want to delay
function searchData(query){
    console.log("search Performance", performance.now());
    
    searchListElm.innerHTML = "";
    const filteredData = data
    .filter((value)=> value.includes(query))
    .slice(0, 20); // show 1st 10 items(similar seach result) among searched item(optional)
// console.log(filteredData);

    filteredData.forEach((value, index)=>{
        const li = document.createElement("li");
        li.textContent = value;
        searchListElm.append(li);
    })
}

// for debounce "delay" is required
// debounce creates a wrapper function that delays/schedules calls to the target function using setTimeout.
//  Debounce manages timers (setTimeout/clearTimeout)
function debounce(fn, delay){
    let timer;
    return function(...args){ // rest operator to catch the arguements of the target function which we want to delay.
        clearTimeout(timer);
      timer = setTimeout(()=>{
            fn.apply(this, args);
        }, delay);

    };
}




// const searchListItems 
// const searchedItems


// ==================== EXPLANATION ==========================================
    // // const data = Array.from({length:10000}, (_, i)=>`item${i}`);
    // console.log(data);

    // const searchInputElm = document.querySelector("#searchInput");
    // const searchListElm = document.querySelector("#searchList");

    // // debounce with 500 ms delay
    // const debounceSearch = debounce(searchData, 500);
    //                                         // searchInputElm.addEventListener("search",(e)=>{
    // searchInputElm.addEventListener("input",(e)=>{
    //                                         // // console.log(e);
    //     const query = e.target.value.toLowerCase();
    //                                          // searchData(query);
    //                                         // console.log(query);
    //   if(query.trim()){ // avoid hit-result for blank-space in input before searching item
    //                                         // console.log(query.trim);
    //                                         //   searchData(query);
    //     debounceSearch(query);
    //   }
    // });

    // // target functionm which we want to delay
    // function searchData(query){
    //     console.log("search Performance", performance.now());
        
    //     searchListElm.innerHTML = "";
    //     const filteredData = data
    //     .filter((value)=> value.includes(query))
    //     .slice(0, 20); // show 1st 10 items(similar seach result) among searched item(optional)
    // // console.log(filteredData);

    //     filteredData.forEach((value, index)=>{
    //         const li = document.createElement("li");
    //         li.textContent = value;
    //         searchListElm.append(li);
    //     })
    // }

    // // for debounce "delay" is required
    // // debounce creates a wrapper function that delays/schedules calls to the target function using setTimeout.
    // //  Debounce manages timers (setTimeout/clearTimeout)
    // function debounce(fn, delay){
    //     let timer;
    //     return function(...args){ // rest operator to catch the arguements of the target function which we want to delay.
    //         clearTimeout(timer);
    //       timer = setTimeout(()=>{
    //             fn.apply(this, args);
    //         }, delay);

    //     };
    // }
    // breakdown the code, logic, reason and tidy up if necessary
    // Here's a comprehensive breakdown of your code, its logic, and a tidied-up version:

    // Code Breakdown
    // 1. Data Generation
    // javascript
    // const data = Array.from({length:10000}, (_, i)=>`item${i}`);
    // Creates an array of 10,000 strings: "item0" through "item9999"

    // Used as the search dataset

    // 2. DOM Elements
    // javascript
    // const searchInputElm = document.querySelector("#searchInput");
    // const searchListElm = document.querySelector("#searchList");
    // References to input field and results list container

    // 3. Event Listener Setup
    // javascript
    // searchInputElm.addEventListener("input", (e) => {
    //     const query = e.target.value.toLowerCase();
    //     if(query.trim()) {
    //         debounceSearch(query);
    //     }
    // });
    // Listens to input event (fires on every keystroke)

    // Converts query to lowercase for case-insensitive search

    // Only searches if query has non-whitespace characters

    // Calls debounced version of searchData

    // 4. Search Function
    // javascript
    // function searchData(query) {
    //     console.log("search Performance", performance.now());
    //     searchListElm.innerHTML = "";
    //     const filteredData = data
    //         .filter((value) => value.includes(query))
    //         .slice(0, 20);
        
    //     filteredData.forEach((value) => {
    //         const li = document.createElement("li");
    //         li.textContent = value;
    //         searchListElm.append(li);
    //     });
    // }
    // Clears previous results

    // Filters data for matches

    // Limits to first 20 results (performance optimization)

    // Creates and displays list items

    // 5. Debounce Function
    // javascript
    // function debounce(fn, delay) {
    //     let timer;
    //     return function(...args) {
    //         clearTimeout(timer);
    //         timer = setTimeout(() => {
    //             fn.apply(this, args);
    //         }, delay);
    //     };
    // }
    // Purpose: Delays function execution until after user stops typing

    // How it works:

    // Each call clears previous timer

    // Sets new timer to execute after delay ms

    // Only the last call within the delay period executes

    // Logic & Why Debounce is Needed
    // Problem Without Debounce:
    // User types "apple" (5 keystrokes) → 5 searches on 10,000 items

    // Each search is expensive (filtering 10,000 items)

    // Causes UI lag, unnecessary computation

    // Solution With Debounce:
    // User types quickly → only 1 search after 500ms pause

    // Reduces from 5 to 1 search operation

    // Improves performance significantly

    // Tidied Up Version
    // javascript
    // // Data setup
    // const SEARCH_DELAY_MS = 500;
    // const MAX_RESULTS = 20;
    // const data = Array.from({ length: 10000 }, (_, i) => `item${i}`);

    // // DOM elements
    // const searchInputElm = document.querySelector("#searchInput");
    // const searchListElm = document.querySelector("#searchList");

    // // Event listener
    // searchInputElm.addEventListener("input", handleSearchInput);

    // // Event handler
    // function handleSearchInput(e) {
    //     const query = e.target.value.trim().toLowerCase();
        
    //     if (!query) {
    //         clearResults();
    //         return;
    //     }
        
    //     debouncedSearch(query);
    // }

    // // Search execution
    // function performSearch(query) {
    //     console.log("Search executed at:", performance.now());
        
    //     const filteredData = data
    //         .filter(item => item.includes(query))
    //         .slice(0, MAX_RESULTS);
        
    //     renderResults(filteredData);
    // }

    // // UI rendering
    // function renderResults(items) {
    //     clearResults();
        
    //     items.forEach(item => {
    //         const li = document.createElement("li");
    //         li.textContent = item;
    //         searchListElm.appendChild(li);
    //     });
    // }

    // function clearResults() {
    //     searchListElm.innerHTML = "";
    // }

    // // Debounce utility
    // function debounce(fn, delay) {
    //     let timeoutId;
        
    //     return function(...args) {
    //         clearTimeout(timeoutId);
    //         timeoutId = setTimeout(() => fn.apply(this, args), delay);
    //     };
    // }

    // const debouncedSearch = debounce(performSearch, SEARCH_DELAY_MS);
    // Key Improvements Made:
    // Constants for configuration - Easy to adjust delay and result limit

    // Clearer function names - More descriptive and semantic

    // Separation of concerns - Each function has single responsibility

    // Early return pattern - Handles empty query case first

    // Removed commented code - Cleaner and more readable

    // Consistent naming - Follows naming conventions

    // Clear results function - Reusable for empty queries

    // Performance Considerations:
    // 10,000 items - Filtering is O(n) operation

    // Limit to 20 results - Reduces DOM manipulation

    // 500ms debounce - Balances responsiveness and performance

    // trim() on query - Prevents searching for whitespace only

    // Potential Further Optimizations:
    // For very large datasets, consider:

    // Virtual scrolling for displaying many results

    // Indexed search (pre-computed indexes)

    // Web Workers for background processing

    // RequestAnimationFrame for smooth UI updates

    // This implementation is clean, efficient, and ready for production use!

    // explain the code
    // Complete Code Explanation
    // Let me explain this code from top to bottom, explaining what each part does and why it's written that way.

    // 1. Data Generation
    // javascript
    // const data = Array.from({length:10000}, (_, i)=>`item${i}`);
    // What it does: Creates an array of 10,000 strings: "item0", "item1", item2", ... up to "item9999"

    // How it works:

    // Array.from() creates an array from an array-like object

    // {length:10000} creates an object with a length property of 10000

    // The second parameter is a mapping function that runs for each index

    // (_, i) - first parameter is the element (ignored with _), second is the index

    // Returns item${i} - template string that creates item0, item1, etc.

    // Why: This simulates a large dataset (10,000 items) to demonstrate search performance issues.

    // 2. DOM Element References
    // javascript
    // const searchInputElm = document.querySelector("#searchInput");
    // const searchListElm = document.querySelector("#searchList");
    // What it does: Gets references to HTML elements

    // #searchInput - an input field where users type their search

    // #searchList - a container (likely <ul> or <div>) where results will be displayed

    // Why: Store references once for efficiency instead of querying the DOM every time.

    // 3. Debounce Function (The Core Concept)
    // javascript
    // function debounce(fn, delay){
    //     let timer;
    //     return function(...args){
    //         clearTimeout(timer);
    //         timer = setTimeout(() => {
    //             fn.apply(this, args);
    //         }, delay);
    //     };
    // }
    // What it does: Creates a version of a function that only runs after a pause in calls.

    // Step-by-step breakdown:

    // When debounce(searchData, 500) is called:
    // Creates a timer variable (initially undefined)

    // Returns a NEW function (the debounced version)

    // When the returned function is called:
    // javascript
    // // Every time user types, this runs:
    // debouncedSearch(query)
    // Line by line:

    // clearTimeout(timer) - Cancels any pending execution

    // timer = setTimeout(() => {...}, delay) - Schedules new execution after 500ms

    // fn.apply(this, args) - Calls the original function with correct context and arguments

    // Visual example:

    // text
    // User types "h" → Timer starts (500ms)
    // User types "he" → Clears previous timer, starts new timer (500ms)
    // User types "hel" → Clears previous timer, starts new timer (500ms)
    // User types "hell" → Clears previous timer, starts new timer (500ms)
    // User types "hello" → Clears previous timer, starts new timer (500ms)
    // [User stops typing for 500ms] → NOW searchData("hello") finally runs
    // Why: Without debounce, searching on every keystroke would be inefficient. With debounce, we wait until the user pauses typing.

    // 4. Event Listener
    // javascript
    // searchInputElm.addEventListener("input", (e) => {
    //     const query = e.target.value.toLowerCase();
        
    //     if(query.trim()){
    //         debounceSearch(query);
    //     }
    // });
    // What it does: Listens for every keystroke in the input field.

    // Event type: "input" fires on every keystroke (including paste, cut, etc.)

    // Step-by-step:

    // e.target.value - Gets the current text in the input (e.g., "Apple")

    // .toLowerCase() - Converts to lowercase ("apple") for case-insensitive search

    // query.trim() - Removes whitespace from start/end

    // if(query.trim()) - Only proceed if there's actual text (not just spaces)

    // debounceSearch(query) - Call the debounced version of searchData

    // Why lowercase? So searching for "APPLE" matches "apple" in the data.

    // Why trim check? Prevents searching when user types only spaces.

    // 5. Search Function (The Target Function)
    // javascript
    // function searchData(query){
    //     console.log("search Performance", performance.now());
        
    //     searchListElm.innerHTML = "";
        
    //     const filteredData = data
    //         .filter((value)=> value.includes(query))
    //         .slice(0, 20);
        
    //     filteredData.forEach((value, index)=>{
    //         const li = document.createElement("li");
    //         li.textContent = value;
    //         searchListElm.append(li);
    //     });
    // }
    // What it does: Filters the 10,000 items and displays matching results.

    // Step-by-step breakdown:

    // A. Performance Logging
    // javascript
    // console.log("search Performance", performance.now());
    // performance.now() gives high-precision timestamp

    // Shows when search actually executes (useful for debugging debounce)

    // B. Clear Previous Results
    // javascript
    // searchListElm.innerHTML = "";
    // Removes all previous search results from the DOM

    // Prevents showing old results mixed with new ones

    // C. Filter and Limit Data
    // javascript
    // const filteredData = data
    //     .filter((value)=> value.includes(query))
    //     .slice(0, 20);
    // filter() - Creates new array with items that match:

    // value.includes(query) - Returns true if the item contains the search text

    // Example: "item123".includes("12") → true

    // slice(0, 20) - Takes first 20 items only

    // Without this, a search for "item" would return all 10,000 items!

    // This prevents overwhelming the DOM with 10,000 list items

    // D. Display Results
    // javascript
    // filteredData.forEach((value)=>{
    //     const li = document.createElement("li");
    //     li.textContent = value;
    //     searchListElm.append(li);
    // });
    // Creates an <li> element for each result

    // Sets its text content

    // Appends to the searchList container

    // Complete Flow Diagram
    // text
    // User types "a"
    //     ↓
    // input event fires
    //     ↓
    // Get value "a", lowercase it
    //     ↓
    // Check if not just spaces → yes
    //     ↓
    // Call debounceSearch("a")
    //     ↓
    // ┌─────────────────────────┐
    // │  Debounce Function      │
    // │  - Clear previous timer │
    // │  - Start 500ms timer    │
    // └─────────────────────────┘
    //     ↓
    // [User types "ap" within 500ms]
    //     ↓
    // ┌─────────────────────────┐
    // │  Debounce Function      │
    // │  - Clear previous timer │
    // │  - Start NEW 500ms timer│
    // └─────────────────────────┘
    //     ↓
    // [User stops typing for 500ms]
    //     ↓
    // Timer expires → searchData("ap") runs
    //     ↓
    // Filter 10,000 items for those containing "ap"
    //     ↓
    // Take first 20 results
    //     ↓
    // Clear and rebuild list in DOM
    //     ↓
    // User sees matching items: "itemap123", "maptest", etc.
    // Why Each Design Choice Was Made
    // Choice	Reason
    // 10,000 items	Demonstrates real-world large dataset performance
    // Debounce with 500ms	Balance between responsiveness and performance (300-500ms is typical)
    // Lowercase conversion	Case-insensitive search is user-friendly
    // trim() check	Prevents unnecessary searches for whitespace
    // Limit to 20 results	DOM performance and UI cleanliness
    // innerHTML = ""	Quick way to clear all children
    // createElement + append	More efficient than innerHTML += for adding multiple items
    // Potential Edge Cases Handled
    // Empty search - if(query.trim()) prevents searching

    // No matches - Filter returns empty array, no items displayed

    // Rapid typing - Debounce prevents excessive searches

    // Case sensitivity - Converting to lowercase solves this

    // Spaces only - trim() catches this

    // Potential Improvements Noted in Comments
    // The original code had commented-out alternatives:

    // addEventListener("search",...) - Would only trigger on Enter key or clear button

    // Direct searchData(query) call without debounce - Would cause performance issues

    // The code chose the better approach: debounced input event.

    // This is a well-implemented search with debouncing - a classic pattern for optimizing real-time search interfaces!

    // explain the basic concepts
    // Basic Concepts Explained Simply
    // Let me break down the fundamental concepts this code uses, explained for beginners.

    // 1. Arrays and Array.from()
    // What is an Array?
    // An array is like a numbered list of items.

    // javascript
    // // Simple array example
    // const fruits = ["apple", "banana", "orange"];
    // // Index:        0        1         2
    // What does Array.from() do?
    // It creates an array from something else.

    // javascript
    // // Create array of 5 items
    // Array.from({length: 5})  // Creates: [undefined, undefined, undefined, undefined, undefined]

    // // Add a mapping function to fill it
    // Array.from({length: 5}, (_, i) => `item${i}`)
    // // Creates: ["item0", "item1", "item2", "item3", "item4"]
    // The parameters explained:

    // {length: 10000} - An object saying "I want 10000 positions"

    // (_, i) => item${i} - A function that runs for each position

    // _ - The current value (ignored, so we use _)

    // i - The index number (0, 1, 2, etc.)

    // item${i} - Creates string like "item0", "item1", etc.

    // Think of it like: Creating 10,000 boxes and labeling them "item0", "item1", etc.

    // 2. DOM (Document Object Model)
    // What is the DOM?
    // The DOM is a tree representation of your HTML page. JavaScript can change it.

    // html
    // <!-- HTML in your file -->
    // <input id="searchInput" type="text">
    // <ul id="searchList"></ul>
    // javascript
    // // JavaScript finding those elements
    // const searchInputElm = document.querySelector("#searchInput");
    // // Now searchInputElm represents that input box

    // const searchListElm = document.querySelector("#searchList");
    // // Now searchListElm represents that list
    // Why we do this: It's like getting a remote control for HTML elements so JavaScript can control them.

    // 3. Events and Event Listeners
    // What is an Event?
    // An event is something that happens - click, typing, scrolling, etc.

    // javascript
    // element.addEventListener("input", function(e) {
    //     // This code runs every time user types in the input
    // });
    // Common events:

    // click - User clicks something

    // input - User types in an input field

    // keydown - User presses a key

    // submit - User submits a form

    // The Event Object (e)
    // When an event happens, browser gives you an object with details:

    // javascript
    // searchInputElm.addEventListener("input", (e) => {
    //     console.log(e.target);        // The input element itself
    //     console.log(e.target.value);  // What user typed
    //     console.log(e.type);          // "input"
    // });
    // Analogy: Event listener is like a receptionist waiting for a phone call. When call comes (event), they get information about the call (event object).

    // 4. String Methods
    // toLowerCase()
    // Converts all letters to lowercase.

    // javascript
    // "Hello World".toLowerCase()  // "hello world"
    // "APPLE".toLowerCase()        // "apple"
    // "MiXeD CaSe".toLowerCase()   // "mixed case"
    // Why use it? Makes search case-insensitive. "APPLE" will match "apple".

    // trim()
    // Removes whitespace from start and end.

    // javascript
    // "  hello  ".trim()  // "hello"
    // "   hi   ".trim()   // "hi"
    // "no spaces".trim()  // "no spaces" (nothing to remove)
    // Why use it? Prevents searching for just spaces or empty strings.

    // includes()
    // Checks if a string contains another string.

    // javascript
    // "javascript".includes("script")  // true
    // "item123".includes("12")         // true
    // "banana".includes("orange")      // false
    // 5. Array Methods
    // filter()
    // Creates a new array with only items that pass a test.

    // javascript
    // const numbers = [1, 2, 3, 4, 5, 6];

    // // Keep only even numbers
    // const evens = numbers.filter(num => num % 2 === 0);
    // // Result: [2, 4, 6]

    // // In our search code:
    // data.filter((value) => value.includes(query))
    // // Keeps only items that contain the search text
    // slice()
    // Extracts a portion of an array.

    // javascript
    // const fruits = ["apple", "banana", "orange", "grape", "kiwi"];

    // fruits.slice(0, 3)  // ["apple", "banana", "orange"] (first 3)
    // fruits.slice(2, 4)  // ["orange", "grape"] (from index 2 to 4)
    // fruits.slice(0, 20) // First 20 items (or all if less than 20)
    // forEach()
    // Runs a function for each item in an array.

    // javascript
    // const colors = ["red", "green", "blue"];

    // colors.forEach((color) => {
    //     console.log(color);
    // });
    // // Output:
    // // red
    // // green
    // // blue
    // 6. Creating and Adding HTML Elements
    // javascript
    // // Create a new <li> element
    // const li = document.createElement("li");

    // // Set its text content
    // li.textContent = "Hello";

    // // Add it to the page
    // searchListElm.append(li);
    // What this does in HTML:

    // html
    // <!-- Before -->
    // <ul id="searchList"></ul>

    // <!-- After -->
    // <ul id="searchList">
    //     <li>Hello</li>
    // </ul>
    // 7. Functions and Return Values
    // Basic Function
    // javascript
    // function searchData(query) {
    //     // Do something with query
    //     console.log("Searching for:", query);
    // }
    // Function that Returns Another Function (Closure)
    // javascript
    // function debounce(fn, delay) {
    //     let timer;  // This variable stays alive!
        
    //     return function(...args) {
    //         // This inner function can still access 'timer'
    //         clearTimeout(timer);
    //         timer = setTimeout(() => fn.apply(this, args), delay);
    //     };
    // }
    // This is a closure: An inner function that remembers variables from its outer function even after the outer function has finished.

    // 8. setTimeout and clearTimeout
    // setTimeout
    // Runs code after a delay (in milliseconds).

    // javascript
    // // Run after 1 second (1000 ms)
    // setTimeout(() => {
    //     console.log("This runs later");
    // }, 1000);

    // console.log("This runs immediately");
    // // Output:
    // // "This runs immediately"
    // // (1 second passes)
    // // "This runs later"
    // clearTimeout
    // Cancels a scheduled timeout.

    // javascript
    // const timer = setTimeout(() => {
    //     console.log("This won't run");
    // }, 1000);

    // clearTimeout(timer);  // Cancels it
    // 9. The Spread Operator (...args)
    // javascript
    // function example(...args) {
    //     console.log(args);  // args is an array of all arguments
    // }

    // example(1, 2, 3);        // [1, 2, 3]
    // example("hello", "world"); // ["hello", "world"]
    // Why use it? Allows a function to accept any number of arguments and pass them to another function.

    // 10. apply() Method
    // javascript
    // function greet(greeting, name) {
    //     console.log(greeting + ", " + name);
    // }

    // // Normal call
    // greet("Hello", "John");

    // // Using apply()
    // greet.apply(null, ["Hello", "John"]);  // Same result
    // Why use it? Allows calling a function with arguments from an array.

    // Putting It All Together - Simple Example
    // Here's a minimal version without the complex parts:

    // javascript
    // // 1. Create some data
    // const data = ["apple", "banana", "grape", "orange"];

    // // 2. Get DOM elements
    // const input = document.querySelector("#searchInput");
    // const list = document.querySelector("#searchList");

    // // 3. Function to search and display
    // function search(query) {
    //     // Clear old results
    //     list.innerHTML = "";
        
    //     // Find matches
    //     const matches = data.filter(item => item.includes(query));
        
    //     // Display matches
    //     matches.forEach(match => {
    //         const li = document.createElement("li");
    //         li.textContent = match;
    //         list.appendChild(li);
    //     });
    // }

    // // 4. Listen for typing
    // input.addEventListener("input", (e) => {
    //     const query = e.target.value.toLowerCase();
    //     if (query.trim()) {
    //         search(query);
    //     }
    // });
    // Key Vocabulary Summary
    // Term	Simple Definition
    // Array	A list of items
    // DOM	The structure of your webpage
    // Event	Something that happens (click, type, etc.)
    // Debounce	Wait for pauses before acting
    // Callback	A function that runs later
    // Closure	A function that remembers variables
    // Method	A function that belongs to an object
    // Parameter	Input to a function
    // Return value	Output from a function
    // The Most Important Concept: Debounce
    // Without debounce:

    // text
    // User types: H → Search
    // User types: He → Search
    // User types: Hel → Search
    // User types: Hell → Search
    // User types: Hello → Search
    // Total: 5 searches
    // With debounce:

    // text
    // User types: H → Wait
    // User types: He → Cancel wait, wait again
    // User types: Hel → Cancel wait, wait again
    // User types: Hell → Cancel wait, wait again
    // User types: Hello → Cancel wait, wait again
    // [500ms passes]
    // Search runs once for "Hello"
    // Total: 1 search
    // This is why debounce is so useful - it prevents doing work until the user is finished!

    // These concepts together create a responsive, efficient search box that can handle thousands of items without slowing down the page.

    // why _ - The current value (ignored, so we use _)?
    // element.addEventListener("input", function(e) what is this refers to?
    // Great questions! Let me explain both concepts in detail.
    // Question 1: Why use _ as a parameter?
    // The Underscore _ Convention
    // In JavaScript, _ is just a valid variable name, but by convention, it means "I'm ignoring this value".

    // javascript
    // Array.from({length: 5}, (_, i) => `item${i}`)
    // What's really happening?
    // The mapping function in Array.from() actually receives TWO parameters:

    // javascript
    // Array.from(arrayLike, (currentValue, index) => {
    //     // currentValue = the current element being processed
    //     // index = the position number (0, 1, 2, etc.)
    //     return something;
    // });
    // Let me show the difference:
    // javascript
    // // WITHOUT underscore - using both parameters
    // Array.from({length: 3}, (value, index) => {
    //     console.log('value:', value, 'index:', index);
    //     return `item${index}`;
    // });
    // // Output:
    // // value: undefined index: 0
    // // value: undefined index: 1
    // // value: undefined index: 2
    // // Result: ["item0", "item1", "item2"]

    // // WITH underscore - explicitly showing we ignore 'value'
    // Array.from({length: 3}, (_, index) => {
    //     console.log('_:', _, 'index:', index);
    //     return `item${index}`;
    // });
    // // Output:
    // // _: undefined index: 0
    // // _: undefined index: 1
    // // _: undefined index: 2
    // // Result: ["item0", "item1", "item2"]
    // Why is value undefined?
    // When you use {length: 10000}, you're creating an array with empty slots. The value parameter receives the current element, which is undefined because the slots are empty.

    // javascript
    // const emptySlots = Array.from({length: 3});
    // console.log(emptySlots);  // [undefined, undefined, undefined]
    // Why not just use one parameter?
    // You might think: "Why not just do (i) => instead of (_, i) =>?"

    // javascript
    // // This WON'T work as expected
    // Array.from({length: 3}, (i) => `item${i}`)
    // // i is actually the VALUE (undefined), not the index!
    // // Result: ["itemundefined", "itemundefined", "itemundefined"]

    // // You NEED two parameters to get the index
    // Array.from({length: 3}, (value, index) => `item${index}`)  // Works
    // Array.from({length: 3}, (_, index) => `item${index}`)      // Also works, clearer
    // Real-world analogy
    // Think of it like a factory conveyor belt:

    // The belt has 10000 positions (length: 10000)

    // Each position is empty (value = undefined)

    // You have a robot that labels each position

    // The robot needs to know the position number (index)

    // It doesn't care that the position is empty (value = undefined)

    // Using _ is like saying: "Yes, I know the first parameter exists, but I don't need it, so I'll call it 'ignore' to make that clear to other developers."

    // Other common uses of _
    // javascript
    // // In array destructuring
    // const [, second] = [1, 2, 3];
    // console.log(second);  // 2

    // const [first, _, third] = [1, 2, 3];
    // console.log(first, third);  // 1, 3

    // // In function parameters when you need later parameters
    // fetch('/api/data')
    //     .then(_, error) => {  // Wrong - can't skip like this
    //     }

    // // Better to use _ for unused promise parameter
    // fetch('/api/data')
    //     .then(response => response.json())
    //     .catch(_ => console.log('Error occurred'));  // Ignoring error object
    // Question 2: What does e refer to in event listeners?
    // The Event Object e
    // When an event fires, the browser creates an Event Object that contains information about what happened.

    // javascript
    // element.addEventListener("input", function(e) {
    //     // e is the Event Object
    //     console.log(e);
    // });
    // What's inside the Event Object?
    // Here's a real example. If a user types "Hello" in an input box:

    // javascript
    // searchInputElm.addEventListener("input", (e) => {
    //     console.log(e.type);           // "input" - what kind of event
    //     console.log(e.target);         // <input id="searchInput"> - which element
    //     console.log(e.target.value);   // "Hello" - what was typed
    //     console.log(e.timeStamp);      // 1234.56 - when it happened
    //     console.log(e.isTrusted);      // true - was it a real user action?
    // });
    // Common properties of the Event Object
    // javascript
    // // For INPUT events
    // {
    //     type: "input",           // Event name
    //     target: inputElement,    // The element that triggered event
    //     currentTarget: inputElement, // Element listener is attached to
    //     timeStamp: 1234.56,      // When event occurred
    //     isTrusted: true,         // User action vs script-triggered
    //     bubbles: true,           // Does it bubble up DOM tree?
    //     cancelable: false        // Can it be cancelled?
    // }

    // // For CLICK events (additional properties)
    // {
    //     type: "click",
    //     clientX: 150,            // Mouse X position
    //     clientY: 300,            // Mouse Y position
    //     button: 0,               // Which mouse button (0=left)
    //     ctrlKey: false,          // Was Ctrl key pressed?
    //     shiftKey: false,         // Was Shift key pressed?
    // }

    // // For KEYBOARD events
    // {
    //     type: "keydown",
    //     key: "a",                // Which key was pressed
    //     code: "KeyA",            // Physical key location
    //     ctrlKey: false,          // Modifier keys
    //     shiftKey: false,
    //     altKey: false
    // }
    // Why is it called e?
    // It's just a convention - short for "event". You can name it anything:

    // javascript
    // // All of these work the same:
    // element.addEventListener("input", function(e) { })
    // element.addEventListener("input", function(event) { })
    // element.addEventListener("input", function(evt) { })
    // element.addEventListener("input", function(banana) { })  // Works but don't do this!
    // Practical examples of using e
    // javascript
    // // Example 1: Get typed value
    // searchInputElm.addEventListener("input", (e) => {
    //     const userTyped = e.target.value;
    //     console.log("User typed:", userTyped);
    // });

    // // Example 2: Prevent default behavior
    // formElement.addEventListener("submit", (e) => {
    //     e.preventDefault();  // Stop form from actually submitting/reloading page
    //     console.log("Form submitted but page didn't reload");
    // });

    // // Example 3: Stop event from bubbling
    // childElement.addEventListener("click", (e) => {
    //     e.stopPropagation();  // Don't trigger parent click handlers
    //     console.log("Child clicked only");
    // });

    // // Example 4: Check modifier keys
    // document.addEventListener("keydown", (e) => {
    //     if (e.ctrlKey && e.key === "s") {
    //         e.preventDefault();  // Prevent browser save dialog
    //         console.log("Ctrl+S pressed - saving manually");
    //     }
    // });

    // // Example 5: Get mouse coordinates
    // canvas.addEventListener("click", (e) => {
    //     const x = e.clientX;
    //     const y = e.clientY;
    //     console.log(`Clicked at position (${x}, ${y})`);
    // });
    // The difference between e.target and e.currentTarget
    // html
    // <div id="parent">
    //     <button id="child">Click me</button>
    // </div>
    // javascript
    // document.getElementById("parent").addEventListener("click", (e) => {
    //     console.log(e.target);           // The BUTTON that was clicked
    //     console.log(e.currentTarget);    // The DIV that has the listener
    //     console.log(e.target === e.currentTarget);  // false (unless clicking div)
    // });
    // Real-world analogy
    // Think of the event object e like a receipt or report:

    // When something happens (event), a report is generated

    // This report (e) contains all the details:

    // What happened? (type)

    // Where did it happen? (target)

    // When did it happen? (timeStamp)

    // Were there any special circumstances? (ctrlKey, shiftKey)

    // Complete example showing both concepts
    // javascript
    // // Combining both concepts: _ for ignored parameter, e for event

    // // 1. Using _ to ignore the value in array creation
    // const searchHistory = Array.from({length: 5}, (_, i) => `search-${i}`);
    // // Result: ["search-0", "search-1", "search-2", "search-3", "search-4"]

    // // 2. Using e to access event details
    // searchInputElm.addEventListener("input", (e) => {
    //     const query = e.target.value;
    //     console.log(`Searching for: ${query}`);
        
    //     // Add to search history (using our array from above)
    //     const timestamp = new Date().toLocaleTimeString();
    //     console.log(`Search at ${timestamp}: "${query}"`);
    // });

    // // You can see both patterns in modern JavaScript:
    // fetch('/api/data')
    //     .then(response => response.json())
    //     .then(data => {
    //         // Using _ to ignore unused parameters
    //         const processed = data.map((_, index) => ({
    //             id: index,
    //             value: data[index]
    //         }));
    //     })
    //     .catch(error => console.error('Error:', error));
    // Summary
    // Concept	Meaning	Why
    // _	"I'm ignoring this parameter"	Shows intent to other developers, required when you need later parameters
    // e	Event object containing details	Gives you information about what happened (what was typed, clicked, etc.)
    // Both are conventions that make code more readable and maintainable!

    // function debounce(fn, delay){
    //     let timer;
    //     return function(...args){ // rest operator to catch the arguements of the target function which we want to delay.
    //         clearTimeout(timer);
    //       timer = setTimeout(()=>{
    //             fn.apply(this, args);
    //         }, delay);

    //     };
    // }

    // const debounceSearch = debounce(searchData, 500);
    //                                         // searchInputElm.addEventListener("search",(e)=>{
    // searchInputElm.addEventListener("input",(e)=>{
    //                                         // // console.log(e);
    //     const query = e.target.value.toLowerCase();
    //                                          // searchData(query);
    //                                         // console.log(query);
    //   if(query.trim()){ // avoid hit-result for blank-space in input before searching item
    //                                         // console.log(query.trim);
    //                                         //   searchData(query);
    //     debounceSearch(query);
    //   }
    // });

    // why these are seperated?
    // did no understand the gap between them?
    // Excellent question! Let me explain why these are separated and what connects them.
    // The Gap You're Seeing
    // You're looking at this structure:

    // javascript
    // function debounce(fn, delay) { ... }  // Part 1: Definition

    // const debounceSearch = debounce(searchData, 500);  // Part 2: Creation

    // searchInputElm.addEventListener("input", (e) => {  // Part 3: Usage
    //     debounceSearch(query);  // Part 4: Execution
    // });
    // The Key Concept: Functions Creating Functions
    // This is the core that's causing confusion. Let me break it down step by step.

    // Step 1: The debounce function is a Factory Function
    // Think of debounce as a machine that creates other functions:

    // javascript
    // function debounce(fn, delay) {
    //     let timer;
    //     return function(...args) {  // This is the NEW function being created
    //         clearTimeout(timer);
    //         timer = setTimeout(() => {
    //             fn.apply(this, args);
    //         }, delay);
    //     };
    // }
    // Analogy: debounce is like a cookie cutter. It doesn't make cookies itself - it creates tools that can make cookies.

    // Step 2: Creating a specific debounced function
    // javascript
    // const debounceSearch = debounce(searchData, 500);
    // What happens here:

    // You call debounce(searchData, 500)

    // The debounce function RUNS IMMEDIATELY

    // It creates and RETURNS a NEW function

    // This new function is stored in debounceSearch

    // Let me visualize what's stored in debounceSearch:

    // javascript
    // // debounceSearch is now EQUIVALENT to this:
    // debounceSearch = function(...args) {
    //     clearTimeout(timer);
    //     timer = setTimeout(() => {
    //         searchData.apply(this, args);
    //     }, 500);
    // }
    // // AND it remembers 'timer' variable (closure)
    // Step 3: Why separate creation from usage?
    // This separation exists because you create the debounced version once, but use it many times.

    // javascript
    // // CREATE once
    // const debounceSearch = debounce(searchData, 500);

    // // USE many times
    // debounceSearch("a");  // First keystroke
    // debounceSearch("ap"); // Second keystroke  
    // debounceSearch("app"); // Third keystroke
    // debounceSearch("appl"); // Fourth keystroke
    // debounceSearch("apple"); // Fifth keystroke
    // The Complete Flow - Visualized
    // Let me trace through exactly what happens when the code runs:

    // javascript
    // // ========== SETUP PHASE (runs once when page loads) ==========

    // // 1. Define the factory function
    // function debounce(fn, delay){
    //     let timer;
    //     return function(...args){
    //         clearTimeout(timer);
    //         timer = setTimeout(() => {
    //             fn.apply(this, args);
    //         }, delay);
    //     };
    // }

    // // 2. CREATE the debounced version (runs immediately)
    // const debounceSearch = debounce(searchData, 500);
    // // At this moment, debounceSearch now contains:
    // // function(...args) {
    // //     clearTimeout(timer);
    // //     timer = setTimeout(() => { searchData.apply(this, args); }, 500);
    // // }

    // // 3. Setup event listener (runs once)
    // searchInputElm.addEventListener("input", (e) => {
    //     const query = e.target.value.toLowerCase();
    //     if(query.trim()){
    //         debounceSearch(query);  // This calls the function created above
    //     }
    // });

    // // ========== RUNTIME PHASE (runs every time user types) ==========

    // // User types "h"
    // // -> Event fires
    // // -> debounceSearch("h") is called
    // //    -> This runs the function created in step 2
    // //    -> Clears any existing timer
    // //    -> Starts new timer for 500ms

    // // User types "he" (within 500ms)
    // // -> Event fires again
    // // -> debounceSearch("he") is called
    // //    -> Clears previous timer
    // //    -> Starts new timer for 500ms

    // // User stops typing
    // // -> After 500ms, timer expires
    // // -> searchData("he") finally runs
    // Why Not Just Write It All Together?
    // You might wonder: "Why can't we just put the debounce logic directly in the event listener?"

    // Here's what that would look like (which is BAD):

    // javascript
    // // BAD APPROACH - Don't do this!
    // let timer;
    // searchInputElm.addEventListener("input", (e) => {
    //     const query = e.target.value.toLowerCase();
    //     if(query.trim()){
    //         clearTimeout(timer);
    //         timer = setTimeout(() => {
    //             searchData(query);
    //         }, 500);
    //     }
    // });
    // Problems with this approach:

    // timer variable is in the global scope (can be accidentally changed)

    // Can't reuse the debounce logic for other searches

    // Harder to test

    // Mixes debounce logic with search logic

    // The Connection - How Data Flows
    // Here's how the query gets from the input to searchData:

    // javascript
    // // Step 1: User types "apple"
    // // Step 2: Event fires, creates query = "apple"
    // searchInputElm.addEventListener("input", (e) => {
    //     const query = e.target.value.toLowerCase();  // "apple"
        
    //     // Step 3: Pass "apple" to debounceSearch
    //     debounceSearch(query);  // "apple" becomes part of ...args
    // });

    // // Step 4: debounceSearch receives "apple"
    // const debounceSearch = function(...args) {  // args = ["apple"]
    //     clearTimeout(timer);
    //     timer = setTimeout(() => {
    //         // Step 5: Forward "apple" to searchData
    //         fn.apply(this, args);  // fn = searchData, args = ["apple"]
    //     }, delay);
    // };

    // // Step 6: searchData finally runs with "apple"
    // function searchData(query) {  // query = "apple"
    //     console.log("Searching for:", query);
    //     // ... search logic
    // }
    // A Simpler Example to Understand Separation
    // Here's a non-debounce example that shows the same pattern:

    // javascript
    // // FACTORY FUNCTION - creates greeting functions
    // function createGreeting(prefix) {
    //     return function(name) {
    //         console.log(prefix + ", " + name + "!");
    //     };
    // }

    // // CREATE two different greeting functions
    // const sayHello = createGreeting("Hello");
    // const sayHi = createGreeting("Hi");

    // // USE them multiple times
    // sayHello("John");  // "Hello, John!"
    // sayHello("Jane");  // "Hello, Jane!"
    // sayHi("Bob");      // "Hi, Bob!"
    // See the pattern? You create once, use many times.

    // Visual Timeline
    // text
    // TIME ──────────────────────────────────────────────────────────►

    // [Page Load]
    //     │
    //     ├─ Define debounce function
    //     │
    //     ├─ CREATE debounceSearch ←─────┐
    //     │   (debounce runs once)        │
    //     │                               │
    //     ├─ Setup event listener         │
    //     │                               │
    //     │                          [Separation Point]
    //     │                               │
    //     │                          The gap you're asking about
    //     │                               │
    //     └─ Wait for user input          │
    //                                      │
    // [User types "a"]                     │
    //     │                                │
    //     └─ Event fires ─────────────────┘
    //         │
    //         └─ Call debounceSearch("a") ←── USE (first time)
    //             │
    //             └─ Start 500ms timer

    // [User types "ap"] within 500ms
    //     │
    //     └─ Event fires
    //         │
    //         └─ Call debounceSearch("ap") ←── USE (second time)
    //             │
    //             ├─ Clear previous timer
    //             └─ Start new 500ms timer

    // [User stops typing]
    //     │
    //     └─ 500ms passes
    //         │
    //         └─ Timer executes
    //             │
    //             └─ Call searchData("ap") ←── FINALLY runs search
    // Key Points to Remember
    // debounce is a factory - It creates specialized functions

    // Creation happens once - When the page loads

    // Usage happens many times - Every time the user types

    // The gap is intentional - It separates "setting up the tool" from "using the tool"

    // The connection is through debounceSearch - It holds the debounced version

    // What Happens If You Don't Separate?
    // javascript
    // // WRONG - Creating new debounced function every keystroke
    // searchInputElm.addEventListener("input", (e) => {
    //     const query = e.target.value.toLowerCase();
    //     if(query.trim()){
    //         const debounceSearch = debounce(searchData, 500); // NEW each time!
    //         debounceSearch(query); // Each keystroke creates a fresh debouncer
    //     }
    // });
    // Problem: Each keystroke creates a NEW debounced function with its OWN timer variable. They can't cancel each other because they're independent!

    // Think of it like having 5 different stopwatches instead of 1 stopwatch that you reset. Each keystroke starts its own 500ms timer, and they all will fire eventually.

    // The "Aha!" Moment
    // The gap exists because:

    // The debounced function must be the SAME instance each time to properly cancel and restart the timer

    // Creating it once ensures it's the same function with access to the same timer variable

    // The event listener just calls that same function repeatedly

    // It's like having a single "reset button" vs having multiple different reset buttons. You want one button that resets the same timer, not many buttons that start different timers!

    // Does this clarify the separation? The key insight is that debounce runs ONCE to create a function, and that created function runs MANY times when events occur.

    // which data is the ...args getting with rest operator?
    // hoe the query and args are connected?
    // Perfect question! This is the most confusing part of debounce. Let me trace exactly where ...args gets its data and how query connects to args.
    // The Short Answer
    // ...args gets the arguments passed to the debounced function. When you call debounceSearch(query), that query becomes the first item in the args array.

    // The Detailed Flow - Following the Data
    // Let me trace the journey of the query value step by step:

    // javascript
    // // STEP 1: User types "apple" in the input box
    // // STEP 2: Event listener captures it
    // searchInputElm.addEventListener("input", (e) => {
    //     const query = e.target.value.toLowerCase();  // query = "apple"
        
    //     // STEP 3: Call debounceSearch and PASS query as argument
    //     debounceSearch(query);  // ← "apple" is passed here
    // });

    // // STEP 4: debounceSearch is actually this function (created by debounce)
    // const debounceSearch = function(...args) {  
    //     // When called with debounceSearch("apple"):
    //     // ...args captures ALL arguments into an array
    //     // args = ["apple"]  ← the query is now inside this array!
        
    //     console.log(args);  // ["apple"]
    //     console.log(args[0]); // "apple"
        
    //     clearTimeout(timer);
    //     timer = setTimeout(() => {
    //         // STEP 5: Forward the args array to the original function
    //         fn.apply(this, args);  // args is still ["apple"]
    //     }, delay);
    // };

    // // STEP 6: searchData receives the query
    // function searchData(query) {  // query = "apple" (first element of args)
    //     console.log("Searching for:", query);
    // }
    // Visual Data Flow
    // text
    // User types "apple"
    //         ↓
    // event listener: query = "apple"
    //         ↓
    // debounceSearch("apple")  ← "apple" is passed as argument
    //         ↓
    // debounceSearch function: ...args captures "apple"
    //         ↓
    // args = ["apple"]  ← query is now inside array
    //         ↓
    // setTimeout runs: fn.apply(this, ["apple"])
    //         ↓
    // searchData("apple")  ← "apple" extracted from array
    //         ↓
    // Search executes for "apple"
    // The Magic of Rest Operator (...)
    // What the rest operator does:
    // javascript
    // // Without rest operator
    // function example(first, second) {
    //     console.log(first, second);
    // }
    // example("apple", "banana");  // "apple" "banana"

    // // With rest operator
    // function example(...args) {
    //     console.log(args);  // ["apple", "banana"]
    //     console.log(args[0]);  // "apple"
    //     console.log(args[1]);  // "banana"
    // }
    // example("apple", "banana");
    // In our debounce function:
    // javascript
    // function debounce(fn, delay) {
    //     let timer;
    //     return function(...args) {  // ← COLLECTS all arguments into array
    //         clearTimeout(timer);
    //         timer = setTimeout(() => {
    //             fn.apply(this, args);  // ← PASSES the array to apply()
    //         }, delay);
    //     };
    // }
    // Multiple Arguments Example
    // What if you passed multiple arguments? The rest operator collects them all:

    // javascript
    // // If we called debounceSearch with multiple arguments
    // debounceSearch("apple", "banana", "cherry");

    // // Inside the debounced function:
    // function(...args) {
    //     console.log(args);  // ["apple", "banana", "cherry"]
    //     console.log(args[0]);  // "apple"
    //     console.log(args[1]);  // "banana"
    //     console.log(args[2]);  // "cherry"
    // }
    // Why Use Rest Operator Instead of Direct Parameter?
    // You might ask: "Why not just do this?"

    // javascript
    // // Alternative approach (works but less flexible)
    // function debounce(fn, delay) {
    //     let timer;
    //     return function(query) {  // ← Direct parameter
    //         clearTimeout(timer);
    //         timer = setTimeout(() => {
    //             fn(query);  // ← Direct call
    //         }, delay);
    //     };
    // }
    // Answer: The rest operator is more flexible and generic. It allows the debounced function to work with ANY function that takes ANY number of arguments.

    // Example of flexibility:
    // javascript
    // // searchData takes 1 argument
    // debounce(searchData, 500);  // Works with 1 argument

    // // What if you had a function that takes 3 arguments?
    // function advancedSearch(query, category, limit) {
    //     console.log(`Searching ${query} in ${category} with limit ${limit}`);
    // }

    // const debouncedAdvancedSearch = debounce(advancedSearch, 500);
    // debouncedAdvancedSearch("apple", "fruits", 20);  // Passes 3 arguments!

    // // The rest operator captures all 3: args = ["apple", "fruits", 20]
    // // apply() spreads them to advancedSearch: advancedSearch("apple", "fruits", 20)
    // The Connection: How apply() Bridges the Gap
    // The apply() method is the bridge between args array and the original function:

    // javascript
    // // Without apply (wouldn't work)
    // function debounce(fn, delay) {
    //     return function(...args) {
    //         setTimeout(() => {
    //             fn(args);  // WRONG! Passes array, not individual arguments
    //         }, delay);
    //     };
    // }

    // // With apply (correct)
    // function debounce(fn, delay) {
    //     return function(...args) {
    //         setTimeout(() => {
    //             fn.apply(this, args);  // CORRECT! Spreads array into arguments
    //         }, delay);
    //     };
    // }
    // What apply() does:
    // javascript
    // function greet(greeting, name) {
    //     console.log(greeting + ", " + name);
    // }

    // // Normal call
    // greet("Hello", "John");

    // // Using apply with array
    // greet.apply(null, ["Hello", "John"]);  // Same result!

    // // The array ["Hello", "John"] is "spread" into two arguments
    // Complete Trace with Console Logs
    // Let me add console logs to show exactly what's happening:

    // javascript
    // function debounce(fn, delay) {
    //     let timer;
    //     return function(...args) {
    //         console.log("1. Debounced function received args:", args);
    //         console.log("2. Args array contains:", args);
    //         console.log("3. First argument is:", args[0]);
            
    //         clearTimeout(timer);
    //         timer = setTimeout(() => {
    //             console.log("4. Timer expired, calling fn with:", args);
    //             fn.apply(this, args);
    //         }, delay);
    //     };
    // }

    // function searchData(query) {
    //     console.log("5. searchData received query:", query);
    //     console.log("6. Searching for:", query);
    // }

    // const debounceSearch = debounce(searchData, 500);

    // // User types "apple"
    // debounceSearch("apple");

    // // Console output:
    // // 1. Debounced function received args: ["apple"]
    // // 2. Args array contains: ["apple"]
    // // 3. First argument is: apple
    // // (500ms passes)
    // // 4. Timer expired, calling fn with: ["apple"]
    // // 5. searchData received query: apple
    // // 6. Searching for: apple
    // Real Analogy - Package Delivery
    // Think of it like a package delivery system:

    // text
    // You (caller) → Package (query) → Post Office (debounce) → Recipient (searchData)

    // 1. You give package to post office: debounceSearch("apple")
    //    "apple" is the package

    // 2. Post office puts package in a box: args = ["apple"]
    //    The rest operator creates the box

    // 3. Post office waits 500ms (delay)

    // 4. Post office opens box and gives package to recipient: fn.apply(this, ["apple"])
    //    apply() takes package OUT of box

    // 5. Recipient gets package: searchData("apple")
    //    searchData receives the actual value
    // Common Confusion Point
    // The confusion often comes from seeing ...args in the parameter list but then seeing args used later:

    // javascript
    // return function(...args) {  // ← ...args COLLECTS arguments
    //     // ...
    //     fn.apply(this, args);   // ← args is the ARRAY (without ...)
    // }
    // Remember:

    // ...args in parameters = "collect all arguments into an array called args"

    // args in the function body = "the array we collected"

    // ...args in other contexts = "spread the array into individual items"

    // Summary Table
    // Step	Code	What happens	Value
    // 1	debounceSearch(query)	Call with argument	query = "apple"
    // 2	function(...args)	Rest operator collects	args = ["apple"]
    // 3	args[0]	Access first element	"apple"
    // 4	fn.apply(this, args)	Apply spreads array	fn("apple")
    // 5	searchData(query)	Receives argument	query = "apple"
    // The Direct Connection
    // How query and args are connected:

    // javascript
    // // When you write:
    // debounceSearch(query);

    // // The rest operator does:
    // // query → becomes first element in args array

    // // When you have multiple arguments:
    // debounceSearch(query, category, limit);
    // // query → args[0]
    // // category → args[1]  
    // // limit → args[2]
    // // args = [query, category, limit]
    // The ...args is capturing whatever you pass to debounceSearch and storing it in an array. The query you pass becomes args[0] inside the debounced function!

    // Does this make the connection clear? The rest operator is just a way to "catch" all arguments into an array, and apply() is how we "uncatch" them back into individual arguments for the original function.

    // what happens if someone type upto app and waits for a second what will be value of the args?
    // Excellent question! This tests understanding of how debounce works with timing.
    // The Scenario: Typing "app" with 1-second pauses
    // Let me trace what happens step by step when someone types "a" → waits 1 second → types "p" → waits 1 second → types "p" → waits 1 second.

    // Complete Timeline with Args Values
    // javascript
    // // Initial state
    // timer = null
    // debounceSearch = function(...args) { ... }

    // // ========== TIME 0s: User types "a" ==========
    // debounceSearch("a")
    // // Inside debounced function:
    // // args = ["a"]
    // // clearTimeout(timer)  // timer is null, nothing to clear
    // // timer = setTimeout(() => { searchData.apply(this, ["a"]) }, 500)
    // // Timer 1 starts (will fire at 0.5s)

    // // WAIT 1 SECOND (but timer would fire at 0.5s!)
    // // At 0.5s: Timer 1 EXPIRES and would call searchData("a")
    // // BUT wait... let me correct this

    // // Actually, if user waits 1 second, that's LONGER than 500ms delay
    // // So searchData WILL execute after 0.5 seconds
    // Correct Scenario (More Realistic)
    // Let me create a realistic scenario with proper timing:

    // javascript
    // // ========== SCENARIO 1: Typing "a" then stopping ==========
    // // 0.000s: User types "a"
    // debounceSearch("a")  // args = ["a"], starts 500ms timer

    // // 0.500s: Timer expires
    // // searchData("a") executes  ← Search happens for "a"

    // // Result: args was ["a"] and it executed search for "a"

    // // ========== SCENARIO 2: Typing "ap" quickly, then waiting ==========
    // // 0.000s: User types "a"
    // debounceSearch("a")  // args = ["a"], starts Timer A (500ms)

    // // 0.100s: User types "p" (before Timer A expires)
    // debounceSearch("ap") // args = ["ap"]
    // // 1. clearTimeout(Timer A)  ← Cancels the "a" search
    // // 2. starts Timer B (500ms)

    // // 0.600s: Timer B expires (500ms after last keystroke)
    // // searchData("ap") executes  ← Search happens for "ap"

    // // Result: Only "ap" was searched. "a" was cancelled.
    // Your Specific Question: Typing "app" with 1-second waits
    // If user waits 1 second between each letter (which is longer than 500ms delay):

    // javascript
    // // ========== STEP 1: Type "a", wait 1 second ==========
    // // 0.0s: Type "a"
    // debounceSearch("a")  
    // // args = ["a"]
    // // Starts 500ms timer

    // // 0.5s: Timer expires (because 500ms passed)
    // // searchData("a") executes  ← Search runs for "a"
    // // Console: "Searching for: a"

    // // 1.0s: User is still waiting (nothing happens, search already ran)

    // // ========== STEP 2: Type "ap", wait 1 second ==========
    // // 1.0s: Type "p" (now query is "ap")
    // debounceSearch("ap")
    // // args = ["ap"]  ← NEW args!
    // // Starts NEW 500ms timer

    // // 1.5s: Timer expires
    // // searchData("ap") executes  ← Search runs for "ap"
    // // Console: "Searching for: ap"

    // // ========== STEP 3: Type "app", wait 1 second ==========
    // // 2.0s: Type "p" (now query is "app")
    // debounceSearch("app")
    // // args = ["app"]  ← NEW args!
    // // Starts NEW 500ms timer

    // // 2.5s: Timer expires
    // // searchData("app") executes  ← Search runs for "app"
    // // Console: "Searching for: app"
    // The Key Insight
    // With 1-second waits (longer than 500ms):

    // Each letter triggers a search

    // args takes the CURRENT query value each time

    // Search runs 3 times (for "a", then "ap", then "app")

    // With fast typing (less than 500ms between letters):

    // Only the FINAL query triggers a search

    // args is always the most recent query

    // Search runs once (for "app")

    // Visual Comparison
    // Fast Typing (<500ms between keys):
    // text
    // Time: 0ms    100ms   200ms   700ms
    //       a  →   p  →   p  →   [wait]
    //       ↓       ↓       ↓
    //     args["a"] args["ap"] args["app"]
    //     Timer    Timer    Timer
    //     reset    reset    reset
    //                       ↓
    //                   Only this one executes at 700ms
    //                   searchData("app")
    // Slow Typing (1 second between keys):
    // text
    // Time: 0ms    1000ms  2000ms  3000ms
    //       a  →   p  →   p  →   [wait]
    //       ↓       ↓       ↓
    //     args["a"] args["ap"] args["app"]
    //     Timer    Timer    Timer
    //     ↓        ↓        ↓
    //   500ms    500ms    500ms
    //     ↓        ↓        ↓
    //   search   search   search
    //   ("a")    ("ap")   ("app")
    // Code to Test This Yourself
    // javascript
    // // Add this to see exactly what's happening
    // function debounce(fn, delay) {
    //     let timer;
    //     let callCount = 0;
        
    //     return function(...args) {
    //         callCount++;
    //         console.log(`🟡 Debounce call #${callCount} at ${performance.now().toFixed(0)}ms`);
    //         console.log(`   args received:`, args);
    //         console.log(`   query value: ${args[0]}`);
            
    //         clearTimeout(timer);
    //         timer = setTimeout(() => {
    //             console.log(`🔴 Executing search at ${performance.now().toFixed(0)}ms`);
    //             console.log(`   with args:`, args);
    //             fn.apply(this, args);
    //         }, delay);
    //     };
    // }

    // // Test with slow typing simulation
    // console.log("=== SLOW TYPING (1 second between keys) ===");
    // setTimeout(() => debounceSearch("a"), 0);     // 0s
    // setTimeout(() => debounceSearch("ap"), 1000); // 1s
    // setTimeout(() => debounceSearch("app"), 2000); // 2s

    // // Expected output:
    // // 🟡 Debounce call #1 at 0ms, args: ["a"]
    // // 🔴 Executing search at 500ms, with args: ["a"]
    // // 🟡 Debounce call #2 at 1000ms, args: ["ap"]
    // // 🔴 Executing search at 1500ms, with args: ["ap"]
    // // 🟡 Debounce call #3 at 2000ms, args: ["app"]
    // // 🔴 Executing search at 2500ms, with args: ["app"]
    // Direct Answer to Your Question
    // What is the value of args when someone types "app" with 1-second waits?

    // At 0s (after typing "a"): args = ["a"] → executes search at 0.5s

    // At 1s (after typing "p"): args = ["ap"] → executes search at 1.5s

    // At 2s (after typing "p"): args = ["app"] → executes search at 2.5s

    // Each keystroke creates a NEW debounce call with NEW args value. Because the wait (1s) is longer than the delay (500ms), each search actually executes before the next keystroke.

    // What If They Type "app" Within 500ms?
    // If they type "a", "p", "p" all within 500ms total:

    // javascript
    // // 0ms: Type "a" → args = ["a"], starts 500ms timer
    // // 150ms: Type "p" → args = ["ap"], clears timer, starts new 500ms timer
    // // 300ms: Type "p" → args = ["app"], clears timer, starts new 500ms timer
    // // 800ms: Timer expires → searchData("app") executes ONCE

    // // Final args that gets used: ["app"]
    // // The previous args ["a"] and ["ap"] were cancelled and never executed
    // Summary Table
    // Typing Speed	args values received	Which searches execute
    // Fast (<500ms between keys)	["a"], then ["ap"], then ["app"]	Only ["app"]
    // Slow (1 second between keys)	["a"], then ["ap"], then ["app"]	All three: ["a"], ["ap"], ["app"]
    // Mixed (fast then pause)	Depends on timing	Only the last one before each pause
    // The key principle: args always contains the current query at the moment of the keystroke, but whether that search actually runs depends on whether another keystroke happens within the next 500ms!

