<template>
    <div class="div">
        <NavbarComponent />
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>Daftar Makanan</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import NavbarComponent from '@/components/NavbarComponent.vue'

export default {
  name: 'MakananView',
  components: {
    NavbarComponent,
  }
}
</script>

<style>

</style>