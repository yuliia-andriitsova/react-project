import DairyPage from 'pages/DiarePage/DiarePage';
import { Route, Routes } from 'react-router-dom';
// import Header from './Header/Header';

export const App = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Header />} /> */}
        <Route path="/calculator" element={<DairyPage />} />
      </Routes>
    </>
  );
};
