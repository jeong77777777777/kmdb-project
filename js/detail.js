const url = new URL(window.location.href);

const param = url.searchParams.get('id');

/* ====== Common GET Request Function ====== */
async function getRequest(url) {
  return await fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  });
}

async function getDetails(id) {
  const url = `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`;

  try {
    // 데이터 요청 및 응답 시도 : 성공일 경우 첫번째 코드 블럭으로 이동
    const data = await getRequest(url);
    console.log(data);
  } catch (error) {
    // 실패할 경우 두번째 코드 블럭으로 이동
    console.log('Error : ', error);
  }
}

getDetails(param);
