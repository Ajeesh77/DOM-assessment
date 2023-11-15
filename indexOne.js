


let searchInput = document.getElementById("searchInput");
let foodList = document.getElementById("foodList");
let searchButton = document.getElementById("searchButton");

// <li>
//    <div>Biriyani</div>
//    <div onclick="deleteOption(event)"><i class="fa-solid fa-xmark"></i></div>
// </li>


searchButton.addEventListener("click", () => {
 
/*input*/        let inputValue = searchInput.value;





    if (inputValue.trim() !== "") {
        
/*ul list*/      let foodList = document.getElementById("foodList");
/*li created*/   let li = document.createElement("li")
let div1 = document.createElement("div")
let div2 = document.createElement("div")

/*assign value to div 1*/
div1.textContent =inputValue  
li.append(div1)
div2.setAttribute("onclick","deleteOption(event)") ; 
div2.innerHTML =`<i class="fa-solid fa-xmark"></i>` ;           
li.append(div2)

foodList.appendChild(li)

console.log(foodList);

        searchInput.value = "";
       
    }

});
console.log( foodList);

function deleteOption(event) {
    let removeYouWant = event.target.parentNode.parentNode;
    removeYouWant.remove()
}

