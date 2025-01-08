<template>
    <div class="min-h-screen  py-10 px-6">
      <div class="max-w-4xl mx-auto bg-white bg-transparent shadow-lg rounded-lg p-8">
        <h1 class="text-4xl font-bold text-center text-gray-800 mb-6">
          Terms and Conditions
        </h1>
        <p class="text-sm text-gray-500 mb-8 text-center">
          Effective Date: January 1, 2025
        </p>
        <div class="space-y-6 text-gray-700">
          <section>
            <h2 class="text-2xl font-semibold mb-2">1. Definitions</h2>
            <p>
              - <strong>"User"</strong>: Refers to anyone accessing our services.
            </p>
            <p>
              - <strong>"Products"</strong>: Refers to computers, peripherals, and other items sold by the company.
            </p>
          </section>
          <section>
            <h2 class="text-2xl font-semibold mb-2">2. Use of the System</h2>
            <ul class="list-disc pl-5">
              <li>
                <strong>Eligibility:</strong> You must be at least 18 years old or have parental consent to use our services.
              </li>
              <li>
                <strong>Account Creation:</strong> Users must provide accurate and complete information during registration and are responsible for keeping credentials secure.
              </li>
              <li>
                <strong>Prohibited Activities:</strong> Users agree not to use the system for unlawful purposes, disrupt services, or engage in fraudulent activities.
              </li>
            </ul>
          </section>
          <section>
            <h2 class="text-2xl font-semibold mb-2">3. Orders and Payments</h2>
            <ul class="list-disc pl-5">
              <li>
                <strong>Order Placement:</strong> Orders are subject to availability. Confirmation will be sent via email.
              </li>
              <li>
                <strong>Payment:</strong> Payments must be made using available methods (credit card, local bank, etc.).
              </li>
              <li>
                <strong>Pricing:</strong> Prices are subject to change without notice. Errors or inaccuracies are not the company's responsibility.
              </li>
              <li>
                <strong>Cancellation:</strong> Users may cancel orders within the specified time frame before shipment.
              </li>
            </ul>
          </section>
          <section>
            <h2 class="text-2xl font-semibold mb-2">4. Returns and Refunds</h2>
            <ul class="list-disc pl-5">
              <li>
                <strong>Eligibility:</strong> Products can be returned within 30 days of purchase if unused and in original packaging.
              </li>
              <li>
                <strong>Non-Returnable Items:</strong> Custom-built computers and software licenses are non-returnable.
              </li>
              <li>
                <strong>Refunds:</strong> Processed within 7-10 business days after receiving and inspecting returned products.
              </li>
            </ul>
          </section>
          <section>
            <h2 class="text-2xl font-semibold mb-2">5. Warranty</h2>
            <ul class="list-disc pl-5">
              <li>
                <strong>Product Warranty:</strong> Hardware products have a warranty against manufacturing defects.
              </li>
              <li>
                <strong>Exclusions:</strong> Damage due to misuse, unauthorized repairs, or accidents is not covered.
              </li>
              <li>
                <strong>Warranty Claims:</strong> Users must provide proof of purchase and issue documentation.
              </li>
            </ul>
          </section>
          <section>
            <h2 class="text-2xl font-semibold mb-2">6. Limitation of Liability</h2>
            <p>
              B3 Team is not responsible for data loss during repairs or installations, indirect damages, or consequential losses. Liability is limited to the cost of the product or service in question.
            </p>
          </section>
          <section>
            <h2 class="text-2xl font-semibold mb-2">7. Privacy Policy</h2>
            <p>
              Our Privacy Policy details how we collect, use, and protect user data.
            </p>
          </section>
          <section>
            <h2 class="text-2xl font-semibold mb-2">8. Intellectual Property</h2>
            <p>
              All content, trademarks, and logos are the property of B3 Team or its licensors. Unauthorized use is prohibited.
            </p>
          </section>
          <section>
            <h2 class="text-2xl font-semibold mb-2">9. Governing Law</h2>
            <p>
              These Terms are governed by the laws of Internet Programming Subject. Any disputes will be resolved exclusively in the courts of ITC.
            </p>
          </section>
          <section>
            <h2 class="text-2xl font-semibold mb-2">10. Changes to Terms</h2>
            <p>
              B3 Team reserves the right to modify these Terms at any time. Changes will be effective immediately upon posting.
            </p>
          </section>
          <section>
            <h2 class="text-2xl font-semibold mb-2">11. Contact Us</h2>
            <ul class="list-disc pl-5">
              <li><strong>Email:</strong> support@b3team.com</li>
              <li><strong>Phone:</strong> +885-123-456-789</li>
              <li><strong>Address:</strong> ITC, Phnom Penh of Cambodia</li>
            </ul>
          </section>
        </div>
        <div class="mt-8 text-center">
          <button
            @click="goBack"
            class="bg-gray-600 text-white px-6 py-3 rounded-lg shadow hover:bg-gray-700"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default defineComponent({
    name: 'TermsAndConditions',
    setup() {
      const router = useRouter();
      const goBack = () => {
        router.push('/auth/signup');
      };
      return { goBack };
    },
  });
  </script>
  
  <style scoped>
  /* Additional custom styles, if needed */
  </style>
  