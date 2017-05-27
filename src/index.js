/**
 * Author：Mr.tan
 * Create Date：2017/5/24
 * Modified By：Mr.tan
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */

import ReactDOM from "react-dom"
import React from "react"
import {Provider} from "react-redux"
import {applyMiddleware, compose, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";
import sagas from "./sagas";
import Photos from "./components/photos"

const sageMiddleware=createSagaMiddleware()
const store=createStore(reducers,compose(applyMiddleware(sageMiddleware)))
sageMiddleware.run(sagas)

const container = document.createElement("div")
document.body.appendChild(container)
ReactDOM.render(
    <Provider store={store}>
    <Photos/>
    </Provider>,
    container
)