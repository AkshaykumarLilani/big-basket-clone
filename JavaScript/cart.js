var container = document.querySelector("#Vegitables");
let data = JSON.parse(localStorage.getItem("data")) ?? [];
let total=JSON.parse(localStorage.getItem('total')) ?? [];
document.querySelector('#totalAmount>span').innerText=total[0];
document.querySelector('#totalQuantity>span').innerText=total[1];

display();

// function deleteCart(index) {
//   data = JSON.parse(localStorage.getItem("data")) ?? [];
//   data.splice(index, 1);
//   localStorage.setItem("data", JSON.stringify(data));
//   display();
// }

function display() {
  data.forEach((element, index) => {
    var cards = document.createElement("div");

    cards.className = "cards"; //Give class to the cards element.

    var off = document.createElement("p");
    off.className = "discount"; //assigining class to discount section.

    var image = document.createElement("img");
    image.src = element.img;
    image.classList = "vegitablesImage";

    var name = document.createElement("p");
    name.className = "VegiName"; //assigning class to name of the vegetable.

    var inputPrice = document.createElement("input");
    inputPrice.placeholder = `1 Kg - Rs ${element.price}.00`;
    inputPrice.className = "selectInput";

    var allDetails = document.createElement("div");
    allDetails.className = "Details"; //Given class to details having deliver , price , quntaty and all.
    var newContainer = document.createElement("div");
    //For price.
    var mrp = document.createElement("span");
    var previousPrice = document.createElement("span");
    previousPrice.className = "prevPrice"; //Class to previous price.
    var currentPrice = document.createElement("span");
    currentPrice.className = "currPrice";

    //Deleviry :-
    var deleviry = document.createElement("div");

    deleviry.className = "delivery";
    var deleviryImg = document.createElement("img");
    //   deleviryImg.style.width='100%';
    deleviryImg.src =
      "https://w7.pngwing.com/pngs/558/519/png-transparent-computer-icons-delivery-symbol-symbol-miscellaneous-angle-text.png";
    var deleviryCont = document.createElement("span");

    name.innerText = element.name;
    //Add and quantity buttons :-
    var quantityContainer = document.createElement("div");
    var quantity = document.createElement("span");

    var Removebtn = document.createElement("button");
    Removebtn.className = "RemoveCart";
    Removebtn.addEventListener("click", function () {
      removeData(element,index);
    });
    // console.log(Removebtn.value);
    // Removebtn.setAttribute('onclick',deleteCart(index));

    // var removeBtn=document.querySelector(".RemoveCart");
    // removeBtn.onclick=deleteCart(index);

    //Assigning the values
    off.innerText = `GET ${element.off} OFF`;
    mrp.innerText = "MRP";
    previousPrice.innerText = `RS ${element.beforePrice}`;
    currentPrice.innerText = `Rs ${element.price}`;
    deleviryCont.innerText = `Standard Delivery : ${element.delivery}`;

    Removebtn.innerText = "Remove 🛒";
    Removebtn.style.cursor = "pointer";

    //append the values to the containers.
    quantityContainer.append(quantity, Removebtn);
    deleviry.append(deleviryImg, deleviryCont);
    newContainer.append(mrp, previousPrice, currentPrice);
    allDetails.append(newContainer, deleviry, quantityContainer);
    cards.append(
      off,
      image,
      name,

      inputPrice,
      // newContainer,
      // deleviry,
      allDetails
      // quantityContainer
    );

    container.appendChild(cards);
    console.log("HELLO");
    
  });
}

function removeData(element,index) {
  data = JSON.parse(localStorage.getItem("data")) ?? [];
  let total=JSON.parse(localStorage.getItem('total')) ?? [];
  let totalAmount=total[0];
  let totalQuantity=total[1];
  let prePrice=element.price;
  console.log(element);
  total[0]=totalAmount-prePrice;
  total[1]=totalQuantity-1;
  localStorage.setItem('total',JSON.stringify(total));
  data.splice(index, 1);
  localStorage.setItem("data", JSON.stringify(data));
  window.location.reload();
//   display();
}


// window.location.reload();