import ClassCom1 from "./ClassComponent/UseContext/ClassCom1";
import ClassUseContext from "./ClassComponent/UseContext/ClassUseContext";
// import APIContext from "./Components/UseContext/APIContext";
// import Component1 from "./Components/UseContext/Component1";

function App() {
  return (
    <>
      {/* <APIContext>
   
        <Component1 />
      </APIContext> */}

      <ClassUseContext>
        <ClassCom1 />

      </ClassUseContext>
    </>
  );
}

export default App;
