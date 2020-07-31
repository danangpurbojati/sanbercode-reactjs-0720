//Soal 1
console.log(" ----- Soal 1 -----");
const newFunction = (firstName, lastName) => ({
      firstName: firstName,
      lastName: lastName,
      fullName: () => {
        console.log(firstName + " " + lastName)
        return 
      }
    })
   
//Driver Code 
newFunction("William", "Imoh").fullName() 





//Soal 2
console.log("\n\n ----- Soal 2 -----");
const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
}

const {firstName,lastName,destination,occupation,spell} = newObject;
// Driver code
console.log(firstName, lastName, destination, occupation, spell);




//Soal 3
console.log("\n\n ----- Soal 3 -----");
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
// const combined = west.concat(east); //ES5
const combined = [...west,...east]; //ES6
//Driver Code
console.log(combined);
