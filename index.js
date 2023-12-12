// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text) {
  // 기존에 모달이 있다면 제거합니다.
  const existingModal = document.querySelector('.modal');
  if (existingModal) {
    existingModal.remove();
  }

  // 모달 요소를 생성합니다.
  const modal = document.createElement('div');
  modal.className = 'modal hidden';

  // 모달 내용을 담는 컨테이너를 생성합니다.
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content zoomIn';

  // 이미지를 표시할 요소를 생성합니다.
  const image = document.createElement('div');
  image.style.backgroundImage = `url(${imageUrl})`;
  image.alt = 'Door Image';
  image.style.width = '100%';
  image.style.height = '211px';

  // 텍스트를 표시할 요소를 생성합니다.
  const textElement = document.createElement('p');
  textElement.textContent = text;

  // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
  modalContent.appendChild(image);
  modalContent.appendChild(textElement);

  // 모달에 모달 컨텐트를 추가합니다.
  modal.appendChild(modalContent);

  // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
  modal.addEventListener('click', () => {
    modal.remove(); // 모달을 문서에서 제거합니다.
  });

  // 문서에 모달을 추가합니다.
  document.body.appendChild(modal);
  // 모달을 표시합니다.
  setTimeout(() => modal.classList.remove('hidden'), 0);
}

const modalMessageList = [
  { "number": 1, "message": "우왕 우연히 수정 성공!" },
  { "number": 2, "message": "코드가 이해가 잘 되진 않아요" },
  { "number": 3, "message": "하지만 작동했으니 미션 완료!" },
  { "number": 4, "message": "이게.. 코딩인가요?" },
  { "number": 5, "message": "html, css, js에 대해선 알게 되었어요" },
  { "number": 6, "message": "스스로 그리드 수정도 해서 뿌듯" },
  { "number": 7, "message": "모두모두 행복하세요!!" },
  { "number": 8, "message": "따뜻한 뱅쇼에 진저브레드맨 먹고싶은 계절" },
  { "number": 9, "message": "즐거운 크리스마스 시즌입니당" },
  { "number": 10, "message": "코딩이란 이런건가?" },
  { "number": 11, "message": "제 이름은 김다예입니다." },
  { "number": 12, "message": "메리메리메리 크리스마스!!!" },
  { "number": 13, "message": "뭔가 만들어지긴 했네요 헤헿" },
  { "number": 14, "message": "저는 김다예, 이제 곧 37살이죠" },
  { "number": 15, "message": "뭔가 더 수정을 해보고싶지만" },
  { "number": 16, "message": "우선은 이 정도로 만족을 해 봅니당.." },
  { "number": 17, "message": "눈 깜짝할 사이에 2023년이 지나갔어요!" },
  { "number": 18, "message": "여러 일들이 있었지만 전반적으로 무척 즐거웠습니다." },
  { "number": 19, "message": "모두가 행복한 12월이 되길!!" },
  { "number": 20, "message": "크리스마스 시즌을 모두가 행복하게 보냈으면 좋겠어요" },
  { "number": 21, "message": "내년에도 즐거운 일들만 가득하길 바라요!" },
  { "number": 22, "message": "따뜻한 코코아에 초콜릿 케이크" },
  { "number": 23, "message": "따뜻한 뱅쇼에 진저브레드맨" },
  { "number": 24, "message": "메리메리메리 크리스마스!!!" }
];

