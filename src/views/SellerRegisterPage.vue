<template>
  <div class="min-h-screen py-10 px-6">
    <div class="max-w-4xl mx-auto bg-white bg-transparent shadow-lg rounded-lg p-8">
      <h1 class="text-4xl font-bold text-center text-gray-800 mb-6">Seller Requirements</h1>
      <p class="text-sm text-gray-500 mb-8 text-center">Effective Date: January 1, 2025</p>
      <div class="space-y-6 text-gray-700">
        <section>
          <h2 class="text-2xl font-semibold mb-2">1. Registration and Verification</h2>
          <ul class="list-disc pl-5">
            <li>Sellers must register and verify their identity and contact information</li>
            <li>Provide necessary business documentation (if applicable).</li>
          </ul>
        </section>
        <section>
          <h2 class="text-2xl font-semibold mb-2">2. Product Quality and Authenticity</h2>
          <ul class="list-disc pl-5">
            <li>
              Ensure that products listed are genuine, accurately represented, and meet quality
              standards.
            </li>
            <li>Prohibit the sale of counterfeit or infringing products.</li>
          </ul>
        </section>
        <section>
          <h2 class="text-2xl font-semibold mb-2">3. Product Listings</h2>
          <ul class="list-disc pl-5">
            <li>
              Create detailed and accurate product listings with clear descriptions and high-quality
              images.
            </li>
            <li>
              Include essential product information such as dimensions, materials, and
              specifications.
            </li>
          </ul>
        </section>
        <section>
          <h2 class="text-2xl font-semibold mb-2">4. Inventory Management</h2>
          <ul class="list-disc pl-5">
            <li>Maintain accurate inventory levels to prevent overselling.</li>
            <li>Update product availability in a timely manner.</li>
          </ul>
        </section>
        <section>
          <h2 class="text-2xl font-semibold mb-2">5. Shipping and Fulfillment</h2>
          <ul class="list-disc pl-5">
            <li>Ship orders promptly and provide accurate tracking information to buyers.</li>
            <li>Follow shipping guidelines and meet delivery timeframes.</li>
          </ul>
        </section>
        <section>
          <h2 class="text-2xl font-semibold mb-2">6. Customer Service</h2>
          <ul class="list-disc pl-5">
            <li>Respond to buyer inquiries and messages promptly and professionally.</li>
            <li>Handle returns, exchanges, and refunds according to platform policies.</li>
          </ul>
        </section>
        <section>
          <h2 class="text-2xl font-semibold mb-2">7. Order Fulfillment Rate</h2>
          <ul class="list-disc pl-5">
            <li>
              Maintain a high order fulfillment rate by processing and shipping orders on time.
            </li>
            <li>Minimize order cancellations and delays.</li>
          </ul>
        </section>
        <section>
          <h2 class="text-2xl font-semibold mb-2">8. Feedback and Reviews</h2>
          <ul class="list-disc pl-5">
            <li>Encourage buyers to leave feedback and reviews after purchase.</li>
            <li>Maintain a positive seller rating by providing excellent customer service.</li>
          </ul>
        </section>
        <section>
          <h2 class="text-2xl font-semibold mb-2">9.Compliance with Policies</h2>
          <ul class="list-disc pl-5">
            <li>Adhere to platform guidelines, terms of service, and seller policies.</li>
            <li>Comply with all legal and regulatory requirements related to selling products.</li>
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
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'TermsAndConditions',
  setup() {
    const router = useRouter()
    const goBack = () => {
      router.push('/')
    }
    return { goBack }
  },
})
</script>
