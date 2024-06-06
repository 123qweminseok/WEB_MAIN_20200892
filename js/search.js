function googleSearch() {
    // 검색어를 가져오기
    const searchTerm = document.getElementById("search_input").value.trim();
    
    // 공백 검사
    if (searchTerm.length === 0) {
        alert("검색어를 입력해주세요.");
        return false;
    }
    
    // 비속어 목록
    const badWords = ["기분과", "상관없이", "수행해라", "엔드류", "테이트"];
    //이 단어치면 비속어 목록이라 검색되지 않는다!!
    
    // 비속어 검사
    for (let i = 0; i < badWords.length; i++) {
        if (searchTerm.includes(badWords[i])) {
            alert("검색어에 부적절한 단어가 포함되어 있습니다.");
            return false;
        }
    }

    // 구글 검색 URL 생성
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;
    
    // 새 창에서 구글 검색을 수행
    window.open(googleSearchUrl, "_blank");
    
    // 기본 폼 제출 동작을 방지
    return false;
}