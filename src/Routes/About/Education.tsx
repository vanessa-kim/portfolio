function Education() {
	return (
		<>
			<table>
				<colgroup>
					<col width="160px" />
					<col width="190px" />
					<col />
				</colgroup>
				<thead>
					<tr>
						<th>수강/졸업 연도</th>
						<th>교육기관</th>
						<th>교육정보</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							2019.04 - <span className="chip">NOW</span>
						</td>
						<td>인프런</td>
						<td>JavaScript, Typescript, React, Vue 관련 인터넷 강의 수강</td>
					</tr>
					<tr>
						<td>2015.11</td>
						<td>TIS정보기술교육센터</td>
						<td>HTML5와 JavaScript를 활용한 웹프론트엔드 개발 실무 과정</td>
					</tr>
					<tr>
						<td>2015.11</td>
						<td>패스트캠퍼스</td>
						<td>JavaScript 부트 캠프 9기 JavaScript ES6 문법과 프로그래밍</td>
					</tr>
					<tr>
						<td>2014.02</td>
						<td>이화여자대학교</td>
						<td>시각디자인 학부 졸업</td>
					</tr>
					<tr>
						<td>2009.02</td>
						<td>덕원예술고등학교</td>
						<td>미술과 졸업</td>
					</tr>
				</tbody>
			</table>
		</>
	);
}

export default Education;
