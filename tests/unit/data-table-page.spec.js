import Vuex from 'vuex'
import Vuetify from 'vuetify'

import { createLocalVue, shallowMount } from '@vue/test-utils'
import DataTablePage from '@/components/DataTablePage.vue'

const USERNAME = 'username'
const NAME = 'name'
const EMAIL = 'email'
const GENDER = 'male'
const REGISTERED_DATE = new Date()
const ASC = 'ascend'
const DESC = 'descend'

const localVue = createLocalVue()
localVue.use(Vuex)

const actions = {
  getData: jest.fn()
}

describe('DataTablePage.vue', () => {
  function getStore (tableData) {
    const state = {
      tableData
    }

    const getters = {
      tableData: state => state.tableData
    }

    const options = {
      state,
      getters,
      actions
    }

    const store = new Vuex.Store(options)
    return {
      store,
      ...options
    }
  }
  function getWrapper (dataTable) {
    let vuetify
    vuetify = new Vuetify()
    const { store } = getStore(dataTable)
    return shallowMount(DataTablePage, {
      localVue,
      vuetify,
      store
    })
  }
  test('Initialize well', () => {
    const tableData = []
    const wrapper = getWrapper(tableData)
    expect(wrapper.vm).toBeTruthy
    wrapper.destroy()
  })

  test('computed: shownData', () => {
    const tableData = [{
      username: USERNAME,
      name: NAME,
      gender: GENDER,
      email: EMAIL,
      registeredDate: REGISTERED_DATE
    }]
    const wrapper = getWrapper(tableData)
    expect(wrapper.vm.shownData).toEqual(tableData)
  })

  test('computed: paginationLength 1', () => {
    const tableData = [{
      username: USERNAME,
      name: NAME,
      gender: GENDER,
      email: EMAIL,
      registeredDate: REGISTERED_DATE
    }]
    const wrapper = getWrapper(tableData)
    expect(wrapper.vm.paginationLength).toEqual(1)
  })

  test('computed: paginationLength 2', () => {
    let tableData = []
    for (let i = 1; i<=6; i++) {
      tableData.push({
        username: USERNAME+i,
        name: NAME+i,
        gender: GENDER,
        email: EMAIL+i,
        registeredDate: REGISTERED_DATE
      })
    }
    const wrapper = getWrapper(tableData)
    expect(wrapper.vm.paginationLength).toEqual(2)
  })

  test('computed: searchRequest', () => {
    const tableData = [{
      username: USERNAME,
      name: NAME,
      gender: GENDER,
      email: EMAIL,
      registeredDate: REGISTERED_DATE
    }]
    const wrapper = getWrapper(tableData)
    wrapper.vm.keyword = 'keyword'
    wrapper.vm.genderFilter = 'All'
    wrapper.vm.sortBy = 'name'
    wrapper.vm.sortOrder = 'ascend'
    wrapper.vm.page = 1
    expect(wrapper.vm.searchRequest).toEqual({
      keyword: 'keyword',
      gender: '',
      sortBy: 'name',
      sortOrder: 'ascend',
      page: 1,
      pageSize: 5
    })
  })

  test('methods: fetchData', () => {
    const tableData = [{
      username: USERNAME,
      name: NAME,
      gender: GENDER,
      email: EMAIL,
      registeredDate: REGISTERED_DATE
    }]
    const wrapper = getWrapper(tableData)
    wrapper.vm.fetchData()
    expect(wrapper.vm.showLoader).toBeTruthy()
    expect(actions.getData).toHaveBeenCalled()
  })

  test('methods: resetFilter', () => {
    const tableData = [{
      username: USERNAME,
      name: NAME,
      gender: GENDER,
      email: EMAIL,
      registeredDate: REGISTERED_DATE
    }]
    const wrapper = getWrapper(tableData)
    wrapper.vm.resetFilter()
    expect(wrapper.vm.genderFilter).toEqual('All')
    expect(wrapper.vm.keyword).toEqual('')
    expect(wrapper.vm.sortBy).toEqual('')
    expect(wrapper.vm.sortOrder).toEqual('')
  })

  test('methods: successFetchDataHandler', () => {
    const tableData = [{
      username: USERNAME,
      name: NAME,
      gender: GENDER,
      email: EMAIL,
      registeredDate: REGISTERED_DATE
    }]
    const wrapper = getWrapper(tableData)
    wrapper.vm.successFetchDataHandler()
    expect(wrapper.vm.showLoader).toBeFalsy()
  })

  test('methods: sort not sortable', () => {
    const tableData = [{
      username: USERNAME,
      name: NAME,
      gender: GENDER,
      email: EMAIL,
      registeredDate: REGISTERED_DATE
    }]
    const wrapper = getWrapper(tableData)
    const header = {
      label: 'Username',
      key: 'username',
      sortable: false
    }
    wrapper.vm.sort(header)
    expect(wrapper.vm.sortBy).toEqual('')
    expect(wrapper.vm.sortOrder).toEqual('')
  })
  test('methods: sort', () => {
    const tableData = [{
      username: USERNAME,
      name: NAME,
      gender: GENDER,
      email: EMAIL,
      registeredDate: REGISTERED_DATE
    }]
    const wrapper = getWrapper(tableData)
    let header = {
      label: 'Name',
      key: 'name',
      sortable: true
    }
    wrapper.vm.sort(header)
    expect(wrapper.vm.sortBy).toEqual(header.key)
    expect(wrapper.vm.sortOrder).toEqual(ASC)
    wrapper.vm.sort(header)
    expect(wrapper.vm.sortBy).toEqual(header.key)
    expect(wrapper.vm.sortOrder).toEqual(DESC)
    header = {
      label: 'Email',
      key: 'email',
      sortable: true
    }
    wrapper.vm.sort(header)
    expect(wrapper.vm.sortBy).toEqual('email')
    expect(wrapper.vm.sortOrder).toEqual(ASC)
  })
  test('methods: reverseSort', () => {
    const tableData = [{
      username: USERNAME,
      name: NAME,
      gender: GENDER,
      email: EMAIL,
      registeredDate: REGISTERED_DATE
    }]
    const wrapper = getWrapper(tableData)
    expect(wrapper.vm.reverseSort(DESC)).toEqual(ASC)
    expect(wrapper.vm.reverseSort(ASC)).toEqual(DESC)
  })
  test('methods: sortIcon', () => {
    const tableData = [{
      username: USERNAME,
      name: NAME,
      gender: GENDER,
      email: EMAIL,
      registeredDate: REGISTERED_DATE
    }]
    const wrapper = getWrapper(tableData)
    wrapper.vm.sortBy = NAME
    wrapper.vm.sortOrder = ASC
    let header = {
      label: 'Name',
      key: 'name',
      sortable: true
    }
    expect(wrapper.vm.sortIcon(header)).toEqual('mdi-sort-alphabetical-ascending-variant')
    wrapper.vm.sortOrder = DESC
    expect(wrapper.vm.sortIcon(header)).toEqual('mdi-sort-alphabetical-descending-variant')
    wrapper.vm.sortBy = EMAIL
    expect(wrapper.vm.sortIcon(header)).toEqual('mdi-sort-alphabetical-variant')
  })
  test('methods: formatDate', () => {
    const tableData = [{
      username: USERNAME,
      name: NAME,
      gender: GENDER,
      email: EMAIL,
      registeredDate: REGISTERED_DATE
    }]
    const wrapper = getWrapper(tableData)
    const inputDate = new Date('2022-03-11')
    expect(wrapper.vm.format(inputDate)).toEqual('11-03-2022 07:00')
  })
})
