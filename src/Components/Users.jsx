import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const Users = () => {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);

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
        console.log("Error", error);
      });
  }

  useEffect(() => {
    getAllUsers();
  }, []);

  function test() {
    console.log("test");
  }

  return (
    <>
      <div className="container">
        <h1>Users Component</h1>
        <h5>User Datails</h5>
      </div>
      {loading && (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}

      <div className="container">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Sr No</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">City</th>
              <th scope="col">Phone</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>
                  {" "}
                  <Link to={`/user-details/${user.id}`}>
                    {" "}
                    {user.name}{" "}
                  </Link>{" "}
                </td>
                <td>{user.email}</td>
                <td>{user.address.city}</td>
                <td>{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Users;
