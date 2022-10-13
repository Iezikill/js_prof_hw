Vue.component('cart', {
  props: ['cartItems', 'img', 'visibility'],
  template: `<div class="cart-block" v-show="visibility">
                <h2 v-if="cartItems.length">Cart</h2>
                <h2 v-if="!cartItems.length">Cart is empty</h2>
                <cart-item v-for="item of cartItems" :img="img" :cart-item="item">
                </cart-item>
            </div>`
});

Vue.component('cart-item', {
  props: ['img', 'cartItem'],
  template: `<div class="cart-item">
                        <div class="product-bio">
                            <img :src="img" alt="Some img">
                            <div class="product-desc">
                                <p class="product-title">{{cartItem.product_name}}</p>
                                <p class="product-quantity">Quantity: {{cartItem.quantity}}</p>
                                <p class="product-single-price">$ {{cartItem.price}} each</p>
                            </div>
                        </div>
                        <div class="right-block">
                            <p class="product-price">{{cartItem.quantity*cartItem.price}}</p>
                            <button class="del-btn" @click="$root.remove(cartItem)">&times;</button>
                        </div>
               </div>`
})