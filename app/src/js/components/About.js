import React, {Component, PropTypes} from 'react'
import basicInfo from '../../data/basicInfo'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import * as _ from 'lodash'

export default class About extends Component {
  render(){
    return (
      <ReactCSSTransitionGroup transitionName="fade" transitionAppear={true} transitionAppearTimeout={300} transitionEnterTimeout={300} transitionLeaveTimeout={300}>
        <div className="about-container transition" key={_.uniqueId()}>
          <p className="about-summary">I am front end web developer with previous experience in graphic design and video post production. My interests, among others, include design, technology, and about how to express ideas creatively in the digital space.</p>
          <div className="about-skills-container">
            <h3 className="about-skill-headline main">Skills</h3>
              <h4 className="about-skill-headline" key={_.uniqueId()}>Programming Languages/Frameworks/Libraries</h4>
              <p className="about-skill-set" key={_.uniqueId()}>Ember.js, Gulp, Grunt, JavaScript, jQuery, React, Ruby, Ruby on Rails</p>
              <h4 className="about-skill-headline" key={_.uniqueId()}>Applications</h4>
              <p className="about-skill-set" key={_.uniqueId()}>After Effects, Atom, Compressor, Excel, Final Cut Pro, Illustrator, InDesign, Photoshop, PowerPoint, Premiere</p>
          </div>
        </div>
      </ReactCSSTransitionGroup>
    )
  }

}
