
import Api from '../api/task'
import { getField, updateField } from 'vuex-map-fields'

const state = {
    tasks: [],
}

const getters = {
    getField,
    tasks: (state) => state.tasks,
}

const actions = {
    async browse({commit}) {
        let response = await Api.browse()
        commit('onOkTask', response.data)
    },

    async createTask({}, params) {
        return await Api.createTask(params)
    },

    async updateTask({}, params) {
        return await Api.updateTask(params)
    },

    async deleteTask({}, params) {
        return await Api.deleteTask(params)
    },


}

const mutations = {
    updateField,
    onOkTask(state, data) {
        state.tasks = data
    },
}

export const task = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}