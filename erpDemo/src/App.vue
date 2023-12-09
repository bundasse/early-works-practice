<template>
  <div class="grid grid-cols-[250px_1fr] grid-rows-[50px_minmax(800px,_1fr)]">
    <GnbComp/>
    <LnbComp/>
    <div>
      <RouterView />
    </div>
  </div>
</template>

<script>
import GnbComp from '@/components/GnbComp.vue';
import LnbComp from '@/components/LnbComp.vue';
export default {
  name: 'App',
  components: {
    GnbComp,
    LnbComp
  }
}
</script>

<style>
</style>
