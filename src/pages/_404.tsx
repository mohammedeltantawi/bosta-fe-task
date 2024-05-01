import { useTranslation } from "react-i18next";
import Navbar from "../components/navbar/navbar.component";

const PageNotFound = () => {
  const { i18n } = useTranslation();
  return <div className="w-full justify-center items-center flex flex-col gap-10"  dir={i18n.language === "ar" ? "rtl": "ltr"}>
    <Navbar />
  </div>;
};

export default PageNotFound;
