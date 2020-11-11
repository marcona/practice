
<template>
  <div>
    <h1>
      {{name}}</br>
      {{reponse}}
    </h1>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";

  export default Vue.extend({
    data: function() {
      return {
        name: 'Hello Eliott, ca va ?!',
        reponse: 'Oui perros',
      }
    },
  });
</script>

<style lang="scss">
$primary-color: white;
$bg: black;
h1 {
  color: $primary-color;
  background-color: $bg;
}
</style>
