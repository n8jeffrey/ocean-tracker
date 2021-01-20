import { useState, useEffect } from "react";
import Map from "./components/Map";
import Loader from "./components/Loader";
import Header from "./components/Header";

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch("https://hotline.whalemuseum.org/api.json");
      const events = await res.json();

      setTimeout(() => {
        setEventData(events);
        setLoading(false);
      }, 1500);
    };

    fetchEvents();
  }, []);

  return (
    <div className="App">
      <Header />
      {!loading ? <Map eventData={eventData} /> : <Loader />}
    </div>
  );
}

export default App;

// API Key AIzaSyBfWEPGdXo4WDIfX7QccgP4kcINCsgOh0s
