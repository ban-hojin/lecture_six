// 1. url(주소)를 키값을 넣고 가져온다
// 2. 키값을 변수로 저장
// 3. 인출 시간차 문제로 async 함수 설정
// 4. 인스턴스 객체 생성 (new url)
// 5. fetch 함수를 통해 뉴스 가져오기
// 6. await를 통해 함수를 기다린다.(비동기 함수)
// 7. 받은 자료를 json 형식을 통해 받아온다.(비동기 함수)
// 8. 전체 코딩을 위해 변수 재할당
// 9. 뉴스 호출 : 결과값 ddddd 및 미국 뉴스 현출
// 10. (배포 문제로 url 누나 타임즈로 변경 예정)

const API_KEY = `93c0713a9b014052bbad1e41656a4a91`;
let news=[]
const getLatestNews = async () => {
 const url = new URL(
  `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
);
 const response = await fetch(url);
 const data = await response.json();
 news = data.articles;
 console.log("ddddd",news);
};
getLatestNews();