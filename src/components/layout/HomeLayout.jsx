import Footer from "../common/Footer/Footer";
import NavBar from "../common/NavBar/NavBar";
import AOSProvider from "../common/Provider/AOSProvider";

const HomeLayout = ({ children }) => {
  return (
    <AOSProvider>
      <div className="relative">
        <NavBar />
        {children}
        <Footer />
      </div>
    </AOSProvider>
  );
};

export default HomeLayout;
