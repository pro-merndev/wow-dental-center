import Footer from "../common/Footer/Footer";
import NavBar from "../common/NavBar/NavBar";

const HomeLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default HomeLayout;
