import React, { Component } from 'react'
import { render } from '@testing-library/react'
// import {Card} from './Card.js'
import {Description} from './Description.js'

class Card extends Component {

    state = {
        description: false,
        button: "expand",
    }

    handleClick = () => {
        this.setState({description: !this.state.description})
        if(this.state.button === "expand"){
            this.setState({
                button: "minimize"
            })
        } else if(this.state.button === "minimize"){
            this.setState({
                button: "expand"
            })
        }
    }


    render(){
        console.log(this.state.description)
        return (
            <div className="card">
                <h1 className="photo-title">{this.props.photo.title}</h1>
                <img className="photo" src={this.props.photo.url}></img>
                <button onClick={this.handleClick} className="expand">Click to {this.state.button} photo description</button>
                {this.state.description === true ? <Description description={this.props.photo.description}/> : null}
            </div>
        )
    }
}

export default Card;