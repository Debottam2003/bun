import { styleObj } from "./Style";
import { UserContext } from "./Context";
import { useContext } from "react";

function CompC() {
  let { name, setName } = useContext(UserContext);
  return <div style={styleObj}>CompC {name}</div>;
}

export default CompC;
