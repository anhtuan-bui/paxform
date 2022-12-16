import "./App.scss";
// import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
// import Personal from "./pages/Personal/Personal";
import FAQ from "./pages/FAQ/FAQ";
// import Resources from "./pages/Resources/Resources";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import LegalDetail from "./pages/LegalDetail/LegalDetail";
import NotFound from "./pages/NotFound/NotFound";
import { lazy, Suspense } from "react";

const Resources = lazy(() => import("./pages/Resources/Resources"));
const Blogs = lazy(() => import("./pages/Blogs/Blogs"));
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
						<Route path="blog" element={<Blogs />} />
						<Route path="privacy-policy" element={<PrivacyPolicy />} />
						<Route path="legal-detail" element={<LegalDetail />} />
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
