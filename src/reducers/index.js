/**
 * Author：Mr.tan
 * Create Date：2017/5/24
 * Modified By：Mr.tan
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
import {combineReducers} from "redux"
import {reducer as form } from "redux-form"
import photoSuccess from "./photoSuccess"
import editCanvas from "./editCanvasWidthAndHeight"
export default combineReducers({
    form,photoSuccess,editCanvas
})