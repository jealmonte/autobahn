import { useEffect } from "react";

const [carData, setCarData] = useState([]);

  useEffect(() => {
    fetch("/scrape_listings/")
      .then((response) => response.json())
      .then((data) => setCarData(data))
      .catch((error) => console.error("Error fetching car data:", error));
  }, []);

  <Cards carData={carData} />