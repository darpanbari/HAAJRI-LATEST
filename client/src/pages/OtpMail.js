import React from "react";
import HeaderSectionWithElements from "../components/HeaderSectionWithElements/HeaderSectionWithElements";
import SideNavbar from "../components/SideNavBar/SideNavbar";
import Breadcrumb from "../components/Breadcrumb";

const OtpMail = () => {
  return (
    <>
      <div className="display-side d-flex">
        <div style={{ width: "0px" }}>
          <SideNavbar />
        </div>

        <div className="d-flex flex-column flex-grow-1 right-container">
          {/* Top Header*/}
          <HeaderSectionWithElements />

          <div className="d-flex flex-col2 justify-content-between ">
            <div className="mb-2">
              <Breadcrumb
                title="OTP Mail"
                breadcrumb1="Dashboard"
                breadcrumb2="Otp Mail"
              />
            </div>
          </div>

          <div className="w-50 mx-auto custom-shadow bg-custom-white custom-border-radius">
            <div className="d-flex justify-content-between align-items-center border-bottom px-3 pt-3 pb-2 ">
              <h4 className="fw-bold green-1">H A A J R I</h4>
              <div className="mx-2 d-flex justify-content-end text-light-gray">
                4 October 2023
              </div>
            </div>
            <div className="m-5 bg-light-gray p-5 custom-radius text-center">
                <h4 className="mb-4">Your OTP</h4>
                <span className="green-1 fst-italic">Hey ABC,</span>
                <p className="text-secondary my-3">Thank you for choosing Haajri Company. Use the following OTP to complete the procedure to change your email address. OTP is valid for 5 minutes. Do not share this code with others, including Haajri's employees.</p>
                <h2 className="green-1">1 2 3 4 5 6</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtpMail;
