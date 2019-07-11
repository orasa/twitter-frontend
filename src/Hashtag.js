import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Content.css'



class Hashtag extends Component {

	state = {
		hashtag:	this.props.hashtag

	}

	//Functions

		componentWillMount() {
		console.log(this.props)
	  }



	// Render
	render() {
		return (

			  <div className="hashtagBox">
						 <div className='hashtag'>
								<li>#{this.state.hashtag.name}</li>


						 </div>
			  </div>
			)
		 }

		}


export default Hashtag
