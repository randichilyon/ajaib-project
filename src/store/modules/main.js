import api from '@/api'

const state = {
  tableData: []
}

const getters = {
  tableData: (state) => {
    return state.tableData
  }
}

const mutations = {
  setTableData (state, value) {
    state.tableData = value
  }
}

const actions = {
  getData: ({ commit }, { success, fail, payload } = {}) => {
    api.getData((response) => {
      const transformedData = response.body.results?.map(data => {
        const fullName = `${data?.name?.first} ${data?.name?.last}`
        return {
          username: data?.login?.username,
          name: fullName,
          gender: data?.gender,
          email: data?.email,
          registeredDate: data?.registered?.date
        }
      })
      commit('setTableData', transformedData)
      success && success(response)
    }, fail, payload)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
