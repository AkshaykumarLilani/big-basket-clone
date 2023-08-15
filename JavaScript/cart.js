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
        <button class='Quan-btn add'>-</button>
        <input type="text" id="fQuan" value=${element.quantity} placeholder=${
      element.quantity
    } name="fname">
        <button class='Quan-btn subtract'>+</button>
        </div>
        <div>Rs. ${(element.quantity)* (element.price)}</div>
        <div>Rs. ${parseFloat((element.beforePrice - element.price)*(element.quantity)).toFixed(
          2
        )}</div>
      </div>
    </div>
  </div>
  <hr />
  
    `;
  });

  items.innerHTML = show;
  var quantityInput = document.querySelectorAll("#fQuan");
  console.log(quantityInput);
  quantityInput.forEach((element, index) => {
    document
      .querySelectorAll(".add")
      [index].addEventListener("click", function () {
        if (data[index].quantity > 0) {
          data[index].quantity -= 1;
          element.value = data[index].quantity;
          updateLocalStorage();
          display();
        }
      });

    document
      .querySelectorAll(".subtract")
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

display();
