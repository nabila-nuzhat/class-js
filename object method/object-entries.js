// Object.entries() method ------
function Tenants(rent, name, age, members){
    this.rent = rent;
    this.name = name;
    this.age = age;
    this.familyMembers = members;
}

const flatA = new Tenants(10000, "ab", 35, 4); // desired object-name = "new" keyword is used followed by calling the "Constructor Function" 
const flatB = new Tenants(12000, "dc", 45, 3);

console.log(flatA);
console.log(flatB);
 
// Object.entries(object-name)
console.log("Entries Array:\n",Object.entries(flatA));
/** O/P
 * Entries Array:
 [
  [ 'rent', 10000 ],
  [ 'name', 'ab' ],
  [ 'age', 35 ],
  [ 'familyMembers', 4 ]
]
  
 */
