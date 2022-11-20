import React, { useContext } from "react";
import { FundContext } from "./context";
import { FundList } from "./Pages/FundList";

const SearchForm = () => {
  const { funds, searchText, setSearchText } = useContext(FundContext);

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          // type="text"
        />

        {searchText.length !== 0 && (
          <div className=" asd ">
            {/* {loading && <Loading />} */}
            {!funds.length && <p className="sa">No Funds found.</p>}
            {funds.map((fund, index) => {
              return <FundList key={index} {...fund} />;
            })}
          </div>
        )}
      </form>
    </div>
  );
};

export default SearchForm;
