import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfileNavContainer from "./containers/Navbar";
import FilterContainer from "./containers/Filter";
import ProfileFeedsContainer from "./containers/Profile_feeds_container";

import ProfileAdmin from "./pages/Profile_admin";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Feedbacks from "./pages/Feedbacks";

import Layout from "./containers/Layout";

import "./styles/containers/app_container.css";

function App() {
  // let isLoggedIn = true;
  // let content;

  // if (isLoggedIn) {
  //   content = <Login />;
  // } else {
  //   content = <Signup />;
  // }

  return (
    <div className="app_container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/*<Route index element={<ProfileNavContainer />} />*/}
            <Route path="/profile-admin" element={<ProfileAdmin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/feedbacks" element={<Feedbacks />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
        {/*<FilterContainer />*/}
        {/*<ProfileFeedsContainer />*/}
        {/*{content}*/}
      </BrowserRouter>
    </div>
  );
}

export default App;

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./containers/Layout";
// import ProfileAdmin from "./pages/Profile_admin";
// import Signup from "./pages/Signup";
// import Login from "./pages/Login";
// import Feedbacks from "./pages/Feedbacks";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route path="profile-admin" element={<ProfileAdmin />} />
//           <Route path="signup" element={<Signup />} />
//           <Route path="login" element={<Login />} />
//           <Route path="feedbacks" element={<Feedbacks />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
