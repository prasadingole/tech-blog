import Footer from "./footer";
import Header from "./header";

type Props = {
  children?: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="mt-4 md:mx-48 grid-cols-1">
        <Header></Header>
        {children}
        <Footer></Footer>
      </div>
    </>
  );
};
export default Layout;
