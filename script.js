document.addEventListener("DOMContentLoaded", function () {
    const usageButton = document.getElementById("usageButton");
    const usagePopup = document.getElementById("usagePopup");
    const closePopup = document.getElementById("closePopup");

    // 사용법 버튼 클릭 시 팝업 토글
    usageButton.addEventListener("click", function () {
        if (usagePopup.style.display === "none") {
            usagePopup.style.display = "block";
        } else {
            usagePopup.style.display = "none";
        }
    });

    // 닫기 버튼 클릭 시 팝업 숨김
    closePopup.addEventListener("click", function () {
        usagePopup.style.display = "none";
    });

    // 다른 곳 클릭하면 팝업 닫기
    document.addEventListener("click", function (event) {
        if (!usageButton.contains(event.target) && !usagePopup.contains(event.target)) {
            usagePopup.style.display = "none";
        }
    });
});




function getMaterialsForClass(className, level = null, device = null) {
    const materials = {

        "로봇 공학자": {
            "유킷": [
                { name: "유킷", ratio: 1, requiresQuantity: true }, 
                { name: ["유킷 박스"], ratio: 4, requiresQuantity: true },
                { name: "실습 휴대폰", ratio: 1, requiresQuantity: true }, 
                { name: ["배틀맵"], requiresQuantity: true, fixedQuantity: 4 } // 고정 수량: 4
            ],
            "지무": [
                { name: "지무", ratio: 1, requiresQuantity: true }, 
                { name: ["유킷 박스"], ratio: 4, requiresQuantity: true },
                { name: "실습 휴대폰", ratio: 1, requiresQuantity: true }, 
            ],
            "네오봇": [
                { name: "네오봇", ratio: 1, requiresQuantity: true }, 
                { name: "네오봇 박스", ratio: 4, requiresQuantity: true }, 
                { name: ["배틀맵", "건전지", "젠더"] },
            ]
        },

        
        "자율주행": [
            { name: "네오봇", ratio: 1, requiresQuantity: true }, 
            { name: "네오봇 박스", ratio: 4, requiresQuantity: true }, 
            { name: "실습 휴대폰", ratio: 1, requiresQuantity: true }, 
            { name: ["자율주행맵"], requiresQuantity: true, fixedQuantity: 6 } // 고정 수량: 6
        ],

        "머신러닝": {
            "컴퓨터실": [
                { name: ["컴퓨터실 사용: 웹캠"], ratio: 1, requiresQuantity: true }, 
                { name: ["포스트잇"] },
            ],
            "노트북": [
                { name: "노트북", ratio: 2, requiresQuantity: true }, 
                { name: ["충전기·마우스", "멀티탭", "포스트잇"] },
            ],
            "태블릿": [
                { name: "태블릿", ratio: 1, requiresQuantity: true }, 
                { name: ["포스트잇"] },
            ]
        },

        "VR 프로그램": {
            "갈색 VR": [
                { name: "갈색 VR", ratio: 1, requiresQuantity: true },
                { name: "실습 휴대폰 or 태블릿", ratio: 1, requiresQuantity: true }, 
                { name: ["돌돌이 테이프"] },
            ],
            "파랑 VR": [
                { name: "파랑 VR", ratio: 1, requiresQuantity: true },
                { name: "실습 휴대폰 or 태블릿", ratio: 1, requiresQuantity: true }, 
                { name: ["돌돌이 테이프"] },
            ],
        },
        

        "AR": [
            { name: "머지큐브", ratio: 1, requiresQuantity: true },
            { name: "실습 휴대폰", ratio: 1, requiresQuantity: true }, 
        ],

        
        "홀로그램": [
            { name: "홀로그램", ratio: 1, requiresQuantity: true },
            { name: "실습 휴대폰", ratio: 1, requiresQuantity: true }, 
        ],

        "메타버스": [
            { name: ["교사 노트북", "중계용 모니터", "멀티탭"] },
            { name: "실습 휴대폰 or 태블릿", ratio: 1, requiresQuantity: true }, 
        ],

        "신재생에너지": {
            "저학년": [
                { name: "신재생조립kit", ratio: 1, requiresQuantity: true },
                ],

            "고학년": [
                { name: ["레고브릭", "바퀴", "할로겐등"] },
                { name: "태양광판+USB선풍기", ratio: 1, requiresQuantity: true },
                { name: ["절연테이프", "색테이프", "네임펜", "글루건", "멀티탭"] },
            ]       
        },   

        "3D설계 모델링": [
                { name: "3D펜", ratio: 1, requiresQuantity: true }, 
                { name: ["어댑터·케이블", "멀티탭", "도안", "가위", "장갑"] },
                { name: ["필라멘트"], Quantity: true, ratio: 4 } // 반 개수×4
        ],

        "시각디자인": {
            "Quiver": [
                { name: "유인물", ratio: 1, requiresQuantity: true },
                { name: "실습 휴대폰", ratio: 1, requiresQuantity: true },
                ],

            "AI 캐릭터": [
                { name: "태블릿", ratio: 1, requiresQuantity: true },
                { name: ["터치펜"] },
            ]       
        },


        "애니메이터": [
            { name: "태블릿", ratio: 1, requiresQuantity: true },
            { name: ["터치펜"] },
        ],


        "스마트팩토리": [
                { name: "스마트팜용 유킷", ratio: 1, requiresQuantity: true },
                { name: ["기물"] },
                { name: "실습 휴대폰", ratio: 1, requiresQuantity: true },
            ],

        "휴머노이드": [
                { name: "알파", ratio: 1, requiresQuantity: true },
                { name: "실습 휴대폰", ratio: 1, requiresQuantity: true },
                { name: ["교구 확인필요!"] },
            ],
            
    };


    // ✅ 클래스 존재 여부 확인
    if (!materials[className]) return []; 

                if (materials[className]) {
        if (level && materials[className][level]) {
            return materials[className][level]; // ✅ 레벨이 존재하면 해당 데이터를 반환
        }
        if (device && materials[className][device]) {
            return materials[className][device]; // ✅ 기기가 존재하면 해당 데이터를 반환
        }
        if (Array.isArray(materials[className])) {
            return materials[className]; // ✅ 일반 과목 반환
        }
    }
    return []; // ✅ 과목이 없을 경우 빈 배열 반환

    // ✅ 일반 과목 반환
    return Array.isArray(materials[className]) ? materials[className] : [];
    }

    function autoCheck(checkboxId) {
    const checkbox = document.getElementById(checkboxId);
    if (checkbox) {
        checkbox.checked = true;
    }
}
function toggleAllClasses() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"][name^="class"]');
    const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);

    checkboxes.forEach(checkbox => {
        checkbox.checked = !allChecked;
        
        // ✅ 추가 옵션을 숨기거나 보이게만 하고, 체크 여부는 유지
        toggleAdditionalOptions(checkbox);
    });
}



function updateProgramCount() {
    const programCountDiv = document.getElementById("programCount");

    // ✅ 프로그램 카운트 요소가 존재하는지 확인
    if (!programCountDiv) {
        console.warn("Warning: programCount 요소가 존재하지 않습니다.");
        return;
    }

    const selectedClasses = Array.from(document.querySelectorAll('input[name^="class"]:checked'));
    const schoolName = document.querySelector('input[name="schoolName"]').value.trim();
    const lessonCount = parseInt(document.querySelector('input[name="lessonCount"]').value.trim()) || 2;
    const totalStudents = parseInt(document.getElementById("totalStudents").value.trim()) || 0;

    const programCount = selectedClasses.length;

    programCountDiv.innerHTML = `
        ${schoolName ? `<strong>${schoolName}</strong>, ` : ""}
        ${lessonCount}차시 
        ${totalStudents ? `(${totalStudents}명)` : ""} - 
        프로그램 총 <strong>${programCount}개</strong> 선택됨.
    `;
}

// 모든 체크박스에 이벤트 리스너 추가
document.querySelectorAll('input[name^="class"]').forEach(checkbox => {
    checkbox.addEventListener('change', updateProgramCount);
});

// 초기 로드 시에도 업데이트
updateProgramCount();


function showSelectedMaterials() {
    const selectedMaterialsListDiv = document.getElementById("selectedMaterialsList");
    const schoolName = document.querySelector('input[name="schoolName"]').value.trim();
    const lessonCount = parseInt(document.querySelector('input[name="lessonCount"]').value.trim()) || 2; // 기본 2차시
    const lessonFrequency = parseInt(document.querySelector('input[name="lessonFrequency"]').value.trim()) || 1;
    const totalStudents = parseInt(document.getElementById("totalStudents").value.trim()) || 0;
    const selectedClasses = Array.from(document.querySelectorAll('input[name^="class"]:checked'));

    // ✅ 반 개수를 고려한 총 프로그램 개수 계산
    let totalPrograms = selectedClasses.reduce((sum, checkbox) => {
        const classNumber = checkbox.name.replace(/[^0-9]/g, '');
        const countInput = document.querySelector(`input[name="count${classNumber}"]`);
        return sum + (parseInt(countInput?.value) || 1); // ✅ 반 개수만큼 프로그램 개수 증가
    }, 0);

    // ✅ 선택한 과목 정보 HTML 생성 (학교명, 차시, 인원 밑에 프로그램 개수 추가)
    let html = `<div class="school-name">
                    ${schoolName || "학교 이름 없음"}  
                    ${lessonCount}차시 (${lessonFrequency}회)
                    ${totalStudents ? ` - ${totalStudents}명` : ""}
                </div>
                <div style="font-size: 14px; color: #555; margin-bottom: 5px;">
                    프로그램 총 <strong>${totalPrograms}개</strong> 선택
                </div>`;
            

    // ✅ 결과를 표시하는 요소에 삽입
    selectedMaterialsListDiv.innerHTML = html;

    selectedClasses.forEach((checkbox) => {
        let className = checkbox.value.trim();
        const classNumber = checkbox.name.replace(/[^0-9]/g, '');
        const countInput = document.querySelector(`input[name="count${classNumber}"]`);
        const count = parseInt(countInput?.value) || 1;
    
        const levels = Array.from(document.querySelectorAll(`input[name="level${classNumber}"]:checked`))
                            .map(input => input.value);
        const device = document.querySelector(`input[name="device${classNumber}"]:checked`)?.value || null;
    
        let materials = [];
        if (levels.length > 0) {
            levels.forEach(level => {
                materials = materials.concat(getMaterialsForClass(className, level, device) || []);
            });
        } else {
            materials = getMaterialsForClass(className, null, device) || [];
        }
    
        html += `<div class="print-box" style="background-color:rgba(249, 249, 249, 0); border-left: 5px solid #379dc6; padding: 5px; margin-bottom: 3px; border-radius: 3px; page-break-inside: avoid; ">
                    <h3 style="color: #2b4b6f; margin-bottom: 5px;">📌 ${className} <span style="font-size: 14px; color: #555;">(${count}개반)</span></h3>
                    <div style="font-size: 14px; margin-bottom: 5px;">인원: `;
    
        for (let i = 1; i <= count; i++) {
            html += `<input type="number" name="persons-${className}-${i}" class="editable-input" value="${totalStudents}">`;
            if (i < count) html += ' / ';
        }
        html += `</div>`;
    
        if (materials.length > 0) {
            html += `<div style="margin-top: 3px;"><strong>📦 교구: </strong>`;
            materials.forEach((material, index) => {
                let quantity = "-";
                let isConsumable = ["갈색 VR", "파랑 VR", "홀로그램", "머지큐브", "필라멘트", "포토 프린터 카트리지", "과자박스", "유인물"]
                    .includes(material.name);
    
                if (material.fixedQuantity !== undefined) {
                    quantity = material.fixedQuantity;
                } else if (material.ratio) {
                    quantity = Math.ceil((totalStudents * count) / material.ratio);
                } else if (material.requiresQuantity) {
                    if (Array.isArray(material.name) && material.name.includes("유인물")) {
                        if (["㉔ 로고 디자인", "㉗ 유니버셜 디자인"].includes(className)) {
                            quantity = 3 * count;
                            if (lessonFrequency > 1) {
                                quantity *= lessonFrequency / 2;
                            }
                        } else if (["㉖ 시각디자인 (Quiver)"].includes(className)) {
                            quantity = count * lessonFrequency;
                        } else if (["㉚ 디지털 헬스"].includes(className)) {
                            quantity = count * 2 * lessonFrequency;
                        } else {
                            quantity = Math.ceil((totalStudents * count) / 4) * lessonFrequency;
                        }
                    } else if (className === "교구") {
                        quantity = count;
                    } else if (className === "① 신소재" && Array.isArray(material.name) && material.name.some(name => name.includes("키트"))) {
                        quantity = count;
                    } else {
                        quantity = count * lessonFrequency;
                    }
                }
    
                if (isConsumable) {
                    quantity *= lessonFrequency;
                }
    
                const materialName = Array.isArray(material.name) ? material.name.join(", ") : material.name;
    
                // ✅ 개수가 필요한 경우에만 `<input>` 필드 추가
                if (material.requiresQuantity || material.ratio || material.fixedQuantity !== undefined) {
                    html += `${materialName} (<input type="number" name="${className}-${materialName}" class="editable-input" value="${quantity}">)`;
                } else {
                    html += `${materialName}`; // ✅ 개수 필요 없는 경우 그냥 텍스트 출력
                }
    
                if (index < materials.length - 1) html += ", "; // ✅ 교구 리스트를 한 줄로 정리
            });
            html += `</div>`;
        } else {
            html += `<p style="color: #777;">🔸 준비할 교구 없음</p>`;
        }
        html += `</div>`;
    });
    

    selectedMaterialsListDiv.innerHTML = html;
}

function printSelectedMaterials() {
    const selectedMaterialsListDiv = document.getElementById("selectedMaterialsList");
    const memo = document.getElementById("memo")?.value.trim();

    if (!selectedMaterialsListDiv || selectedMaterialsListDiv.innerHTML.trim() === "") {
        alert("출력할 내용이 없습니다. 먼저 과목을 선택하세요.");
        return;
    }

    const clonedDiv = selectedMaterialsListDiv.cloneNode(true);

    // ✅ input 요소를 텍스트로 변환
    clonedDiv.querySelectorAll("input").forEach((input) => {
        const value = input.value || "-";
        input.replaceWith(document.createTextNode(value));
    });

    // ✅ span 태그를 strong 태그로 변환
    clonedDiv.querySelectorAll("span").forEach((span) => {
        const boldText = document.createElement("strong");
        boldText.textContent = span.textContent;
        span.replaceWith(boldText);
    });

    // ✅ 메모 추가
    if (memo) {
        const memoDiv = document.createElement("div");
        memoDiv.className = "memo-container";
        memoDiv.innerHTML = `<strong>📝 확인:</strong> ${memo}`;
        clonedDiv.appendChild(memoDiv);
    }

    // ✅ 인쇄 창 열기
    const printWindow = window.open("", "", "height=600,width=800");

    printWindow.document.write(`
        <html>
        <head>
            <title>수업 기자재 체크리스트</title>
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&family=Nanum+Gothic:wght@400;700&display=swap" rel="stylesheet">
            <style>
                body {
                    font-family: 'Nanum Gothic', sans-serif;
                    line-height: 1.6;
                    padding: 20px;
                }
                .school-name {
                    font-size: 22pt;
                    font-weight: bold;
                    margin-bottom: 20px;
                }

                .material-item {
                    margin-bottom: 20px; /* 과목 간 간격 */
                }

                .material-item span {
                    font-weight: bold; /* 과목명만 굵게 표시 */
                    font-size: 16px; /* 글자 크기도 약간 키우기 */
                }
                div {
                    margin-bottom: 10px;
                }
                strong {
                    font-size: 16px;
                    font-weight: bold;
                    color: #2b4b6f;
                }
                .materials {
                    margin-left: 15px;
                }
                .memo-container {
                    padding: 10px;
                    border-radius: 5px;
                    font-size: 18px;
                    font-weight: bold;
                    color: #333;
                }
                .memo-container strong {
                    font-weight: bold;
                    color: #007BFF;
                }
            </style>
        </head>
        <body>
    `);

    // ✅ `innerHTML` 대신 `outerHTML`을 사용
    printWindow.document.body.innerHTML += clonedDiv.outerHTML;

    printWindow.document.write(`</body></html>`);
    printWindow.document.close();

    printWindow.onload = function () {
        printWindow.print();
    };
}




document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll('.material-item input[type="checkbox"]');
    const selectAllCheckbox = document.getElementById('selectAllClasses'); // 전체 선택 체크박스

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", function () {
            toggleAdditionalOptions(checkbox);
        });

        // ✅ 페이지 로드 시에도 초기 상태 설정
        toggleAdditionalOptions(checkbox);
    });

    if (selectAllCheckbox) {
        selectAllCheckbox.addEventListener("change", function () {
            const isChecked = selectAllCheckbox.checked;
            checkboxes.forEach(checkbox => {
                checkbox.checked = isChecked;
                toggleAdditionalOptions(checkbox, !isChecked); // ✅ 해제할 때 옵션 숨기기
            });
        });
    }
});

function toggleAdditionalOptions(checkbox, forceHide = false) {
    const materialItem = checkbox.closest('.material-item');
    if (!materialItem) return;

    const additionalOptions = materialItem.querySelectorAll('.level-input');
    const checkedOptions = materialItem.querySelectorAll('.level-input input:checked');
    const mainCheckbox = materialItem.querySelector('input[type="checkbox"]:not(.level-input input)');

    if (forceHide || !mainCheckbox.checked) {
        // ✅ 전체 선택 해제 또는 개별 과목 해제 시 옵션 숨김
        additionalOptions.forEach(option => {
            option.style.display = "none";
        });
        delete materialItem.dataset.keepOptions;
    } else {
        // ✅ 과목이 선택되면 옵션 보이기
        additionalOptions.forEach(option => {
            option.style.display = "inline-block";
        });
        materialItem.dataset.keepOptions = "true";
    }
}

// ✅ 개별 옵션 선택 / 해제 감지 및 숨김 로직 반영
document.querySelectorAll('.level-input input').forEach(option => {
    option.addEventListener('change', function () {
        const materialItem = this.closest('.material-item');
        if (!materialItem) return;

        const checkedOptions = materialItem.querySelectorAll('.level-input input:checked');
        const mainCheckbox = materialItem.querySelector('input[type="checkbox"]:not(.level-input input)');

        if (checkedOptions.length === 0 && mainCheckbox.checked) {
            // ✅ 마지막 옵션이 해제되었어도 과목이 선택된 상태라면 계속 표시
            materialItem.dataset.keepOptions = "true";
            materialItem.querySelectorAll('.level-input').forEach(option => {
                option.style.display = "inline-block";
            });
        } else if (!mainCheckbox.checked) {
            // ✅ 과목이 체크 해제되면 옵션도 숨김
            materialItem.querySelectorAll('.level-input').forEach(option => {
                option.style.display = "none";
            });
            delete materialItem.dataset.keepOptions;
        }
    });
});
