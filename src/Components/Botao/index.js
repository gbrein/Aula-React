import React from 'react'
import {Button} from 'react-bootstrap'

export const Botao = (props) => {
    return (
        <div>
            <Button onClick={props.changeColor}>Botao</Button>
        </div>
    )
}