import user1 from "./dynamic-export.js"
import user2 from "./dynamic-export2.js"


// ================================ ??????????????? check both in one condition
async function adminImport1(){
  if(user1().role == "Admin" ){
  console.log(user1().name, "is Admin");
  const file1 = await import("./dynamic-export-3-admin.js");
}else{
    console.log(user1().name, "is user");
  }
}


async function adminImport2(){
  if(user2().role == "Admin" ){

  console.log(user2().name, "is Admin"); 
     const file1 = await import("./dynamic-export-3-admin.js");
}else{
    console.log(user2().name, "is user");
  }
}

adminImport1();
adminImport2()