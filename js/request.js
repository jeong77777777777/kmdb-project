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
    const movieInfoWrapper = document.querySelector('.recent-info');
    const movieTitle = document.querySelector('.recent-title');

    const mainMovie = data.data.movies[randomData];

    const imgEl = `<img src=${mainMovie.large_cover_image}>`;
    const infoEl = `
    <h4>Title : <span>${mainMovie.title}</span></h4>
    <p>Genre : <span>${mainMovie.genres.join(', ')}</span></p>
    <p>Rating : <span>${mainMovie.rating} / 10</span></p>
    <p>Year : <span>${mainMovie.year}</span></p>
    <a href="./detail.html?id=${mainMovie.id}" class="btn">Details</a>`;

    const titleEl = `<h3>${mainMovie.title}</h3>`;

    movieWrapper.insertAdjacentHTML('beforeend', imgEl);
    movieInfoWrapper.insertAdjacentHTML('beforeend', infoEl);
    movieTitle.insertAdjacentHTML('beforeend', titleEl);
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
