<template>
  <div v-if="currentVvg" class="edit-form py-3">
      <v-form ref="form" lazy-validation>

      <v-text-field
        v-model="currentVvg.vvg_name"
        :rules="[(v) => !!v || 'First name is required']"
        label="Family Name"
        required
      ></v-text-field>

      <!-- <v-select :items="familyPersons"
        label="Head of the Family"
        item-text ="person.frst_name"
        item-value= "per_ID" 
        v-model="currentVvg.per_ID" >
        <template v-slot:selection="{ item } " >
          {{item.person.frst_name}} {{item.person.last_name}}
        </template>
      </v-select> -->

      <v-data-table
        :headers="headers"
        :items="vvgVves"
        hide-default-footer
        class="elevation - 1">
        <template v-slot:item="{ item }">
            <v-icon
              small
              class="mr-2"
              @click="deleteVveForVvg(item)"
            >
              mdi-delete
            </v-icon>
        </template>
      </v-data-table>

      <v-row justify="center" align="center">
        <v-col justify="left" col="1"> 
            <v-autocomplete
                v-model="vvgVve.vve_ID"
                :items="entries"
                label="Type"
                item-value="vve_ID"
                :filter="customFilter"
              >
                <template slot="selection" slot-scope="data" >
                  {{data.item.vve_ID}} {{data.item.vve_name}}
                </template>
                <template slot="item" slot-scope="data" >
                  {{data.item.vve_ID}} {{data.item.vve_name}}
                </template>
              </v-autocomplete>
        </v-col>
        <!-- <v-col justify="left" col="2"> 
            <v-text-field
              v-model="vvgVve.fam_role"
              label="Family Role"
              required
            ></v-text-field>
        </v-col> -->
        <v-col align="center" col="3">  
              <v-btn color="success" @click="addVveForVvg()" center>
                Add
              </v-btn>
        </v-col>
      </v-row>

      <v-divider class="my-5"></v-divider>

      <v-row justify="center">
        <v-col justify="left" col="1"> 
          <v-btn color="error" @click="deleteVvg">
            Delete
          </v-btn>
        </v-col>
        <v-col justify="right" col="2"> 
          <v-btn class= "float-right" color="success" @click="updateVvg">
            Update
          </v-btn>
        </v-col>
      </v-row>
     </v-form>
  </div>

  <div v-else>
    <br />
    <p>Please click on an Valid Value Group...</p>
    
  </div>

</template>

<script>
import VvgService from "../services/VvgService";
import VveService from "../services/VveService";

export default {
  data() {
    return {
      currentVvg: null,
      vvgVves: [],
      vves: [],
      vvgVve: {},
      message: '',
      headers: [
                {
                    text: 'vve_ID',
                    align: 'left',
                    value: 'vve.vve_ID',
                },
                {
                    text: 'vve_name',
                    align: 'left',
                    value: 'vve.vve_name',
                },
                {
                    text: 'vvg_ID',
                    align: 'left',
                    value: 'vvg_code',
                },
                {
                    text: 'Action',
                    value: 'actions',
                    align: 'left',
                    sortable: false,
                }
            ],
    };
  },
  
  methods: {
    getVvg(vvg_ID) {
      VvgService.get(vvg_ID)
        .then(response => {
          this.currentVvg = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updateVvg() {
      VvgService.update(this.currentVvg.vvg_ID, this.currentVvg)
        .then(response => {
          console.log(response.data);
          this.message = 'The Valid Value Group was updated successfully!';
          this.$router.push({ name: 'vvglist' });
        })
        .catch(e => {
          console.log(e);
        });
    },

    deleteVvg() {
      VvgService.delete(this.currentVvg.vvg_ID)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "vvglist" });
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    getVveForVvg(vvg_ID)  {
      VveService.getVvgVves(vvg_ID)
        .then(response => {
            this.vvgVves = response.data;
            console.log(this.vvgVves);
        })
        .catch(error => {
            this.message = error.response.data.message;
        });
    },

    getVves() {
      VveService.getAll()
        .then(response => {
            this.people = response.data;
            console.log(this.people);
        })
        .catch(error => {
            this.message = error.response.data.message;
        });
    },

    deleteVveForVvg(vvgVve) {
      VveService.delete(vvgVve.vve_ID)
        .then(() => {  
          this.vvgVve = this.vvgVve.filter(validvalueentry => validvalueentry.vvg_ID!=validvalueentry.vvg_ID);
          // was this.vvgVves
        })
        .catch(error => {
            this.message = error.response.data.message;
        });
    },

    // addPersonForFamily() {
    //     let familyPerson = {};
    //     familyPerson.fam_ID = this.currentFamily.fam_ID;
    //     familyPerson.per_ID = this.familyPerson.per_ID;
    //     familyPerson.fam_role = this.familyPerson.fam_role;
    //     console.log(familyPerson)
    //     FamilyPersonService.create(familyPerson)
    //       .then(() => {
    //             this.getPeopleForFamily(this.$route.params.id);
    //             console.log(this.familyPersons);
    //       })
    //       .catch(error => {
    //           this.message = error.response.data.message;
    //       });
           
    // },

    customFilter (item, queryText) {
      const textOne = item.frst_name.toLowerCase()
      const textTwo = item.last_name.toLowerCase()
      const searchText = queryText.toLowerCase()

      return textOne.indexOf(searchText) > -1 ||
        textTwo.indexOf(searchText) > -1
    }
  },
  mounted() {
    this.message = '';
    this.getVvg(this.$route.params.id);
    this.getVveForVvg(this.$route.params.id);
    this.getVves();
  }
};
</script>

<style>
h4 {
  font-size: 25px;
  text-align: center;
}
.edit-form {

  max-width: 600px;

  margin: auto;
}
</style>