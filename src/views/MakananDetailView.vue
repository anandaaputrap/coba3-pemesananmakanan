<template>
  <div class="food-detail">
    <NavbarComponent />
    <div class="container">
      <!-- BreadCumb -->
      <div class="row mt-5">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link class="text-dark" to="/">Home</router-link>
              </li>
              <li class="breadcrumb-item" aria-current="page">Makanan</li>
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
          <img
            :src="'../assets/images/' + product.gambar"
            alt=""
            class="img-fluid shadow"
          />
        </div>
        <div class="col-md-6">
          <h2>
            <strong>{{ product.nama }}</strong>
          </h2>
          <hr />
          <h4>
            Harga : <strong>{{ product.harga }}</strong>
          </h4>
          <form class="mt-4" v-on:submit.prevent>
            <div class="form-group">
              <label for="jumlah_pemesanan">Jumlah Pesan</label>
              <input
                type="number"
                class="form-control"
                v-model="pesan.jumlah_pemesanan"
                id="jumlah_pemesanan"
              />
            </div>
            <div class="form-group">
              <label for="keterangan">Keterangan</label>
              <textarea
                v-model="pesan.keterangan"
                class="form-control"
                placeholder="Keterangan spt : Pedes, Nasi Setengah .."
                id="keterangan"
              ></textarea>
            </div>
            <button type="submit" class="btn btn-success" @click="pemesanan">
              <b-icon-cart3></b-icon-cart3>Pesan
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent.vue";
import axios from "axios";

export default {
  name: "MakananDetailView",
  components: { NavbarComponent },
  data() {
    return {
      product: {},
      pesan: {}
    };
  },
  methods: {
    setProduct(data) {
      this.product = data;
    },
    pemesanan(){
      this.pesan.products = this.product;
      axios
      .post("http://localhost:3000/keranjangs", this.pesan)
      .then(() => {
        this.$toast.success("Berhasil Masuk Keranjang", {
          type: "success",
          position: "top-right",
          duration: 5000,
          dismisable: true,
        });
      })
      .catch((err) => console.log(err));
    }
  },
  mounted() {
    axios
      .get("http://localhost:3000/products/" + this.$route.params.id)
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style></style>
