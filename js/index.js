// ITERATION 1

function updateSubtotal(product) {
    //... your code goes here
  let price = product.querySelector("#cart > tbody > tr > td.price > span").innerText;

   
  
  let quantity = product.querySelector("#cart > tbody > tr > td.quantity > input").value;
 
  let subtotal = price * quantity
   
   return  product.querySelector("#cart > tbody > tr:nth-child(1) > td.subtotal > span").innerText = subtotal
 


}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
   // ITERATION 2
  //... your code goes here
  let cart = [...document.getElementsByClassName('product')]
   let total = 0;
 

  for (let product of cart){
    let sub = updateSubtotal(product) 
    total = total + sub
  }
  // ITERATION 3
  //... your code goes here
  document.querySelector("#total-value > span").innerText = total 
   
}

// ITERATION 4

function removeProduct(event) {
  let oneButton = event.target;
  let son = oneButton.parentNode.parentNode
  let dad =  son.parentNode;

  dad.removeChild(son)
  calcAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here


}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
   //... your code goes here
  let removeButtons = document.getElementsByClassName('btn btn-remove')
   
  for (let el of removeButtons ){ 
  el.addEventListener('click', removeProduct)}
 



});
