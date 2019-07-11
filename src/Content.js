import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Content.css'
import Message from './Message'
import NewMessage from './NewMessage'
import HashtagBar from './HashtagBar'





class Content extends Component {

	state = {
		messages: []

	}
	//Functions createMessge

	createMessage = (e, text) => {
   e.preventDefault()
  let message = {
		  id:   1,
		  author: "Scarlett O'Neal ",
		  date: "12 march 2019",
		  body: text,
		  hashtag: "#coding"
 }
	let messages = this.state.messages
	messages.push(message)
	this.setState({messages})

}

	// Render
	render() {
    return (
	<div id='mainMessageBox'>
			<div className="messageBox p-2 m-2 message">
        <HashtagBar />
				<NewMessage createMessage={this.createMessage} />


							<div className="row">
							  {
							     this.state.messages.map((m) => {
								    return <Message message={m} key={m.id} />
						      })
					       }
             </div>

    </div>
	</div>
			)
		}
}

export default Content
