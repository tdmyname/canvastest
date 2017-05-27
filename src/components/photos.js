/**
 * Author：Mr.tan
 * Create Date：2017/5/24
 * Modified By：Mr.tan
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
import React from "react"
import {unloadPhoto,editHeight,editWidth} from "../actions"
import {connect} from "react-redux"
import {reduxForm,Field} from 'redux-form'
import ChooseImageComponent from "./ChooseImageComponent"
class Photos extends React.Component{
    constructor(props){
        super(props)
    }
     submit=(e)=>{
         this.props.unloadPhoto(e)
}
    render(){
        const {handleSubmit}=this.props
        return (<div>
                <div>
           <form onSubmit={handleSubmit(this.submit)}>
                <Field name="photo" photoWidthAndHeight={this.props.editCanvas} component={ChooseImageComponent} />
               <button type="submit" style={{float:"right"}}>提交</button>
           </form>
                </div>
            </div>
        )
    }
}
const PhotoForm=reduxForm({
    form:"photoForm"
})(Photos)
const mapStateToProps=(state)=>({
photoSuccess:state.photoSuccess,
    editCanvas:state.editCanvas

})

export default connect(mapStateToProps,{unloadPhoto,editHeight,editWidth})(PhotoForm)