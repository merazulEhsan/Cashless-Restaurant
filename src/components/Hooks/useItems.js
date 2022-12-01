import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";

const useItems = () => {
  // const [items,setItems] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(()=>{
  //     fetch("https://cashless-restaurant.herokuapp.com/items")
  //     .then(res => res.json())
  //     .then(data => {setItems(data); setIsLoading(false)})
  // },[isLoading])

  const {
    isLoading,
    data: items,
    refetch,
  } = useQuery("items", () =>
    fetch("https://cashless-restaurant.herokuapp.com/items").then((res) =>
      res.json()
    )
  );

  return [items, isLoading, refetch];
};

export default useItems;
