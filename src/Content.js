import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Content.css'
import Message from './Message'



class Content extends Component {

	state = {
		messages: [

		]

	}
	//Functions createMessge






	// Render
	render() {
    return (
	<div id='mainMessageBox'>
			<div className="messageBox p-2 m-2 message">
      		<div className="row">
						<div id="newMessage" className="input-group mb-3">
								<input type="text" className="form-control" placeholder="Send Message..." aria-label="Recipient's username" aria-describedby="button-addon2" />
						</div>
          </div>
							<div className="row">
							  {
							      this.state.messages.map((m) => {
								     return <Message message={m} key={m._id} />
						        })
					       }
             </div>
    </div>
	</div>
			)
		}
}

export default Content
