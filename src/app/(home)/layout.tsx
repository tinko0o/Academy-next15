import Footer from "./_components/Footer";
import Header from "./_components/Header";

const HomePageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default HomePageLayout;
