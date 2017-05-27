/**
 * Author：Mr.tan
 * Create Date：2017/5/24
 * Modified By：Mr.tan
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
import {call, put, take} from "redux-saga/effects";
import * as Act from "./actions";
import fetch from "../fetch"
import  * as ServerPath from "../serverPath"
export default function* sagas() {
    while (true) {
        const req = yield take(Act.unloadPhoto)
       let value={}
        req.payload.photo.map((item,index)=>{
            const name=item.old.name.split(".")[0]
            value[name+index]=item.old
            if(item.new !== undefined){
                item.new.map((newItem,newIndex)=>{
                    value["new"+name+index+newIndex]=dataURLtoBlob(newItem)
                })

            }
        })
        try{
        const res = yield call(fetch, ServerPath.UNLOAD_PHOTO,{...value})
        yield alert("导出成功")}catch (e){
           alert("请检查服务是否开启")
        }
    }
}
function dataURLtoBlob(dataurl) {
    let arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {type:mime});
}