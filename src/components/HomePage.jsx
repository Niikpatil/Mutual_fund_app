import axios from "axios";
import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [funds, setFunds] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.mfapi.in/mf`)
      .then((res) => {
        console.log(res);
        setFunds(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const fundList = funds.map((e) => <li keys={e.id}>{e.schemeName}</li>);
  return (
    <div>
      <ol>{fundList}</ol>
    </div>
  );
};

export default HomePage;
