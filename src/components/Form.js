import React, { Component } from 'react'

class Form extends Component {
    state = {
        year: "2019",
        month: "",
        day: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const formattedDate = `${this.state.year}-${this.state.month}-${this.state.day}`
        this.props.findPhoto(formattedDate)
        this.setState({
            month: "",
            day: ""
        })
    }

    render(){
        return (
            <div className="form-div" onSubmit={this.handleSubmit}>
                <form className="form">
                    <input className="number" onChange={this.handleChange} type="number" placeholder="MM" name="month" value={this.state.month}></input>
                    <input className="number" onChange={this.handleChange} type="number" placeholder="DD" name="day" value={this.state.day}></input>
                    <input className="submit" onChange={this.handleChange} type="submit" value="Get Photo"></input>
                </form>
            </div>
        )
    }
}

export default Form;