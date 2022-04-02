import api from '@/api'

const state = {
  isMobile: false,
  tableData: []
}

const getters = {
  isMobile: (state) => {
    return state.isMobile
  },
  tableData: (state) => {
    return state.tableData
  }
}

const mutations = {
  setIsMobile (state, value) {
    state.isMobile = value
  },
  setTableData (state, value) {
    state.tableData = value
  }
}

const actions = {
  setMobileDeviceStatus: ({ commit }, data) => {
    commit('setIsMobile', data)
  },
  getData: ({ commit }, { success, fail, payload } = {}) => {
    api.getData((response) => {
      console.log('response', response)
      const transformedData = response.body.results?.map(data => {
        const fullName = `${data?.name?.first} ${data?.name?.last}`
        console.log('data', data.gender)
        return {
          username: data?.login?.username,
          name: fullName,
          gender: data?.gender,
          email: data?.email,
          registeredDate: data?.registered?.date
        }
      })
      console.log('transformed', transformedData)
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
