import axios from "axios";
import React, { useEffect, useState } from "react";

const WithFetchUserList = (Component) => {
  const Hoc = (props) => {
    const [userList, setUserList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    function getAllUsers() {
      const URL = "https://jsonplaceholder.typicode.com/users";
      setLoading(true);
      axios
        .get(URL)
        .then((response) => {
          if (response) {
            setUserList(response.data);
          }
          setLoading(false);
          console.log(response);
        })
        .catch((error) => {
          setLoading(false);
          setError(error?.message);
          console.log("Error", error);
        });
    }

    useEffect(() => {
      getAllUsers();
    }, []);

    return (
      <>
        <Component
          {...props}
          users={userList}
          loading={loading}
          error={error}
        />
      </>
    );
  };
  return Hoc;
};

export default WithFetchUserList;
