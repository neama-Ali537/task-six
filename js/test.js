let icon = document.querySelector("#icon");
let body = document.querySelector("body");
let closeBtn = document.querySelector(".clos");

icon.addEventListener("click", function () {
  body.classList.toggle("showCard");
});
closeBtn.addEventListener("click", () => {
  body.classList.toggle("showCard");
});
// ////////////////////////////

let items = document.querySelectorAll(".items");
let buttons = document.querySelectorAll(".add-card");

let sidBar = document.querySelector(".side-bar .add-product");

productDetails = items;
let span = document.querySelector(".span span");
let counter = parseInt(span.textContent);

let addProduct = document.querySelector(".add-product");
items.forEach((item, index) => {
  item.dataset.id = index + 1;
});

buttons.forEach((ele) => {
  ele.addEventListener("click", (event) => {
    let parentItem = event.target.closest(".items");
    counter++;
    span.textContent = counter;
    if (parentItem) {
      buttons = parentItem.dataset.id;
      let imgSrc = parentItem.querySelector("img").src;
      let title = parentItem.querySelector("h3").textContent;
      let price = parentItem.querySelector(".price p").textContent;

 
      addProductToSideBar(imgSrc, title, price );

    }
  });
});

function addProductToSideBar(imgSrc, title, price ) {
  

  let productDiv = document.createElement("div");
  productDiv.classList.add("type");
  
  productDiv.innerHTML = `
    <div class="img">
      <img src="${imgSrc}" alt="${title}" />
    </div>
    <div class="name"><p>${title}</p></div>
    <div class="price"><p>${price}</p></div>
    <div class="quantity">
      <span class="plus"><</span>
      <span>${counter}</span>
      <span class="minus">></span>
    </div>
  `;
  sidBar.appendChild(productDiv)
}
let plus =document.querySelector(".plus");
plus.addEventListener('click' , ()=>{
 price*price
})