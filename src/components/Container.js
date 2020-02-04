import React, { Component } from 'react'
import {Card} from './Card.js'

export const Container = (props) => {

    const toggleContainer = () => {
        if(props.photo){
            return <Card photo={props.photo}/>
        } else {
            return <div>
                <h1 className="welcome">Welcome to the NASA Photo Generator</h1>
                <p className="prompt">Enter a date (e.g. your birthday) above to</p>
                <p className="prompt">display NASA's photo of the day from 2019!</p>
            </div>
        }
    }

    return (
        <div className="photo-container">
            {toggleContainer()}
        </div>
    )
}