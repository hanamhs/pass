// =======================================================================
// 1. 합격/불합격자 명단 통합 데이터 (실제 명단 정보)
//    - status 필드가 "합격" 또는 "불합격"으로 명확히 구분됩니다.
// =======================================================================
const candidates = [
    // --- [이전에 주신 합격자 명단 (Status: "합격"으로 가정)] ---
    { school: "윤슬중학교", class: 5, number: 26, name: "이준형", status: "합격" },
    { school: "덕풍중학교", class: 5, number: 22, name: "이준", status: "합격" },
    { school: "덕풍중학교", class: 4, number: 21, name: "유재은", status: "합격" },
    { school: "덕풍중학교", class: 2, number: 9, name: "김현서", status: "합격" },
    { school: "덕풍중학교", class: 3, number: 25, name: "정연우", status: "합격" },
    { school: "신평중학교", class: 4, number: 11, name: "성주환", status: "합격" },
    { school: "은가람중학교", class: 8, number: 5, name: "맹지유", status: "합격" },
    { school: "덕풍중학교", class: 6, number: 2, name: "권지민", status: "합격" },
    { school: "윤슬중학교", class: 1, number: 24, name: "이호준", status: "합격" },
    { school: "미사중학교", class: 12, number: 18, name: "이다인", status: "합격" },
    { school: "감일중학교", class: 8, number: 17, name: "송승연", status: "합격" },
    { school: "감일중학교", class: 3, number: 7, name: "김현호", status: "합격" },
    { school: "덕풍중학교", class: 1, number: 26, name: "최윤호", status: "합격" },
    { school: "미사강변중학교", class: 6, number: 21, name: "이준성", status: "합격" },
    { school: "윤슬중학교", class: 2, number: 14, name: "손준혁", status: "합격" },
    { school: "신평중학교", class: 7, number: 11, name: "박서정", status: "합격" },
    { school: "미사강변중학교", class: 8, number: 24, name: "신희원", status: "합격" },
    { school: "윤슬중학교", class: 13, number: 19, name: "이가은", status: "합격" },
    { school: "은가람중학교", class: 6, number: 17, name: "유아현", status: "합격" },
    { school: "미사중학교", class: 13, number: 12, name: "박지영", status: "합격" },
    { school: "감일중학교", class: 5, number: 26, name: "조원희", status: "합격" },
    { school: "윤슬중학교", class: 4, number: 3, name: "김다인", status: "합격" },
    { school: "윤슬중학교", class: 9, number: 25, name: "이유나", status: "합격" },
    { school: "판곡중학교", class: 11, number: 24, name: "조희원", status: "합격" },
    { school: "은가람중학교", class: 3, number: 25, name: "장민소", status: "합격" },
    { school: "윤슬중학교", class: 11, number: 1, name: "강성은", status: "합격" },
    { school: "미사중학교", class: 9, number: 27, name: "조수현", status: "합격" },
    { school: "미사중학교", class: 2, number: 18, name: "이서진", status: "합격" },
    { school: "미사중학교", class: 7, number: 4, name: "김가연", status: "합격" },
    { school: "신평중학교", class: 5, number: 8, name: "김혜윤", status: "합격" },
    { school: "미사중학교", class: 6, number: 33, name: "최하윤", status: "합격" },
    { school: "미사강변중학교", class: 2, number: 18, name: "오정우", status: "합격" },
    { school: "은가람중학교", class: 4, number: 26, name: "정재인", status: "합격" },
    { school: "신평중학교", class: 2, number: 3, name: "김동후", status: "합격" },
    { school: "은가람중학교", class: 1, number: 20, name: "이금비", status: "합격" },
    { school: "미사중학교", class: 7, number: 20, name: "박하음", status: "합격" },
    { school: "윤슬중학교", class: 8, number: 11, name: "박준혁", status: "합격" },
    { school: "미사강변중학교", class: 9, number: 33, name: "홍진우", status: "합격" },
    { school: "윤슬중학교", class: 3, number: 29, name: "조현호", status: "합격" },
    { school: "윤슬중학교", class: 3, number: 16, name: "송지우", status: "합격" },
    { school: "감일중학교", class: 3, number: 4, name: "김민정", status: "합격" },
    { school: "미사강변중학교", class: 12, number: 7, name: "김이찬", status: "합격" },
    { school: "미사강변중학교", class: 4, number: 26, name: "이채은", status: "합격" },
    { school: "미사중학교", class: 4, number: 21, name: "임소율", status: "합격" },
    { school: "미사강변중학교", class: 1, number: 11, name: "박주하", status: "합격" },
    { school: "미사강변중학교", class: 13, number: 7, name: "김서윤", status: "합격" },
    { school: "윤슬중학교", class: 4, number: 30, name: "지서준", status: "합격" },
    { school: "윤슬중학교", class: 13, number: 14, name: "손성원", status: "합격" },
    { school: "미사강변중학교", class: 11, number: 13, name: "박채희", status: "합격" },
    { school: "윤슬중학교", class: 1, number: 22, name: "이주하", status: "합격" },
    { school: "은가람중학교", class: 8, number: 17, name: "이예람", status: "합격" },
    { school: "윤슬중학교", class: 10, number: 12, name: "박은율", status: "합격" },
    { school: "감일중학교", class: 8, number: 3, name: "김동윤", status: "합격" },
    { school: "윤슬중학교", class: 10, number: 1, name: "강다영", status: "합격" },
    { school: "윤슬중학교", class: 11, number: 13, name: "성현준", status: "합격" },
    { school: "윤슬중학교", class: 9, number: 30, name: "차민상", status: "합격" },
    { school: "은가람중학교", class: 4, number: 20, name: "윤지은", status: "합격" },
    { school: "덕풍중학교", class: 4, number: 9, name: "김채은", status: "합격" },
    { school: "미사강변중학교", class: 10, number: 4, name: "김민준", status: "합격" },
    { school: "윤슬중학교", class: 3, number: 27, name: "이지우", status: "합격" },
    { school: "신평중학교", class: 6, number: 15, name: "박준후", status: "합격" },
    { school: "미사중학교", class: 5, number: 23, name: "이서윤", status: "합격" },
    { school: "미사강변중학교", class: 4, number: 8, name: "김준우", status: "합격" },
    { school: "미사강변중학교", class: 8, number: 6, name: "김예준", status: "합격" },
    { school: "은가람중학교", class: 3, number: 31, name: "허민우", status: "합격" },
    { school: "미사강변중학교", class: 6, number: 15, name: "박재민", status: "합격" },
    { school: "은가람중학교", class: 2, number: 8, name: "김호운", status: "합격" },
    { school: "덕풍중학교", class: 6, number: 6, name: "김지우", status: "합격" },
    { school: "덕풍중학교", class: 8, number: 9, name: "박혜원", status: "합격" },
    { school: "미사강변중학교", class: 1, number: 3, name: "김나윤", status: "합격" },
    { school: "윤슬중학교", class: 1, number: 10, name: "박정원", status: "합격" },
    { school: "미사강변중학교", class: 5, number: 15, name: "박건욱", status: "합격" },
    { school: "은가람중학교", class: 5, number: 21, name: "유예림", status: "합격" },
    { school: "감일중학교", class: 7, number: 9, name: "김현본", status: "합격" },
    { school: "신평중학교", class: 3, number: 11, name: "유다연", status: "합격" },
    { school: "미사강변중학교", class: 12, number: 13, name: "박시유", status: "합격" },
    { school: "하남중학교", class: 4, number: 5, name: "김승윤", status: "합격" },
    { school: "미사강변중학교", class: 8, number: 32, name: "하윤서", status: "합격" },
    { school: "미사중학교", class: 6, number: 20, name: "신석훈", status: "합격" },
    { school: "윤슬중학교", class: 11, number: 6, name: "김소율", status: "합격" },
    { school: "신평중학교", class: 1, number: 24, name: "전서연", status: "합격" },
    { school: "감일중학교", class: 4, number: 3, name: "김동환", status: "합격" },
    { school: "신평중학교", class: 3, number: 9, name: "양혜원", status: "합격" },
    { school: "미사중학교", class: 11, number: 1, name: "곽명지", status: "합격" },
    { school: "미사중학교", class: 11, number: 28, name: "진희찬", status: "합격" },
    { school: "윤슬중학교", class: 10, number: 2, name: "김건우", status: "합격" },
    { school: "윤슬중학교", class: 6, number: 12, name: "남수한", status: "합격" },
    { school: "미사강변중학교", class: 2, number: 30, name: "최예빈", status: "합격" },
    { school: "미사강변중학교", class: 12, number: 31, name: "조정우", status: "합격" },
    { school: "신평중학교", class: 1, number: 9, name: "김하담", status: "합격" },
    { school: "계원예술중학교", class: 3, number: 6, name: "박재형", status: "합격" },
    { school: "신평중학교", class: 7, number: 20, name: "이재인", status: "합격" },
    { school: "윤슬중학교", class: 12, number: 8, name: "김정은", status: "합격" },
    { school: "신평중학교", class: 8, number: 4, name: "김시아", status: "합격" },
    { school: "윤슬중학교", class: 1, number: 13, name: "성아영", status: "합격" },
    { school: "미사강변중학교", class: 1, number: 16, name: "송도현", status: "합격" },
    { school: "은가람중학교", class: 7, number: 17, name: "유시은", status: "합격" },
    { school: "감일중학교", class: 2, number: 25, name: "함정호", status: "합격" },
    { school: "윤슬중학교", class: 9, number: 7, name: "김준휘", status: "합격" },
    { school: "미사중학교", class: 12, number: 23, name: "이윤진", status: "합격" },
    { school: "윤슬중학교", class: 9, number: 5, name: "김은성", status: "합격" },
    { school: "다산새봄중학교", class: 7, number: 33, name: "석지율", status: "합격" },
    { school: "윤슬중학교", class: 8, number: 18, name: "이수빈", status: "합격" },
    { school: "미사중학교", class: 1, number: 11, name: "김지현", status: "합격" },
    { school: "윤슬중학교", class: 6, number: 6, name: "김민규", status: "합격" },
    { school: "은가람중학교", class: 7, number: 27, name: "허제연", status: "합격" },
    { school: "덕풍중학교", class: 1, number: 2, name: "김민찬", status: "합격" },
    { school: "은가람중학교", class: 4, number: 8, name: "김채현", status: "합격" },
    { school: "미사중학교", class: 6, number: 29, name: "정다연", status: "합격" },
    { school: "신평중학교", class: 1, number: 8, name: "김지우", status: "합격" },
    { school: "미사강변중학교", class: 3, number: 2, name: "강서연", status: "합격" },
    { school: "미사강변중학교", class: 7, number: 16, name: "서범준", status: "합격" },
    { school: "미사중학교", class: 3, number: 7, name: "김태완", status: "합격" },
    { school: "은가람중학교", class: 1, number: 13, name: "노윤하", status: "합격" },
    { school: "미사중학교", class: 12, number: 19, name: "이민서", status: "합격" },
    { school: "윤슬중학교", class: 8, number: 4, name: "김정현", status: "합격" },
    { school: "감일중학교", class: 3, number: 20, name: "이주환", status: "합격" },
    { school: "미사강변중학교", class: 10, number: 18, name: "백사라", status: "합격" },
    { school: "윤슬중학교", class: 1, number: 18, name: "유승아", status: "합격" },
    { school: "윤슬중학교", class: 6, number: 25, name: "조성현", status: "합격" },
    { school: "윤슬중학교", class: 1, number: 27, name: "전현우", status: "합격" },
    { school: "신평중학교", class: 7, number: 17, name: "이도영", status: "합격" },
    { school: "미사강변중학교", class: 4, number: 32, name: "한호연", status: "합격" },
    { school: "윤슬중학교", class: 7, number: 29, name: "조현준", status: "합격" },
    { school: "감일백제중학교", class: 4, number: 1, name: "강다인", status: "합격" },
    { school: "미사강변중학교", class: 7, number: 6, name: "김가인", status: "합격" },
    { school: "미사중학교", class: 6, number: 4, name: "권민재", status: "합격" },
    { school: "미사강변중학교", class: 3, number: 9, name: "김준희", status: "합격" },
    { school: "감일중학교", class: 5, number: 25, name: "전서현", status: "합격" },
    { school: "미사강변중학교", class: 10, number: 22, name: "이도헌", status: "합격" },
    { school: "미사강변중학교", class: 9, number: 28, name: "최율하", status: "합격" },
    { school: "미사중학교", class: 12, number: 17, name: "유재이", status: "합격" },
    { school: "미사중학교", class: 8, number: 16, name: "윤현문", status: "합격" },
    { school: "미사중학교", class: 1, number: 25, name: "이윤지", status: "합격" },
    { school: "윤슬중학교", class: 3, number: 18, name: "양시윤", status: "합격" },
    { school: "미사중학교", class: 9, number: 30, name: "최은우", status: "합격" },
    { school: "덕풍중학교", class: 4, number: 4, name: "강하빈", status: "합격" },
    { school: "윤슬중학교", class: 10, number: 7, name: "김채안", status: "합격" },
    { school: "은가람중학교", class: 3, number: 23, name: "이하진", status: "합격" },
    { school: "미사중학교", class: 8, number: 21, name: "이형주", status: "합격" },
    { school: "미사중학교", class: 11, number: 8, name: "김유림", status: "합격" },
    { school: "윤슬중학교", class: 2, number: 4, name: "김서희", status: "합격" },
    { school: "윤슬중학교", class: 3, number: 5, name: "김남수", status: "합격" },
    { school: "윤슬중학교", class: 2, number: 11, name: "박성민", status: "합격" },
    { school: "은가람중학교", class: 6, number: 14, name: "연건영", status: "합격" },
    { school: "미사중학교", class: 5, number: 18, name: "심희정", status: "합격" },
    { school: "윤슬중학교", class: 7, number: 10, name: "김태은", status: "합격" },
    { school: "신평중학교", class: 4, number: 6, name: "김현아", status: "합격" },
    { school: "윤슬중학교", class: 8, number: 1, name: "김수빈", status: "합격" },
    { school: "미사중학교", class: 3, number: 12, name: "서민경", status: "합격" },
    { school: "신평중학교", class: 8, number: 14, name: "송지호", status: "합격" },
    { school: "덕풍중학교", class: 1, number: 24, name: "최소윤", status: "합격" },
    { school: "은가람중학교", class: 3, number: 1, name: "김나율", status: "합격" },
    { school: "덕풍중학교", class: 2, number: 1, name: "BAYLA JASMINE FELIZ", status: "합격" },
    { school: "신장중학교", class: 2, number: 1, name: "강예지", status: "합격" },
    { school: "윤슬중학교", class: 5, number: 20, name: "유하준", status: "합격" },
    { school: "신평중학교", class: 3, number: 3, name: "박예은", status: "합격" },
    { school: "윤슬중학교", class: 8, number: 19, name: "이준우", status: "합격" },
    { school: "하남중학교", class: 3, number: 4, name: "김정우", status: "합격" },
    { school: "은가람중학교", class: 5, number: 26, name: "전예원", status: "합격" },
    { school: "윤슬중학교", class: 13, number: 24, name: "이홍", status: "합격" },
    { school: "은가람중학교", class: 3, number: 11, name: "신동훈", status: "합격" },
    { school: "감일백제중학교", class: 3, number: 10, name: "박주언", status: "합격" },
    { school: "풍양중학교", class: 7, number: 18, name: "이다인", status: "합격" },
    { school: "미사강변중학교", class: 11, number: 22, name: "이준서", status: "합격" },
    { school: "미사중학교", class: 3, number: 21, name: "이재나", status: "합격" },
    { school: "윤슬중학교", class: 9, number: 18, name: "신민재", status: "합격" },
    { school: "신평중학교", class: 6, number: 6, name: "김서형", status: "합격" },
    { school: "미사중학교", class: 5, number: 27, name: "장지우", status: "합격" },
    { school: "덕풍중학교", class: 5, number: 8, name: "김지효", status: "합격" },
    { school: "윤슬중학교", class: 8, number: 14, name: "신주원", status: "합격" },
    { school: "윤슬중학교", class: 9, number: 8, name: "김태이", status: "합격" },
    { school: "신평중학교", class: 8, number: 30, name: "황준현", status: "합격" },
    { school: "은가람중학교", class: 3, number: 10, name: "송하율", status: "합격" },
    { school: "은가람중학교", class: 4, number: 19, name: "오은홍", status: "합격" },
    { school: "윤슬중학교", class: 11, number: 21, name: "이서준", status: "합격" },
    { school: "윤슬중학교", class: 4, number: 14, name: "박지환", status: "합격" },
    { school: "윤슬중학교", class: 3, number: 6, name: "김소은", status: "합격" },
    { school: "감일중학교", class: 8, number: 20, name: "이시원", status: "합격" },
    { school: "윤슬중학교", class: 1, number: 31, name: "최준혁", status: "합격" },
    { school: "미사중학교", class: 9, number: 24, name: "정지원", status: "합격" },
    { school: "미사강변중학교", class: 11, number: 16, name: "안시언", status: "합격" },
    { school: "미사중학교", class: 7, number: 29, name: "장우진", status: "합격" },
    { school: "미사중학교", class: 4, number: 28, name: "조한", status: "합격" },
    { school: "신장중학교", class: 4, number: 9, name: "김형주", status: "합격" },
    { school: "윤슬중학교", class: 6, number: 19, name: "이서준", status: "합격" },
    { school: "미사강변중학교", class: 6, number: 14, name: "박성준", status: "합격" },
    { school: "윤슬중학교", class: 5, number: 31, name: "한수연", status: "합격" },
    { school: "윤슬중학교", class: 5, number: 11, name: "목승빈", status: "합격" },
    { school: "은가람중학교", class: 8, number: 16, name: "윤지우", status: "합격" },
    { school: "은가람중학교", class: 7, number: 6, name: "김민재", status: "합격" },
    { school: "윤슬중학교", class: 7, number: 7, name: "김유진", status: "합격" },
    { school: "윤슬중학교", class: 12, number: 15, name: "송민건", status: "합격" },
    { school: "윤슬중학교", class: 5, number: 9, name: "김태은", status: "합격" },
    { school: "윤슬중학교", class: 8, number: 20, name: "이채원", status: "합격" },
    { school: "미사강변중학교", class: 11, number: 27, name: "주이윤", status: "합격" },
    { school: "미사중학교", class: 8, number: 24, name: "정세인", status: "합격" },
    { school: "은가람중학교", class: 4, number: 3, name: "김나은", status: "합격" },
    { school: "윤슬중학교", class: 10, number: 31, name: "홍채연", status: "합격" },
    { school: "미사강변중학교", class: 5, number: 28, name: "정가은", status: "합격" },
    { school: "윤슬중학교", class: 11, number: 16, name: "송빛나", status: "합격" },
    { school: "윤슬중학교", class: 10, number: 9, name: "민별하", status: "합격" },
    { school: "덕풍중학교", class: 7, number: 8, name: "김준석", status: "합격" },
    { school: "은가람중학교", class: 2, number: 30, name: "황도경", status: "합격" },
    { school: "윤슬중학교", class: 11, number: 8, name: "민준원", status: "합격" },
    { school: "윤슬중학교", class: 2, number: 19, name: "윤서연", status: "합격" },
    { school: "신평중학교", class: 2, number: 20, name: "이주성", status: "합격" },
    { school: "윤슬중학교", class: 6, number: 8, name: "김주아", status: "합격" },
    { school: "미사중학교", class: 3, number: 33, name: "허윤성", status: "합격" },
    { school: "미사중학교", class: 5, number: 13, name: "백예일", status: "합격" },
    { school: "은가람중학교", class: 2, number: 29, name: "허예은", status: "합격" },
    { school: "윤슬중학교", class: 10, number: 24, name: "장태은", status: "합격" },
    { school: "윤슬중학교", class: 2, number: 12, name: "박준수", status: "합격" },
    { school: "감일백제중학교", class: 4, number: 15, name: "심윤우", status: "합격" },
    { school: "윤슬중학교", class: 12, number: 7, name: "김시우", status: "합격" },
    { school: "신평중학교", class: 7, number: 3, name: "김서진", status: "합격" },
    { school: "미사중학교", class: 10, number: 34, name: "현승재", status: "합격" },
    { school: "은가람중학교", class: 3, number: 12, name: "안민우", status: "합격" },
    { school: "윤슬중학교", class: 8, number: 22, name: "임하윤", status: "합격" },
    { school: "미사중학교", class: 1, number: 26, name: "이율", status: "합격" },
    { school: "미사강변중학교", class: 8, number: 21, name: "송윤아", status: "합격" },
    { school: "은가람중학교", class: 4, number: 15, name: "서가온", status: "합격" },
    { school: "미사중학교", class: 9, number: 10, name: "박수현", status: "합격" },
    { school: "미사강변중학교", class: 4, number: 24, name: "이지한", status: "합격" },
    { school: "미사중학교", class: 7, number: 14, name: "김익현", status: "합격" },
    { school: "미사중학교", class: 10, number: 7, name: "김하율", status: "합격" },
    { school: "미사강변중학교", class: 5, number: 27, name: "전준서", status: "합격" },
    { school: "윤슬중학교", class: 11, number: 17, name: "송지원", status: "합격" },
    { school: "감일중학교", class: 3, number: 9, name: "박시우", status: "합격" },
    { school: "윤슬중학교", class: 6, number: 24, name: "장윤성", status: "합격" },
    { school: "미사중학교", class: 4, number: 23, name: "정우진", status: "합격" },
    { school: "미사중학교", class: 12, number: 22, name: "이윤재", status: "합격" },
    { school: "은가람중학교", class: 2, number: 15, name: "서재현", status: "합격" },
    { school: "미사중학교", class: 3, number: 19, name: "이수아", status: "합격" },
    { school: "미사중학교", class: 8, number: 8, name: "김지수", status: "합격" },
    { school: "하남중학교", class: 2, number: 25, name: "최라온", status: "합격" },
    { school: "감일중학교", class: 2, number: 2, name: "권태강", status: "합격" },
    { school: "덕풍중학교", class: 4, number: 28, name: "추선우", status: "합격" },
    { school: "동부중학교", class: 1, number: 11, name: "송윤아", status: "합격" },
    { school: "윤슬중학교", class: 12, number: 20, name: "유동윤", status: "합격" },
    { school: "하남중학교", class: 1, number: 18, name: "이태훈", status: "합격" },
    { school: "남양주다산중학교", class: 3, number: 4, name: "김도연", status: "합격" },
    { school: "신평중학교", class: 1, number: 19, name: "유시안", status: "합격" },
    { school: "은가람중학교", class: 4, number: 1, name: "강예모", status: "합격" },
    { school: "남한중학교", class: 2, number: 26, name: "조아인", status: "합격" },
    { school: "윤슬중학교", class: 6, number: 9, name: "김현아", status: "합격" },
    { school: "감일백제중학교", class: 5, number: 11, name: "남연우", status: "합격" },
    { school: "윤슬중학교", class: 11, number: 20, name: "안우진", status: "합격" },
    { school: "미사중학교", class: 12, number: 24, name: "이지훈", status: "합격" },
    { school: "미사강변중학교", class: 12, number: 28, name: "장다연", status: "합격" },
    { school: "미사중학교", class: 7, number: 19, name: "박세신", status: "합격" },
    { school: "윤슬중학교", class: 6, number: 31, name: "최준우", status: "합격" },
    { school: "은가람중학교", class: 2, number: 28, name: "최승우", status: "합격" },
    { school: "덕풍중학교", class: 3, number: 28, name: "한정훈", status: "합격" },
    { school: "감일백제중학교", class: 7, number: 15, name: "신지성", status: "합격" },
    { school: "윤슬중학교", class: 2, number: 29, name: "채연우", status: "합격" },
    { school: "미사강변중학교", class: 8, number: 17, name: "박규민", status: "합격" },
    { school: "윤슬중학교", class: 4, number: 21, name: "이서윤", status: "합격" },
    { school: "감일중학교", class: 2, number: 12, name: "어진유", status: "합격" },
    { school: "감일중학교", class: 2, number: 22, name: "조영민", status: "합격" },
    { school: "윤슬중학교", class: 11, number: 15, name: "손하연", status: "합격" },
    { school: "신장중학교", class: 1, number: 16, name: "이승빈", status: "합격" },
    { school: "미사중학교", class: 9, number: 16, name: "백은서", status: "합격" },
    { school: "윤슬중학교", class: 3, number: 7, name: "김원하", status: "합격" },
    { school: "신평중학교", class: 2, number: 2, name: "구현준", status: "합격" },
    { school: "미사강변중학교", class: 2, number: 14, name: "신아현", status: "합격" },
    { school: "미사중학교", class: 6, number: 2, name: "곽민준", status: "합격" },
    { school: "윤슬중학교", class: 1, number: 29, name: "정현빈", status: "합격" },
    { school: "하남중학교", class: 4, number: 22, name: "이재율", status: "합격" },
    { school: "윤슬중학교", class: 8, number: 7, name: "김혜민", status: "합격" },
    { school: "윤슬중학교", class: 2, number: 9, name: "김한동", status: "합격" },
    { school: "윤슬중학교", class: 10, number: 28, name: "최민지", status: "합격" },
    { school: "미사강변중학교", class: 3, number: 20, name: "이시혁", status: "합격" },
    { school: "윤슬중학교", class: 12, number: 25, name: "이채원", status: "합격" },
    { school: "윤슬중학교", class: 7, number: 8, name: "김은광", status: "합격" },
    { school: "미사중학교", class: 3, number: 11, name: "배서현", status: "합격" },
    { school: "윤슬중학교", class: 13, number: 3, name: "김서윤", status: "합격" },
    { school: "은가람중학교", class: 4, number: 25, name: "전빈", status: "합격" },
    { school: "윤슬중학교", class: 13, number: 29, name: "함아윤", status: "합격" },
    { school: "하남중학교", class: 1, number: 10, name: "민래원", status: "합격" },
    { school: "윤슬중학교", class: 1, number: 21, name: "이재윤", status: "합격" },
    { school: "윤슬중학교", class: 5, number: 2, name: "강우현", status: "합격" },
    { school: "감일백제중학교", class: 4, number: 24, name: "주하은", status: "합격" },
    { school: "미사중학교", class: 13, number: 23, name: "이정한", status: "합격" },
    { school: "윤슬중학교", class: 10, number: 23, name: "임탐", status: "합격" },
    { school: "미사강변중학교", class: 9, number: 15, name: "양현우", status: "합격" },
    { school: "윤슬중학교", class: 9, number: 28, name: "장준호", status: "합격" },
    { school: "미사강변중학교", class: 9, number: 30, name: "허원재", status: "합격" },
    { school: "미사중학교", class: 8, number: 27, name: "조아인", status: "합격" },
    { school: "윤슬중학교", class: 13, number: 18, name: "우혜원", status: "합격" },
    { school: "윤슬중학교", class: 1, number: 19, name: "유예늘", status: "합격" },
    { school: "미사중학교", class: 1, number: 24, name: "이광재", status: "합격" },
    { school: "검정고시자", class: null, number: null, name: "강승우", status: "합격" },
    { school: "은가람중학교", class: 7, number: 4, name: "김나림", status: "합격" },
    { school: "미사중학교", class: 7, number: 13, name: "김이록", status: "합격" },
    { school: "검정고시자", class: null, number: null, name: "김희람", status: "합격" },
    { school: "검정고시자", class: null, number: null, name: "박신우", status: "합격" },
    { school: "윤슬중학교", class: 7, number: 5, name: "김승준", status: "합격" },
    { school: "윤슬중학교", class: 12, number: 27, name: "장세희", status: "합격" },
    { school: "윤슬중학교", class: 3, number: 14, name: "박지민", status: "합격" },
    { school: "미사중학교", class: 3, number: 31, name: "최솔", status: "합격" },
    { school: "미사중학교", class: 7, number: 7, name: "김민서", status: "합격" },
    { school: "윤슬중학교", class: 10, number: 3, name: "김도윤", status: "합격" },
    { school: "윤슬중학교", class: 7, number: 30, name: "차예담", status: "합격" },
    { school: "윤슬중학교", class: 9, number: 29, name: "정상연", status: "합격" },
    { school: "윤슬중학교", class: 2, number: 30, name: "최민호", status: "합격" },
    { school: "윤슬중학교", class: 4, number: 8, name: "김태율", status: "합격" },
    { school: "은가람중학교", class: 1, number: 11, name: "김준영", status: "합격" },
    { school: "미사강변중학교", class: 4, number: 4, name: "김범규", status: "합격" },
    { school: "윤슬중학교", class: 10, number: 17, name: "이도현", status: "합격" },
    { school: "윤슬중학교", class: 6, number: 29, name: "최윤지", status: "합격" },
    { school: "윤슬중학교", class: 5, number: 15, name: "서다현", status: "합격" },
    { school: "윤슬중학교", class: 7, number: 1, name: "국현", status: "합격" },
    { school: "미사중학교", class: 9, number: 22, name: "정민주", status: "합격" },
    { school: "감일백제중학교", class: 5, number: 3, name: "길해리", status: "합격" },
    { school: "미사중학교", class: 2, number: 28, name: "정예원", status: "합격" },
    { school: "윤슬중학교", class: 2, number: 7, name: "김지훈", status: "합격" },
    { school: "은가람중학교", class: 3, number: 3, name: "김선율", status: "합격" },
    { school: "윤슬중학교", class: 11, number: 3, name: "김가람", status: "합격" },
    { school: "윤슬중학교", class: 7, number: 20, name: "이소율", status: "합격" },
    { school: "미사강변중학교", class: 6, number: 32, name: "최준서", status: "합격" },
    { school: "미사중학교", class: 5, number: 33, name: "황지유", status: "합격" },
    { school: "윤슬중학교", class: 1, number: 23, name: "이준혁", status: "합격" },
    { school: "윤슬중학교", class: 13, number: 10, name: "김하윤", status: "합격" },
    { school: "미사강변중학교", class: 6, number: 18, name: "윤여슬", status: "합격" },
    { school: "윤슬중학교", class: 9, number: 4, name: "김우주", status: "합격" },
    { school: "미사중학교", class: 4, number: 19, name: "이혜선", status: "합격" },
    { school: "미사강변중학교", class: 5, number: 18, name: "안서현", status: "합격" },
    { school: "미사강변중학교", class: 13, number: 29, name: "최서연", status: "합격" },
    { school: "미사중학교", class: 7, number: 3, name: "권준성", status: "합격" },
    { school: "윤슬중학교", class: 8, number: 16, name: "오지훈", status: "합격" },
    { school: "미사중학교", class: 8, number: 29, name: "조훈률", status: "합격" },
    { school: "미사강변중학교", class: 3, number: 29, name: "탁연후", status: "합격" },
    { school: "미사중학교", class: 4, number: 16, name: "이정모", status: "합격" },
    { school: "윤슬중학교", class: 2, number: 28, name: "조동일", status: "합격" },
    { school: "미사강변중학교", class: 13, number: 23, name: "이승민", status: "합격" },
    { school: "미사중학교", class: 9, number: 31, name: "최종서", status: "합격" },
    { school: "윤슬중학교", class: 1, number: 3, name: "김민서", status: "합격" },
    { school: "윤슬중학교", class: 3, number: 10, name: "김태린", status: "합격" },
    { school: "윤슬중학교", class: 11, number: 24, name: "정우민", status: "합격" },
    { school: "미사중학교", class: 1, number: 22, name: "유연지", status: "합격" },
    // --- [지금 주신 불합격자 명단 (Status: "불합격")] ---
    { school: "신평중학교", class: 5, number: 21, name: "이지용", status: "불합격" },
    { school: "신평중학교", class: 3, number: 21, name: "전요한", status: "불합격" },
    { school: "윤슬중학교", class: 2, number: 20, name: "윤영빈", status: "불합격" },
    { school: "덕풍중학교", class: 2, number: 29, name: "최우진", status: "불합격" },
    { school: "윤슬중학교", class: 2, number: 21, name: "윤지인", status: "불합격" }
];


// =======================================================================
// 2. 조회 로직 및 이벤트 리스너
// =======================================================================
document.addEventListener('DOMContentLoaded', () => {
    const checkForm = document.getElementById('checkForm');
    checkForm.addEventListener('submit', checkAdmission);
});

function checkAdmission(event) {
    event.preventDefault(); // 폼 제출 시 페이지 새로고침 방지

    // 입력값 가져오기
    // 주의: 출신중학교는 문자열로, 반/번호는 숫자로 변환하여 비교합니다.
    const inputSchool = document.getElementById('schoolName').value.trim();
    const inputClass = parseInt(document.getElementById('classNumber').value.trim());
    const inputNumber = parseInt(document.getElementById('studentNumber').value.trim());
    const inputName = document.getElementById('studentName').value.trim();
    
    const resultDiv = document.getElementById('result');
    const schoolSong = document.getElementById('schoolSong');

    // 입력값 유효성 검사 (반/번호는 숫자여야 함)
    if (!inputSchool || isNaN(inputClass) || isNaN(inputNumber) || !inputName) {
        resultDiv.innerHTML = getErrorHtml("모든 항목을 정확히 입력했는지 확인해 주세요. (반/번호는 숫자만 입력)");
        stopAndResetSong(schoolSong);
        return;
    }
    
    // 4가지 조건 모두 일치하는 학생 찾기
    const result = candidates.find(c => 
        c.school === inputSchool && 
        c.class === inputClass && 
        c.number === inputNumber && 
        c.name === inputName
    );

    if (result) {
        // 일치하는 학생을 찾음
        if (result.status === "합격") {
            // 1. 합격증 표시 및 출력 버튼 활성화
            resultDiv.innerHTML = getPassHtml(result);
            
            // 2. 교가 재생 시작 (오류 방지를 위해 catch 추가)
            schoolSong.play().catch(e => console.error("오디오 재생 실패:", e));
            
        } else if (result.status === "불합격") {
            // 불합격 메시지 표시
            resultDiv.innerHTML = getFailHtml(result);
            stopAndResetSong(schoolSong);
            
        } else if (result.status === "예비") { 
             // (만약 예비합격자가 추가된다면)
             resultDiv.innerHTML = getWaitHtml(result);
             stopAndResetSong(schoolSong);
        }
        
    } else {
        // 4가지 정보가 명단 어디에도 일치하지 않는 경우
        resultDiv.innerHTML = getErrorHtml("입력하신 정보와 일치하는 수험생 정보가 없습니다. 출신 중학교, 반, 번호, 성명을 다시 한번 확인해 주세요.");
        stopAndResetSong(schoolSong);
    }
}


// =======================================================================
// 3. 결과 HTML 생성 함수들 (양식은 여기서 수정 가능)
// =======================================================================

// --- [합격] 합격증 출력 기능 포함 ---
function getPassHtml(data) {
    // 합격증 양식 (사용자님이 요청하신 줄/칸 및 데이터 매핑을 반영한 최종 양식)
    const certificateHtml = `
        <div class="admission-pass">
            <h1>🎉 하남고등학교 합격자 발표 🎉</h1>
            
            <div class="certificate-box" id="printableArea">
                <h2 style="color: #0056b3;">2025학년도 신입생 합격증</h2>
                
                <table class="certificate-table">
                    <tr>
                        <td class="label">성 명:</td>
                        <td><span id="printName">${data.name}</span></td>
                    </tr>
                    <tr>
                        <td class="label">출신 중학교:</td>
                        <td><span id="printSchool">${data.school}</span></td>
                    </tr>
                    <tr>
                        <td class="label">반 / 번호:</td>
                        <td><span id="printClassNum">${data.class}반 ${data.number}번</span></td>
                    </tr>
                </table>

                <p class="message">
                    위 학생은 본교의 2025학년도 신입생으로 최종 합격되었음을 증명합니다.<br>
                    하남고등학교 입학을 진심으로 축하하며, 꿈을 펼칠 수 있도록 최선을 다하겠습니다.
                </p>
                
                <div class="school-info">
                    <p>2024년 12월 11일</p>
                    <p>하남고등학교장</p>
                    </div>
                
                <div class="gyoga-section">
                    <h3>빛나는 하남고등학교 교가</h3>
                    <pre class="gyoga-lyrics">
// 여기에 실제 교가 가사를 넣어주세요.
푸른 기상 한데 모아 우뚝 솟은 하남 동산
배움의 터전 넓혀가니 지혜로운 꿈 펼치네
... (등)
                    </pre>
                </div>
            </div>
            
            <button onclick="printCertificate()" class="print-button">합격증 출력</button>
        </div>
    `;
    
    return certificateHtml;
}


// --- [불합격] HTML ---
function getFailHtml(data) {
    return `
        <div class="admission-fail">
            <h1>😭 아쉽게도 불합격입니다.</h1>
            <p>수험생 ${data.name}님은 명단에 포함되어 있지 않습니다.</p>
            <p>하남고등학교에 관심을 가져주셔서 감사합니다. 다른 좋은 기회가 있기를 기원합니다.</p>
        </div>
    `;
}

// --- [예비] HTML (사용할 경우) ---
function getWaitHtml(data) {
     return `
        <div class="admission-wait">
            <h1>📢 예비 합격자입니다.</h1>
            <p>수험생 ${data.name}님은 현재 예비 합격 상태입니다.</p>
            <p>추가 합격자 발표 일정을 학교 홈페이지에서 확인해 주십시오.</p>
        </div>
     `;
}

// --- [오류/정보불일치] HTML ---
function getErrorHtml(message) {
    return `
        <div class="admission-error">
            <h1>⚠️ 조회 오류</h1>
            <p>${message}</p>
        </div>
    `;
}


// =======================================================================
// 4. 합격증 출력 기능 (전역 함수) 및 오디오 제어 함수
// =======================================================================

/**
 * 합격증 영역만 인쇄하는 기능
 * index.html의 <body> 내부에 넣어야 하므로 전역 함수로 정의합니다.
 */
function printCertificate() {
    // 인쇄 영역 (id="printableArea")만 선택
    const printContents = document.getElementById('printableArea').innerHTML;
    const originalContents = document.body.innerHTML;

    // 인쇄를 위해 현재 body 내용을 합격증 내용으로 대체합니다.
    document.body.innerHTML = printContents;

    // 브라우저 인쇄 창 실행
    window.print();

    // 인쇄 후 원래 페이지 내용으로 복원
    document.body.innerHTML = originalContents;
    
    // 인쇄 후 스크립트가 다시 로드되므로, 폼 이벤트 리스너를 다시 연결해야 합니다.
    // 이는 print() 함수 실행 후 DOM 구조가 바뀌기 때문에 필요합니다.
    document.getElementById('checkForm').addEventListener('submit', checkAdmission);
}

/**
 * 교가 재생을 멈추고 시간을 0으로 리셋합니다.
 */
function stopAndResetSong(audioElement) {
    audioElement.pause();
    audioElement.currentTime = 0;
}
