import { createContext, useState } from "react";

export const UserContext = createContext();

function Context({ children, style }) {
  let [name, setName] = useState("Okudera");
  return (
    <UserContext.Provider value={{ name, setName }}>
      <div style={style}>
        <button
          onClick={() => {
            const newName = prompt("Enter new name");
            setName(newName);
          }}
        >
          Change Name
        </button>
        {children}
      </div>
    </UserContext.Provider>
  );
}

export default Context;
