import "./App.scss";
// import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
// import Personal from "./pages/Personal/Personal";
import FAQV1 from "./pages/FAQV1/FAQV1";
// import Resources from "./pages/Resources/Resources";
import NotFound from "./pages/NotFound/NotFound";
import { lazy, Suspense, useEffect } from "react";
import { ApolloProvider } from "@apollo/client/react";
import client from "./configurations/apollo";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import Legal from "./pages/Legal/Legal";
import LegalDetail from "./pages/LegalDetail/LegalDetail";
import ContactUs from "./pages/ContactUs/ContactUs";
import Company from "./pages/Company/Company";
// import Pricing from "./pages/Pricing/Pricing";
import getToken from "./lib/clientToken";
import GQ from "./pages/GQ/GQ";
// import BlogDetails from "./blogs/blogs.jsx";

const Resources = lazy(() => import("./pages/Resources/Resources"));
const Pricing = lazy(() => import("./pages/Pricing/Pricing"));
const Blogs = lazy(() => import("./pages/Blogs/Blogs"));
const BlogDetails = lazy(() => import("./pages/BlogDetails/BlogDetails"));
const Home = lazy(() => import("./pages/Home/Home"));
// const Home = lazy(() => import("./pages/Home/Home"));
const Personal = lazy(() => import("./pages/Personal/Personal"));
const Business = lazy(() => import("./pages/Business/Business"));
const UseCase = lazy(() => import("./pages/UseCase/UseCase"));
const FAQs = lazy(() => import("./pages/FAQs/FAQs"));
const ResourceDetail = lazy(() => import("./pages/ResourceDetail/ResourceDetail"))
const DataSecurity = lazy(() => import("./pages/DataSecurity/DataSecurity"))

function App() {
	const MINUTE_MS = 250000;

	getToken();
	useEffect(() => {
		const interval = setInterval(() => {
			localStorage.removeItem("clientToken");
			getToken();
		}, MINUTE_MS);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<ApolloProvider client={client}>
			<BrowserRouter>
				<Suspense>
					<Routes>
						<Route path="/" element={<Layout />}>
							<Route index element={<Home />} />
							<Route path="personal" element={<Personal />} />
							<Route path="business" element={<Business />} />
							<Route path="pricing" element={<Pricing />} />
							<Route path="faqs" element={<FAQs />} />
							<Route path="faqv1" element={<FAQV1 />} />
							<Route path="resources" element={<Resources />} />
							<Route path="resources/:slug" element={<ResourceDetail />} />
							<Route path="blogs" element={<Blogs />} />
							<Route path="blogs/:slug" element={<BlogDetails />} />
							<Route path="blog-details" element={<BlogDetails />} />
							<Route path="privacy-policy" element={<PrivacyPolicy />} />{" "}
							<Route path="legal" element={<Legal />} />
							<Route path="legal/:slug/:slug" element={<LegalDetail />} />
							<Route path="legal-detail" element={<LegalDetail />} />
							<Route path="not-found" element={<NotFound />} />
							<Route path="use-cases/:slug" element={<UseCase />} />
							<Route path="contact-us" element={<ContactUs />} />
							<Route path="company" element={<Company />} />
							<Route path="data-security" element={<DataSecurity />} />
							<Route path="gq" element={<GQ />} />

							{/* <Route path="*" element={<NotFound />} /> */}
							<Route path="resource-details" element={<ResourceDetail />} /> 
						</Route>
					</Routes>
				</Suspense>
			</BrowserRouter>
		</ApolloProvider>
	);
}

export default App;
