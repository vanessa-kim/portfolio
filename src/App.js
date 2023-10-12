import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import ResetStyle from "./SCSS/reset";
import CommonStyle from "./SCSS/common";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Routes/About";
import Contact from "./Routes/Contact";
import Main from "./Routes/Main";
import Work from "./Routes/Work";

const ContentArea = styled.div`
	padding-top: 60px;
`;

function App() {
	return (
		<>
			<ResetStyle />
			<CommonStyle />
			<ContentArea>
				<Router>
					<Header />
					<Routes>
						<Route path="/" element={<Main />} />
						<Route path="/about" element={<About />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/work" element={<Work />} />
					</Routes>
					<Footer />
				</Router>
			</ContentArea>
		</>
	);
}

export default App;
