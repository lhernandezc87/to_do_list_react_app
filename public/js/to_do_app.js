class TodoList extends React.Component {

  state = {
    thingsToDo: [],
  };

    
  componentDidMount() {
    this.setState({ thingsToDo: [] });
  }

  addThingToList = (thing) => {
    const newList = [...this.state.thingsToDo, thing]
    this.setState({thingsToDo: newList});
  }

  removeThing = (thing) => {
    var newList = []
    this.state.thingsToDo.map((thingToDo) => {
      if (thingToDo != thing) {
        newList = [...newList, thingToDo]
      }
    });
    this.setState({thingsToDo: newList});
  }

  render(){
    const thingsList = this.state.thingsToDo.map((thing, index) => (
      <ShowThing 
        key={index}
        thingToDo={thing}
        removeThing={this.removeThing}
      />

    ));
    return(
      <div>
        <RequestThing
          addThing={this.addThingToList}
        />
        {thingsList}
      </div>
    )
  }
}



class ShowThing extends React.Component {

  removeThing = (thingToDo) => {
    this.props.removeThing(this.props.thingToDo);
  }
  
  render(){
    return(
      <div align="center">
        <label>
          {this.props.thingToDo} &nbsp;
          <input type="button" onClick={this.removeThing} className="addThing" value="Done"/>
        </label>
      </div>
    )
  }
}



class RequestThing extends React.Component {

  state = {
    thingToDo: "",
  }
  
  onChangeText = ({target: {value: thingToDo}}) => {
    this.setState({thingToDo})
  }

  addThingToList = (event) => {
    this.props.addThing(this.state.thingToDo)
    this.setState({thingToDo: ''});
  }

  render() {
    return (
      <div align="center">
        <label>
          To do:
          <input type="text" className="thing_to_do" value={this.state.thingToDo} onChange={this.onChangeText}/>
          <input type="button" onClick={this.addThingToList} className="addThing" value="Agregar"/>
        </label>
        <br />   
      </div> 
    );
  }

}


ReactDOM.render(
  <TodoList />,
  document.getElementById('content')
);
