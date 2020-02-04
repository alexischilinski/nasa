import React, { Component } from 'react'
// import {Card} from './Card.js'

export const Card = ({photo}) => {
    return (
        <div className="card">
            <h1 className="photo-title">{photo.title}</h1>
            <img className="photo" src={photo.url}></img>
        </div>
    )
}