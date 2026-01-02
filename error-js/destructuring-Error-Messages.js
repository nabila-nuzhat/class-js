// destructuring error name & message Error Object ===========================

try {
  JSON.parse("{ invalid json }");
} catch ({name, message}) { // name & message are: name, message of "error"--> error.message,error.name 
  console.log("Name:", name);       // Name: SyntaxError, // .bcz it should be '{"invalid": "json"}'
  console.log("Message:", message); // Message: Expected property name or '}' in JSON at position 2 (line 1 column 3)
}