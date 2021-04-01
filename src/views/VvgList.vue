<template>
	<v-main>
      <v-container>
		<h1>Current Valid Value Groups</h1>
		<v-btn
            class="mr-4"
            color="primary"
            to="/vvgadd"
            dark
          >
            New Vvg
          </v-btn>
        <v-row>
		<v-col
            v-for="vvg in vvg"
            :key="vvg.vvg_ID"
            cols="4"
          >
            <v-card
				class="mx-auto"
			>
				<v-img
				src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc1.staticflickr.com%2F1%2F40%2F82164251_077fa70150_z.jpg%3Fzz%3D1&f=1&nofb=1xx`"
				height="200px"
				></v-img>

				<v-card-title>
				{{ vvg.vvg_name}}
				</v-card-title>

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
			</v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
</template>

<script>
import VvgService from "../services/VvgService";

export default {
	name: 'Vvg-List',
    data() {
        return {
            vvg: {}
            
        };
    },
	created() {
		VvgService.getVvg()
            .then(response => {
                this.vvg = response.data;
                console.log(this.vvg);
            })
            .catch(error => {
                this.message = error.response.data.message;
            });
	},
	methods: {
		editVvg(vvg) {
            this.$router.push({ name: 'vvgedit', params: { id: vvg.vvg_ID } });
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