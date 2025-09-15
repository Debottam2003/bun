import { styleObj } from "./Style";
import { UserContext } from "./Context";
import { useContext } from "react";

function CompD() {
  let { name, setName } = useContext(UserContext);
  return <div style={styleObj}>CompD {name}</div>;
}

export default CompD;
