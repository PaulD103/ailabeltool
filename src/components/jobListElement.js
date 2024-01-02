import React from 'react';
import { Link } from "react-router-dom";

class JobListElement extends React.Component {
    render() {
        return(
            <Link className="navLink" to={this.props.link}>
                <div className="jobElement" onClick={this.handleLinkClick}>
                    <div className='jobCreator'><p>{this.props.creator}</p></div>
                    <div className='jobInformation'>
                        <ul>
                            <li>{this.props.name}</li>
                            <li>Progress: {this.props.progress}%</li>
                        </ul>
                    </div>
                    <div className='activeLight'></div>
                </div>
            </Link>
        );
  }
}

export default JobListElement;
