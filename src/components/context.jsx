import axios from "axios";
import React, { Children, createContext, useEffect, useState } from "react";

const initialState = {
  funds: [],
  searchText: "",
  setSearchText: () => {},
};
const FundContext = createContext(initialState);

const FundProvider = () => {
  const [searchText, setSearchText] = useState("");
  const [funds, setFunds] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.mfapi.in/mf/search?q=${searchText}`)
      // .get(`https://api.mfapi.in/mf`)
      .then((res) => {
        console.log(res);
        setFunds(res.data);
      })
      .catch((err) => console.log(err));
  }, [searchText]);

  // const fundList = funds.map((e) => <li keys={e.id}>{e.schemeName}</li>);

  return (
    <div>
      <FundContext.Provider
        value={{ searchText, setSearchText, funds, loading, setLoading }}
      >
        {children}
      </FundContext.Provider>

      {/* <ol>{fundList}</ol> */}
    </div>
  );
};

export { FundContext, FundProvider };
