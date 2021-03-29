import endpoints from './endpoint'
import Api from './base'

export default {

    async browse() {
        try {
            return await Api().get( endpoints.tasks.resource )
        } catch (error) {
            return error.response
        }
    },

    async createTask(params) {
        try {
            return await Api().post( endpoints.tasks.resource + '/create', params)
        } catch (error) {
            return error.response
        } 
    },

    async updateTask(params) {
        try {
            return await Api().put( endpoints.tasks.resource + '/update/' + params.id , params)
        } catch (error) {
            return error.response
        }        
    },      

    async deleteTask(params) {
        try {
            return await Api().delete( endpoints.tasks.resource + '/delete/' + params.id)
        } catch (error) {
            return error.response
        }
    }, 
}