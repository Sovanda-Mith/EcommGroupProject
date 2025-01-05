import { defineStore } from 'pinia'
interface PaymentState {
  country: string;
  firstname: string;
  lastname: string;
  address: string;
  city: string;
  postalcode: string;
  email: string;
  phonenumber: string;
  coupon: string;
  payment: PaymentMethod;

  nameCard: string;
  numberCard: string;
  expDateCard: string;
  csvCard: string;
}
export enum PaymentMethod {
  CreditCard = "CreditCard",
  CashOnDelivery = "CashOnDelivery"
  
}
export enum availableCoupon{
  Coupon1 = "ASVC32FG",
  Coupon2 = "CPWO5A4R",
  Coupon3 = "P9SCDDIS",
  Coupon4 = "304LU162",
  Coupon5 = "6SWG9UJJ",
  Coupon6 = "A9LNI7QQ",
  Coupon7 = "CR3D5YLC",
  Coupon8 = "90EJXN41",
  Coupon9 = "YMUFWBJQ",
  Coupon10 = "C8GVYCGB"

}

export const usePaymentStore = defineStore('payment', {
  state: (): PaymentState => ({
    country:'',
    firstname: '',
    lastname: '',
    address: '',
    city: '',
    postalcode: '',
    email: '',
    phonenumber: '',
    coupon: '',
    payment: PaymentMethod.CreditCard,

    nameCard: '',
    numberCard: '',
    expDateCard: '',
    csvCard: '',
  }),
  actions: {
    setCountry(value: string) {
      this.country = value;
    },
    setFirstname(value: string) {
      this.firstname = value;
    },
    setLastname(value: string) {
      this.lastname = value;
    },
    setAddress(value: string) {
      this.address = value;
    },
    setCity(value: string) {
      this.city = value;
    },
    setPostalcode(value: string) {
      this.postalcode = value;
    },
    setEmail(value: string) {
      this.email = value;
    },
    setPhonenumber(value: string) {
      this.phonenumber = value;
    },
    setCoupon(value: string) {
      this.coupon = value;
    },
    setPayment(value: PaymentMethod) {
      this.payment = value;
    },

    setNameCard(value: string) {
      this.nameCard = value;
    },
    setNumberCard(value: string) {
      this.numberCard = value;
    },
    setExpDateCard(value: string) {
      this.expDateCard = value;
    },
    setCsvCard(value: string) {
      this.csvCard = value;
    },
  },
  getters: {
    getCountry: (state): string => state.country,
    getFirstname: (state): string => state.firstname,
    getLastname: (state): string => state.lastname,
    getAddress: (state): string => state.address,
    getCity: (state): string => state.city,
    getPostalcode: (state): string => state.postalcode,
    getEmail: (state): string => state.email,
    getPhonenumber: (state): string => state.phonenumber,
    getCoupon: (state): string => state.coupon,
    getPayment: (state): string => state.payment,

    getNameCard: (state): string => state.nameCard,
    getNumberCard: (state): string => state.numberCard,
    getExpDateCard: (state): string => state.expDateCard,
    getCsvCard: (state): string => state.csvCard,
  },


});

