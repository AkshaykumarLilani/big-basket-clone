function display() {
  let items = document.querySelector("#products-detail");
  let data = JSON.parse(localStorage.getItem("data")) || [];

  let show = "";
  data.forEach((element) => {
    show += `
    <div id="product-total">
    <ul>
      <li>Fresho</li>
      <li>${element.name}</li>
    </ul>
    <div>
      <div class="item-detail-value">
        <span><span> Rs. ${parseFloat(element.price).toFixed(
          2
        )}</span><span></span></span>
        <div id='Quan-input'>
        <button class='Quan-btn subtract'>-</button>
        <input type="text" id="fQuan" value=${element.quantity} placeholder=${
      element.quantity
    } name="fname">
        <button class='Quan-btn add'>+</button>
        </div>
        <div>Rs. ${element.quantity * element.price}</div>
        <div>Rs. ${parseFloat(
          (element.beforePrice - element.price) * element.quantity
        ).toFixed(2)}</div>
      </div>
    </div>
  </div>
  <hr />
  
    `;
  });

  //Total Heading
  var heading = document.querySelector("#total-heading");
  let headingData = `
  <p id="basket-heading">Your Basket( ${total[1]} Items)</p>
  `;

  heading.innerHTML = headingData;

  var totalHeading = document.querySelector("#description-total");
  let totalHeadinginnerHtml = `
  <span>Fruits & Vegetables</span>
        <p>${total[1]}-Items</p>
        <p>Rs. ${parseFloat(total[0]).toFixed(2)}</p>
  `;

  totalHeading.innerHTML = totalHeadinginnerHtml;

  items.innerHTML = show;
  var quantityInput = document.querySelectorAll("#fQuan");
  console.log(quantityInput);

  quantityInput.forEach((element, index) => {
    document
      .querySelectorAll(".subtract")
      [index].addEventListener("click", function () {
        if (data[index].quantity > 0) {
          data[index].quantity -= 1;
          element.value = data[index].quantity;
          let totalNum = JSON.parse(localStorage.getItem("total")) || [];
          let quantityTotal = totalNum[1];
          // console.log(total);
          quantityTotal -= 1;
          console.log(quantityTotal);
          localStorage.setItem("total", JSON.stringify(totalNum));
          updateLocalStorage();
          display();
        }
      });

    document
      .querySelectorAll(".add")
      [index].addEventListener("click", function () {
        data[index].quantity += 1;
        element.value = data[index].quantity;
        updateLocalStorage();
        display();
      });
  });

  function updateLocalStorage() {
    localStorage.setItem("data", JSON.stringify(data));
  }
}

var empty = document.querySelector("#Empty-Basket-Btn");

empty.addEventListener("click", function () {
  let items = document.querySelector("#products-detail");
  if (empty.innerText === "Empty Basket") {
    items.innerHTML = "";
    items.textContent = "Your Cart is Empty !!!";
    empty.textContent = "Shop Now";
    localStorage.removeItem('data');
    localStorage.removeItem('total');
  } else {
    window.location.href = "./index.html";
  }
});

//checkOut Template;

var checkOut = document.querySelector("#checkout-template");
let total = JSON.parse(localStorage.getItem("total")) || [];
let CheckData = `
<div>
<div id="subtotal">
  <p>Subtotal</p>
  <p>Rs. ${parseFloat(total[0]).toFixed(2)}</p>
</div>
<div id="delivery-charge">
  <p>Delivery Charges</p>
  <p>**</p>
</div>

<hr />
</div>
<div id="total-charge">
<h1>Total</h1>
<h1>Rs. ${parseFloat(total[0]).toFixed(2)}</h1>
</div>
<p>*For this order: Accepted food coupon is Rs. ${parseFloat(total[0]).toFixed(
  2
)}</p>
<hr />
<div id="btn-cont">
<button id="checkout-btn">Checkout</button>
</div>
<p>** Actual delivery charges computed at checkout time</p>
</div>
`;
checkOut.innerHTML = CheckData;

//CheckOut Button;
var checkoutBtn = document.querySelector("#checkout-btn");
checkoutBtn.addEventListener("click", function () {
  window.location.href = "./payment.html";
});

display();
