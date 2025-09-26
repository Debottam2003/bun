import { useState } from "react";

export function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      // const response = await fetch("http://localhost:3333/healthyfy");
      // const resData = await response.json();
      // console.log(resData);
      // setData(resData);
      console.log("hello world");
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  return (
    <div className="app">
      <button onClick={getData}>Get Data</button>
      <div className="cards">
        {Array.isArray(data) &&
          data.map((item) => (
            <div className="card" key={item.rid}>
              <img src={item.imageurl} alt={item.name} />
              <h3>{item.name}</h3>
              <p>
                <strong>Cuisine:</strong> {item.cuisine}
              </p>
              <p>
                <strong>Type:</strong> {item.type}
              </p>
              <p>❤️ {item.likes_count} likes</p>
            </div>
          ))}
      </div>

      <style>{`
        .app {
          font-family: Arial, sans-serif;
          padding: 32px;
          background: #f9f9f9;
          min-height: 100vh;
        }

        button {
          padding: 10px 20px;
          background: #007bff;
          color: #fff;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
          margin-bottom: 24px;
        }
        button:hover {
          background: #0056b3;
        }

        .cards {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 20px;
        }

        .card {
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          overflow: hidden;
          transition: transform 0.2s;
        }

        .card:hover {
          transform: translateY(-4px);
        }

        .card img {
          width: 100%;
          height: 160px;
          object-fit: cover;
        }

        .card h3 {
          margin: 12px 16px 4px;
          font-size: 18px;
          color: #333;
        }

        .card p {
          margin: 4px 16px 12px;
          font-size: 14px;
          color: #555;
        }
      `}</style>
    </div>
  );
}

export default App;
