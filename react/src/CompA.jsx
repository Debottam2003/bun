import { styleObj } from "./Style";
import { UserContext } from "./Context";
import { useContext } from "react";

function CompA() {
  const { name, setName } = useContext(UserContext);
  return <div style={styleObj}>CompA {name}</div>;
}

export default CompA;
