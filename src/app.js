import {h} from 'preact'
import {Router, route, Route} from 'preact-router'
import AsyncRoute from 'preact-async-route'
import createHashHistory from 'history/createHashHistory'
import {Provider} from "mobx-react"

import RedirectRoute from '@c/base/redirectRoute'
import Loader from '@c/base/loader'

import store from './store/index'

import './app.less'


const Main = () => import(/* webpackChunkName: "main" */ './page/main')
.then(module => module.default)

const List = () => import(/* webpackChunkName: "list" */ './page/list')
.then(module => module.default)


const App = () => {
    return (
        <Provider {...store}>
            <Router history={createHashHistory()}>
                <AsyncRoute
                    path='/'
                    loading={Loader}
                    getComponent={Main}
                />
                <AsyncRoute
                    path='/list'
                    loading={Loader}
                    getComponent={List}
                />
                <RedirectRoute default to="/" />
            </Router>
        </Provider>
    )
}

export default App