import styled from "styled-components";
import { Link } from "react-router-dom";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

const HeaderWrapper = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	display: flex;
	height: 60px;
	align-items: center;
	border-bottom: 1px solid #ddd;
	padding: 0 30px;
	justify-content: space-between;
	backdrop-filter: blur(10px);
	background: #ffffff77;

	.header-group {
		display: flex;
		font-size: 12px;

		h1 {
			display: block;
			padding: 20px 10px 20px 0;
			cursor: pointer;
			font-weight: 700;

			&:hover {
				color: #999;
			}
		}
	}

	ul {
		display: flex;

		li {
			a {
				display: block;
				padding: 20px 30px;
				cursor: pointer;

				&:hover {
					font-weight: 500;
				}
			}

			button {
				margin: 15px;
			}
		}
	}

	.header-function-group {
		display: flex;
		align-items: center;

		button {
			border: none;
			padding: 0;
			background-color: transparent;

			svg {
				font-size: 20px;
			}
		}
	}
`;

function Header() {
	return (
		<HeaderWrapper>
			<div className="header-group">
				<h1>
					<Link to="/">VANESSA STUDIO</Link>
				</h1>
				<ul>
					<li>
						<Link to="/about">ABOUT</Link>
					</li>
					<li>
						<Link to="/work">WORK</Link>
					</li>
					<li>
						<Link to="/contact">CONTACT</Link>
					</li>
				</ul>
			</div>

			<ul className="header-function-group">
				<li>
					<button>EN</button>
				</li>
				<li>
					<button>
						<DarkModeOutlinedIcon />
					</button>
				</li>
			</ul>
		</HeaderWrapper>
	);
}

export default Header;
