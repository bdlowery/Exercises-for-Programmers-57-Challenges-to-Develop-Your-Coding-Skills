/* eslint-disable no-unused-vars */

const checkout = () => {
  let itemOnePrice = parseFloat(document.querySelector(".item-one-price").value);
  let itemOneQuantity = parseFloat(document.querySelector(".item-one-quantity").value);
  let itemTwoPrice = parseFloat(document.querySelector(".item-two-price").value);
  let itemTwoQuantity = parseFloat(document.querySelector(".item-two-quantity").value);
  let itemThreePrice = parseFloat(document.querySelector(".item-three-price").value);
  let itemThreeQuantity = parseFloat(document.querySelector(".item-three-quantity").value);
  let output = document.querySelector(".output");
  output.setAttribute("style", "white-space: pre-line");

  let subTotal;
  let tax;
  let total;

  if (
    isNaN(itemOnePrice) === false &&
    isNaN(itemOneQuantity) === false &&
    isNaN(itemTwoPrice) === false &&
    isNaN(itemTwoQuantity) === false &&
    isNaN(itemThreePrice) === false &&
    isNaN(itemThreeQuantity) === false
  ) {
    let itemOneTotal = itemOnePrice * itemOneQuantity;
    let itemTwoTotal = itemTwoPrice * itemTwoQuantity;
    let itemThreeTotal = itemThreePrice * itemThreeQuantity;
    subTotal = itemOneTotal + itemTwoTotal + itemThreeTotal;

    tax = subTotal * (5.5 / 100);

    total = subTotal + tax;

    output.textContent = `SubTotal: $${subTotal.toPrecision(4)} \r\n
    Tax: $${tax.toPrecision(4)} \r\n
    Total: $${total.toPrecision(4)}`;
  }
};
