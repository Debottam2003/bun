import { useEffect, useState } from "react";

type elementType = {
  id: number;
  sol: number;
  img_src: string;
  camera?: { full_name: string };
  earth_date?: string;
};

function App() {
  const [roverData, setRoverData] = useState<elementType[]>([
    {
      id: 0,
      sol: 0,
      img_src:
        "https://cdn.pixabay.com/photo/2012/11/28/09/08/mars-67522_1280.jpg",
    },
  ]);
  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch(
          "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=XdKGXnVSINmxxet1VVru7ipzwGkgCfwIqBi2WB8O"
        );
        let data = await response.json();
        let { photos } = data;
        photos = photos.slice(0, 200);
        setRoverData(photos);
      } catch (err: any) {
        console.log(err.message);
      }
    }
    fetchData();
  });
  return (
    <div className="app">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {roverData.map((ele) => {
          return (
            <div key={ele.id} style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", border: "2px solid blue"}} >
              <img
                src={ele.img_src}
                style={{ width: "400px", height: "400px" }}
                alt="image"
              />
              <h4>{ele.camera?.full_name}</h4>
              <h4>{ele.earth_date}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
