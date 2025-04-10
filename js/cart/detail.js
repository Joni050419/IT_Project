let detail = document.getElementById("details");

let basket1 = JSON.parse(localStorage.getItem("data")) || [];


let details = () => {
  return (detail.innerHTML = detailItemsData
    .map((x) => {
      let { id, name, price, desc, img } = x;
      return `
    <div id=product-id-${id} class="item">
        <img width="219" src=${img} alt="">
        <div class="details">
          <h3>${name}</h3>
          <p>${desc}</p>
          <div class="col-2" id=product-id-jfhgbvnscs >
            <p><a href="../../index.html">Home</a> / T-shirt</p>
            <h1>${name}</h1>
            <h4>$50.00</h4>
            <select name="" id="ddlViewBy">
                <option value="" disabled selected>Select Count</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            
             
            <br>
            <!---<input type="number" value="1" width="10px"> ---->
            <a href="" class="buy" onclick="countsel()"><span>Add To Cart</span></a>
            <h3>Product Details <i class="fa fa-indent"></i></h3>
            <br>
            <p>[Description]</p>

            
          <div class="price-quantity">
            <div class="">
                <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-o"></i>
                </div>
                <p>$ ${price} </p>
            </div>
            <div class="buttons">
            <i onclick="decrement(${id})" class="bi bi-dash-lg">-</i>
              <div id=${id} class="quantity">
              ${search.item === undefined ? 0 : search.item}
              </div>
              
              <b onclick="increment(${id})" class="bi bi-plus-lg">+</b>
            </div>
          </div>
        </div>
      </div>
    `;
    })
    .join(""));
};

details();

let increment1 = (id) => {
  let selectedItem = id;
  let search = basket1.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }

  // console.log(basket);
  update(selectedItem.id);
  localStorage.setItem("data", JSON.stringify(basket));
};

let countmenu = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += value;
  }

  // console.log(basket);
  update(selectedItem.id);
  localStorage.setItem("data", JSON.stringify(basket));
};

let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  update(selectedItem.id);
  basket = basket.filter((x) => x.item !== 0);
  // console.log(basket);
  localStorage.setItem("data", JSON.stringify(basket));
};
let update = (id) => {
  let search = basket.find((x) => x.id === id);
  // console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
  calculation();
};

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();
