/*

Write a function named `createInputElm` that accepts two parameter (label and `type`) type
default value to be "text" and return the input element inside label. (create it using `createElement`)

*/

function createInputElm(label, type = "text"){
  let newLabel = document.createElement('label');
  let newInput = document.createElement('input');
  newInput.type = type;
  newLabel.append(label);
  newLabel.append(newInput);
  return newLabel;
}

// Your code goes here

// TEST
createInputElm('Your name'); //<label>Your name: <input type="text"></label>
createInputElm('Your age', 'number'); //<label>Your age: <input type="number"></label>

// 2. Do the same thing as above using string literal like `<h1>Hello</h1>`

function createInputElm1(label, type = "text"){
  return `<label>${label}: <input type = "${type}"></label>`;
};

// Your code goes here

// TEST
//createInputElm('Your name'); //<label>Your name: <input type="text"></label>
//createInputElm('Your age', 'number'); //<label>Your age: <input type="number"></label>

// 3. Create a function named `createList` that accept and array of data like ['Mango', 'Apple', 'Banana'] and returns
// the html for the link like <ul> <li>Mango</li>  <li>Apple</li>  <li>Banana</li> </ul>
// Your code goes here

function createList(arr){
  let ul = document.createElement('ul');
  let li;
  for(fruit of arr){
    li = document.createElement('li');
    li.append(fruit);
    ul.append(li);
  }
  return ul;
};

// TEST
//createList(['ALABAMA', 'ALASKA', 'HAWAII', 'KENTUCKY']);
//createList(['Afghanistan', 'Antarctica', 'Congo', 'Estonia']);

// 4. Create a function named `createTodoList` that accept and array of data like [{name: "Learn DOM", isDone: false}, {name: "Learn JS", isDone: true}] and returns
// the html for single todo will look like given below
/* 
<ul>
  <li>
    <p>Learn DOM</p>
    <input type="checkbox" checked name="" id="">
    <span>X</span>
  </li>
</ul>
*/

// Your code goes here

function createTodoList(arrOfObj){
  let newUl = document.createElement('ul');
  for(obj of arrOfObj){
    let p = document.createElement('p');
    let input = document.createElement('input');
    input.setAttribute("type","checkbox");
    input.setAttribute("checked","");
    input.setAttribute("name"," ");
    input.setAttribute("id"," ");
    let span = document.createElement('span');
    let newLi = document.createElement('li');
    p.innerText = obj.name;
    if(obj.isDone == false){
      span.innerText = 'X';
    }else{
      span.innerText = 'Y';
    }
    newLi.append(p,input,span);
    newUl.append(newLi);
  }
  return newUl;
};

// TEST
/*createTodoList([
  { name: 'Learn DOM', isDone: false },
  { name: 'Learn JS', isDone: true },
]);
createTodoList([
  { name: 'Learn DOM', isDone: false },
  { name: 'Learn React', isDone: true },
  { name: 'Learn JS', isDone: true },
]);*/
