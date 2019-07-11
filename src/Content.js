import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Content.css'



class Content extends Component {


	// Render
	render() {
    return (

        <div id='mainMessageBox'>
          <div className="messageBox p-2 m-2 message bg-white">
              <div className="row">
                  <div className="col-9 d-flex flex-column pl-5">
                      <h5>Hola!</h5>
                      <span>9 - Jul 5:30</span>
                      <span>title</span>
                      <span>What a wonderful world!</span>
                  </div>
								</div>
								
								  <div className="row">
									  <div className="col-9 d-flex flex-column pl-5">
                      <h5>Hola!</h5>
                      <span>9 - Jul 5:30</span>
                      <span>title</span>
                      <span>What a wonderful world!</span>
                    </div>
								</div>
              </div>
          </div>


    )
  }
}

export default Content
