import { useContext } from "react";
import { APIData } from "./APIContext";

function Component1() {
  let data = useContext(APIData);

  console.log(data);
  return <div>Component1</div>;
}

export default Component1;
