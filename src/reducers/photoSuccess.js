/**
 * Author：Mr.tan
 * Create Date：2017/5/24
 * Modified By：Mr.tan
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
import {photoSuccess} from "../actions"
import {createReducer} from "redux-act"
export default createReducer({
    [photoSuccess]:(state,payload)=>{
        console.log(payload)
        return payload
    }
},"")