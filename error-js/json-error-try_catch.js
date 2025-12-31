function parseJSONSafely(str) {
  try {
    return JSON.parse(str);
  } catch (err) {
    console.error("Invalid JSON:", err.message); 
    return null;
  }
}

const userData = parseJSONSafely('{"name": "tapaScript"}'); // Parsed
console.log(userData); // { name: 'tapaScript' }

const badData = parseJSONSafely('name: tapaScript');         // Handled gracefully 

// Invalid JSON: Unexpected token 'a', "name: tapaScript" is not valid JSON
// here the error message is from JS

// JSON format: {"key-name" : "value"} or {"key-name" : number-value}
