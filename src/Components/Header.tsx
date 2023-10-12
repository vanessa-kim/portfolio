import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderWrapper = styled.header`
	display: flex;
	border-bottom: 1px solid #ddd;
	padding: 0 30px;
	justify-content: space-between;
	.header-group {
		display: flex;
		font-size: 12px;

		h1 {
			display: block;
			padding: 20px 30px;
			cursor: pointer;
			&:hover {
				font-weight: 500;
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
				margin: 15px 10px;
			}
		}
	}
`;

function Header() {
	return (
		<HeaderWrapper>
			<div className="header-group">
				<h1>
					<Link to="/">LOGO</Link>
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

			<ul>
				<li>
					<button>KO/EN</button>
				</li>
				<li>
					<button>on/off</button>
				</li>
				<li>
					<button>toggle</button>
				</li>
			</ul>
		</HeaderWrapper>
	);
}

export default Header;
