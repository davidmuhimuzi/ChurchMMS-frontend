<template>

  <div class="submit-form mt-3 mx-auto">
    <H1>Add Life Event </H1>
    <form @submit.prevent="saveLifeEvent">

    <v-text-field
    v-model="lifeevent.event_date"
    label="Life Event Date: YYYY-DD-MM"
    required
    clearable
    ></v-text-field>


    <v-text-field
    v-model="lifeevent.event_note"
    label="Life Event Notes"
    required
    clearable
    ></v-text-field>
      
       </form>
      <v-btn color="primary" class="offset-sm4 mt-3" @click="saveLifeEvent">Submit</v-btn>
      <v-btn color="primary" class="mt-3" @click="cancel">Cancel</v-btn>
     </div>
  
</template>

<script>
import LifeEventService from "../services/LifeEventService";

export default {
  data() {
    return {
      lifeevent: {},
      lifeevents: []
  
    };
  },
  methods: {
    saveLifeEvent() {
      console.log(this.lifeevent)
      LifeEventService.create(this.lifeevent)
        .then(() => {
          this.$router.push({ name: "lifeeventperson" });
          console.log(this.data)
        })
        .catch((e) => {
          console.log(e);
        });
    },
    cancel() {
      this.$router.push({ name: "lifeeventperson" });
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