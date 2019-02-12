import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://YOUR_BASE_URL_CALL_API'
})

// remove comment if the application needs authorization
// instance.defaultConfig.headers.authorization = 'YOUR_TOKEN_HERE'

export default instance
