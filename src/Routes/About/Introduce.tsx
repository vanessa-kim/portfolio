import styled from "styled-components";

const IntroduceWrap = styled.div`
	display: flex;
	gap: 50px;

	p {
		max-width: 550px;
		text-align: justify;
		text-indent: 20px;
	}

	aside {
		width: 400px;
		height: 500px;
		background: var(--section-bg);
		font-size: 0;
		border-radius: 10px;
	}
`;

function Introduce() {
	return (
		<IntroduceWrap>
			<div>
				<p>
					안녕하세요 저는 김예란(Vanessa Kim)입니다.
					<br /> 한국의 서울에 살고 있는 열정적인 UI 개발자입니다. 웹
					디자인/퍼블리싱 3년, 프론트엔드 4년의 경력을 갖고 있습니다. 솔루션
					개발 기업에서 UI 디자인과 퍼블리싱 업무를 담당했었고, 현재는 빅데이터
					전문 플랫폼 개발 기업에서 프론트엔드 업무를 담당하며 자체 솔루션을
					개발중입니다.
				</p>
				<br />
				<p>
					HTML5, CSS3로 웹표준을 준수한 마크업이 가능하며, 크로스브라우징,
					반응형 웹, 웹 접근성을 적용한 웹 개발을한 경험이 있습니다. Vue.js를
					사용해서 프로젝트 개발을 2년간 진행하였고, 현재는 React.js로
					프론트엔드 개발을 하고 있습니다. 디자인부터 시작하여, 퍼블리싱 단계를
					거쳐 꾸준한 공부와 실전 경험을 통해서 프론트엔드 개발자가 되었습니다.
					풍부한 웹개발 경험을 바탕으로, UI의 폭 넓은 이해를 갖고 있습니다. 제가
					가진 시각과 값진 경험은 저만이 가진 특별한 강점이라고 생각합니다. 저의
					능력을 발휘할 수 있는 기회를 감사히 여기며 일하고 있습니다. <br />
					저는 커뮤니케이션을 중요시 여겨서 함께 일하는 사람과의 의사소통을
					하려고 노력합니다. 상대방이 말하고 싶은 바를 먼저 귀기울이고 좋은
					관계가 될 수 있도록 노력합니다. 함께 일하는 동료가 된다면 서로 믿을 수
					있는 신뢰 관계를 구축하고 싶습니다.
				</p>
			</div>
			<aside>Vanessa picture</aside>
		</IntroduceWrap>
	);
}

export default Introduce;
