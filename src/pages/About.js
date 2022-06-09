import React, { Component } from 'react';
import "./About.css";
import me from "../assets/me.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>
    <div class="split left">
      <div className="centered">
        <img 
          className="profile_image"
          src={me}
          alt="Profile Pic"
          ></img>
      </div>
    </div>
    <div className="split right">
      <div className="centered">
        <div className="name_title">Guilherme Noronha Rigaud</div>
        <div className="brief_description">
          It is Me, Mario
        </div>
      </div>
    </div>
  </div>
    )
  }
}