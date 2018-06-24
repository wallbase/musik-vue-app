<template>
  <section id="app" class="vbox">
    <Header></Header>
    <section>
      <section class="hbox stretch">
        <Aside></Aside>
        <section id="content">
          <section class="vbox">
            <router-view></router-view>
          </section>
        </section>
      </section>
    </section>
  </section>
</template>

<script>
  import Header from '@/components/commons/Header'
  import Aside from '@/components/commons/Aside'

  export default {
    components: {
      Header, Aside
    }
  }
</script>
