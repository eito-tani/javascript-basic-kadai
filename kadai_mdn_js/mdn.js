const todayDate = () => {
  // 現在の日付を取得する関数を定義する
  let today = new Date();
  let year = today.getFullYear();
  // 月が1ヶ月前のため1加算
  let month = today.getMonth() + 1;
  let date = today.getDate();
  // コンソールに出力
  console.log(year + '年' + month + '月' + date + '日')
}

todayDate();