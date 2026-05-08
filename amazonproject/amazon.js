let cartCount = 0;

const cartButtons =
document.querySelectorAll(".cart-btn");

const cartCounter =
document.getElementById("cart-count");

const popup =
document.getElementById("popup");

/* ADD TO CART */

cartButtons.forEach(button => {

  button.addEventListener("click", () => {

    cartCount++;

    cartCounter.innerText = cartCount;

    button.innerHTML = "Added ✓";

    button.style.background = "green";
    button.style.color = "white";

    popup.classList.add("show");

    setTimeout(() => {

      popup.classList.remove("show");

    },2000);

    setTimeout(() => {

      button.innerHTML = "Add to Cart";

      button.style.background = "#ffd814";

      button.style.color = "black";

    },1500);

  });

});

/* SEARCH */

const searchInput =
document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {

  const value =
  searchInput.value.toLowerCase();

  const cards =
  document.querySelectorAll(".product-card");

  cards.forEach(card => {

    const productName =
    card.querySelector("h3")
    .innerText.toLowerCase();

    if(productName.includes(value)){

      card.style.display = "block";

    }
    else{

      card.style.display = "none";

    }

  });

});

/* SHOP BUTTON */

document.getElementById("shop-btn")
.addEventListener("click", () => {

  document.getElementById("products")
  .scrollIntoView({
    behavior:"smooth"
  });

});

/* BACK TO TOP */

document.querySelector(".footer-top")
.addEventListener("click", () => {

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

});