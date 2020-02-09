import React from "react";
import "./index.scss";
import axios from 'axios';

export default class Booking extends React.Component {
  constructor(props) {
    super(props);
  }

  submitBooking(){
    const obj ={
      name:"sam"
    }
    axios.post("http://localhost:5001/create",obj).then((res)=>console.log(res))
  }

  render() {
    return (
      <div className="booking-container">
          <div className="booking-content-fields">
      hi
          </div>
        <div className="button-container">
          <button
            className="cancel-button"
            onClick={() => this.props.toggleSlider(false)}
          >
            cancel
          </button>
          <button className="book-button" onClick={()=>this.submitBooking()}>book</button>
        </div>
      </div>
    );
  }
}
