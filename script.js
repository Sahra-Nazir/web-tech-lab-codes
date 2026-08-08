const cartCount=document.getElementById("cartCount");
const cartButtons=document.querySelectorAll(".add-cart");
const subscribeForm=document.getElementById("subscribeForm");
const subscribeMessage=document.getElementById("subscribeMessage");

let count=0;

cartButtons.forEach(button=>{
  button.addEventListener("click",()=>{
    count++;
    cartCount.textContent=count;
    button.textContent="Added ✓";
    setTimeout(()=>button.textContent="Add to Cart",900);
  });
});

subscribeForm.addEventListener("submit",event=>{
  event.preventDefault();
  subscribeMessage.textContent="Thanks for subscribing!";
  subscribeForm.reset();
});
