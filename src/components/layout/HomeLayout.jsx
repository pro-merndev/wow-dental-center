import Footer from "../common/Footer/Footer";
import NavBar from "../common/NavBar/NavBar";

const HomeLayout = ({ children }) => {
  return (
    <div className="relative">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default HomeLayout;
