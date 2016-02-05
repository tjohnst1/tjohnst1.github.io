import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

export default class Home extends Component {
  render(){
    const containerClasses = classNames({
      "home-container": true,
      "fixed-container": true,
      "closed": this.props.navShowing
    })
    console.log(this.props)
    this.props.setCurrentRoute(this.props.route)
    return (
      <div className={containerClasses}>
        <p className="home-intro-text"><span className="underline">Travis</span> is a <span className="underline">front end developer</span> currently based in beautiful Portland, Oregon.</p>
        <button className="home-btn">Porfolio</button>
        <button className="home-btn">Contact</button>
      </div>
    )
  }

}
