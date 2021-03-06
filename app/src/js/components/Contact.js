import React, {Component, PropTypes} from 'react'
import basicInfo from '../../data/basicInfo'
import Isvg from 'react-inlinesvg'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import * as _ from 'lodash'

export default class Contact extends Component {
  render(){
    return (
      <ReactCSSTransitionGroup transitionName="fade" transitionAppear={true} transitionAppearTimeout={300} transitionEnterTimeout={300} transitionLeaveTimeout={300}>
        <div className="contact-container transition" key={_.uniqueId()}>
          <p className="contact-blurb">Do you have a project idea or just want to say hi? Feel free to reach out via e-mail or social media. I&#8217;ll try my best to get back to you promptly.</p>
          <ul>
            <li><a className="contact-links" href={`mailto:${basicInfo.email}?Subject=Hello!`}><Isvg src="/images/email.svg">E-mail: </Isvg>{basicInfo.email}</a></li>
            <li><a className="contact-links" href={basicInfo.linkedin}><Isvg src="/images/linkedin.svg">LinkedIn: </Isvg>{basicInfo.linkedinShort}</a></li>
            <li><a className="contact-links" href={basicInfo.github}><Isvg src="/images/github.svg">Github: </Isvg>{basicInfo.githubShort}</a></li>
          </ul>
        </div>
      </ReactCSSTransitionGroup>
    )
  }

}
