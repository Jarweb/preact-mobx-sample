import { h, Component } from 'preact'
import {observer, inject} from "mobx-react"

import './index.less'

@inject(({demo}) => {
    
    const {
        token,
        
        fetchTodos
    } = demo

    return {
        token,
        
        fetchTodos
    }
})
@observer
export default class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="page-list">list</div>
        )
    }
}