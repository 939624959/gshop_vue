import axios from 'axios'

export default function ajax (url, data = {}, type = 'GET') {
  return new Promise(function (resolve, reject) {
    let promise
    if (type === 'GET') {
      let dirStr = ''
      Object.keys(data).forEach(key => {
        dirStr += key + '=' + data[key] + '&'
      })
      if (dirStr !== '') {
        dirStr = dirStr.substring(0, dirStr.lastIndexOf('&'))
        url = url + '?' + dirStr
      }
      promise = axios.get(url)
    } else {
      promise = axios.post(url, data)
    }

    promise.then(response => {resolve(response.data)})
    .catch(error => {reject(error)})
  })
}
