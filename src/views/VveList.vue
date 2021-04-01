<template>
	<v-main>
      <v-container>
		<h1>Current Valid Value Entries</h1>
		<v-btn
            class="mr-4"
            color="primary"
            to="/vveadd"
            dark
          >
            New Vve
          </v-btn>
        <v-row>vv
		<v-col
            v-for="vve in vve"
            :key="vve.vve_ID"
            cols="4"
          >
            <!-- <v-card
				class="mx-auto"
			>
				<v-img
				src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc1.staticflickr.com%2F1%2F40%2F82164251_077fa70150_z.jpg%3Fzz%3D1&f=1&nofb=1xx`"
				height="200px"
				></v-img>

				<v-card-title>
				{{ vvg.vvg_name}}
				</v-card-title>

				<v-card-subtitle>
				Contact Information
				</v-card-subtitle>

				<v-card-actions>
				<v-btn
				@click="editVvg(vvg)"
				class="ma-2"
				outlined
				fab
				color="blue darken-4"
				>
				<v-icon>mdi-pencil</v-icon>
				</v-btn>				
				</v-card-actions>
			</v-card> -->
          </v-col>
        </v-row>
      </v-container>
    </v-main>
</template>

<script>
import VveService from "../services/VveService";
// import VvgService from "../services/VvgService";

export default {
	name: 'Vve-List',
    data() {
        return {
            vve: {}
            
        };
    },
	created() {
		VveService.getVve()
            .then(response => {
                this.vve = response.data;
                console.log(this.vve);
            })
            .catch(error => {
                this.message = error.response.data.message;
            });
	},
	methods: {
		editVve(vve) {
            this.$router.push({ name: 'vvgedit', params: { id: vve.vve_ID } });
        }
		
	}
};
</script>

<style>
.list {
	text-align: left;
	max-width: 1400px;
	margin: fixed;
}

.add-button {
	margin-left:71%; 
	margin-right:0;
}
</style>