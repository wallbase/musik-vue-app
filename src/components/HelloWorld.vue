<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <tabs>
      <tab>Tab content 1.</tab>
      <tab>
        <alert type="warning" v-if="show" dismissible @dismissed="show = false">
          <b>Warning!</b> Better check yourself, you're not looking too good.
        </alert>
      </tab>
    </tabs>

  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        show: true,
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

