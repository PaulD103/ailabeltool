import React from 'react';
import { Link } from "react-router-dom";

class NavigationPoint extends React.Component {
    render() {
        return(
            <div className="navigationLink" onClick={this.handleLinkClick}>
                <Link className="navLink" to={this.props.link}>
                    <img id='navLinkIcon' src={this.props.icon} alt={this.props.alt}></img>
                </Link>
            </div>
        );
  }
}

export default NavigationPoint;
