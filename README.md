# :school: 학생 관리 서비스 SMS
<br />

## :page_facing_up: 목차
1. 프로젝트 소개
2. 프로젝트 기능
   * [1. 학생 성적 등록](#1-학생-성적-등록)
   * [2. 학번으로 학생 검색](#2-학번으로-학생-검색)
   * [3. 이름으로 학생 검색](#3-이름으로-학생-검색)
   * [4. 학번으로 학생정보 삭제](#4-학번으로-학생정보-삭제)
   * [5. 정렬](#5-정렬)
   * [6. 유효성 검증](#6-유효성-검증)
<br />

## :eyes: 1. 프로젝트 소개
자바스크립트 객체를 통해 학생 목록 저장 및 관리 가능한 간단한 웹 페이지 <br />
화면구현은 Bootstrap을 주로 이용해서 제작. <br />
<br /><br />

학생 정보를 배열에 담아 관리하고, Local storage에 저장해서 학생 정보를 이용한다. <br />
자바스크립트를 위주로 구현. <br />
<br /><br />

:calendar: 프로젝트 기간 : 2023년 6월 27일 ~ 2023년 6월 30일 <br />
:hammer: Tools : ![Visual Studio Code](https://img.shields.io/badge/VS%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white) <br />
:books: languages : ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) 
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white) <br />
<br />

## :pushpin: 2. 프로젝트 기능
## 1. 학생 성적 등록
* 사용자로 부터 학번, 이름, 국어점수, 영어점수, 수학점수를 입력받아 등록한다.
* 총점, 평균이 자동으로 계산되어 입력되어 지고 등록한 학생들 중에 순위를 매겨 화면에 보여준다. <br />

![1 학생성적등록](https://github.com/HeeYeong91/project_sms/assets/139057065/3eb5fa0a-0542-4e3e-ad00-d86f4c11883c) <br />
[목차](#page_facing_up-목차)

## 2. 학번으로 학생 검색
* 검색을 위해 드롭다운 메뉴에서 '학번'선택 후 입력 창에 학번을 입력하고 검색버튼을 눌러 학번으로 학생을 검색한다. <br />

![2 학번으로학생검색](https://github.com/HeeYeong91/project_sms/assets/139057065/76c34ed4-7087-46a1-b69a-4ac2713bc24b) <br />
[목차](#page_facing_up-목차)

## 3. 이름으로 학생 검색
* 검색을 위해 드롭다운 메뉴에서 '이름'선택 후 입력 창에 이름을 입력하고 검색버튼을 눌러 이름으로 학생을 검색한다. <br />

![3 이름으로학생검색](https://github.com/HeeYeong91/project_sms/assets/139057065/661406e1-9026-4cec-8762-4a2c101d596b) <br />
[목차](#page_facing_up-목차)

## 4. 학번으로 학생정보 삭제
* 삭제를 위해 드롭다운 메뉴에서 '학번'선택 후 입력 창에 학번을 입력하고 삭제버튼을 눌러 학번으로 학생정보를 삭제한다. <br />
* Alert는 SweetAlert2를 이용하여 제작 <br />

![4 학번으로학생정보삭제](https://github.com/HeeYeong91/project_sms/assets/139057065/7b7790f0-1601-436d-b7d7-5e17e2238342) <br />
[목차](#page_facing_up-목차)

## 5. 정렬
* 학생 정보의 기본 정력 방식은 '학번' 오름차순으로 되어있다.
* 정렬방식을 드롭다운 메뉴에서 '기본', '성적', '이름'을 선택하여 변경할 수 있다. <br />

![5 정렬](https://github.com/HeeYeong91/project_sms/assets/139057065/bc15fafe-288c-4d09-87a2-e24c1122a881) <br />
[목차](#page_facing_up-목차)

## 6. 유효성 검증
* 유효성 검증을 위한 Validator 클래스를 만들어 사용했다.
* hasText() : 입력 값이 있는지 확인 <br />
* hasSpace() : 입력 값의 공백이 있는지 확인 <br />

![6 유효성검증](https://github.com/HeeYeong91/project_sms/assets/139057065/6357739f-529c-438a-9374-a6e8b85329dd) <br />
[목차](#page_facing_up-목차)
