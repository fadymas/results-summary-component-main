import { useEffect, useState } from "react";
import Result from "./components/Result";
import Summary from "./components/Summary";
function App() {
  const [rates, setRates] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("./data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error");
        }
        return response.json();
      })
      .then((data) => {
        setRates(data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <main
      className={`lg:flex lg:w-183.75 bg-white container lg:rounded-r-[1.5rem] ${
        loading ? "animate-pulse" : null
      }`}
    >
      <Result loading={loading} />
      <Summary data={rates} loading={loading} />
    </main>
  );
}

export default App;
