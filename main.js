// var users = [
//   'Goku',
//   'Garuto',
//   'Gchigo',
//   'Flash',
//   'Batman',
//   'Sherlock Holmes',
//   'Khaleesi',
//   'Steve Fox'
// ];

// ul = document.getElementById("org-list");

// var render_lists = function(lists){
//   var li = "";
//   for(index in lists){
//     li += "<li>" + lists[index] + "</li>";
//   }
//   ul.innerHTML = li;
// }

// render_lists(users);

// // lets filters it
// input = document.getElementById('filterOrgs');

// var filterUsers = function(event){
//   keyword = input.value.toLowerCase();
//   filtered_users = users.filter(function(user){
//         user = user.toLowerCase();
//        return user.indexOf(keyword) > -1; 
//   });
  
//   render_lists(filtered_users);
// }

// input.addEventListener('keyup', filterUsers);

//search bar
function myFunction() {
var input, filter;
input = document.getElementsByClassName('myLinks');
filter = document.getElementById('myInput').value.toUpperCase();
// Loop through all list items, and hide those who don't match the search query
for (let i = 0; i < input.length; i++) {
    var currentElem = input[i];
    var currentElemChild = input[i].children[0]
    if (currentElemChild.innerHTML.toUpperCase().indexOf(filter) > -1) {
        currentElem.style.display = "";
    } else {
        currentElem.style.display = "none";
    }
  }
}
document.getElementById('myInput').addEventListener('keyup', myFunction);



// filter through ages
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1); 
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
// var btnContainer = document.getElementById("myBtnContainer");
// var btns = btnContainer.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }





// var ages = [32, 33, 16, 40];

// function checkAdult(age) {
//     return age >= 18;
// }

// function myFunction() {
//     document.getElementById("demo").innerHTML = ages.filter(checkAdult);
// }