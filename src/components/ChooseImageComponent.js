/**
 * Author：Mr.tan
 * Create Date：2017/5/25
 * Modified By：Mr.tan
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
import Dropzone from "react-dropzone"
import React from "react"
const ChooseImageComponent = (props) => {
    let imgs = []
    const {input,photoWidthAndHeight} = props
    if (input.value !== "") {
        input.value.map((item, index) => {
            if (item.new !== undefined) {
                imgs.push(<img key={ index} src={item.old.preview}/>)
                item.new.map((newItem,newIndex)=>{
                    imgs.push(<img key={"new" + index+newIndex} src={newItem}/>)
                })

            } else {
                imgs.push(<img name="photos" key={index} src={item.old.preview}/>)
            }
        })
    }
    const zoom = () => {
        if (input.value !== "") {
            let value = [...input.value]
            const git = setInterval(() => {
                const photos = document.getElementsByName("photos")
                if (photos.length > 0) {
                    value.map((item, index) => {
                        let src=[]
                        photoWidthAndHeight.map((item)=>{
                            const canvas = document.createElement("canvas")
                            canvas.setAttribute("height",item.height.toString())
                            canvas.setAttribute("width", item.width.toString())
                            const context = canvas.getContext("2d")
                            context.drawImage(photos[index], 0, 0, item.width, item.height)
                             src.push(canvas.toDataURL(input.value[index].old.type))
                        })
                        value[index] = {...value[index], new: src}
                    })
                    input.onChange([...value])
                    clearInterval(git)
                }
            }, 1000)
        }
    }
    return (
        <div style={{width: 200, height: 200}}>
            {imgs}
            <Dropzone
                onDrop={(files) => {
                    let values = []
                    files.map((item) => {
                        values.push({old: item})
                    })
                    input.onChange([...values])
                }}
            />
            <button type="button" width="100" height="100" onClick={() => zoom()}>缩放</button>
        </div>
    )
}
export default ChooseImageComponent