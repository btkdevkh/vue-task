<script setup>

import { useRouter } from 'vue-router';
import Button from '../components/Button.vue';

const router = useRouter()
const goTo = () => router.push('/')

</script>
<template>
  <div class="about">
    <h1>Vue App</h1>
    <small>vuejs script setup syntactic sugar</small>
  </div>
  <br>
  <Button 
    text="Back"
    color="green"
    @on-emit-click="goTo('/')"
  />
</template>

<style>
.about {
  font-size: 0.8rem;
  text-align: center;
}
</style>
