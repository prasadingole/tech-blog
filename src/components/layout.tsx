import Footer from "./footer";
import Header from "./header";

type Props = {
  children?: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="m-6">
        <Header></Header>
        {children}
        <Footer></Footer>
      </div>
    </>
  );
};
export default Layout;
