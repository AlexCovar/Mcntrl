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




// var ages = [32, 33, 16, 40];

// function checkAdult(age) {
//     return age >= 18;
// }

// function myFunction() {
//     document.getElementById("demo").innerHTML = ages.filter(checkAdult);
// }