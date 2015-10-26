import React from "react"
import Tab from "./tab"
import Content from "./content"


export default class Tabs extends React.Component{
  constructor(){
    super();
    this.state = {
      current: 1
    }
  }
  // Eseguito una volta sola quando il componente viene montato
  componentWillMount(){
    if(this.props.current){
      this.setState({
        current: this.props.current
      });
    }
  }

  handleClick(id){
    this.setState({
      current: id
    });

  }

  eachTab(){
    var state = this.state.current;
    return this.props.data.map( function(info){
      let active = (state == info.id) ? "active" : "";
      return <Tab active={active} onClick={this.handleClick.bind(this, info.id)} key={info.id} label={info.label} />
    }.bind(this));
  }

  eachContent(){
    var state = this.state.current;
    return this.props.data.map( function(info){
      let active = (state == info.id) ? "active" : "";
      return <Content source={info.source} active={active} key={info.id} />
    }.bind(this));  }

  render(){
    return (
      <div>
        <div className="tab-group">{this.eachTab()}</div>
        <div className="tab-contents">{this.eachContent()}</div>
      </div>
    )
  }
}
