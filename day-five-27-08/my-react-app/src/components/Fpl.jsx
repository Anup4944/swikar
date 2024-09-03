import axios from "axios";

const Fpl = () => {
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://fantasy.premierleague.com/api/bootstrap-static"
      );
      const data = response.data;
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchData();
  return <div>Fpl</div>;
};

export default Fpl;
