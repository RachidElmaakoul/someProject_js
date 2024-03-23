

let myLi = document.querySelectorAll("ul li");
let exp = document.querySelector(".expriment");

if (window.localStorage.getItem("color")) {
    // if there is color in the local storage 
    // add coloe to div 
    exp.style.backgroundColor = window.localStorage.getItem("color");
    // after remove active class all myLi 
    myLi.forEach((li) => {
            li.classList.remove("active");
    });
    // then add active class to current color 
    document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active")



}






// first thing access to element li by foreach
myLi.forEach((li) => {
    // second thing add event on every li it is click then add function 
    li.addEventListener("click", function (e) {
    //    access to li and once click it makes class removed 
        myLi.forEach((li) => {
            li.classList.remove("active");
        });
        // here we access on add event and we made just once click get to class on element that we clicked
        e.currentTarget.classList.add("active");
    //  add current color to local storage
        window.localStorage.setItem("color", e.currentTarget.dataset.color);
       // make backgound same the color li 
        exp.style.backgroundColor = e.currentTarget.dataset.color;
    });
});



