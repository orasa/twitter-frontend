import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './pai.jpg'
import './App.css'
import AllContent from './AllContent'
import Content from './Content'
import Sidebar from './Sidebar'


class App extends Component {

	// Render
	render() {
    return (
			<div id='wrap' className="wrap bg-light p-5">
        <AllContent />
				<div id='mainContent'>
				  <div className="row">

					  <Sidebar />
						<Content />
				</div>
			</div>
		</div>

		)
	}
}

export default App
