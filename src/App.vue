<template>
  <v-app>
    <v-main>
      <Nav />
      <router-view></router-view>
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import Nav from "./components/Layout/Nav";
import Footer from "./components/Layout/Footer";

export default {
  name: "App",

  components: {
    Nav,
    Footer,
  },
};
</script>
