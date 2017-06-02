/**
 * Author：Mr.tan
 * Create Date：2017/5/24
 * Modified By：Mr.tan
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
import path from "path";
import multer from "multer";
import * as ServerPath from "./serverPath"

const app = require('express')()
const server = require('http').createServer(app)
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", req.get("origin"))
    res.header("Access-Control-Allow-Credentials", true)
    next()
})
const storage = multer.diskStorage({
    destination: path.join(__dirname, './uploads'),
    filename: function (req, file, cb) {
     const fileId =file.fieldname
        const suffix=file.mimetype.split("/")
        const ext="."+suffix[1]
        const filename = path.basename(fileId, ext)
        cb(null, filename + ext)
    }
});
const upload = multer({storage: storage})
app.use(upload.any())

app.post(`/${ServerPath.UNLOAD_PHOTO}`,function (req,res) {
    console.log(req.body)
    res.send({message:"ok"})
})
server.listen(3000, function () {
    console.log('server start!')
})
