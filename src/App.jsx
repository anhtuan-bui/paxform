import "./App.scss";
// import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
// import Personal from "./pages/Personal/Personal";
import FAQ from "./pages/FAQ/FAQ";
// import Resources from "./pages/Resources/Resources";
import GlobalPrivacyPolicy from "./pages/GlobalPrivacyPolicy/GlobalPrivacyPolicy";
import SecurityPolicy from "./pages/SecurityPolicy/SecurityPolicy";
import NotFound from "./pages/NotFound/NotFound";
import { lazy, Suspense } from "react";

import { ApolloProvider } from "@apollo/client/react";
import client from "./configurations/apollo";
import { gql } from "@apollo/client";

const Resources = lazy(() => import("./pages/Resources/Resources"));
const Blogs = lazy(() => import("./pages/Blogs/Blogs"));
const Home = lazy(() => import("./pages/Home/Home"));
const Personal = lazy(() => import("./pages/Personal/Personal"));
const UseCases = lazy(() => import("./pages/UseCases/UseCases"));

const LoginClient = gql`
  mutation LoginUser {
    login(input: { username: "client", password: "client" }) {
      authToken
      user {
        id
        name
      }
    }
  }
`;

function App() {
  if (!localStorage.getItem("token")) {
    client
      .mutate({ mutation: LoginClient })
      .then((result) =>
        localStorage.setItem("token", result.data.login.authToken)
      );
  }

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
}

export default App;
