import React, { useState, useEffect } from "react";

function useLocalStorageWishlist(key, initialValue) {
  const [wishList, setWishList] = useState(() => {
    const jsonList = localStorage.getItem(key);

    if (jsonList != null) return JSON.parse(jsonList);

    if (typeof initialValue === "function") {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(wishList));
  }, [key, wishList]);

  return [wishList, setWishList];
}

export default useLocalStorageWishlist;
