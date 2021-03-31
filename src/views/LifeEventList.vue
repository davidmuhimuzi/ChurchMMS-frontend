<template>
	<v-main>
      <v-container fluid>
		<h1>Life Events </h1>
		<v-btn
            class="mr-4"
            color="primary"
            to="/"
            dark
          >
            Add Life Event
        </v-btn>
        <v-row>
			<v-col
				v-for="family in families"
				:key="family.fam_ID"
				cols="4"
			>
				<FamilyCard 
					v-bind:key="family.fam_ID"
					v-bind:family="family"
				></FamilyCard>
			</v-col>
        </v-row>
      </v-container>
    </v-main>
</template>

<script>
import LifeEventServices from "../services/LifeEventServices";
import FamilyCard from "../components/FamilyCard";

export default {
	name: 'Families-List',
	components: {
		FamilyCard
	},
    data() {
        return {
            families: []
            
        };
    },
	methods: {
		getFamilies()  {
			FamilyService.getFamilies()
            .then(response => {
                this.families = response.data;
            })
            .catch(error => {
                this.message = error.response.data.message;
            });
		},
    },
	mounted() {
		this.getFamilies();
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