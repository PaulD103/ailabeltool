import React from 'react';

import './style.css';

import Navigation from '../navigation/index.tsx';
import JobListElement from '../../components/jobListElement';


class JobOverview extends React.Component {
  render() {
    return(
        <div>
            <Navigation />
            <section>
                <div className='jobOverview'>
                    <div className='topBar'>
                        <h1>Job Overview</h1>
                        <p>Edit</p>
                    </div>
                    <div className='jobs'>
                        <JobListElement link="#" creator="PD" name="Autos" progress="89.3"/>
                        <JobListElement link="#" creator="KJ" name="Pflanzen" progress="23.6"/>
                    </div>
                </div>
                <div className='selectedJob'>

                </div>
            </section>
        </div>
    );
  }
}

export default JobOverview;