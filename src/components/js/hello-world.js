import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'HelloWorld',
  data: () => {
    return {
      genderFilter: '',
      labels: ['Male', 'Female']
    }
  },
  created () {
    this.fetchData()
  },
  computed: {
    ...mapGetters(['tableData'])
  },
  methods: {
    ...mapActions(['getData']),
    fetchData () {
      const searchRequest = {
      }
      this.getData({
        payload: searchRequest
      })
    }
  }
}
