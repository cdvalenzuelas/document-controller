// Dependencies
import React, { Component } from "react";

//Components
import Header from "../Header";
import Hero from "../Hero";
import Footer from "../Footer";
import Project from "../Project"

async function fetchImages(url) {  
  let response = []
  try {
    let data = await fetch(url) 
    response = await data.json()
  } catch (error) {
    console.error(error)
  }  
  console.log('response => ', response)
  return response
}

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: [{author:'yo', download_url:"asdfsdf"}]
    }
  }

  componentDidMount(){
    const url="https://picsum.photos/v2/list?page=1&limit=10";
    let data = []
    async function ejecutar(){
      data = await fetchImages(url) 
      return data;     
    } 
    
    this.setState({data})
         
  }

  
  render() {
    const { data } = this.state
    console.log('this.state =>', data)
    return (
      <>
        <Header />
        <Hero />    
        <Hero />  
        {data.map(item => <Project key={item.id} src={item.download_url} author={item.author} />)}
        <Footer />
      </>
    )
  }
}

export default App;
