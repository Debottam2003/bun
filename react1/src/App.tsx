import CompA from "./CompA";
import CompB from "./CompB";
import CompC from "./CompC";
import CompD from "./CompD";
import Context from "./Context";

function App() {
  return (
    <Context
      style={{
        display: "flex",
        gap: "10px",
        flexDirection: "row",
        flexFlow: "row wrap",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CompA></CompA>
      <CompA></CompA>
      <CompB></CompB>
      <CompC></CompC>
      <CompD></CompD>
      <CompD></CompD>
    </Context>
  );
}

export default App;
