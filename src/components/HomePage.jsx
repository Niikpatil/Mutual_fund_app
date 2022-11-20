import React, { useContext, useEffect, useState } from "react";
import { FundContext } from "./context";

export const HomePage = () => {
  const { setSearchText } = useContext(FundContext);
  useEffect(() => {
    setSearchText("Tata");
  }, []);
  return;
};
