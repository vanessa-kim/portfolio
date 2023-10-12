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
	box-sizing: border-box;

	.content-area {
		min-height: calc(100vh - 132px);
	}
`;

function App() {
	return (
		<>
			<ResetStyle />
			<CommonStyle />
			<ContentArea>
				<Router>
					<Header />
					<div className="content-area">
						<Routes>
							<Route path="/" element={<Main />} />
							<Route path="/about" element={<About />} />
							<Route path="/contact" element={<Contact />} />
							<Route path="/work" element={<Work />} />
						</Routes>
					</div>
					<Footer />
				</Router>
			</ContentArea>
		</>
	);
}

export default App;
