import { defineStore } from "pinia";
import type { productState } from "../stores/product";

// const ProductStore = useProductStore();
export const useCartProductStore = defineStore("cartProduct", {
  state: () => ({
    cartProducts: [] as {product : productState, quantity: number}[],
  }),
  actions: {
    addToCart(product: productState) {
      const existingProduct = this.cartProducts.find(p => p.product.productId === product.productId);
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        this.cartProducts.push({ product, quantity: 1 });
      }
    },

    removeFromCart(product: productState) {
      const index = this.cartProducts.findIndex(p => p.product.productId === product.productId);
      if (index !== -1) {
        this.cartProducts.splice(index, 1);
      }
    },

    updateQuantity(product: productState, newQuantity: number) {
      const index = this.cartProducts.findIndex(p => p.product.productId === product.productId);
      if (index !== -1) {
        this.cartProducts[index].quantity = newQuantity;
      }
    },
  },
  getters: {
    allCartProducts: (state) => state.cartProducts,
    getCartProductById: (state) => (productId: number) => {
      return state.cartProducts.find(p => p.product.productId === productId);
    },
    getCartProductByProductName: (state) => (productName: string) => {
      return state.cartProducts.filter(p => p.product.name === productName);
    },

    eachProductBeforeDiscount: (state) => (productId: number) => {
      const cartProduct = state.cartProducts.find(p => p.product.productId === productId);
      return cartProduct ? cartProduct.product.price * cartProduct.quantity : 0;
    },

    eachProductTotalValue: (state)=>(productId: number) => {
      const cartProduct = state.cartProducts.find(p => p.product.productId === productId);
      const beforeDiscount = cartProduct ? cartProduct.product.price * cartProduct.quantity : 0;
      //display only 2 decimal
      return Math.round( beforeDiscount * (1 - (cartProduct?.product.discount ?? 0) / 100)*100)/100;
    },

    subtotalCartValue: (state) => {
      return state.cartProducts.reduce((total, cartProduct) => {
        const beforeDiscount = cartProduct.product.price * cartProduct.quantity;
        const afterDiscount=beforeDiscount * (1 - (cartProduct.product.discount ?? 0) / 100);
        return total + Math.round(afterDiscount*100)/100;
      },0); // Initialize total to 0 to make it a return type number
    },

    getShippingCost: () => 10,
    getTotalCost():number{
      return this.subtotalCartValue + this.getShippingCost;
    }
  }
})
