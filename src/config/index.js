const config = {
  api: {
    basePath: `https://randomuser.me/api/`,
    tableData: (payload) => `?keyword=${payload.keyword}&gender=${payload.gender}&sortBy=${payload.sortBy}&sortOrder=${payload.sortOrder}&page=${payload.page}&pageSize=${payload.pageSize}&results=50&seeds=foobar`
  },
  app: {
    pages: {
      home: '/'
    }
  },
  getApiPath: apiPath => `${config.api.basePath}${apiPath}`
}

export default config
