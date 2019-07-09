import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Sidebar.css'


class Sidebar extends Component {
  state = {
    profile: 'Robin Tweeter',

  }

	// Render
	render() {
    return (
      <div id="sidebar">
        <h2>{this.state.profile}</h2>
        <h3>Channels</h3>
        <h3>Picture & Videos</h3>
      </div>

    )

  }


}

export default Sidebar
