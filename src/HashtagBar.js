import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Content.css'
import Hashtag from './Hashtag'


class HashtagBar extends Component {

	state = {
		title: "Hot Trends",
		hashtags: [
			{ id: 1,	name: "Coding"},
			{	id: 2,  name: "Travels"},
			{ id: 3,  name: "Life" }
	  ]
	}
	//Functions
	selectHashtag = (id) => {
		let hashtags = this.state.hashtag
		hashtags.forEach((h) => delete h.active)
		let hashtag = hashtags.find((h) => h.id === id)
		hashtag.active = true
		this.setState({hashtags})
		this.props.getMessages(id)
	}



	// Render
	render() {
    return (
      <div id="hashtagBar">
			  <h5>{this.state.title}</h5>
				<ul className="hashtag">
			  {
					this.state.hashtags.map((h) => {

						console.log('Test log h form map',h)
					 return <Hashtag hashtag={h} key={h.id} />
					})
			  }
				</ul>
			 </div>

			)
		}
}

export default HashtagBar
