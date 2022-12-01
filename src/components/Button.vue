<script setup>

const props = defineProps({
  text: String,
  color: String
})
const { text, color } = props
const emits = defineEmits(['onEmitClick'])

const onEmitClick = () => emits('onEmitClick')

</script>

<template>
  <div class="button">
    <button
      @click="onEmitClick"
      :style="{ backgroundColor: color }"
    >{{ text }}</button>
  </div>
</template>

<style>
.button {
  text-align: center;
}
.button button {
  padding: 5px 10px;
  border-radius: 5px;
  margin-bottom: 15px;
  color: #fff;
  cursor: pointer;
  border: none;
}
</style>
