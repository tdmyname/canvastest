/**
 * Author：Mr.tan
 * Create Date：2017/5/25
 * Modified By：Mr.tan
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
import {editWidth,editHeight} from "../actions"
import {createReducer} from "redux-act"
export default createReducer({
    [editWidth]:(state,payload)=>{
        return {...state,width:payload}
    },
    [editHeight]:(state,payload)=>{
        return {...state,height:payload}
    }
},[{width:450,height:320},{width:300,height:200}])