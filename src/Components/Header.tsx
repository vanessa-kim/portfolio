import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { useEffect, useState } from "react";

const HeaderWrapper = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	display: flex;
	height: 60px;
	align-items: center;
	border-bottom: 1px solid var(--border);
	padding: 0 30px;
	justify-content: space-between;
	backdrop-filter: blur(10px);
	background: var(--header-bg);

	.header-group {
		display: flex;
		font-size: 12px;

		h1 {
			display: block;
			padding: 20px 10px 20px 0;
			cursor: pointer;
			font-family: "Kumbh Sans", sans-serif;
			font-weight: 700;

			&:hover {
				color: var(--black-90);
			}
		}
	}

	ul {
		display: flex;

		li {
			&.active a {
				font-weight: 500;
			}
			a {
				font-family: "Kumbh Sans", sans-serif;
				font-weight: 300;
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
			font-family: "Kumbh Sans", sans-serif;
			font-weight: 500;

			svg {
				font-size: 20px;
			}
		}
	}
`;

const MENUS = [
	{ path: "/about", name: "ABOUT" },
	{ path: "/work", name: "WORK" },
	{ path: "/contact", name: "CONTACT" },
];

function Header() {
	const [path, setPath] = useState("/");
	const location = useLocation();

	useEffect(() => {
		setPath(location?.pathname);
	}, [location]);

	return (
		<HeaderWrapper>
			<div className="header-group">
				<h1>
					<Link to="/">VANESSA STUDIO</Link>
				</h1>
				<ul>
					{MENUS.map((menu) => (
						<li key={menu.name} className={path === menu.path ? "active" : ""}>
							<Link to={menu.path}>{menu.name}</Link>
						</li>
					))}
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
