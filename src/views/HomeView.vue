<template>
  <div class="home">
    <NavbarComponent />
    <div class="container">
      <BannerComponent />
      <div class="row mt-4">
        <div class="col">
          <h2>Makanan <strong>Terbaik</strong></h2>
        </div>
        <div class="col">
          <router-link class="btn btn-success float-right" to="/makanan">
            <b-icon-eye class=""></b-icon-eye>Lihat Semua Makanan
          </router-link>
        </div>
      </div>

      <div class="row mb-4">
        <div class="col-md-4 mt-4" v-for="product in products" :key="product.id">
          <CardProductComponent :product="product"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarComponent from '@/components/NavbarComponent.vue';
import BannerComponent from '@/components/BannerComponent.vue';
import CardProductComponent from '@/components/CardProductComponent.vue';
import axios from "axios";

export default {
  name: 'HomeView',
  components: {
    NavbarComponent,
    BannerComponent,
    CardProductComponent,
  },
  data () {
    return {
      products: [
       
      ]
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/best-products")
      .then((response) => this.setProducts(response.data))
      .catch((error) => console.log(error))
  },
};
</script>