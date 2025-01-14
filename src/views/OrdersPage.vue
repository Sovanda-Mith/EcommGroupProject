<template>
  <NavBar class="mb-10" />
  <div class="flex justify-center flex-col items-center">
    <p class="md:text-xl lg:text-3xl font-semibold mb-4">Your Orders</p>
    <Tabs default-value="orders" class="md:w-[900px] lg:w-[1600px]">
      <TabsList class="grid w-full grid-cols-3">
        <TabsTrigger value="orders">Orders</TabsTrigger>
        <TabsTrigger value="notShipped">Not Yet Shipped</TabsTrigger>
        <TabsTrigger value="cancelled">Cancelled Orders</TabsTrigger>
      </TabsList>
      <TabsContent value="orders"> No Past Orders </TabsContent>
      <TabsContent value="notShipped"> No Items </TabsContent>
      <TabsContent value="cancelled"> No Items </TabsContent>
    </Tabs>
  </div>
</template>
<script setup lang="ts">
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import NavBar from '@/components/LandingPageComponents/NavBar.vue'
</script>
