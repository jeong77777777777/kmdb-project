async function getRequest(url) {
  return await fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  });
}

async function getProducts() {
  const url = `https://yts.mx/api/v2/list_movies.json?limit=10&order_by=desc`;

  try {
    // 데이터 요청 및 응답 시도 : 성공일 경우 첫번째 코드 블럭으로 이동
    const data = await getRequest(url);
    const movieWrapper = document.querySelector('.imgs');
    // const movieTitle = document.querySelector('.title');
    console.log(data.data.movies);

    const movies = data.data.movies;
    movies.forEach((movie) => {
      const imgEl = `<div class=imgbox><img src=${movie.medium_cover_image}><p class=title>${movie.title}</p></div>`;
      // const titleEl = `${movie.title}`;
      movieWrapper.insertAdjacentHTML('beforeend', imgEl);
      // movieTitle.insertAdjacentHTML('beforeend', titleEl);
    });
  } catch (error) {
    // 실패할 경우 두번째 코드 블럭으로 이동
    console.log('Error : ', error);
  }
}

getProducts();
