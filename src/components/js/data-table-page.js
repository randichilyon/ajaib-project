import { mapGetters, mapActions } from 'vuex'
import debounce from '@/utils/debouncer'
import { formatDate } from '@/utils/date'

const LoaderMask = () => import(/* webpackChunkName: "c-loader-mask" */ '@/components/LoaderMask')

const SORT_ORDER = {
  ASC: 'ascend',
  DESC: 'descend'
}
export default {
  name: 'DataTablePage',
  components: {
    LoaderMask
  },
  data: () => {
    return {
      genderFilter: 'All',
      keyword: '',
      labels: ['All', 'Male', 'Female'],
      sortBy: '',
      sortOrder: '',
      page: 1,
      showLoader: false,
      attrs: {
        class: 'mb-6',
        boilerplate: true,
        elevation: 2,
      },
      tableHeaders: [{
        label: 'Username',
        key: 'username',
        sortable: false
      }, {
        label: 'Name',
        key: 'name',
        sortable: true
      }, {
        label: 'Email',
        key: 'email',
        sortable: true
      }, {
        label: 'Gender',
        key: 'gender',
        sortable: true
      }, {
        label: 'Registered Date',
        key: 'registeredDate',
        sortable: true
      }]
    }
  },
  created () {
    this.fetchData()
  },
  computed: {
    ...mapGetters(['tableData']),
    shownData () {
      const startIdx = (this.page-1) * 5
      return this.tableData.slice(startIdx, startIdx + 5)
    },
    paginationLength () {
      return this.tableData.length / 5
    },
    searchRequest () {
      return {
        keyword: this.keyword,
        gender: this.genderFilter !== 'All' ? this.genderFilter : '',
        sortBy: this.sortBy,
        sortOrder: this.sortOrder,
        page: this.page,
        pageSize: 5
      }
    }
  },
  methods: {
    ...mapActions(['getData']),
    fetchData () {
      this.showLoader = true
      this.getData({
        payload: this.searchRequest,
        success: this.successFetchDataHandler,
        fail: this.successFetchDataHandler
      })
    },
    resetFilter () {
      this.genderFilter = 'All'
      this.keyword = ''
      this.sortBy = ''
      this.sortOrder = ''
    },
    successFetchDataHandler () {
      this.showLoader = false
    },
    sort(header) {
      if (header.sortable) {
        if (this.sortBy !== header.key) {
          this.sortBy = header.key
          this.sortOrder = SORT_ORDER.ASC
          return
        }
        this.sortOrder = this.reverseSort(this.sortOrder)
      }
    },
    reverseSort (key) {
      const reversed = {
        ascend: SORT_ORDER.DESC,
        descend: SORT_ORDER.ASC
      }
      return reversed[key]
    },
    sortIcon (header) {
      if (header.key === this.sortBy) {
        const keyMap = {
          ascend: 'mdi-sort-alphabetical-ascending-variant',
          descend: 'mdi-sort-alphabetical-descending-variant'
        }
        return keyMap[this.sortOrder]
      }
      return 'mdi-sort-alphabetical-variant'
    },
    format (date) {
      return formatDate(date)
    }
  },
  watch: {
    searchRequest(newVal, oldVal) {
      if (newVal.page === oldVal.page && newVal.page !== 1) {
        this.page = 1
        return
      }
      if (newVal.keyword !== oldVal.keyword || newVal.page !== oldVal.page) {
        debounce(() => this.fetchData(), 200, 'keyword-page-search')
        return
      }
      this.fetchData()
    }
  }
}
