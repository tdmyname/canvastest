/**
 * Author：Mr.tan
 * Create Date：2017/5/24
 * Modified By：Mr.tan
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
import  'whatwg-fetch'
import FormData from 'isomorphic-form-data'

export default (path, param = {}) => {
    const data = new FormData()
    Object.keys(param).forEach((key) => {data.append(key, param[key])})
    const options = {
        method: 'post',
        body: data
    }
    return fetch(`http://localhost:3000/${path}`, options)
        .then(function (res) {
            return res.json()
        })
}
