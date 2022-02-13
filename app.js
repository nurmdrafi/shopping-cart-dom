// price list
const iphone11Black = 1219;
const iphoneSiliconCaseBlack = 59;

// case price increament and decrement
document.getElementById("case-plus").addEventListener("click", function () {
  isIncreament("case-unit", "case-price", iphoneSiliconCaseBlack, true);
});

document.getElementById("case-minus").addEventListener("click", function () {
  isIncreament("case-unit", "case-price", iphoneSiliconCaseBlack, false);
});

// phone price increament and decreament
document.getElementById("phone-plus").addEventListener("click", function () {
  isIncreament("phone-unit", "phone-price", iphone11Black, true);
});

document.getElementById("phone-minus").addEventListener("click", function () {
  isIncreament("phone-unit", "phone-price", iphone11Black, false);
});

// refactoring function
function getPrice() {
  const price = document.getElementsByClassName("price");
  let subTotal = 0;
  for (const p of price) {
    const price = parseInt(p.innerText);
    subTotal = subTotal + price;
    console.log(subTotal);
  }
  return subTotal;
}

function isIncreament(item, price, value, isIncreament) {
  const product = document.getElementById(item);
  let productQty = parseInt(product.value);
  const productPrice = document.getElementById(price);
  // (+) (-) condition
  if (isIncreament == true) {
    productQty += 1;
  } else if (productQty > 1) {
    productQty -= 1;
  }
  product.value = productQty;
  productPrice.innerText = productQty * value;
  // Sub Total
  const subtotal = getPrice();
  document.getElementById("sub-total").innerText = subtotal;
  // Tax
  const calcTax = parseFloat((subtotal * 0.1).toFixed(2));
  const tax = document.getElementById("tax");
  tax.innerText = calcTax;
  console.log(calcTax);
  // Total
  const total = document.getElementById("total");
  total.innerText = subtotal + calcTax;
}
