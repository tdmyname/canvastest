# canvastest
把上传图片缩放成不同比例后导出
# 使用方法(需安装node）：
- 1、下载项目所需的包：
Window：在项目目录打开命令提示符窗口 输入 npm install。
- 2、执行npm run server 启动项目服务。
- 3、执行npm run start 开启项目。
- （如需打包则使用 npm run build 命令， 打包后的文件为 build文件夹下的mian.js）
- 4、运行项目会自动打开浏览器，鼠标点击页面中虚线勾勒出的方形区域选择上传文件，点击“缩放”缩放图片，点击“提交”完成上传
# 控制缩放比例
- 在reducers目录下的editCanvasWidthAndHeight.js文件中设置缩放后文件的大小，可设置多个缩放尺寸格式。
- 格式如下所示：
 * [{width:450,height:320},{width:300,height:200}])
 * {width:450,height:320}为其中一个尺寸，如添加或修改尺寸只需按照该格式添加新对象或修改原对象。
