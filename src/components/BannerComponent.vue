<template>
    <div class="row mt-4">
        <div class="col">
            <div class="d-flex h-100">
                <div class="justify-content-center align-self-center">
                    <h2><strong>Makanan Terenak,</strong><br/> Berada Di Tampilan Anda</h2>
                    <p class="lead">Ayo segera pesan dan pilih makanan favorit Anda.</p>
                    <router-link class="btn btn-warning btn-lg" to="/makanan"><b-icon-arrow-right></b-icon-arrow-right>Pesan Sekarang</router-link>
                </div>
            </div>
        </div>
        <div class="col">
            <img src="../assets/images/banner.png" class="img-fluid" alt="Responsive image" width="100%">
        </div>
    </div>
</template>

<script>
export default {
    name: 'BannerComponent',
}
</script>

<style>

</style>