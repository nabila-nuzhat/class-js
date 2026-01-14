// toggle class :  element.classList.toggle("class name") 
    // // toggle example =  // // <button id="btn">Toggle</button>
                        // // <div id="box"></div>
                        // // const btn = document.getElementById("btn");
                        // // const box = document.getElementById("box");

                        // // btn.addEventListener("click", () => {
                        // // box.classList.toggle("highlight");
                        // // });
    // toggle My-example = 
                        // // const greetingInSpainDivElm = document.querySelector("#greetingInSpain");
                       // // const toggleBtnElm = document.querySelector(".toggleBtn");

                      // // function holaOnClick(){
                      // // greetingInSpainDivElm.classList.toggle("hola");
                      // // toggleBtnElm.classList.toggle("toggleBtnStyle"); // correct way
                      // // }

// what is meant by classList.toggle() is binary:?
                    // When we say classList.toggle() is binary, we mean it works with only two possible states.
                    // 🔢 What “binary” means (simple)
                    // Binary = two states only
                    // Like:
                    // ON / OFF

                    // YES / NO

                    // TRUE / FALSE

                    // 1 / 0

                    // 🔄 How classList.toggle() behaves
                    // element.classList.toggle("active");


                    // Internally, it does only this:

                    // Current state	After toggle()
                    // class not present	class is added
                    // class present	class is removed

                    // That’s it.
                    // No third option. No memory of past states.

                    // Still binary:

                    // true → ON

                    // false → OFF

                    // No third state.

                    // 🧠 Key takeaway (remember this)

                    // classList.toggle() is binary because it only knows
                    // “present” or “not present” — nothing else.

                    // If you want:

                    // 2 states → toggle() ✅

                    // 3+ states → JS logic / state machine ❗

// MULTIPLE toggle() hacks: XX NOT Recommended
// less professional way of trying to do multiple style changes using toggle() repeatedly, 
// instead of using proper state management or CSS.

// What “multiple toggle() hacks” means

// Imagine you want to switch a button through 3 visual styles using only toggle():

// btn.classList.toggle("style1");
// btn.classList.toggle("style2");
// btn.classList.toggle("style3");

// Why this is a hack

// classList.toggle() is binary – each call only adds/removes a class.

// Calling toggle() multiple times to “fake” 3 states is unpredictable:

// Which class is on depends on order of calls and previous state

// Hard to debug

// Hard to maintain

// You are misusing toggle to simulate a “cycle” of multiple states — it’s not designed for that.

// Example problem
// btn.classList.toggle("red");
// btn.classList.toggle("blue");


// Click 1 → red added, blue added ✅

// Click 2 → red removed, blue removed ✅

// Click 3 → red added, blue added ✅

// …wait, this is confusing! Which color shows? depends on CSS specificity

// Chaos if the logic grows