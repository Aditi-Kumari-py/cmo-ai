
"use client";
import { Poppins } from "next/font/google";
import { useState, useEffect,  useRef } from "react";
import { useRouter } from "next/navigation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins", // CSS Variable for Tailwind
});
export default function AuthPage() {
  const [showVideoThumbnail, setShowVideoThumbnail] = useState(false);
  const [mobile, setMobile] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const otpRefs = [useRef(), useRef(), useRef(), useRef()];

  useEffect(() => {
    const handleBackButton = () => {
      setShowOTP(false);
    };

    window.addEventListener("popstate", handleBackButton);
    return () => window.removeEventListener("popstate", handleBackButton);
  }, []);


  const handleSignIn = () => {
    if (/^\d{10}$/.test(mobile)) {
      setShowOTP(true);
      window.history.pushState(null, "", window.location.href);
    } else {
      alert("Please enter a valid 10-digit mobile number.");
    }
  };

  const handleOTPChange = (index, value) => {
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      
      // Move to the next input field automatically
      if (value && index < otpRefs.length - 1) {
        otpRefs[index + 1].current.focus();
      }
    }
  };

  const handleOTPKeyDown = (index, event) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      otpRefs[index - 1].current.focus();
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setShowVideoThumbnail((prev) => !prev); // Toggle state every 2 seconds
    }, 4000); // Total cycle duration: 4 seconds (2s fade-out + 2s fade-in)

    return () => clearInterval(interval);
  }, []);



  return (
    <div className="flex flex-col md:flex-row w-full h-screen bg-gray-100">
      {/* Left Side: Login Box */}
      <div className="w-full md:w-1/3 flex flex-col items-center justify-center p-6 md:p-12">
        <img src="/CG logo.webp" alt="Logo" className="w-24 h-24 mb-4" />
        <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-[516px]">
          {showOTP ? (
            <div className="text-center">
              <h2 className="text-2xl pt-2 font-bold text-[#170645]">Verification Code</h2>
              <p className="text-[#170645] pt-2 mt-2">We Have Sent The Verification Code To Your Mobile Number</p>
              <div className="flex justify-center gap-3 flex-wrap py-2 mt-4">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={otpRefs[index]}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleOTPChange(index, e.target.value)}
                    onKeyDown={(e) => handleOTPKeyDown(index, e)}
                    className="w-12 h-12 text-center border-[#908AA0] text-[#170645] text-xl border rounded"
                  />
                ))}
              </div>
              <button className="w-full bg-[#170645] text-yellow-400 p-3 mt-5 mb-4 rounded-full text-lg font-bold">
                Confirm
              </button>
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-bold text-center text-[#170645]">AI Based CMO Gallery</h2>
              <p className="text-center text-[#170645]">One Click Download</p>
              <button className="flex items-center justify-center w-full border p-2 mt-4 rounded-full hover:bg-gray-200">
                <img src="/google pic.png" alt="Google" className="w-5 mr-2" />
                <p className="text-[#170645]">Sign In With Google</p>
              </button>
              <div className="flex items-center my-4">
                <hr className="flex-grow border-gray-300" />
                <span className="px-3 text-[#908AA0]">Or, Sign In With Phone No.</span>
                <hr className="flex-grow border-gray-300" />
              </div>
              <input
                type="text"
                placeholder="Mobile No."
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="border w-full p-2 rounded-full mb-4 text-[#170645]"
              />
              <button onClick={handleSignIn} className="w-full bg-[#170645] text-yellow-400 p-2 rounded-full">
                Sign In
              </button>
              <p className="text-center text-[#170645] text-sm mt-3">Not Registered Yet? <span className="text-[#170645] font-bold cursor-pointer">Register Now</span></p>
              <div className="flex justify-center gap-4 mt-4">
                <button className="text-[#170645] hover:underline">Customer Support</button>
                <button className="text-[#170645] hover:underline">Terms of Service</button>
              </div>
            </div>
          )}
        </div>
        <p className="text-center text-black mt-4">Initiative By DPR Chhattisgarh</p>
      </div>

      <div className="hidden md:flex md:w-2/3 relative overflow-hidden items-center">
        <img
          src="/Group 198.png"
          alt="Main Display"
          className={`absolute w-full max-w-[856px] h-full object-cover top-0 bottom-0 left-1/2 transform -translate-x-1/2 rotate-[-1.32deg] transition-opacity duration-2000 ease-in-out ${
            showVideoThumbnail ? "opacity-0" : "opacity-100"
          }`}
        />
        <div
          className={`absolute w-[637px] h-[600px] mix-blend-multiply top-[45px] bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center items-center cursor-pointer transition-opacity duration-2000 ease-in-out ${
            showVideoThumbnail ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => window.open("/video.mp4", "_blank")}
        >
          <img src="/cmpic.png" alt="Video Thumbnail" className="w-full h-full object-contain" />
          
        </div>
      </div>
    </div>
  );
}
