var checklist = document.getElementById("checklist");

var items = checklist.querySelectorAll("li");
var inputs = checklist.querySelectorAll("input");
var buttons = main.querySelectorAll("button");


for (var i=0; i < items.length; i++) {
  items[i].addEventListener("click", editItem);
  inputs[i].addEventListener("blur", updateItem);
  inputs[i].addEventListener("keypress", itemKeypress);
}

function addListItem(event) {
  var ul = document.getElementById("checklist");
  var li = document.createElement("li");
  var span = document.createElement("span");
  var input = document.createElement("input")
  li.appendChild(document.createTextNode("New Item"));
  ul.appendChild(li);
}
//This function allows the creation of a new li element onclick of the "Add Item" button


function editItem() {
 this.className = "edit";
 var input = this.querySelector("input");
 input.focus();
 input.setSelectionRange(0, input.value.length);
}
//This function allows you to click an item on the list and
//edit its text

function updateItem() {
  this.previousElementSibling.innerHTML = this.value;
  this.parentNode.className = "";
}
//This function keeps the updated text

function itemKeypress(event) {
  if (event.which === 13) {
    updateItem.call(this);
  }
}
//This function allows you to use the "Enter" key to submit changes
