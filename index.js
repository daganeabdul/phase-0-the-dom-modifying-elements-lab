// Write your code here!
/*
const element = document.createElement("div");

document.body.append(element);

console.log(element)

const ul = document.createElement("ul");

for (let i = 0; i < 3; i++) {
    const li = document.createElement("li");
    li.textContent = (i + 1).toString();
    ul.append(li);
  }
  
  
  element.append(ul);
  console.log(element)
  

const main = document.getElementById("main");
main.innerHTML ="<h1>Poodles!</h1><h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3><p><em>By: Byron Q. Poodle, Esq., BA.</em></p>";
console.log(main)
*/


document.getElementById('main').remove();


const newHeader = document.createElement('h1');


newHeader.id = 'victory';


newHeader.textContent = 'Abdirahman is the champion'; 


document.body.append(newHeader);


  


