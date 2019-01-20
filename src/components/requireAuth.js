import React, { Component } from 'react';
import { connect } from 'react-redux'

export default (ChildComponent) => {
  class ComponsedComponent extends Component {
    //our component just got rendered
    componentDidMount() {
      this.shouldNavigateAway()
    }

    //our component just got updated with new props
    componentDidUpdate() {
      this.shouldNavigateAway()
    }

    shouldNavigateAway() {
      if (!this.props.auth) {
        this.props.history.push('/')
      }
    }

    render() {
      return <ChildComponent {...this.props}/>
    }
  }

  function mapStateToProps(state) {
    return {auth: state.auth}
  }
  

  return connect(mapStateToProps)(ComponsedComponent);

};