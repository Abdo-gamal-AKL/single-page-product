let proCount = document.querySelector(".before");
let cartIocn = document.querySelector(".cart-img");
let cart = document.querySelector(".drop-down");

cartIocn.addEventListener("click", () => {
  cart.classList.toggle("open");
});

function productsCountFunciton() {
  let cartproducts = document.querySelectorAll(".product");

  proCount.innerText = cartproducts.length;
}
productsCountFunciton();

function chekerFunction() {
  if (document.querySelectorAll(".product").length === 0) {
    document.querySelector(".empty-cart").classList.add("active");
  } else {
    document.querySelector(".empty-cart").classList.remove("active");
  }
}
chekerFunction();

let bigImg = document.querySelector(".big-img");
let pagenation = document.querySelectorAll(".pagenation li");

function butActiveFunction(ele) {
  for (let i = 0; i < pagenation.length; i++) {
    pagenation[i].classList.remove("active");
    ele.classList.add("active");
  }
}
pagenation.forEach((ele) => {
  ele.addEventListener("click", () => {
    butActiveFunction(ele);
    changeImage(ele.dataset.img);
  });
});

function changeImage(img) {
  bigImg.src = img;
}

function addToCatrtFunction(parentElement) {
  cart.innerHTML += `<div class="product">
    <div class="content">
        <img
        class="product-img"
        src="${parentElement.querySelector(".big-img").src}"
        alt=""
        />
        <p>
        ${
          parentElement.querySelector(".description h1").innerText
        }<span>$375</span>
        </p>
        <img
        class="delete-icon"
        src="images/icon-delete.svg"
        alt=""
        />
    </div>
    <div class="check-out">
        <div class="btn">Checkout</div>
    </div>
</div>`;
}

let addToCartBtn = document.querySelector(".add-btn");

function deleteFuncion() {
  let deleteIcon = document.querySelectorAll(".delete-icon");
  deleteIcon.forEach((icon) => {
    icon.addEventListener("click", (e) => {
      e.target.parentElement.parentElement.remove();

      productsCountFunciton();

      chekerFunction();
    });
  });
}

function repeatProduct() {
  let plus = document.querySelector(".plus");
  let minus = document.querySelector(".minus");
  let count = document.querySelector(".count-number");
  plus.addEventListener("click", () => {
    if (count.innerText < 10) {
      count.innerText++;
    } else {
      count.innerText;
    }
  });
  minus.addEventListener("click", () => {
    if (count.innerText > 0) {
      count.innerText--;
    } else {
      count.innerText;
    }
  });
}

repeatProduct();

function addTocartRepeated() {
  addToCartBtn.addEventListener("click", () => {
    for (
      let i = 0;
      i < document.querySelector(".count-number").innerHTML;
      i++
    ) {
      addToCatrtFunction(
        addToCartBtn.parentElement.parentElement.parentElement
      );
      productsCountFunciton();
      chekerFunction();
      deleteFuncion();
    }
    document.querySelector(".count-number").innerHTML = "0";
  });
}
addTocartRepeated();

let rightArrow = document.querySelector(".right");
let leftArrow = document.querySelector(".left");
let sliderEle = document.querySelector(".slider");
let sliderImg = document.querySelector(".slider-img");

function slider() {
  rightArrow.addEventListener("click", () => {
    if (
      parseInt(sliderEle.style.left) <=
      -((sliderEle.querySelectorAll("img").length - 1) * sliderImg.offsetWidth)
    ) {
      return false;
    } else {
      sliderEle.style.left = `${
        sliderEle.offsetLeft - sliderImg.offsetWidth
      }px`;
    }
  });
  leftArrow.addEventListener("click", (e) => {
    if (parseInt(sliderEle.style.left) >= 0) {
      e.preventDefault();
    } else {
      sliderEle.style.left = `${
        sliderEle.offsetLeft + sliderImg.offsetWidth
      }px`;
    }
  });
}
slider();
