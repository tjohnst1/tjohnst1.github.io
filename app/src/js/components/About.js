import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'
import basicInfo from '../../data/basicInfo'
import * as _ from 'lodash'

export default class About extends Component {
  render(){
    const containerClasses = classNames({
      "fixed-container": true,
      "closed": this.props.navShowing
    })
    return (
      <div className={containerClasses}>
        <p>I am web developer and designer with previous experience in the fields of graphic design and video post production. My interests, among others, include design, technology, and about how to express ideas creatively in the digital space.</p>
        <p>Web Frameworks/Libraries/Applications: Ember.js, Gulp, Grunt, JavaScript, jQuery, React, Ruby, Ruby on Rails</p>
        <p>Applications: After Effects, Atom, Compressor, Excel, Final Cut Pro, Illustrator, InDesign, Photoshop, PowerPoint, Premiere</p>
      </div>
    )
  }

}
