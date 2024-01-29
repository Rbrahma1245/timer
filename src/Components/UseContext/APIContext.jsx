import { createContext } from 'react'

export let APIData = createContext()
// eslint-disable-next-line react/prop-types
function APIContext({children}) {


  return (
    <div>
      <APIData.Provider value={"FROM CONTEXT API"}>
        {children}
      </APIData.Provider>
    </div>
  )
}

export default APIContext