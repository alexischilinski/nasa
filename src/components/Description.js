import React, { Component } from 'react'

export const Description = ({description}) => {
    return (
        <div className="descrip-div">
            <p className="description">{description}</p>
        </div>
    )
}