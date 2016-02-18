import React, {Component, PropTypes} from 'react'
import postData from '../../data/postData'
import {findProject} from '../util/utilities'
import Isvg from 'react-inlinesvg'
import { Link } from 'react-router'

export default class IndividualProject extends Component {
  render(){
    const project = findProject(Number(this.props.projectId), postData)
    const projectImg = {backgroundImage: `url(${project.images})`}
    const prevProjectId = (Number(this.props.projectId) - 1 === -1) ? (postData.length - 1) : (Number(this.props.projectId) - 1)
    const nextProjectId = (Number(this.props.projectId) + 1 === postData.length) ? 0 : (Number(this.props.projectId) + 1)
    const prevProject = findProject(prevProjectId, postData)
    const nextProject = findProject(nextProjectId, postData)
    return (
        <div className="project-container">
          <div className="single-project-image" style={{backgroundImage: `url(${project.thumbnail})`}}></div>
          <div className="project-text">
            <div className="project-brief-container">
              <h1 className="project-title">{project.title}</h1>
              <p className="project-brief">{project.brief}</p>
              <div className="project-cta-btn-container">
              <a href={project.link} className="project-cta-btn">Launch Project</a>
              <a href={project.github} className="project-cta-btn">Source Code</a>
              </div>
            </div>
            <div className="project-metadata">
              <h4 className="project-metadata-type">Programming Languages</h4>
              <p>{project.languages.join(", ")}</p>
              <h4 className="project-metadata-type">Web Frameworks, Libraries, and Utilities</h4>
              <p>{project.libraries.join(", ")}</p>
            </div>
          </div>
        </div>
    )
  }
}
