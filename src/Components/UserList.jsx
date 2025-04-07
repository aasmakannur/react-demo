import React from "react";
import { Link } from "react-router-dom";
import Generic from "./Generic";

const UserList = (props) => {
  const URL = "https://jsonplaceholder.typicode.com/users";
  const { data, loading } = props;
  console.log(data);

  return (
    <>
      <div className="container">
        <h1>Users Component</h1>
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
            {data.data.map((user, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>
                  <Link to={`/user-details/${user.id}`}>{user.name}</Link>
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

export default Generic(UserList, "https://jsonplaceholder.typicode.com/users");
