import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './pai.jpg'
import './App.css'
import Header from './Header'
import Content from './Content'
import Sidebar from './Sidebar'


class App extends Component {

	// Render
	render() {
    return (
			<div id='wrap' className="wrap bg-light p-5">
        <Header />
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
