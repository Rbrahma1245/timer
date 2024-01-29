/* eslint-disable react/prop-types */
import { createContext } from 'react'
import  { Component } from 'react'


export let APIData = createContext()
 class ClassUseContext extends Component {
  constructor(props){
    super(props)

  }



  render() {
   
    return (
      <APIData.Provider value={"FROM CONTEXT API"}>
        {this.props.children}
    </APIData.Provider>
    )
  }
}

export default ClassUseContext