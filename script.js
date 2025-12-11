// =======================================================================
// 1. 테스트용 데이터 (합격자 1명만 남기고 모두 삭제됨)
//    - 이 코드는 명단 데이터 오류를 확인하기 위한 것입니다.
// =======================================================================
const candidates = [
    // --- 합격자 테스트용 1명만 남김 (이름: 김하남) ---
    { school: "하남중학교", class: 3, number: 25, name: "김하남", status: "합격" },
    
    // --- 불합격자 테스트용 1명만 남김 (이름: 이불합) ---
    { school: "미사중학교", class: 1, number: 1, name: "이불합", status: "불합격" }
    
    // 이외의 모든 긴 명단 데이터는 삭제되었습니다.
];


// =======================================================================
// 2. 조회 로직 및 이벤트 리스너
// =======================================================================
document.addEventListener('DOMContentLoaded', () => {
    const checkForm = document.getElementById('checkForm');
    if (checkForm) {
        checkForm.addEventListener('submit', checkAdmission);
    } else {
        console.error("오류: index.html에서 checkForm ID를 가진 폼 요소를 찾을 수 없습니다."); 
    }
});

function checkAdmission(event) {
    event.preventDefault(); // 폼 제출 시 페이지 새로고침 방지

    // 입력값 가져오기
    const inputSchool = document.getElementById('schoolName').value.trim();
    const inputClass = parseInt(document.getElementById('classNumber').value.trim());
    const inputNumber = parseInt(document.getElementById('studentNumber').value.trim());
    const inputName = document.getElementById('studentName').value.trim();
    
    const resultDiv = document.getElementById('result');
    const schoolSong = document.getElementById('schoolSong');
    
    // 입력값 유효성 검사
    if (!inputSchool || isNaN(inputClass) || isNaN(inputNumber) || !inputName) {
        resultDiv.innerHTML = getErrorHtml("모든 항목을 정확히 입력했는지 확인해 주세요.");
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
        if (result.status === "합격") {
            resultDiv.innerHTML = getPassHtml(result);
            schoolSong.play().catch(e => console.error("오디오 재생 실패:", e));
        } else {
            resultDiv.innerHTML = getFailHtml(result);
            stopAndResetSong(schoolSong);
        }
    } else {
        resultDiv.innerHTML = getErrorHtml("입력하신 정보와 일치하는 수험생 정보가 없습니다.");
        stopAndResetSong(schoolSong);
    }
}

// =======================================================================
// 3. 결과 HTML 생성 함수들 
// =======================================================================

function getPassHtml(data) {
    const certificateHtml = `
        <div class="admission-pass">
            <h1>🎉 하남고등학교 합격자 발표 🎉</h1>
            <div class="certificate-box" id="printableArea">
                <h2 style="color: #0056b3;">2026학년도 신입생 합격증</h2>
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
                <p class="message">위 학생은 본교의 2026학년도 신입생으로 최종 합격되었음을 증명합니다.</p>
                <div class="school-info">
                    <p>2024년 12월 11일</p>
                    <p>하남고등학교장</p>
                </div>
                <div class="gyoga-section">
                    <h3>빛나는 하남고등학교 교가</h3>
                    <pre class="gyoga-lyrics">// 여기에 실제 교가 가사를 넣어주세요.</pre>
                </div>
            </div>
            <button onclick="printCertificate()" class="print-button">합격증 출력</button>
        </div>
    `;
    return certificateHtml;
}

function getFailHtml(data) {
    return `
        <div class="admission-fail">
            <h1>😭 아쉽게도 불합격입니다.</h1>
            <p>수험생 ${data.name}님은 명단에 포함되어 있지 않습니다.</p>
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
// 4. 합격증 출력 기능 및 오디오 제어 함수
// =======================================================================

function printCertificate() {
    const printContents = document.getElementById('printableArea').innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    // 인쇄 후 원래 페이지 내용으로 복원 시, 이벤트 리스너를 다시 연결해야 합니다.
    document.body.innerHTML = originalContents;
    document.getElementById('checkForm').addEventListener('submit', checkAdmission);
}

function stopAndResetSong(audioElement) {
    audioElement.pause();
    audioElement.currentTime = 0;
}
