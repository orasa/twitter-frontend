import React, {Component} from 'react'
import './Content.css'



class Message extends Component {
	// Data
	state = {
		message: this.props.message
	}
	// Functions
	createMessage = (e, text) => {
  e.preventDefault()
  let message = {
  id:1,
  author: "Scarlett O'Neal",
  date: "10 march 2019",
  body: text,

}
let messages = this.state.messages
messages.push(message)
this.setState({messages})
}

	// Render
	render() {
		return (

			<div className="message">
				<span className="author">{this.state.message.author}</span>
				<span className="date">{this.state.message.date}</span>
				<div className="body">{this.state.message.body}</div>
			</div>
		)
	}
}

export default Message
