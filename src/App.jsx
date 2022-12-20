import "./App.scss";
// import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
// import Personal from "./pages/Personal/Personal";
import FAQ from "./pages/FAQ/FAQ";
// import Resources from "./pages/Resources/Resources";
import NotFound from "./pages/NotFound/NotFound";
import { lazy, Suspense } from "react";

import { ApolloProvider } from "@apollo/client/react";
import client from "./configurations/apollo";
import GlobalPrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import SecurityPolicy from "./pages/LegalDetail/LegalDetail";
import { LOGIN_CLIENT } from "./lib/graphqlQuery";

const Resources = lazy(() => import("./pages/Resources/Resources"));
const Blogs = lazy(() => import("./pages/Blogs/Blogs"));
const Home = lazy(() => import("./pages/Home/Home"));
const Personal = lazy(() => import("./pages/Personal/Personal"));
const UseCases = lazy(() => import("./pages/UseCases/UseCases"));

const parseJwt = (token) => {
  try {
    return JSON.parse(window.atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};

const login = () => {
  client
    .mutate({ mutation: LOGIN_CLIENT })
    .then((result) =>
      localStorage.setItem("clientToken", result.data.login.authToken)
    );
};

const getToken = () => {
  let token = localStorage.getItem("clientToken");
  if (token) {
    const decodedToken = parseJwt(token);
    if (decodedToken.exp < Date.now() / 1000) {
      login();
    }
  } else {
    login();
  }
};

const App = () => {
  getToken();

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Suspense>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="personal" element={<Personal />} />
              <Route path="faq" element={<FAQ />} />

              <Route path="resources" element={<Resources />} />
              <Route path="blogs" element={<Blogs />} />
              <Route
                path="global-privacy-policy"
                element={<GlobalPrivacyPolicy />}
              />
              <Route path="security-policy" element={<SecurityPolicy />} />
              <Route path="not-found" element={<NotFound />} />
              <Route path="usecases" element={<UseCases />} />
              {/* <Route path="*" element={<NotFound />} /> */}
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
