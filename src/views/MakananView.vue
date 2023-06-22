<template>
  <div class="div">
    <NavbarComponent />
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <h1>Daftar <strong>Makanan</strong></h1>
        </div>
      </div>
      <div class="row-mt-3">
        <div class="col">
          <div class="input-group mb-3">
            <input
            v-model="cari"
              type="text"
              class="form-control"
              placeholder="Cari Makanan Disini"
              aria-label="cari"
              aria-describedby="basic-addon1"
              @keyup="cariMakanan"
            />
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1"><b-icon-search></b-icon-search></span>
            </div>
          </div>
        </div>
      </div>
      <div class="row mb-4">
        <div
          class="col-md-4 mt-4"
          v-for="product in products"
          :key="product.id"
        >
          <CardProductComponent :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarComponent from "@/components/NavbarComponent.vue";
import CardProductComponent from "@/components/CardProductComponent.vue";
import axios from "axios";

export default {
  name: "MakananView",
  components: {
    NavbarComponent,
    CardProductComponent,
  },
  data() {
    return {
      products: [],
      cari: '',
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
    cariMakanan(){
    axios
      .get("http://localhost:3000/products?q="+this.cari)
      .then((response) => this.setProducts(response.data))
      .catch((error) => console.log(error));
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/products")
      .then((response) => this.setProducts(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style></style>
