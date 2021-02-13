import React, { Component } from 'react'
import classes from './Drawer.module.css'
import Backdrop from '../../Ui/Backdrop/Backdrop'

const links = [1, 2, 3,]

export default class Drawer extends Component {

    renderLinnks(){
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <a>Link{link}</a>
                </li>
            )
        })
    }

    render() {
        const cls = [classes.Drawer]
        if (!this.props.isOpen) {
            cls.push(classes.close)
        }

        return (
            <React.Fragment>
                { this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null } 
                <nav className={cls.join(' ')}>
                    <ul>
                        { this.renderLinnks() }
                    </ul>
                </nav>
            </React.Fragment>
        )
    }
}
