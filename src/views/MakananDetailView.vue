<template>
  <div class="food-detail">
    <NavbarComponent />
    <div class="container">
      <!-- BreadCumb -->
      <div class="row mt-5">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><router-link class="text-dark" to="/">Home</router-link></li>
              <li class="breadcrumb-item" aria-current="page">
                Makanan
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Detail Makanan
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <!-- Detail Makanan -->
      <div class="row">
        <div class="col-md-6">
          
        </div>
        <div class="col-md-6">
          <h2><strong>{{ product.nama }}</strong></h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent.vue";
import axios from 'axios';

export default {
  name: "MakananDetailView",
  components: { NavbarComponent
  },
  data() {
    return {
      product: {},
      pesan: {},
    };
  },
  methods: {
    setProduct(data) {
      this.product = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/products/"+this.$route.params.id)
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error))
  },
};
</script>

<style></style>
