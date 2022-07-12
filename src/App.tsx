import useGoogleSheets from 'use-google-sheets';

import styles from './App.module.scss';
import { ReactComponent as OvalIcon } from './images/oval.svg';
import Card from './components/Card';

function App() {
  const { data, loading, error } = useGoogleSheets({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    sheetId: process.env.REACT_APP_GOOGLE_SHEETS_ID,
    sheetsNames: ['表單回應 1']
  });

  if (loading) {
    return <OvalIcon />;
  }

  if (error) {
    return <div>oh no, some error occurs!</div>
  }

  const [{ data: rows }] = data;

  return (
    <>
      <p className={styles.link}>
        這個網站主要是收集大家想要給他的留言，最後會直接列印這個網頁的內容燒給他
        <br />
        想要留言的朋友，<a href='https://forms.gle/teskkpCydZTtEyrV8'>這邊請</a>，輸入資料後重新整理頁面就可以看到囉!
        <br />
        另外也在收集照片，歡迎上傳到<a href='https://1drv.ms/u/s!AqjEDlfQUUuihl6RVjvXVSdAeuBs?e=ixPT2m'>one drive</a>(要登入才能使用喔!)
      </p>
      <div className={styles.container}>
        {rows.map((p: any) => <Card {...p} key={p.time} />)}
      </div>
    </>
  );
}

export default App;
