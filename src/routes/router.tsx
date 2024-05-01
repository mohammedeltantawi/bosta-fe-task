import { Route, Routes } from 'react-router-dom';
import { ROUTES_NAMES } from '../constants/route-names';
import PackageTracking from '../pages/home';
import PageNotFound from '../pages/_404';

const MainRouter = () => {
  return (
    <Routes>
      <Route path={ROUTES_NAMES.SHIPMENT+"/:id"} element={<PackageTracking />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default MainRouter;
