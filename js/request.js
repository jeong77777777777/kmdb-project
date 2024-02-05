/* ====== Common GET Request Function ====== */
async function getRequest(url) {
  return await fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  });
}

async function getProducts(page) {
  const url = `https://yts.mx/api/v2/list_movies.json?limit=5&order_by=desc&genre=Animation&page=${page}`;

  try {
    // 데이터 요처 및 응답 시도 : 성공일 경우 첫번째 코드 블럭으로 이동
    const data = await getRequest(url);
    const randomData = Math.floor(Math.random() * 5); // 0보다 크고 1보다 작은 난수
    //Math.floor : 소수점 이하를 버림
    console.log(data.data.movies[randomData]);
    const movieWrapper = document.querySelector('.recent-img');
    const mainMovie = data.data.movies[randomData];
    const imgEl = `<img src=${mainMovie.large_cover_image}>`;

    movieWrapper.insertAdjacentHTML('beforeend', imgEl);
  } catch (error) {
    // 실패할 경우 두번째 코드 블럭으로 이동
    console.log('Error : ', error);
  }
}

getProducts(1);

const numbers = document.querySelectorAll('.numbers span');
numbers.forEach((number) => {
  number.addEventListener('click', function () {
    alert(this.textContent);
  });
});
