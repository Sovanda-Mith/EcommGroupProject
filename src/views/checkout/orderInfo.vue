<script setup lang="ts">
import headerCart from '@/components/checkoutComponents/headerCart.vue'

import backBtnCart from '@/components/checkoutComponents/backBtnCart.vue'
import forwardBtnCart from '@/components/checkoutComponents/forwardBtnCart.vue'
import TotalComp from '@/components/checkoutComponents/totalComp.vue'
import dropdownComp from '@/components/checkoutComponents/dropdownComp.vue'
import { ref, watch } from 'vue'

import { usePaymentStore, PaymentMethod, availableCoupon } from '@/stores/payment'
import { useCartProductStore } from '@/stores/cartProduct'

const handleSelection = (country: string) => {
  paymentStore.setCountry(country)
}

const selectedPaymentMethod = ref<string>('')
const paymentStore = usePaymentStore()
const cartProductStore = useCartProductStore()
const checkCouponInput = (coupon: string): boolean => {
  const allCoupons = Object.values(availableCoupon) as string[]
  return allCoupons.includes(coupon)
}
const checkCoupon = (coupon: string): void => {
  console.log(checkCouponInput(coupon))
  if (checkCouponInput(coupon)) {
    console.log('Coupon is valid')
    // alert('Coupon is valid')
    showPopup()
  } else {
    console.log('Coupon is invalid')
    alert('Coupon is invalid')
  }
}

watch(selectedPaymentMethod, (newValue) => {
  if (newValue === 'flexRadioCreditCard') {
    paymentStore.setPayment(PaymentMethod.CreditCard)
  } else if (newValue === 'flexRadioCashOnDelivery') {
    paymentStore.setPayment(PaymentMethod.CashOnDelivery)
  }
})

const showPopup = () => {
  const popup = document.getElementById('couponPopup')
  const blurPage=document.getElementById('paymentPage')

  blurPage?.classList.add('paymentPage-blur')
  popup?.classList.add('open-popup')
}
</script>
<template>
  <headerCart title="Checking Out" />
  <div class="breadcrumb">
    <span class="inactive">Cart</span>
    <span class="separator">></span>
    <span class="active">Shipping Information</span>
    <span class="separator">></span>
    <span class="inactive">Payments (via Card)</span>
  </div>

  <div class="flex p-[20px] h-[calc(100%-140px)] rounded-b-[50px]"
    style="font-family: 'SF-Pro', sans-serif; font-weight: 300">
    <!-- form payment -->
    <div class="w-[calc(100%-483px)] h-100%">
      <form id="bootstrapForm">
        <div class="mb-3">
          <label for="formCountryInput" class="form-label">Country / Region </label>
          <!-- dropdown -->
          <div id="dropdownContainer">
            <dropdownComp width="100%" @update:selected="handleSelection" />
          </div>
        </div>
        <!-- name -->
        <div class="mb-3">
          <div class="row">
            <div class="col">
              <div class="form-label">First Name</div>
              <input type="text" class="form-control" v-model="paymentStore.firstname" id="formFirstNameInput"
                placeholder="First name" aria-label="First name" />
            </div>

            <div class="col">
              <div class="form-label">Last Name</div>
              <input type="text" class="form-control" v-model="paymentStore.lastname" id="formLastNameInput"
                placeholder="Last name" aria-label="Last name" />
            </div>
          </div>
        </div>
        <!-- address -->
        <div class="mb-3">
          <label for="formAddressInput" class="form-label">Address</label>
          <input type="text" class="form-control" v-model="paymentStore.address" id="formAddressInput"
            placeholder="3700 Noxus" />
        </div>
        <!-- city&postal -->
        <div class="mb-3">
          <div class="row">
            <div class="col">
              <div class="form-label">City</div>
              <input type="text" class="form-control" placeholder="Hidden Leaf" v-model="paymentStore.city" />
            </div>
            <div class="col">
              <div class="form-label">Postal Code</div>
              <input type="text" class="form-control" placeholder="01680" v-model="paymentStore.postalcode" />
            </div>
          </div>
        </div>
        <!-- email -->
        <div class="mb-3">
          <label for="formEmailInput" class="form-label">Email Address</label>
          <input type="text" class="form-control" v-model="paymentStore.email" id="formEmailInput"
            placeholder="Yasuo@example.com" />
        </div>
        <!-- phone number -->
        <div class="mb-3">
          <label for="formPhoneInput" class="form-label">Phone Number</label>
          <input type="text" class="form-control" v-model="paymentStore.phonenumber" id="formPhoneInput"
            placeholder="+855 (168) 000-0000" />
        </div>
        <!-- check box -->
        <div class="mb-3 ml-10 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1" style="font-family: 'SF-Pro', sans-serif">You agree to our
            friendly privacy policy</label>
        </div>
      </form>
    </div>

    <div class="w-[483px] h-100% flex flex-col justify-center pl-[40px] gap-[30px]">
      <!-- coupon -->
      <form class="flex items-center">
        <div class="flex flex-col">
          <label class="form-label paymentText">Have any Discount code or Coupon</label>
          <div class="flex items-center justify-center gap-3">
            <input v-model="paymentStore.coupon" placeholder="COUPON" style="font-family: 'SF-Pro', sans-serif"
              type="text" class="form-control text-[24px] w-[300px] h-[70px]" aria-describedby="emailHelp" />
            <div @click="checkCoupon(paymentStore.coupon)"
              class="mb-[10px] bg-white text-black border-black border-[1px] rounded-[10px] w-[90px] h-[70px] mt-[20px] flex justify-center items-center">
              Apply
            </div>
          </div>
        </div>
      </form>

      <!-- paymentMethod -->
      <div>
        <div class="form-check">
          <input class="form-check-input" type="radio" v-model="selectedPaymentMethod" value="flexRadioCreditCard"
            name="flexRadioPayment" id="flexRadioCreditCard" />
          <label class="form-check-label" for="flexRadioDefault1">
            <div class="flex flex-col gap-2 pb-2">
              <p class="paymentText">Pay by Credit Card / QR code</p>
              <div class="flex gap-3 items-center">
                <img src="@/assets/cartImg/MasterCard_Logo_svg.png" class="w-[40px] h-[25px]" alt="" />
                <img src="@/assets/cartImg/Visa_2021.svg.png" class="w-[5 0px] h-[20px]" alt="" />
                <img src="@/assets/cartImg/bakong.png" class="w-[35px] h-[35px]" alt="" />
              </div>
            </div>
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" v-model="selectedPaymentMethod" value="flexRadioCashOnDelivery"
            name="flexRadioPayment" id="flexRadioCashOnDelivery" checked />
          <label class="form-check-label" for="flexRadioDefault2">
            <p class="paymentText">Cash on delivery</p>
          </label>
        </div>
      </div>
      <TotalComp :subTotal="cartProductStore.subtotalCartValue" :shipping="cartProductStore.getShippingCost"
        :total="cartProductStore.getTotalCost" />
      <div class="flex flex-col gap-[20px] justify-center items-center">
        <!-- forwardBtn -->
        <forwardBtnCart class="btnText" to="/checkout/payment" btnText="Continue to Payment" width="350px" height="70px"
          gap="15px" padleft="15px" padright="15px"></forwardBtnCart>
        <!-- backBtn -->
        <backBtnCart class="btnText" btnText="Back To Cart" gap="8px" to="/checkout/cart"></backBtnCart>
      </div>
    </div>
  </div>
</template>
<style>
.breadcrumb {
  font-family: 'SF-Pro', sans-serif;
  font-size: 22px;
  color: #888;
  margin-top: 10px;
  margin-left: 20px;
}

.breadcrumb .separator {
  margin: 0 8px;
  /* Add spacing around the ">" symbol */
  color: #444;
  /* Slightly darker color */
}

.breadcrumb .active {
  font-weight: bold;
  color: black;
  /* Highlight the current page */
}

.breadcrumb .inactive {
  color: #ccc;
  /* Gray color for future steps */
}

.paymentText {
  font-family: 'SF-Pro', sans-serif;
  font-weight: 300;
  font-size: 24px;
}

.btnText {
  font-size: 24px;
}

.SFfont {
  font-family: 'SF-Pro', sans-serif;
}
#closePopup:hover {
  background-color: #82c89f;
  color: white;
}

.popup {
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.1);
  visibility: hidden;
  transition:
    transform 0.4s,
    top 0.4s;
}
.open-popup {
  visibility: visible;
  top: 50%;
  transform: translate(-50%, -50%) scale(1);
}
.paymentPage-blur {
  opacity: 35%;
}
</style>

