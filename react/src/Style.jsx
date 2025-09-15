const styleObj = {
  width: "400px",
  height: "400px",
  border: "2px solid black",
  display: "flex",
  flexWrap: "wrap",
  backgroundColor: "#0e0226ff",
  color: "white",

  // ✅ Add these for long names
  overflowWrap: "anywhere", 
  wordBreak: "break-word",
  whiteSpace: "normal",
};


export { styleObj }; // right -> as it is a declaration
// export styleObj; wrong -> as it is a expression (object reference)
