import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Content.css'


class Content extends Component {
  state = {
    messages: [{
      auther: "twitter User @orasa",
      date: Date.now,
      body: "What a wonderful world!",
      image: "/jpg"
    },
   {
     auther: 'twitter User @someone,
     date: Date.now,
     body: 'Somewhere over the rainbow',
     image: './jpg'
   }
  ]

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
