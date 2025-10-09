import { styleObj } from "./Style";
import { UserContext } from "./Context";
import { useContext } from "react";

function CompB() {
  let { name, setName } = useContext(UserContext);
  return <div style={styleObj}>CompB {name}</div>;
}

export default CompB;
