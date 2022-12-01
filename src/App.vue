<script setup>
</script>

<template>
  <h1 class="main-title">Tasks</h1>
  <div class="container">
    <hr><br>
    <RouterView />
  </div>
</template>

<style>
.main-title {
  text-align: center;
  margin-bottom: 5px;
  margin-top: 25px;
  font-size: 1.8rem;
}
hr {
  border: none;
  height: 1px;
  background-color: #ddd;
}
</style>
