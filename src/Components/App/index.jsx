// Dependencies
import React, { Component } from "react";

// Pages
import UserProfile from '../../pages/Userprofile'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    const url="https://picsum.photos/v2/list?page=1&limit=10";
    let data = fetch(url)
    data
      .then(datos => datos.json())
      .then(response => this.setState({data: response}))
      .catch(error => console.log(error))        
  }

  
  render() {    
    const { data } = this.state
    return <UserProfile 
      data = {data}
    />
  }
}

export default App;
