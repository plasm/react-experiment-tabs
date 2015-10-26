import React from "react"

export default class Content extends React.Component{
  constructor(){
    super();
    this.state = {
      content: "ciao"
    }
  }
  componentDidMount() {
    fetch(this.props.source)
      .then(function(response) {
        return response.text()
      }.bind(this)).then(function(body) {
        this.setState({
          content: body
        });
      }.bind(this))
  }
  render(){
    return (
      <div className={"tab-content " + this.props.active} dangerouslySetInnerHTML={{__html: this.state.content}}>
      </div>
    )
  }
}
