import Login from "./auth/login";
import Content from "./dashboard/content";
import Layout from "./dashboard/layout";
import Create from "./auth/create";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DataForm from "./dashboard/dataForm";
import FormEdit from "./dashboard/list-job-vacancy/formEdit";
import { GlobalProvider } from "./context/globalContext";
import Profil from "./dashboard/profil";
import Change from "./auth/change";
import SectionFilter from "./landing-page/sectionFilter";
import Error from "./landing-page/error";
import Detail from "./landing-page/detail";
import LayoutUser from "./layout/layoutUser";
import Section from "./landing-page/section";
import LayoutAdmin from "./layout/layoutAdmin";
import Cookies from "js-cookie";
import Oops from "./landing-page/oops";
function App() {
  const LoginRoute = (props) => {
    if (Cookies.get("token") !== undefined) {
      return <Navigate to="/" />;
    } else if (Cookies.get("token") === undefined) {
      return props.children;
    }
  };
  const LoginRoute1 = (props) => {
    if (Cookies.get("token") !== undefined) {
      return props.children;
    } else if (Cookies.get("token") === undefined) {
      return <Navigate to="/oops" />;
    }
  };
  return (
    <>
      <BrowserRouter>
        <GlobalProvider>
          <Routes>
            <Route
              path="/dashboard/list-job-vacancy"
              element={
                <LayoutAdmin>
                  <Content />
                </LayoutAdmin>
              }
            />

            <Route
              path="/login"
              element={
                <LoginRoute>
                  <Login />
                </LoginRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <LoginRoute1>
                  <LayoutAdmin>
                    <Layout />
                  </LayoutAdmin>
                </LoginRoute1>
              }
            />
            <Route path="/create" element={<Create />} />
            <Route
              path="/dashboard/profile"
              element={
                <LoginRoute1>
                  <LayoutAdmin>
                    <Profil />
                  </LayoutAdmin>
                </LoginRoute1>
              }
            />
            <Route
              path="/dashboard/change-password"
              element={
                <LoginRoute1>
                  <LayoutAdmin>
                    <Change />
                  </LayoutAdmin>
                </LoginRoute1>
              }
            />
            <Route
              path="/dashboard/list-job-vacancy/form"
              element={
                <LoginRoute1>
                  <LayoutAdmin>
                    <DataForm />
                  </LayoutAdmin>
                </LoginRoute1>
              }
            />
            <Route
              path="/dashboard/list-job-vacancy/edit/:idData"
              element={
                <LayoutAdmin>
                  <FormEdit />
                </LayoutAdmin>
              }
            />
            {/* <Route path="/dashboard/list-job-vacancy/edit" element={<FormEdit/>}/> */}
            <Route
              path="/"
              element={
                <LayoutUser>
                  <Section />
                </LayoutUser>
              }
            />
            <Route
              path="/vacancy"
              element={
                <LayoutUser>
                  <SectionFilter />
                </LayoutUser>
              }
            />
            <Route
              path="/*"
              element={
                <LayoutUser>
                  <Error />
                </LayoutUser>
              }
            />
            <Route path="/detail/:id" element={<Detail />} />
            <Route
              path="/oops"
              element={
                <LayoutUser>
                  <Oops />
                </LayoutUser>
              }
            />
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
