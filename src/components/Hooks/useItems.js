import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import mainPath from "../../Utility";

const useItems = () => {
  const {
    isLoading,
    data: items,
    refetch,
  } = useQuery("items", () =>
    fetch(mainPath + "/items").then((res) => res.json())
  );

  return [items, isLoading, refetch];
};

export default useItems;
