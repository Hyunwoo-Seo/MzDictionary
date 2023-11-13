document.addEventListener("DOMContentLoaded", function() {
  const searchContainer = document.getElementById("search-container");
  const searchText = document.getElementById("search-text");
  const searchInput = document.getElementById("search-input");

  // 검색 컨테이너를 클릭했을 때 이벤트 처리
  searchContainer.addEventListener("click", function() {
    searchText.style.display = "none"; // 텍스트 숨기기
    searchInput.style.display = "block"; // 입력 상자 표시
    searchInput.focus(); // 입력 상자에 포커스 설정
  });

  // 입력 상자를 벗어났을 때 이벤트 처리
  searchInput.addEventListener("blur", function() {
    if (searchInput.value === "") {
      searchText.style.display = "block"; // 텍스트 표시
      searchInput.style.display = "none"; // 입력 상자 숨기기
    }
  });
});

