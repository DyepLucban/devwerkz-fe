<template>
    <div>
        <v-data-table :headers="headers" :items="tasks" class="elevation-1" :search="search">
			<template v-slot:top>
				<v-toolbar flat color="white">
					<v-toolbar-title>Song List</v-toolbar-title>
					<v-spacer></v-spacer>
					<v-text-field class="mr-5" append-icon="mdi-magnify" v-model="search" label="Search" single-line hide-details autocomplete="off"></v-text-field>
					<AddModal />               
				</v-toolbar>
			</template>
			<template v-slot:item.status="{ item }">
                <v-chip v-if="item.status == 'completed' " color="green" text-color="white">
                    Completed
                </v-chip>
                <v-chip v-else color="red" text-color="white">
                    Pending
                </v-chip>
			</template>
		</v-data-table>       
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import AddModal from '../components/AddModal'

export default {
    name: 'ToDoList',

    components: {
        AddModal,
    },

    data() {
        return {
            search: '',
            headers: [
                {text: 'Tasks', value: 'name'},
                {text: 'Status', value: 'status'},
                {text: 'Actions', value: 'actions'}
            ],       
        }
    },

    async mounted() {
        await this.browse()
    },

    computed: {
        ...mapGetters('task', ['tasks'])
    },

    methods: {
        ...mapActions('task', ['browse']),
    }
}
</script>