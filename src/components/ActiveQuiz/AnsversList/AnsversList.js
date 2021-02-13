import React from 'react'
import classes from './AnsversList.module.css'
import AnsverItem from './AnsverItem/AnsverItem'

export default function AnsversList(props) {
    return (
        <ul className={classes.AnsversList}>
            { props.ansvers.map( (ansver, index) => {
                return (
                    <AnsverItem
                        key = {index}
                        ansver = {ansver}
                        onAnsverClick = { props.onAnsverClick }
                        state={props.state ? props.state[ansver.id] : null}
                    />
                )
            }) }
            
        </ul>
    )
}
