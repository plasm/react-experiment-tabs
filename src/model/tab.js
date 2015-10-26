import React from "react"

export default class Tab extends React.Component{

  render(){
    return (
      <div className={"tab-item " + this.props.active} onClick={this.props.onClick}>
        {this.props.label}
      </div>
    )
  }
}
