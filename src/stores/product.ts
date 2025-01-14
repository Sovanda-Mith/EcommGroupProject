import { defineStore } from 'pinia';
export interface productState {
  productId: number;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  discount: number;
  tag: string;
  reviewsNum: number;
}

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [] as productState[],
  }),
  actions: {
    //add new product
    addNewProduct(product:productState) {
      this.products.push(product);
    },
    addMultipleProducts(products: productState[]) {
      this.products = [...this.products, ...products];
    },
    //update product
    updateProduct(productId: number, newEditedProduct: productState) {
      const index = this.products.findIndex(p => p.productId === newEditedProduct.productId);
      if (index !== -1) {
        this.products[index] = { ...this.products[index], ...newEditedProduct };
      }
    },
    //delete product
    removeProduct(productId: number) {
      this.products=this.products.filter(p => p.productId !== productId);
    },
    //clear products
    clearProducts() {
      this.products = [];
    },

  },
  getters: {
    allProducts: (state) => state.products,
    getProductById: (state) => (productId: number) => {
      return state.products.find(p => p.productId === productId);
    },
    getProductByCategory: (state) => (category: string) => {
      return state.products.filter(p => p.category === category);
    },
    getDiscountProduct: (state) => () => {
      return state.products.filter(p => p.discount > 0);
    },
    getBudgetProduct: (state) => () => {
      return state.products.filter(p => p.price < 100);
    },
    getHotProduct: (state) => () => {
      return state.products.filter(p => p.tag === 'HOT');
    },
  }
})
