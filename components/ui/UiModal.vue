<template>
  <Transition name="modal">
    <div v-if="props.show" class="modal-mask">
      <div class="modal-container">
        <ui-card max-width="'none'">
          <template #header v-if="slots.header">
            <slot name="header" />
          </template>
          <template #default>
            <slot name="body" />
          </template>
          <template #footer v-if="slots.footer">
            <slot name="footer" />
          </template>
        </ui-card>
      </div>
      <div class="modal-backdrop" @click="$emit('close')" />
    </div>
  </Transition>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  show: boolean
}>(), {
  show: false
})

const slots = useSlots()
</script>

<style lang="scss">
.modal {
  &-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    transition: opacity 0.3s ease;
    backdrop-filter: saturate(180%) blur(10px);
  }

  &-backdrop {
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  &-container {
    position: relative;
    z-index: 2;
    width: 100%;
    min-width: 260px;
    max-width: 640px;
    padding: 30px 20px;
    margin: auto;
    transition: all 0.3s ease;
  }

  /*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

  &-enter-from {
    opacity: 0;
  }

  &-leave-to {
    opacity: 0;
  }

  &-enter-from &-container,
  &-leave-to &-container {
    transform: scale(1.1);
  }
}
</style>