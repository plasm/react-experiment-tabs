import React from "react"
import ReactDOM from "react-dom"
import Tabs from "./model/tabs"
import Tab from "./model/tab"
import Content from "./model/content"

var data = [
  {
    id: 1,
    label: "Tab 1",
    source: "./tab-contents/source1.html"
  },
  {
    id: 2,
    label: "Tab 2",
    source: "./tab-contents/source2.html"
  },
  {
    id: 3,
    label: "Tab 3",
    source: "./tab-contents/source3.html"
  },
  {
    id: 4,
    label: "Tab 4",
    source: "./tab-contents/source4.html"
  }
];

class App extends React.Component{
  render(){
    return (
      <div>
        <Tabs callBack={this.props.callBack} current={this.props.current} data={this.props.data} />
      </div>
    )
  }
}

ReactDOM.render(<App current="1" data={data} />, document.querySelector("#container"))
