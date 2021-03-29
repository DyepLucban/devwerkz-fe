<template>
    <div>
        <v-dialog max-width="700" v-model="dialog">
            <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">Add</v-btn>
            </template>
            <v-card>
                <v-card-title>
                    <span class="headline">Add New Task</span>
                </v-card-title>

                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="6" md="12">
                                <v-text-field :error="this.error.name.status" :error-messages="this.error.name.message" v-model="form.name" label="Task" autocomplete="off"></v-text-field>
                            </v-col>                            
                            <v-col cols="12" sm="6" md="12">
                                <v-select :error="this.error.status.status" :error-messages="this.error.status.message" :items="items" label="Select Status" v-model="form.status"></v-select>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>

                <v-card-actions v-if="loading == false">
                    <v-spacer>
                    </v-spacer>
                    <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                    <v-btn color="blue darken-1" text @click="create">Create</v-btn>
                </v-card-actions>
                <v-card-actions v-else>
                    <v-spacer>
                    </v-spacer>
                    <v-btn color="blue darken-1" text disabled>
                        <v-progress-circular indeterminate color="primary" class="mr-3"></v-progress-circular>
                        Adding ... 
                    </v-btn>
                </v-card-actions>                
            </v-card>
        </v-dialog>     
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'AddModal',
    
    components: {},

    data() {
        return {
            dialog: false,
            loading: false,
            items: ['completed', 'pending'],
            form: {
                name: '',
                status: '',
            },
            error: {
                name: {
                    status: false,
                    message: '',
                },                
                status: {
                    status: false,
                    message: '',
                },
            },
        }
    },

    methods: {
        ...mapActions('task', ['createTask']),

        async create()
        {
            this.loading = true
            let res = await this.createTask(this.form)

            if (res.status == 201) {
                this.dialog = false
                this.loading = false
                this.form = {}
                await this.$store.dispatch('task/browse')
            }

            if (res.status == 422) {
                this.loading = false;
                this.error.name.status = (res.data.errors.name) ? true: false;
                this.error.name.message = (res.data.errors.name) ? res.data.errors.name[0] : '';            
                this.error.status.status = (res.data.errors.status) ? true: false;;
                this.error.status.message = (res.data.errors.status) ? res.data.errors.status[0] : '';
            }
        },

        async close()
        {
            this.dialog = false;
            this.loading = false;
            this.form = {};
            this.error.name.status = false;
            this.error.name.message = '';            
            this.error.status.status = false;
            this.error.status.message = '';
        }

    }
}
</script>