<script setup lang="ts">
import headerCart from '@/components/checkoutComponents/headerCart.vue'
import forwardBtnCart from '@/components/checkoutComponents/forwardBtnCart.vue'
import backBtnCart from '@/components/checkoutComponents/backBtnCart.vue'
import TotalComp from '@/components/checkoutComponents/totalComp.vue'

import { usePaymentStore } from '@/stores/payment'
import { useCartProductStore } from '@/stores/cartProduct'

const paymentStore = usePaymentStore()
const cartProductStore = useCartProductStore()

const showPopup = () => {
  const popup = document.getElementById('popup')
  const paymentPage = document.getElementById('paymentPage')

  popup?.classList.add('open-popup')
  paymentPage?.classList.add('paymentPage-blur')
}
const hidePopup = () => {
  const popup = document.getElementById('popup')
  const paymentPage = document.getElementById('paymentPage')
  popup?.classList.remove('open-popup')
  paymentPage?.classList.remove('paymentPage-blur')
}
</script>
<template>
  <headerCart title="Payment" />
  <div class="breadcrumb">
    <span>Cart</span>
    <span class="separator">></span>
    <span class="inactive">Shipping Information</span>
    <span class="separator">></span>
    <span class="active">Payments (via Card)</span>
  </div>

  <div
    class="form-coupon flex p-[20px] h-[calc(100%-140px)] rounded-b-[50px]"
    style="font-family: 'SF-Pro', sans-serif; font-weight: 300"
  >
    <!-- form payment -->
    <div class="form-section w-[calc(100%-483px)] h-100% flex mt-[50px] justify-center">
      <div class="w-[550px] h-[450px]">
        <img src="../../assets/cartImg/paymentIcon.svg" alt="" />
        <div class="flex flex-col mt-3">
          <span class="paymentTextBold">Enter Payment Methods</span>
          <span class="paymentText">Enter your card details.</span>
        </div>
        <div class="mt-4">
          <form>
            <div class="mb-3 flex flex-col gap-[30px]">
              <!-- name -->
              <div class="row">
                <div class="col">
                  <div class="form-label">Name on Card</div>
                  <input
                    type="text"
                    v-model="paymentStore.nameCard"
                    class="form-control w-[350px]"
                    placeholder="Name"
                    aria-label="First name"
                  />
                </div>
                <div class="col">
                  <div class="form-label">Expiration Date</div>
                  <input
                    type="text"
                    v-model="paymentStore.expDateCard"
                    class="form-control"
                    placeholder="08/2025"
                    aria-label="Last name"
                  />
                </div>
              </div>
              <!-- cardNum -->
              <div class="row">
                <div class="col">
                  <div class="form-label">Card Number</div>
                  <input
                    type="text"
                    v-model="paymentStore.numberCard"
                    class="form-control w-[350px]"
                    placeholder="0000-0000-0000"
                    aria-label="First name"
                  />
                </div>
                <div class="col">
                  <div class="form-label">CSV</div>
                  <input
                    type="text"
                    v-model="paymentStore.csvCard"
                    class="form-control"
                    placeholder="XXX"
                    aria-label="Last name"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="method-section w-[483px] h-100% flex flex-col justify-start pl-[40px] gap-[30px]">
      <!-- coupon -->
      <form class="flex items-center">
        <div class="flex flex-col">
          <label for="exampleInputEmail1" class="form-label paymentText"
            >Have any Discount code or Coupon</label
          >
          <div class="flex items-center justify-center gap-3">
            <input
              placeholder="COUPON"
              v-model="paymentStore.getCoupon"
              style="font-family: 'SF-Pro', sans-serif"
              type="email"
              class="form-control text-[24px] w-[300px] h-[70px]"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div
              class="mb-[10px] bg-white text-black border-black border-[1px] rounded-[10px] w-[90px] h-[70px] mt-[20px] flex justify-center items-center"
            >
              Applied
            </div>
          </div>
        </div>
      </form>

      <TotalComp
        :subTotal="cartProductStore.subtotalCartValue"
        :shipping="cartProductStore.getShippingCost"
        :total="cartProductStore.getTotalCost"
      />
      <div class="flex flex-col gap-[20px] justify-center items-center">
        <!-- forwardBtn -->
        <forwardBtnCart
          @click="showPopup()"
          class="btnText"
          btnText="Continue to Payment"
          width="350px"
          height="70px"
          gap="15px"
          padleft="15px"
          padright="15px"
        ></forwardBtnCart>
        <!-- backBtn -->
        <backBtnCart class="btnText" btnText="Back" gap="8px" to="/checkout/orderInfo"></backBtnCart>
      </div>
    </div>
  </div>
  <div
    id="popup"
    class="popup bg-white w-[900px] h-[600px] gap-4 border-solid border-[1px] border-black rounded-[30px] flex flex-col justify-center items-center"
    style="font-family: 'SF-Pro', sans-serif; font-weight: 300"
  >
    <img src="@/assets/cartImg/completeImg.jpeg" alt="logo" class="w-[200px]" />
    <h2 class="text-[34px] font-bold">Thank you for the purchase</h2>
    <p class="text-[24px]">Your order has been successfully placed.</p>
    <button
      id="closePopup"
      class="w-[200px] h-[80px] border-solid border-[1px] border-black rounded-[30px] font-bold text-[28px]"
      @click="hidePopup()"
    >
      Okay, Got it
    </button>
  </div>
</template>
<style>
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

.breadcrumb {
  font-family: 'SF-Pro', sans-serif;
  font-size: 22px;
  color: #888;
  margin-top: 10px;
  margin-left: 20px;
}

.breadcrumb .separator {
  margin: 0 8px; /* Add spacing around the ">" symbol */
  color: #444; /* Slightly darker color */
}

.breadcrumb .active {
  font-weight: bold;
  color: black; /* Highlight the current page */
}

.breadcrumb .inactive {
  color: #ccc; /* Gray color for future steps */
}
span {
  font-family: 'SF-Pro', sans-serif;
}
.paymentText {
  font-family: 'SF-Pro', sans-serif;
  /* font-weight: 100; */
  font-size: 22px;
  color: #667085;
}
.paymentTextBold {
  font-family: 'SF-Pro', sans-serif;
  font-weight: 800;
  font-size: 28px;
}

@media (max-width: 1302px) {
  .paymentPage {
    height: 1300px;
  }
  .cartContainer {
    width: 90%;
    height: 1200px;
    /* padding: 20px; */
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    /* justify-content: center;
    align-items: center; */
  }
  .form-coupon {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
@media (max-width: 1045px) {
  .method-section {
    padding-top: 100px;
  }
  .paymentPage {
    height: 1350px;
  }
  .cartContainer {
    height: 1280px;
  }
}
.paymentPage-blur {
  opacity: 35%;
}
</style>
