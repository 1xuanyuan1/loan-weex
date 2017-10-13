<template>
  <div>
    <text>{{data.title}}</text>
  </div>
</template>
<script>
export default {
  name: 'ad-item',
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>

