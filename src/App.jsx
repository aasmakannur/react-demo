// import { BrowserRouter } from "react-router-dom";
import "./App.css";
import UserList from "./Components/UserList";
import Users from "./Components/Users";
import WithFetchUserList from "./Components/WithFetchUserList";
// import { Route, Routes } from "react-router-dom";
import Generic from "./Components/Generic";
function App() {
  // const TestUserList = WithFetchUserList(UserList);

  return (
    <>
      {/* <BrowserRouter>
        {/* <TestUserList /> */}

      {/* <Routes>
          <Route path=" " element={<UserList />}></Route>
        </Routes>
      </BrowserRouter> */}
      <UserList />
      {/* <Users /> */}
    </>
  );
}

export default App;
