import useGoogleSheets from 'use-google-sheets';

import './App.scss';
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

  const [{ data: rows }] = data;

  return (
    <>
      {rows.map((p: any) => <Card {...p} key={p.time} />)}
    </>
  );
}

export default App;
