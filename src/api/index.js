import { getDataViaApi } from './http-api'
import config from '@/config'

export default {
  getData (callback, errorHandler, payload) {
    getDataViaApi(config.api.tableData(payload), callback, errorHandler)
  }
}
