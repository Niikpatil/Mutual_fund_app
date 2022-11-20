import React, { useContext } from "react";
import { FundContext } from "../context";

export const FundList = ({ schameName }) => {
  const { setSearchText } = useContext(FundContext);

  return (
    <div>
      <p>{schameName}</p>
    </div>
  );
};
