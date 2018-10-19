import {h, render, Component} from 'preact'
import './index.less'

const Loader = (props) => {
    return <div className="loader-wrap">
        <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>    
}

export default Loader