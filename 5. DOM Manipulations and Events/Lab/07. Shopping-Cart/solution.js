function solve() {
   const productContainers = Array.from(document.querySelectorAll('.product'));
   const checkOutInfo = document.querySelector('textarea');
   const checkoutButton = document.querySelector('.checkout');
   const products = {};
   const result = {};

   checkoutButton.addEventListener('click', () => checkout(result, checkOutInfo));

   for (let i = 0; i < productContainers.length; i++) {
      const product = document.querySelectorAll('.product-title')[i].textContent;
      const price = document.querySelectorAll('.product-line-price')[i].textContent;
      const addButton = document.querySelectorAll('.add-product')[i];

      products[i] = {
         name: product,
         price: Number(price),
         addButton: addButton,
         addToCart(cart) {
            this.addButton.addEventListener('click', () => addProducts(cart, this.name, this.price, result));
         }
      }

      products[i].addToCart(checkOutInfo);
   }

   function addProducts(textarea, name, price, object) {
      textarea.textContent += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
      object[name]
         ? object[name] += price
         : object[name] = price;
   }

   function checkout(object, textarea) {
      const list = [];
      let totalPrice = 0;

      for (const [name, price] of Object.entries(object)) {
         list.push(name);
         totalPrice += price;
      }

      textarea.textContent += `You bought ${list.join(', ')} for ${totalPrice.toFixed(2)}.`;
      Array.from(document.querySelectorAll('button')).forEach(btn => btn.disabled = true);
   }
}