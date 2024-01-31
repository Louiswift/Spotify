// 生成歌单
recommendedPlaylists().then(resp => {
  const ul = document.querySelector("#RecommendedPlaylists");
  clickOnPlaylist(ul);
  let arr = resp.result;
  generatePlaylists(arr,ul);
});

loginStatus().then(async resp => {
  if (resp.data.account) {
    let titleDailyRecommendations = document.querySelector('#titleDailyRecommendations');
    let DailyRecommendations = document.querySelector('#DailyRecommendations');
    titleDailyRecommendations.style.display = 'block';

    getTheDailyRecommendedSongList().then(async resp => {
      const ul = document.querySelector("#DailyRecommendations");
      clickOnPlaylist(ul);
      let arr = resp.recommend;
      generatePlaylists(arr, ul);
    });
  }
})

window.onload = () => {
  const currentPlaySongOrder = localStorage.getItem('currentPlaySongOrder');

  if (currentPlaySongOrder !== '0' && !currentPlaySongOrder ) {
    localStorage.setItem('currentPlaySongOrder', 0);
  }
}