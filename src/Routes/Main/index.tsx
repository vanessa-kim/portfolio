import styled from "styled-components";
import MainAbout from "./MainAbout";
import MainBanner from "./MainBanner";
import MainContact from "./MainContact";
import MainWork from "./MainWork";

const MainGrid = styled.section`
	display: grid;
	grid-template-columns: calc(40% - 7.5px) calc(60% - 7.5px);
	grid-auto-rows: minmax(100px, auto);
	gap: 15px;
	padding: 0 30px 30px;
	min-height: calc((((64vh - 60px) - 42px) - 45px));

	section:nth-child(3) {
		grid-column: 2/3;
		grid-row: 1/3;
	}
`;

function Main() {
	return (
		<>
			<MainBanner />
			<MainGrid>
				<MainAbout />
				<MainContact />
				<MainWork />
			</MainGrid>
		</>
	);
}

export default Main;
