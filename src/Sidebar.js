import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Content.css'
import './Sidebar.css'



class Sidebar extends Component {
	state = {
		channels: [{
			profileName: "Little Red Robin",
			description: "Blah Blah",
			location:   "Koh Samui",
			website: "www.littleredrobin.com",
			img:  "url"
		}]

	}


	// Render
	render() {
    return (

			<div id="sidebar" className="col-4 bg-white pt-5">
				<span><a href="profileName"><h4>Little Red Robin</h4></a></span>
					<p>description</p>
					<p>location</p>
					<p>Website</p>
					<p>Image Gallery</p>
			</div>

		)
  }

}

export default Sidebar
