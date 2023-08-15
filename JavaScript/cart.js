let items = document.querySelector("#products-detail");

function display() {
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
        <span><span>${element.price}</span><span>${
      element.beforePrice - element.price
    }</span></span>
        <div>${element.quantity}</div>
        <div>Subtotal</div>
        <div>Savings</div>
      </div>
    </div>
  </div>
  <hr />
  
    `;
  });

  items.innerHTML=show;
}

display()