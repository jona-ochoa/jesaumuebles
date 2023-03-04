import React from "react";
// import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";
import ScrollToTop from '../components/ScrollToTop'
import SignIn from "../components/Signin";

const SigninPage = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const toogle = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <>
      <ScrollToTop /> 
      {/* <Sidebar isOpen={isOpen} toogle={toogle} />
      <Navbar toogle={toogle} /> */}
      <SignIn />
    </>
  );
};

export default SigninPage;
