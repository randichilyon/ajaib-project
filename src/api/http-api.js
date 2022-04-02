import axios from 'axios'
import config from '@/config'
const activeLang = 'ID'
const headerObject = { 'Cache-Control': 'no-cache', language: activeLang }
const dataAdapter = (fn) => {
  return res => {
    const response = res.response || res
    fn &&
      fn({
        status: response.status,
        statusText: response.status,
        body: response.data,
        headers: response.headers || (res.config && res.config.headers) || {},
        originalResponse: res
      })
  }
}

const getDataViaApi = (path, cb, errorHandler, headerParams = {}) => {
  axios
    .get(config.getApiPath(path), {
      headers: { ...headerObject, ...headerParams }
    })
    .then(dataAdapter(cb))
    .catch(dataAdapter(errorHandler))
}

const postDataViaApi = (path, cb, errorHandler, data, headerParams = {}) => {
  const headerObject = {}
  axios
    .post(config.getApiPath(path), data, {
      headers: { ...headerObject, ...headerParams }
    })
    .then(dataAdapter(cb))
    .catch(dataAdapter(errorHandler))
}

const deleteDataViaApi = (path, cb, errorHandler, headerParams = {}) => {
  axios
    .delete(config.getApiPath(path), {
      headers: { ...headerObject, ...headerParams }
    })
    .then(dataAdapter(cb))
    .catch(dataAdapter(errorHandler))
}

export {
  getDataViaApi,
  postDataViaApi,
  deleteDataViaApi,
  dataAdapter
}
