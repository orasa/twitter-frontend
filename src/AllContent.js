import React, {Component} from 'react'
import Pai  from './pai.jpg'
import './App.css'


class AllContent extends Component {

	render() {
    return (

    <div>

        <div id="wrap" className="wrap bg-light p-5">

          <div id="header" className="row">
          <div id="picture" className="row">
          <img className="pai mt-0" src={Pai} alt="logo" />
          </div>
            <div className="col  p-2" >
              <span>Home</span>
              <span>About</span>
            </div>
          </div>

            <div className="col  p-2 textcenter" >
             <span>
               <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="search" aria-label="search" aria-describedby="basic-addon1" />
               </div>
             </span>
            </div>
               <div className="col   p-2 text-right">
                 <span><i className="fab fa-twitter p-1"></i></span>
                 <span>Login</span>
               </div>
            </div>


  </div>

    )
  }
}


export default AllContent
