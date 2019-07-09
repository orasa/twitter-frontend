import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Sidebar from './Sidebar'
import Content from './Content'




class App extends Component {
  state = {
    tex: "Hello"
  }

	// Render
	render() {
		return (
			<div id="wrap">
        <div id="wrap">
				<Sidebar getMessages={this.getMessages} />
        <Sidebar getMessages={this.getMessages} />

			</div>



			</div>
		)
	}
}

export default App
