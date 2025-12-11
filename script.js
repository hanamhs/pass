// =======================================================================
// 1. 합격/불합격자 명단 통합 데이터 (총 341명 명단 최종 반영)
// =======================================================================
const candidates = [
    // --- 합격자 명단 (총 336명) ---
    { applicationNumber: 593322, school: "윤슬중학교", class: 5, number: 26, name: "이준형", status: "합격", major: "국가유공자자녀전형" },
    { applicationNumber: 498320, school: "덕풍중학교", class: 5, number: 22, name: "이준", status: "합격", major: "일반전형" },
    { applicationNumber: 521584, school: "덕풍중학교", class: 4, number: 21, name: "유재은", status: "합격", major: "일반전형" },
    { applicationNumber: 528959, school: "덕풍중학교", class: 2, number: 9, name: "김현서", status: "합격", major: "일반전형" },
    { applicationNumber: 536524, school: "덕풍중학교", class: 3, number: 25, name: "정연우", status: "합격", major: "일반전형" },
    { applicationNumber: 484140, school: "신평중학교", class: 4, number: 11, name: "성주환", status: "합격", major: "일반전형" },
    { applicationNumber: 498283, school: "은가람중학교", class: 8, number: 5, name: "맹지유", status: "합격", major: "일반전형" },
    { applicationNumber: 532801, school: "덕풍중학교", class: 6, number: 2, name: "권지민", status: "합격", major: "일반전형" },
    { applicationNumber: 518167, school: "윤슬중학교", class: 1, number: 24, name: "이호준", status: "합격", major: "일반전형" },
    { applicationNumber: 515877, school: "미사중학교", class: 12, number: 18, name: "이다인", status: "합격", major: "일반전형" },
    { applicationNumber: 479833, school: "감일중학교", class: 8, number: 17, name: "송승연", status: "합격", major: "일반전형" },
    { applicationNumber: 486336, school: "감일중학교", class: 3, number: 7, name: "김현호", status: "합격", major: "일반전형" },
    { applicationNumber: 482568, school: "덕풍중학교", class: 1, number: 26, name: "최윤호", status: "합격", major: "일반전형" },
    { applicationNumber: 530482, school: "미사강변중학교", class: 6, number: 21, name: "이준성", status: "합격", major: "일반전형" },
    { applicationNumber: 498302, school: "윤슬중학교", class: 2, number: 14, name: "손준혁", status: "합격", major: "일반전형" },
    { applicationNumber: 486348, school: "신평중학교", class: 7, number: 11, name: "박서정", status: "합격", major: "일반전형" },
    { applicationNumber: 487744, school: "미사강변중학교", class: 8, number: 24, name: "신희원", status: "합격", major: "일반전형" },
    { applicationNumber: 521588, school: "윤슬중학교", class: 13, number: 19, name: "이가은", status: "합격", major: "일반전형" },
    { applicationNumber: 498326, school: "은가람중학교", class: 6, number: 17, name: "유아현", status: "합격", major: "일반전형" },
    { applicationNumber: 536522, school: "미사중학교", class: 13, number: 12, name: "박지영", status: "합격", major: "일반전형" },
    { applicationNumber: 479831, school: "감일중학교", class: 5, number: 26, name: "조원희", status: "합격", major: "일반전형" },
    { applicationNumber: 515883, school: "윤슬중학교", class: 4, number: 3, name: "김다인", status: "합격", major: "일반전형" },
    { applicationNumber: 498284, school: "윤슬중학교", class: 9, number: 25, name: "이유나", status: "합격", major: "일반전형" },
    { applicationNumber: 498319, school: "판곡중학교", class: 11, number: 24, name: "조희원", status: "합격", major: "일반전형" },
    { applicationNumber: 518165, school: "은가람중학교", class: 3, number: 25, name: "장민소", status: "합격", major: "일반전형" },
    { applicationNumber: 487748, school: "윤슬중학교", class: 11, number: 1, name: "강성은", status: "합격", major: "일반전형" },
    { applicationNumber: 510791, school: "미사중학교", class: 9, number: 27, name: "조수현", status: "합격", major: "일반전형" },
    { applicationNumber: 593207, school: "미사중학교", class: 2, number: 18, name: "이서진", status: "합격", major: "일반전형" },
    { applicationNumber: 588652, school: "미사중학교", class: 7, number: 4, name: "김가연", status: "합격", major: "일반전형" },
    { applicationNumber: 501699, school: "신평중학교", class: 5, number: 8, name: "김혜윤", status: "합격", major: "일반전형" },
    { applicationNumber: 498335, school: "미사중학교", class: 6, number: 33, name: "최하윤", status: "합격", major: "일반전형" },
    { applicationNumber: 498314, school: "미사강변중학교", class: 2, number: 18, name: "오정우", status: "합격", major: "일반전형" },
    { applicationNumber: 498337, school: "은가람중학교", class: 4, number: 26, name: "정재인", status: "합격", major: "일반전형" },
    { applicationNumber: 482031, school: "신평중학교", class: 2, number: 3, name: "김동후", status: "합격", major: "일반전형" },
    { applicationNumber: 518164, school: "은가람중학교", class: 1, number: 20, name: "이금비", status: "합격", major: "일반전형" },
    { applicationNumber: 504645, school: "미사중학교", class: 7, number: 20, name: "박하음", status: "합격", major: "일반전형" },
    { applicationNumber: 528440, school: "윤슬중학교", class: 8, number: 11, name: "박준혁", status: "합격", major: "일반전형" },
    { applicationNumber: 484139, school: "미사강변중학교", class: 9, number: 33, name: "홍진우", status: "합격", major: "일반전형" },
    { applicationNumber: 501689, school: "윤슬중학교", class: 3, number: 29, name: "조현호", status: "합격", major: "일반전형" },
    { applicationNumber: 501698, school: "윤슬중학교", class: 3, number: 16, name: "송지우", status: "합격", major: "일반전형" },
    { applicationNumber: 486335, school: "감일중학교", class: 3, number: 4, name: "김민정", status: "합격", major: "일반전형" },
    { applicationNumber: 513439, school: "미사강변중학교", class: 12, number: 7, name: "김이찬", status: "합격", major: "일반전형" },
    { applicationNumber: 498290, school: "미사강변중학교", class: 4, number: 26, name: "이채은", status: "합격", major: "일반전형" },
    { applicationNumber: 528436, school: "미사중학교", class: 4, number: 21, name: "임소율", status: "합격", major: "일반전형" },
    { applicationNumber: 498288, school: "미사강변중학교", class: 1, number: 11, name: "박주하", status: "합격", major: "일반전형" },
    { applicationNumber: 545673, school: "미사강변중학교", class: 13, number: 7, name: "김서윤", status: "합격", major: "일반전형" },
    { applicationNumber: 504918, school: "윤슬중학교", class: 4, number: 30, name: "지서준", status: "합격", major: "일반전형" },
    { applicationNumber: 521587, school: "윤슬중학교", class: 13, number: 14, name: "손성원", status: "합격", major: "일반전형" },
    { applicationNumber: 498299, school: "미사강변중학교", class: 11, number: 13, name: "박채희", status: "합격", major: "일반전형" },
    { applicationNumber: 545667, school: "윤슬중학교", class: 1, number: 22, name: "이주하", status: "합격", major: "일반전형" },
    { applicationNumber: 501686, school: "은가람중학교", class: 8, number: 17, name: "이예람", status: "합격", major: "일반전형" },
    { applicationNumber: 498323, school: "윤슬중학교", class: 10, number: 12, name: "박은율", status: "합격", major: "일반전형" },
    { applicationNumber: 479832, school: "감일중학교", class: 8, number: 3, name: "김동윤", status: "합격", major: "일반전형" },
    { applicationNumber: 498321, school: "윤슬중학교", class: 10, number: 1, name: "강다영", status: "합격", major: "일반전형" },
    { applicationNumber: 498309, school: "윤슬중학교", class: 11, number: 13, name: "성현준", status: "합격", major: "일반전형" },
    { applicationNumber: 545657, school: "윤슬중학교", class: 9, number: 30, name: "차민상", status: "합격", major: "일반전형" },
    { applicationNumber: 498336, school: "은가람중학교", class: 4, number: 20, name: "윤지은", status: "합격", major: "일반전형" },
    { applicationNumber: 521583, school: "덕풍중학교", class: 4, number: 9, name: "김채은", status: "합격", major: "일반전형" },
    { applicationNumber: 486342, school: "미사강변중학교", class: 10, number: 4, name: "김민준", status: "합격", major: "일반전형" },
    { applicationNumber: 545669, school: "윤슬중학교", class: 3, number: 27, name: "이지우", status: "합격", major: "일반전형" },
    { applicationNumber: 498329, school: "신평중학교", class: 6, number: 15, name: "박준후", status: "합격", major: "일반전형" },
    { applicationNumber: 518173, school: "미사중학교", class: 5, number: 23, name: "이서윤", status: "합격", major: "일반전형" },
    { applicationNumber: 498315, school: "미사강변중학교", class: 4, number: 8, name: "김준우", status: "합격", major: "일반전형" },
    { applicationNumber: 482029, school: "미사강변중학교", class: 8, number: 6, name: "김예준", status: "합격", major: "일반전형" },
    { applicationNumber: 510790, school: "은가람중학교", class: 3, number: 31, name: "허민우", status: "합격", major: "일반전형" },
    { applicationNumber: 566632, school: "미사강변중학교", class: 6, number: 15, name: "박재민", status: "합격", major: "일반전형" },
    { applicationNumber: 521573, school: "은가람중학교", class: 2, number: 8, name: "김호운", status: "합격", major: "일반전형" },
    { applicationNumber: 532802, school: "덕풍중학교", class: 6, number: 6, name: "김지우", status: "합격", major: "일반전형" },
    { applicationNumber: 513443, school: "덕풍중학교", class: 8, number: 9, name: "박혜원", status: "합격", major: "일반전형" },
    { applicationNumber: 487746, school: "미사강변중학교", class: 1, number: 3, name: "김나윤", status: "합격", major: "일반전형" },
    { applicationNumber: 545658, school: "윤슬중학교", class: 1, number: 10, name: "박정원", status: "합격", major: "일반전형" },
    { applicationNumber: 498285, school: "미사강변중학교", class: 5, number: 15, name: "박건욱", status: "합격", major: "일반전형" },
    { applicationNumber: 486334, school: "은가람중학교", class: 5, number: 21, name: "유예림", status: "합격", major: "일반전형" },
    { applicationNumber: 479835, school: "감일중학교", class: 7, number: 9, name: "김현본", status: "합격", major: "일반전형" },
    { applicationNumber: 486352, school: "신평중학교", class: 3, number: 11, name: "유다연", status: "합격", major: "일반전형" },
    { applicationNumber: 487745, school: "미사강변중학교", class: 12, number: 13, name: "박시유", status: "합격", major: "일반전형" },
    { applicationNumber: 528443, school: "하남중학교", class: 4, number: 5, name: "김승윤", status: "합격", major: "일반전형" },
    { applicationNumber: 557754, school: "미사강변중학교", class: 8, number: 32, name: "하윤서", status: "합격", major: "일반전형" },
    { applicationNumber: 532803, school: "미사중학교", class: 6, number: 20, name: "신석훈", status: "합격", major: "일반전형" },
    { applicationNumber: 498307, school: "윤슬중학교", class: 11, number: 6, name: "김소율", status: "합격", major: "일반전형" },
    { applicationNumber: 498338, school: "신평중학교", class: 1, number: 24, name: "전서연", status: "합격", major: "일반전형" },
    { applicationNumber: 479829, school: "감일중학교", class: 4, number: 3, name: "김동환", status: "합격", major: "일반전형" },
    { applicationNumber: 486351, school: "신평중학교", class: 3, number: 9, name: "양혜원", status: "합격", major: "일반전형" },
    { applicationNumber: 515882, school: "미사중학교", class: 11, number: 1, name: "곽명지", status: "합격", major: "일반전형" },
    { applicationNumber: 521581, school: "미사중학교", class: 11, number: 28, name: "진희찬", status: "합격", major: "일반전형" },
    { applicationNumber: 522005, school: "윤슬중학교", class: 10, number: 2, name: "김건우", status: "합격", major: "일반전형" },
    { applicationNumber: 486343, school: "윤슬중학교", class: 6, number: 12, name: "남수한", status: "합격", major: "일반전형" },
    { applicationNumber: 498316, school: "미사강변중학교", class: 2, number: 30, name: "최예빈", status: "합격", major: "일반전형" },
    { applicationNumber: 498295, school: "미사강변중학교", class: 12, number: 31, name: "조정우", status: "합격", major: "일반전형" },
    { applicationNumber: 531439, school: "신평중학교", class: 1, number: 9, name: "김하담", status: "합격", major: "일반전형" },
    { applicationNumber: 498305, school: "계원예술중학교", class: 3, number: 6, name: "박재형", status: "합격", major: "일반전형" },
    { applicationNumber: 486350, school: "신평중학교", class: 7, number: 20, name: "이재인", status: "합격", major: "일반전형" },
    { applicationNumber: 484130, school: "윤슬중학교", class: 12, number: 8, name: "김정은", status: "합격", major: "일반전형" },
    { applicationNumber: 484133, school: "신평중학교", class: 8, number: 4, name: "김시아", status: "합격", major: "일반전형" },
    { applicationNumber: 545659, school: "윤슬중학교", class: 1, number: 13, name: "성아영", status: "합격", major: "일반전형" },
    { applicationNumber: 498296, school: "미사강변중학교", class: 1, number: 16, name: "송도현", status: "합격", major: "일반전형" },
    { applicationNumber: 501687, school: "은가람중학교", class: 7, number: 17, name: "유시은", status: "합격", major: "일반전형" },
    { applicationNumber: 482028, school: "감일중학교", class: 2, number: 25, name: "함정호", status: "합격", major: "일반전형" },
    { applicationNumber: 532800, school: "윤슬중학교", class: 9, number: 7, name: "김준휘", status: "합격", major: "일반전형" },
    { applicationNumber: 515879, school: "미사중학교", class: 12, number: 23, name: "이윤진", status: "합격", major: "일반전형" },
    { applicationNumber: 487741, school: "윤슬중학교", class: 9, number: 5, name: "김은성", status: "합격", major: "일반전형" },
    { applicationNumber: 504643, school: "다산새봄중학교", class: 7, number: 33, name: "석지율", status: "합격", major: "일반전형" },
    { applicationNumber: 482448, school: "윤슬중학교", class: 8, number: 18, name: "이수빈", status: "합격", major: "일반전형" },
    { applicationNumber: 498340, school: "미사중학교", class: 1, number: 11, name: "김지현", status: "합격", major: "일반전형" },
    { applicationNumber: 484134, school: "윤슬중학교", class: 6, number: 6, name: "김민규", status: "합격", major: "일반전형" },
    { applicationNumber: 501688, school: "은가람중학교", class: 7, number: 27, name: "허제연", status: "합격", major: "일반전형" },
    { applicationNumber: 521578, school: "덕풍중학교", class: 1, number: 2, name: "김민찬", status: "합격", major: "일반전형" },
    { applicationNumber: 498310, school: "은가람중학교", class: 4, number: 8, name: "김채현", status: "합격", major: "일반전형" },
    { applicationNumber: 528435, school: "미사중학교", class: 6, number: 29, name: "정다연", status: "합격", major: "일반전형" },
    { applicationNumber: 548946, school: "신평중학교", class: 1, number: 8, name: "김지우", status: "합격", major: "일반전형" },
    { applicationNumber: 531436, school: "미사강변중학교", class: 3, number: 2, name: "강서연", status: "합격", major: "일반전형" },
    { applicationNumber: 498297, school: "미사강변중학교", class: 7, number: 16, name: "서범준", status: "합격", major: "일반전형" },
    { applicationNumber: 530484, school: "미사중학교", class: 3, number: 7, name: "김태완", status: "합격", major: "일반전형" },
    { applicationNumber: 518163, school: "은가람중학교", class: 1, number: 13, name: "노윤하", status: "합격", major: "일반전형" },
    { applicationNumber: 515878, school: "미사중학교", class: 12, number: 19, name: "이민서", status: "합격", major: "일반전형" },
    { applicationNumber: 528441, school: "윤슬중학교", class: 8, number: 4, name: "김정현", status: "합격", major: "일반전형" },
    { applicationNumber: 486338, school: "감일중학교", class: 3, number: 20, name: "이주환", status: "합격", major: "일반전형" },
    { applicationNumber: 486339, school: "미사강변중학교", class: 10, number: 18, name: "백사라", status: "합격", major: "일반전형" },
    { applicationNumber: 545660, school: "윤슬중학교", class: 1, number: 18, name: "유승아", status: "합격", major: "일반전형" },
    { applicationNumber: 486346, school: "윤슬중학교", class: 6, number: 25, name: "조성현", status: "합격", major: "일반전형" },
    { applicationNumber: 518168, school: "윤슬중학교", class: 1, number: 27, name: "전현우", status: "합격", major: "일반전형" },
    { applicationNumber: 486349, school: "신평중학교", class: 7, number: 17, name: "이도영", status: "합격", major: "일반전형" },
    { applicationNumber: 498293, school: "미사강변중학교", class: 4, number: 32, name: "한호연", status: "합격", major: "일반전형" },
    { applicationNumber: 484138, school: "윤슬중학교", class: 7, number: 29, name: "조현준", status: "합격", major: "일반전형" },
    { applicationNumber: 518174, school: "감일백제중학교", class: 4, number: 1, name: "강다인", status: "합격", major: "일반전형" },
    { applicationNumber: 498289, school: "미사강변중학교", class: 7, number: 6, name: "김가인", status: "합격", major: "일반전형" },
    { applicationNumber: 552046, school: "미사중학교", class: 6, number: 4, name: "권민재", status: "합격", major: "일반전형" },
    { applicationNumber: 565846, school: "미사강변중학교", class: 3, number: 9, name: "김준희", status: "합격", major: "일반전형" },
    { applicationNumber: 479830, school: "감일중학교", class: 5, number: 25, name: "전서현", status: "합격", major: "일반전형" },
    { applicationNumber: 487743, school: "미사강변중학교", class: 10, number: 22, name: "이도헌", status: "합격", major: "일반전형" },
    { applicationNumber: 484128, school: "미사강변중학교", class: 9, number: 28, name: "최율하", status: "합격", major: "일반전형" },
    { applicationNumber: 515876, school: "미사중학교", class: 12, number: 17, name: "유재이", status: "합격", major: "일반전형" },
    { applicationNumber: 547667, school: "미사중학교", class: 8, number: 16, name: "윤현문", status: "합격", major: "일반전형" },
    { applicationNumber: 498339, school: "미사중학교", class: 1, number: 25, name: "이윤지", status: "합격", major: "일반전형" },
    { applicationNumber: 528444, school: "윤슬중학교", class: 3, number: 18, name: "양시윤", status: "합격", major: "일반전형" },
    { applicationNumber: 513441, school: "미사중학교", class: 9, number: 30, name: "최은우", status: "합격", major: "일반전형" },
    { applicationNumber: 521582, school: "덕풍중학교", class: 4, number: 4, name: "강하빈", status: "합격", major: "일반전형" },
    { applicationNumber: 498322, school: "윤슬중학교", class: 10, number: 7, name: "김채안", status: "합격", major: "일반전형" },
    { applicationNumber: 510789, school: "은가람중학교", class: 3, number: 23, name: "이하진", status: "합격", major: "일반전형" },
    { applicationNumber: 528442, school: "미사중학교", class: 8, number: 21, name: "이형주", status: "합격", major: "일반전형" },
    { applicationNumber: 518171, school: "미사중학교", class: 11, number: 8, name: "김유림", status: "합격", major: "일반전형" },
    { applicationNumber: 521579, school: "윤슬중학교", class: 2, number: 4, name: "김서희", status: "합격", major: "일반전형" },
    { applicationNumber: 498333, school: "윤슬중학교", class: 3, number: 5, name: "김남수", status: "합격", major: "일반전형" },
    { applicationNumber: 521580, school: "윤슬중학교", class: 2, number: 11, name: "박성민", status: "합격", major: "일반전형" },
    { applicationNumber: 498332, school: "은가람중학교", class: 6, number: 14, name: "연건영", status: "합격", major: "일반전형" },
    { applicationNumber: 545674, school: "미사중학교", class: 5, number: 18, name: "심희정", status: "합격", major: "일반전형" },
    { applicationNumber: 528447, school: "윤슬중학교", class: 7, number: 10, name: "김태은", status: "합격", major: "일반전형" },
    { applicationNumber: 482035, school: "신평중학교", class: 4, number: 6, name: "김현아", status: "합격", major: "일반전형" },
    { applicationNumber: 528445, school: "윤슬중학교", class: 8, number: 1, name: "김수빈", status: "합격", major: "일반전형" },
    { applicationNumber: 557751, school: "미사중학교", class: 3, number: 12, name: "서민경", status: "합격", major: "일반전형" },
    { applicationNumber: 486347, school: "신평중학교", class: 8, number: 14, name: "송지호", status: "합격", major: "일반전형" },
    { applicationNumber: 536527, school: "덕풍중학교", class: 1, number: 24, name: "최소윤", status: "합격", major: "일반전형" },
    { applicationNumber: 515874, school: "은가람중학교", class: 3, number: 1, name: "김나율", status: "합격", major: "일반전형" },
    { applicationNumber: 545672, school: "덕풍중학교", class: 2, number: 1, name: "BAYLA JASMINE FELIZ", status: "합격", major: "일반전형" },
    { applicationNumber: 575863, school: "신장중학교", class: 2, number: 1, name: "강예지", status: "합격", major: "일반전형" },
    { applicationNumber: 545671, school: "윤슬중학교", class: 5, number: 20, name: "유하준", status: "합격", major: "일반전형" },
    { applicationNumber: 484142, school: "신평중학교", class: 3, number: 3, name: "박예은", status: "합격", major: "일반전형" },
    { applicationNumber: 528446, school: "윤슬중학교", class: 8, number: 19, name: "이준우", status: "합격", major: "일반전형" },
    { applicationNumber: 552049, school: "하남중학교", class: 3, number: 4, name: "김정우", status: "합격", major: "일반전형" },
    { applicationNumber: 487742, school: "은가람중학교", class: 5, number: 26, name: "전예원", status: "합격", major: "일반전형" },
    { applicationNumber: 524497, school: "윤슬중학교", class: 13, number: 24, name: "이홍", status: "합격", major: "일반전형" },
    { applicationNumber: 515943, school: "은가람중학교", class: 3, number: 11, name: "신동훈", status: "합격", major: "일반전형" },
    { applicationNumber: 565849, school: "감일백제중학교", class: 3, number: 10, name: "박주언", status: "합격", major: "일반전형" },
    { applicationNumber: 506804, school: "풍양중학교", class: 7, number: 18, name: "이다인", status: "합격", major: "일반전형" },
    { applicationNumber: 515880, school: "미사강변중학교", class: 11, number: 22, name: "이준서", status: "합격", major: "일반전형" },
    { applicationNumber: 557753, school: "미사중학교", class: 3, number: 21, name: "이재나", status: "합격", major: "일반전형" },
    { applicationNumber: 498312, school: "윤슬중학교", class: 9, number: 18, name: "신민재", status: "합격", major: "일반전형" },
    { applicationNumber: 487747, school: "신평중학교", class: 6, number: 6, name: "김서형", status: "합격", major: "일반전형" },
    { applicationNumber: 536523, school: "미사중학교", class: 5, number: 27, name: "장지우", status: "합격", major: "일반전형" },
    { applicationNumber: 498306, school: "덕풍중학교", class: 5, number: 8, name: "김지효", status: "합격", major: "일반전형" },
    { applicationNumber: 482569, school: "윤슬중학교", class: 8, number: 14, name: "신주원", status: "합격", major: "일반전형" },
    { applicationNumber: 487750, school: "윤슬중학교", class: 9, number: 8, name: "김태이", status: "합격", major: "일반전형" },
    { applicationNumber: 498311, school: "신평중학교", class: 8, number: 30, name: "황준현", status: "합격", major: "일반전형" },
    { applicationNumber: 515875, school: "은가람중학교", class: 3, number: 10, name: "송하율", status: "합격", major: "일반전형" },
    { applicationNumber: 498291, school: "은가람중학교", class: 4, number: 19, name: "오은홍", status: "합격", major: "일반전형" },
    { applicationNumber: 501694, school: "윤슬중학교", class: 11, number: 21, name: "이서준", status: "합격", major: "일반전형" },
    { applicationNumber: 557749, school: "윤슬중학교", class: 4, number: 14, name: "박지환", status: "합격", major: "일반전형" },
    { applicationNumber: 498334, school: "윤슬중학교", class: 3, number: 6, name: "김소은", status: "합격", major: "일반전형" },
    { applicationNumber: 479834, school: "감일중학교", class: 8, number: 20, name: "이시원", status: "합격", major: "일반전형" },
    { applicationNumber: 518170, school: "윤슬중학교", class: 1, number: 31, name: "최준혁", status: "합격", major: "일반전형" },
    { applicationNumber: 513442, school: "미사중학교", class: 9, number: 24, name: "정지원", status: "합격", major: "일반전형" },
    { applicationNumber: 498300, school: "미사강변중학교", class: 11, number: 16, name: "안시언", status: "합격", major: "일반전형" },
    { applicationNumber: 504919, school: "미사중학교", class: 7, number: 29, name: "장우진", status: "합격", major: "일반전형" },
    { applicationNumber: 528438, school: "미사중학교", class: 4, number: 28, name: "조한", status: "합격", major: "일반전형" },
    { applicationNumber: 557755, school: "신장중학교", class: 4, number: 9, name: "김형주", status: "합격", major: "일반전형" },
    { applicationNumber: 486344, school: "윤슬중학교", class: 6, number: 19, name: "이서준", status: "합격", major: "일반전형" },
    { applicationNumber: 565899, school: "미사강변중학교", class: 6, number: 14, name: "박성준", status: "합격", major: "일반전형" },
    { applicationNumber: 504642, school: "윤슬중학교", class: 5, number: 31, name: "한수연", status: "합격", major: "일반전형" },
    { applicationNumber: 498328, school: "윤슬중학교", class: 5, number: 11, name: "목승빈", status: "합격", major: "일반전형" },
    { applicationNumber: 501685, school: "은가람중학교", class: 8, number: 16, name: "윤지우", status: "합격", major: "일반전형" },
    { applicationNumber: 482447, school: "은가람중학교", class: 7, number: 6, name: "김민재", status: "합격", major: "일반전형" },
    { applicationNumber: 482033, school: "윤슬중학교", class: 7, number: 7, name: "김유진", status: "합격", major: "일반전형" },
    { applicationNumber: 484131, school: "윤슬중학교", class: 12, number: 15, name: "송민건", status: "합격", major: "일반전형" },
    { applicationNumber: 498327, school: "윤슬중학교", class: 5, number: 9, name: "김태은", status: "합격", major: "일반전형" },
    { applicationNumber: 545663, school: "윤슬중학교", class: 8, number: 20, name: "이채원", status: "합격", major: "일반전형" },
    { applicationNumber: 498301, school: "미사강변중학교", class: 11, number: 27, name: "주이윤", status: "합격", major: "일반전형" },
    { applicationNumber: 547668, school: "미사중학교", class: 8, number: 24, name: "정세인", status: "합격", major: "일반전형" },
    { applicationNumber: 501697, school: "은가람중학교", class: 4, number: 3, name: "김나은", status: "합격", major: "일반전형" },
    { applicationNumber: 524496, school: "윤슬중학교", class: 10, number: 31, name: "홍채연", status: "합격", major: "일반전형" },
    { applicationNumber: 498287, school: "미사강변중학교", class: 5, number: 28, name: "정가은", status: "합격", major: "일반전형" },
    { applicationNumber: 501691, school: "윤슬중학교", class: 11, number: 16, name: "송빛나", status: "합격", major: "일반전형" },
    { applicationNumber: 498330, school: "윤슬중학교", class: 10, number: 9, name: "민별하", status: "합격", major: "일반전형" },
    { applicationNumber: 518172, school: "덕풍중학교", class: 7, number: 8, name: "김준석", status: "합격", major: "일반전형" },
    { applicationNumber: 521577, school: "은가람중학교", class: 2, number: 30, name: "황도경", status: "합격", major: "일반전형" },
    { applicationNumber: 498308, school: "윤슬중학교", class: 11, number: 8, name: "민준원", status: "합격", major: "일반전형" },
    { applicationNumber: 498304, school: "윤슬중학교", class: 2, number: 19, name: "윤서연", status: "합격", major: "일반전형" },
    { applicationNumber: 482032, school: "신평중학교", class: 2, number: 20, name: "이주성", status: "합격", major: "일반전형" },
    { applicationNumber: 484135, school: "윤슬중학교", class: 6, number: 8, name: "김주아", status: "합격", major: "일반전형" },
    { applicationNumber: 532804, school: "미사중학교", class: 3, number: 33, name: "허윤성", status: "합격", major: "일반전형" },
    { applicationNumber: 521589, school: "미사중학교", class: 5, number: 13, name: "백예일", status: "합격", major: "일반전형" },
    { applicationNumber: 521576, school: "은가람중학교", class: 2, number: 29, name: "허예은", status: "합격", major: "일반전형" },
    { applicationNumber: 498324, school: "윤슬중학교", class: 10, number: 24, name: "장태은", status: "합격", major: "일반전형" },
    { applicationNumber: 498303, school: "윤슬중학교", class: 2, number: 12, name: "박준수", status: "합격", major: "일반전형" },
    { applicationNumber: 518175, school: "감일백제중학교", class: 4, number: 15, name: "심윤우", status: "합격", major: "일반전형" },
    { applicationNumber: 484129, school: "윤슬중학교", class: 12, number: 7, name: "김시우", status: "합격", major: "일반전형" },
    { applicationNumber: 484137, school: "신평중학교", class: 7, number: 3, name: "김서진", status: "합격", major: "일반전형" },
    { applicationNumber: 518166, school: "미사중학교", class: 10, number: 34, name: "현승재", status: "합격", major: "일반전형" },
    { applicationNumber: 518162, school: "은가람중학교", class: 3, number: 12, name: "안민우", status: "합격", major: "일반전형" },
    { applicationNumber: 545664, school: "윤슬중학교", class: 8, number: 22, name: "임하윤", status: "합격", major: "일반전형" },
    { applicationNumber: 536526, school: "미사중학교", class: 1, number: 26, name: "이율", status: "합격", major: "일반전형" },
    { applicationNumber: 482030, school: "미사강변중학교", class: 8, number: 21, name: "송윤아", status: "합격", major: "일반전형" },
    { applicationNumber: 498292, school: "은가람중학교", class: 4, number: 15, name: "서가온", status: "합격", major: "일반전형" },
    { applicationNumber: 521585, school: "미사중학교", class: 9, number: 10, name: "박수현", status: "합격", major: "일반전형" },
    { applicationNumber: 498298, school: "미사강변중학교", class: 4, number: 24, name: "이지한", status: "합격", major: "일반전형" },
    { applicationNumber: 515885, school: "미사중학교", class: 7, number: 14, name: "김익현", status: "합격", major: "일반전형" },
    { applicationNumber: 515881, school: "미사중학교", class: 10, number: 7, name: "김하율", status: "합격", major: "일반전형" },
    { applicationNumber: 498286, school: "미사강변중학교", class: 5, number: 27, name: "전준서", status: "합격", major: "일반전형" },
    { applicationNumber: 501692, school: "윤슬중학교", class: 11, number: 17, name: "송지원", status: "합격", major: "일반전형" },
    { applicationNumber: 486337, school: "감일중학교", class: 3, number: 9, name: "박시우", status: "합격", major: "일반전형" },
    { applicationNumber: 486345, school: "윤슬중학교", class: 6, number: 24, name: "장윤성", status: "합격", major: "일반전형" },
    { applicationNumber: 528437, school: "미사중학교", class: 4, number: 23, name: "정우진", status: "합격", major: "일반전형" },
    { applicationNumber: 524493, school: "미사중학교", class: 12, number: 22, name: "이윤재", status: "합격", major: "일반전형" },
    { applicationNumber: 521574, school: "은가람중학교", class: 2, number: 15, name: "서재현", status: "합격", major: "일반전형" },
    { applicationNumber: 557752, school: "미사중학교", class: 3, number: 19, name: "이수아", status: "합격", major: "일반전형" },
    { applicationNumber: 552047, school: "미사중학교", class: 8, number: 8, name: "김지수", status: "합격", major: "일반전형" },
    { applicationNumber: 531437, school: "하남중학교", class: 2, number: 25, name: "최라온", status: "합격", major: "일반전형" },
    { applicationNumber: 482025, school: "감일중학교", class: 2, number: 2, name: "권태강", status: "합격", major: "일반전형" },
    { applicationNumber: 545665, school: "덕풍중학교", class: 4, number: 28, name: "추선우", status: "합격", major: "일반전형" },
    { applicationNumber: 532805, school: "동부중학교", class: 1, number: 11, name: "송윤아", status: "합격", major: "일반전형" },
    { applicationNumber: 484132, school: "윤슬중학교", class: 12, number: 20, name: "유동윤", status: "합격", major: "일반전형" },
    { applicationNumber: 545666, school: "하남중학교", class: 1, number: 18, name: "이태훈", status: "합격", major: "일반전형" },
    { applicationNumber: 482036, school: "남양주다산중학교", class: 3, number: 4, name: "김도연", status: "합격", major: "일반전형" },
    { applicationNumber: 507754, school: "신평중학교", class: 1, number: 19, name: "유시안", status: "합격", major: "일반전형" },
    { applicationNumber: 501695, school: "은가람중학교", class: 4, number: 1, name: "강예모", status: "합격", major: "일반전형" },
    { applicationNumber: 539966, school: "남한중학교", class: 2, number: 26, name: "조아인", status: "합격", major: "일반전형" },
    { applicationNumber: 484136, school: "윤슬중학교", class: 6, number: 9, name: "김현아", status: "합격", major: "일반전형" },
    { applicationNumber: 548945, school: "감일백제중학교", class: 5, number: 11, name: "남연우", status: "합격", major: "일반전형" },
    { applicationNumber: 501693, school: "윤슬중학교", class: 11, number: 20, name: "안우진", status: "합격", major: "일반전형" },
    { applicationNumber: 524494, school: "미사중학교", class: 12, number: 24, name: "이지훈", status: "합격", major: "일반전형" },
    { applicationNumber: 513440, school: "미사강변중학교", class: 12, number: 28, name: "장다연", status: "합격", major: "일반전형" },
    { applicationNumber: 504644, school: "미사중학교", class: 7, number: 19, name: "박세신", status: "합격", major: "일반전형" },
    { applicationNumber: 487749, school: "윤슬중학교", class: 6, number: 31, name: "최준우", status: "합격", major: "일반전형" },
    { applicationNumber: 521575, school: "은가람중학교", class: 2, number: 28, name: "최승우", status: "합격", major: "일반전형" },
    { applicationNumber: 572601, school: "덕풍중학교", class: 3, number: 28, name: "한정훈", status: "합격", major: "일반전형" },
    { applicationNumber: 521586, school: "감일백제중학교", class: 7, number: 15, name: "신지성", status: "합격", major: "일반전형" },
    { applicationNumber: 524495, school: "윤슬중학교", class: 2, number: 29, name: "채연우", status: "합격", major: "일반전형" },
    { applicationNumber: 501690, school: "미사강변중학교", class: 8, number: 17, name: "박규민", status: "합격", major: "일반전형" },
    { applicationNumber: 515884, school: "윤슬중학교", class: 4, number: 21, name: "이서윤", status: "합격", major: "일반전형" },
    { applicationNumber: 482026, school: "감일중학교", class: 2, number: 12, name: "어진유", status: "합격", major: "일반전형" },
    { applicationNumber: 482027, school: "감일중학교", class: 2, number: 22, name: "조영민", status: "합격", major: "일반전형" },
    { applicationNumber: 501696, school: "윤슬중학교", class: 11, number: 15, name: "손하연", status: "합격", major: "일반전형" },
    { applicationNumber: 565848, school: "신장중학교", class: 1, number: 16, name: "이승빈", status: "합격", major: "일반전형" },
    { applicationNumber: 547666, school: "미사중학교", class: 9, number: 16, name: "백은서", status: "합격", major: "일반전형" },
    { applicationNumber: 545670, school: "윤슬중학교", class: 3, number: 7, name: "김원하", status: "합격", major: "일반전형" },
    { applicationNumber: 504917, school: "신평중학교", class: 2, number: 2, name: "구현준", status: "합격", major: "일반전형" },
    { applicationNumber: 498313, school: "미사강변중학교", class: 2, number: 14, name: "신아현", status: "합격", major: "일반전형" },
    { applicationNumber: 548944, school: "미사중학교", class: 6, number: 2, name: "곽민준", status: "합격", major: "일반전형" },
    { applicationNumber: 518169, school: "윤슬중학교", class: 1, number: 29, name: "정현빈", status: "합격", major: "일반전형" },
    { applicationNumber: 531438, school: "하남중학교", class: 4, number: 22, name: "이재율", status: "합격", major: "일반전형" },
    { applicationNumber: 484141, school: "윤슬중학교", class: 8, number: 7, name: "김혜민", status: "합격", major: "일반전형" },
    { applicationNumber: 557750, school: "윤슬중학교", class: 2, number: 9, name: "김한동", status: "합격", major: "일반전형" },
    { applicationNumber: 498325, school: "윤슬중학교", class: 10, number: 28, name: "최민지", status: "합격", major: "일반전형" },
    
    // --- 검정고시자 명단 (합격으로 수정 완료) ---
    { applicationNumber: 594045, school: "검정고시자", class: 0, number: 0, name: "강승우", status: "합격", major: "일반전형" }, 
    { applicationNumber: 515831, school: "검정고시자", class: 0, number: 0, name: "김희람", status: "합격", major: "일반전형" }, 
    { applicationNumber: 593965, school: "검정고시자", class: 0, number: 0, name: "박신우", status: "합격", major: "일반전형" }, 
    
    // --- 불합격자 명단 (총 5명) ---
    { applicationNumber: 595549, school: "신평중학교", class: 5, number: 21, name: "이지용", status: "불합격", major: "일반전형" },
    { applicationNumber: 595548, school: "신평중학교", class: 3, number: 21, name: "전요한", status: "불합격", major: "일반전형" },
    { applicationNumber: 595821, school: "윤슬중학교", class: 2, number: 20, name: "윤영빈", status: "불합격", major: "일반전형" },
    { applicationNumber: 593261, school: "덕풍중학교", class: 2, number: 29, name: "최우진", status: "불합격", major: "일반전형" },
    { applicationNumber: 595822, school: "윤슬중학교", class: 2, number: 21, name: "윤지인", status: "불합격", major: "일반전형" },
    
    // --- 일반 합격자 명단 (불합격자로 잘못 분류되었던 명단을 합격으로 다시 반영합니다.) ---
    { applicationNumber: 498294, school: "미사강변중학교", class: 3, number: 20, name: "이시혁", status: "합격", major: "일반전형" },
    { applicationNumber: 486340, school: "윤슬중학교", class: 12, number: 25, name: "이채원", status: "합격", major: "일반전형" },
    { applicationNumber: 482034, school: "윤슬중학교", class: 7, number: 8, name: "김은광", status: "합격", major: "일반전형" },
    { applicationNumber: 530485, school: "미사중학교", class: 3, number: 11, name: "배서현", status: "합격", major: "일반전형" },
    { applicationNumber: 498331, school: "윤슬중학교", class: 13, number: 3, name: "김서윤", status: "합격", major: "일반전형" },
    { applicationNumber: 510792, school: "은가람중학교", class: 4, number: 25, name: "전빈", status: "합격", major: "일반전형" },
    { applicationNumber: 504646, school: "윤슬중학교", class: 13, number: 29, name: "함아윤", status: "합격", major: "일반전형" },
    { applicationNumber: 528439, school: "하남중학교", class: 1, number: 10, name: "민래원", status: "합격", major: "일반전형" },
    { applicationNumber: 545662, school: "윤슬중학교", class: 1, number: 21, name: "이재윤", status: "합격", major: "일반전형" },
    { applicationNumber: 545668, school: "윤슬중학교", class: 5, number: 2, name: "강우현", status: "합격", major: "일반전형" },
    { applicationNumber: 518176, school: "감일백제중학교", class: 4, number: 24, name: "주하은", status: "합격", major: "일반전형" },
    { applicationNumber: 530483, school: "미사중학교", class: 13, number: 23, name: "이정한", status: "합격", major: "일반전형" },
    { applicationNumber: 501700, school: "윤슬중학교", class: 10, number: 23, name: "임탐", status: "합격", major: "일반전형" },
    { applicationNumber: 559069, school: "미사강변중학교", class: 9, number: 15, name: "양현우", status: "합격", major: "일반전형" },
    { applicationNumber: 510788, school: "윤슬중학교", class: 9, number: 28, name: "장준호", status: "합격", major: "일반전형" },
    { applicationNumber: 528434, school: "미사강변중학교", class: 9, number: 30, name: "허원재", status: "합격", major: "일반전형" },
    { applicationNumber: 552048, school: "미사중학교", class: 8, number: 27, name: "조아인", status: "합격", major: "일반전형" },
    { applicationNumber: 574106, school: "윤슬중학교", class: 13, number: 18, name: "우혜원", status: "합격", major: "일반전형" },
    { applicationNumber: 545661, school: "윤슬중학교", class: 1, number: 19, name: "유예늘", status: "합격", major: "일반전형" },
    { applicationNumber: 482037, school: "미사중학교", class: 1, number: 24, name: "이광재", status: "합격", major: "일반전형" },
    { applicationNumber: 585169, school: "은가람중학교", class: 7, number: 4, name: "김나림", status: "합격", major: "일반전형" },
    { applicationNumber: 591322, school: "미사중학교", class: 7, number: 13, name: "김이록", status: "합격", major: "일반전형" },
    { applicationNumber: 498318, school: "윤슬중학교", class: 7, number: 5, name: "김승준", status: "합격", major: "일반전형" },
    { applicationNumber: 486341, school: "윤슬중학교", class: 12, number: 27, name: "장세희", status: "합격", major: "일반전형" },
    { applicationNumber: 536525, school: "윤슬중학교", class: 3, number: 14, name: "박지민", status: "합격", major: "일반전형" },
    { applicationNumber: 593629, school: "미사중학교", class: 3, number: 31, name: "최솔", status: "합격", major: "일반전형" },
    { applicationNumber: 595286, school: "미사중학교", class: 7, number: 7, name: "김민서", status: "합격", major: "일반전형" },
    { applicationNumber: 593513, school: "윤슬중학교", class: 10, number: 3, name: "김도윤", status: "합격", major: "일반전형" },
    { applicationNumber: 586017, school: "윤슬중학교", class: 7, number: 30, name: "차예담", status: "합격", major: "일반전형" },
    { applicationNumber: 584128, school: "윤슬중학교", class: 9, number: 29, name: "정상연", status: "합격", major: "일반전형" },
    { applicationNumber: 584127, school: "윤슬중학교", class: 2, number: 30, name: "최민호", status: "합격", major: "일반전형" },
    { applicationNumber: 585540, school: "윤슬중학교", class: 4, number: 8, name: "김태율", status: "합격", major: "일반전형" },
    { applicationNumber: 588649, school: "은가람중학교", class: 1, number: 11, name: "김준영", status: "합격", major: "일반전형" },
    { applicationNumber: 575865, school: "미사강변중학교", class: 4, number: 4, name: "김범규", status: "합격", major: "일반전형" },
    { applicationNumber: 588651, school: "윤슬중학교", class: 10, number: 17, name: "이도현", status: "합격", major: "일반전형" },
    { applicationNumber: 565847, school: "윤슬중학교", class: 6, number: 29, name: "최윤지", status: "합격", major: "일반전형" },
    { applicationNumber: 593822, school: "윤슬중학교", class: 5, number: 15, name: "서다현", status: "합격", major: "일반전형" },
    { applicationNumber: 593844, school: "윤슬중학교", class: 7, number: 1, name: "국현", status: "합격", major: "일반전형" },
    { applicationNumber: 593845, school: "미사중학교", class: 9, number: 22, name: "정민주", status: "합격", major: "일반전형" },
    { applicationNumber: 593628, school: "감일백제중학교", class: 5, number: 3, name: "길해리", status: "합격", major: "일반전형" },
    { applicationNumber: 591351, school: "미사중학교", class: 2, number: 28, name: "정예원", status: "합격", major: "일반전형" },
    { applicationNumber: 595165, school: "윤슬중학교", class: 2, number: 7, name: "김지훈", status: "합격", major: "일반전형" },
    { applicationNumber: 593848, school: "은가람중학교", class: 3, number: 3, name: "김선율", status: "합격", major: "일반전형" },
    { applicationNumber: 588658, school: "윤슬중학교", class: 11, number: 3, name: "김가람", status: "합격", major: "일반전형" },
    { applicationNumber: 593847, school: "윤슬중학교", class: 7, number: 20, name: "이소율", status: "합격", major: "일반전형" },
    { applicationNumber: 593209, school: "미사강변중학교", class: 6, number: 32, name: "최준서", status: "합격", major: "일반전형" },
    { applicationNumber: 591397, school: "미사중학교", class: 5, number: 33, name: "황지유", status: "합격", major: "일반전형" },
    { applicationNumber: 592104, school: "윤슬중학교", class: 1, number: 23, name: "이준혁", status: "합격", major: "일반전형" },
    { applicationNumber: 592592, school: "윤슬중학교", class: 13, number: 10, name: "김하윤", status: "합격", major: "일반전형" },
    { applicationNumber: 591662, school: "미사강변중학교", class: 6, number: 18, name: "윤여슬", status: "합격", major: "일반전형" },
    { applicationNumber: 593466, school: "윤슬중학교", class: 9, number: 4, name: "김우주", status: "합격", major: "일반전형" },
    { applicationNumber: 591379, school: "미사중학교", class: 4, number: 19, name: "이혜선", status: "합격", major: "일반전형" },
    { applicationNumber: 590665, school: "미사강변중학교", class: 5, number: 18, name: "안서현", status: "합격", major: "일반전형" },
    { applicationNumber: 580298, school: "미사강변중학교", class: 13, number: 29, name: "최서연", status: "합격", major: "일반전형" },
    { applicationNumber: 585817, school: "미사중학교", class: 7, number: 3, name: "권준성", status: "합격", major: "일반전형" },
    { applicationNumber: 593208, school: "윤슬중학교", class: 8, number: 16, name: "오지훈", status: "합격", major: "일반전형" },
    { applicationNumber: 591378, school: "미사중학교", class: 8, number: 29, name: "조훈률", status: "합격", major: "일반전형" },
    { applicationNumber: 591279, school: "미사강변중학교", class: 3, number: 29, name: "탁연후", status: "합격", major: "일반전형" },
    { applicationNumber: 591326, school: "미사중학교", class: 4, number: 16, name: "이정모", status: "합격", major: "일반전형" },
    { applicationNumber: 588650, school: "윤슬중학교", class: 2, number: 28, name: "조동일", status: "합격", major: "일반전형" },
    { applicationNumber: 585869, school: "미사강변중학교", class: 13, number: 23, name: "이승민", status: "합격", major: "일반전형" },
    { applicationNumber: 595254, school: "미사중학교", class: 9, number: 31, name: "최종서", status: "합격", major: "일반전형" },
    { applicationNumber: 591280, school: "윤슬중학교", class: 1, number: 3, name: "김민서", status: "합격", major: "일반전형" },
    { applicationNumber: 588684, school: "윤슬중학교", class: 3, number: 10, name: "김태린", status: "합격", major: "일반전형" },
    { applicationNumber: 585818, school: "윤슬중학교", class: 11, number: 24, name: "정우민", status: "합격", major: "일반전형" },
    { applicationNumber: 574107, school: "미사중학교", class: 1, number: 22, name: "유연지", status: "합격", major: "일반전형" },
    
    // --- 불합격자 명단 (총 5명) ---
    { applicationNumber: 595549, school: "신평중학교", class: 5, number: 21, name: "이지용", status: "불합격", major: "일반전형" },
    { applicationNumber: 595548, school: "신평중학교", class: 3, number: 21, name: "전요한", status: "불합격", major: "일반전형" },
    { applicationNumber: 595821, school: "윤슬중학교", class: 2, number: 20, name: "윤영빈", status: "불합격", major: "일반전형" },
    { applicationNumber: 593261, school: "덕풍중학교", class: 2, number: 29, name: "최우진", status: "불합격", major: "일반전형" },
    { applicationNumber: 595822, school: "윤슬중학교", class: 2, number: 21, name: "윤지인", status: "불합격", major: "일반전형" }
    
    // 이 외의 모든 항목은 합격 처리되었습니다.
];


// =======================================================================
// 2. 조회 로직 및 이벤트 리스너 (4가지 필드 조회 로직 유지)
// =======================================================================
document.addEventListener('DOMContentLoaded', () => {
    const checkForm = document.getElementById('checkForm');
    if (checkForm) {
        checkForm.addEventListener('submit', checkAdmission); 
    } else {
        console.error("오류: index.html에서 'checkForm' ID를 가진 <form> 요소를 찾을 수 없습니다."); 
    }
});

function checkAdmission(event) {
    event.preventDefault(); // 폼 제출 시 페이지 새로고침 방지

    const schoolInput = document.getElementById('schoolName');
    const classInput = document.getElementById('classNumber'); // 반
    const numberInput = document.getElementById('studentNumber'); // 번호 (학생 번호)
    const nameInput = document.getElementById('studentName');
    
    const resultDiv = document.getElementById('result');
    const schoolSong = document.getElementById('schoolSong');

    if (!schoolInput || !classInput || !numberInput || !nameInput) {
        resultDiv.innerHTML = getErrorHtml("HTML 입력 요소 ID 오류입니다. 관리자에게 문의하세요.");
        stopAndResetSong(schoolSong);
        return;
    }

    const inputSchool = schoolInput.value.trim();
    const inputName = nameInput.value.trim();
    
    const inputClassValue = classInput.value.trim();
    const inputNumberValue = numberInput.value.trim();
    
    // ✅ 검정고시자 특수 처리: "검정고시자"가 입력되면 반/번호를 0으로 설정
    let inputClass = (inputSchool === "검정고시자" && inputClassValue === '0') ? 0 : parseInt(inputClassValue);
    let inputNumber = (inputSchool === "검정고시자" && inputNumberValue === '0') ? 0 : parseInt(inputNumberValue); 
    
    // ✅ 1차 유효성 검사 (빈 값 또는 숫자가 아닐 때)
    if (!inputSchool || inputSchool === "" || isNaN(inputClass) || isNaN(inputNumber) || !inputName || inputName === "") {
        resultDiv.innerHTML = getErrorHtml("모든 항목을 정확히 입력했는지 확인해 주세요. (반/번호는 숫자만 입력)");
        stopAndResetSong(schoolSong);
        return;
    }
    
    // ✅ 4가지 필드 모두 일치하는 학생을 찾습니다.
    const result = candidates.find(c => 
        c.school === inputSchool && 
        c.class === inputClass && 
        c.number === inputNumber && 
        c.name === inputName
    );

    if (result) {
        if (result.status === "합격") {
            resultDiv.innerHTML = getPassHtml(result); 
            schoolSong.play().catch(e => console.error("오디오 재생 실패:", e));
        } else {
            resultDiv.innerHTML = getFailHtml(result);
            stopAndResetSong(schoolSong);
        }
    } else {
        resultDiv.innerHTML = getErrorHtml("입력하신 정보와 일치하는 수험생 정보가 명단에 없습니다. 정보를 다시 한번 확인해주세요.");
        stopAndResetSong(schoolSong);
    }
}

// =======================================================================
// 3. 결과 HTML 생성 함수들 (메시지 및 PDF 경로)
// =======================================================================

function getPassHtml(data) {
    const applicationNumber = data.applicationNumber; 
    const pdfPath = `./images/${applicationNumber}.pdf`; 

    return `
        <div class="admission-pass">
            <h1>🎉 합격자 발표 확인 🎉</h1>
            
            <p style="font-size: 1.5em; font-weight: bold; margin-bottom: 5px;">
                <strong style="color: #28a745;">${data.name} 학생</strong>
            </p>
            <p style="font-size: 1.2em; margin-bottom: 20px;">
                (출신 중학교: ${data.school})
            </p>
            
            <p style="margin-top: 10px; font-weight: bold; color: #0056b3;">
                접수번호 **${applicationNumber}**로 2026학년도 신입학 전형에 합격하셨습니다.
            </p>
            
            <p>
                합격 증명서는 아래 버튼을 통해 고화질 PDF 파일로 다운로드/출력하실 수 있습니다.
            </p>

            <a href="${pdfPath}" target="_blank" class="print-button">
                ✅ 합격증 PDF 파일 출력/다운로드
            </a>
            
        </div>
    `;
}

function getFailHtml(data) {
    const applicationNumber = data.applicationNumber; 

    return `
        <div class="admission-fail">
            <h1>😭 아쉽게도 불합격입니다.</h1>
            <p>수험생 <strong style="font-size: 1.1em;">${data.name}</strong> 님 (접수번호: ${applicationNumber})은 명단에 포함되어 있습니다.</p>
            <p>하남고등학교에 관심을 가져주셔서 감사합니다. 다른 좋은 기회가 있기를 기원합니다.</p>
        </div>
    `;
}

function getErrorHtml(message) {
    return `
        <div class="admission-error">
            <h1>⚠️ 조회 오류</h1>
            <p>${message}</p>
        </div>
    `;
}

// =======================================================================
// 4. 오디오 제어 함수
// =======================================================================
function stopAndResetSong(audioElement) {
    if (audioElement) {
        audioElement.pause();
        audioElement.currentTime = 0;
    }
}
