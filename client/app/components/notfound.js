import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class NotFound extends Component{
  render () {
    return (
      <div>
        <h1>Page not Found</h1>
        <Link to='/'>Go back home</Link>
      </div>
    )
  }
}

export default NotFound;
