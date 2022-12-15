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

const Resources = lazy(() => import("./pages/Resources/Resources"));
const Blog = lazy(() => import("./pages/Blog/Blog"))
const Home = lazy(() => import("./pages/Home/Home"));
const Personal = lazy(() => import("./pages/Personal/Personal"));
const UseCases = lazy(() => import("./pages/UseCases/UseCases"));

function App() {
	return (
		<BrowserRouter>
			<Suspense>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="personal" element={<Personal />} />
						<Route path="faq" element={<FAQ />} />

						<Route path="resources" element={<Resources />} />
						<Route path="blog" element={<Blog />} />
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
	);
}

export default App;
