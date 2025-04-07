import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Generic = (Component, URL) => {
  const Hoc = (props) => {
    const [data, setdata] = useState([]);
    const [loading, setLoading] = useState(false);

    function getAllUsers() {
      //   const URL = "https://jsonplaceholder.typicode.com/users";
      setLoading(true);
      axios
        .get(URL)
        .then((response) => {
          if (response) {
            setdata(response.data);
          }
          setLoading(false);
          console.log(response);
        })
        .catch((error) => {
          setLoading(false);
          console.log("Error", error);
        });
    }
    useEffect(() => {
      getAllUsers();
    }, []);
    return <Component {...props} data={data} loading={loading} />;
  };
  return Hoc;
};

export default Generic;
