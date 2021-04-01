<template>

  <div class="submit-form mt-3 mx-auto">
    <H1>Add Valid Value Group </H1>
    <form @submit.prevent="saveVvg">

    <v-text-field
    v-model="vvg.vvg_name"
    label="Valid Value Name"
    ></v-text-field>

    <v-text-field
    v-model="vvg.code"
    label="Valid Value Group Code"
    ></v-text-field>
      
       </form>
      <v-btn color="primary" class="offset-sm4 mt-3" @click="saveVvg">Submit</v-btn>
      <v-btn color="primary" class="mt-3" @click="cancel">Cancel</v-btn>
     </div>
  
</template>

<script>
import VvgService from "../services/VvgService";

export default {
  data() {
    return {
      vvg: {},
      vvgs: []
  
    };
  },
  methods: {
    saveVvg() {
      console.log(this.vvg)
      VvgService.create(this.vvg)
        .then(() => {
          this.$router.push({ name: "vvgdisplay" });
          console.log(this.data)
        })
        .catch((e) => {
          console.log(e);
        });
    },
    cancel() {
      this.$router.push({ name: "vvgdisplay" });
    },
  },
};
</script>

<style>
.submit-form {
  max-width: 400px;
  margin: auto;
  font-size: 20px;
}
h1 {
  text-align: center;
}
</style>