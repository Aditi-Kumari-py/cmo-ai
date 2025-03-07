
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaChevronDown, FaBars, FaTimes, FaUser, FaSlidersH, FaSearch } from "react-icons/fa";
import { FiShare, FiLink, FiDownload } from "react-icons/fi";
import { FaGooglePlay, FaApple,FaMapMarkerAlt,FaFacebookF,FaInstagram,FaYoutube,FaLinkedinIn,FaTwitter, FaPhone, FaEnvelope } from "react-icons/fa";
import Footer from "./components/Footer";

const images = [
  { src: "/CMpic.png", title: "CII Young Indians Conference" , count: 250 },
  { src: "/F3.png", title: "CII Young Indians Conference" },
  { src: "/CMpic.png", title: "CII Young Indians Conference" },
  { src: "/F4.png", title: "CII Young Indians Conference" },
  { src: "/CMpic.png", title: "CII Young Indians Conference" },
  { src: "/F4.png", title: "CII Young Indians Conference" },
  { src: "/F4.png", title: "CII Young Indians Conference" },
  { src: "/CMpic.png", title: "CII Young Indians Conference" },
  { src: "/F4.png", title: "CII Young Indians Conference" },
  { src: "/F3.png", title: "CII Young Indians Conference" },
  { src: "/F3.png", title: "CII Young Indians Conference" },
  { src: "/F4.png", title: "CII Young Indians Conference" },
  { src: "/CMpic.png", title: "CII Young Indians Conference" },
  { src: "/F3.png", title: "CII Young Indians Conference" },
  { src: "/F4.png", title: "CII Young Indians Conference" },
  { src: "/CMpic.png", title: "CII Young Indians Conference" },
  { src: "/F4.png", title: "CII Young Indians Conference" },
  { src: "/CMpic.png", title: "CII Young Indians Conference" },
  { src: "/F4.png", title: "CII Young Indians Conference" },
  { src: "/F3.png", title: "CII Young Indians Conference" },
  { src: "/F3.png", title: "CII Young Indians Conference" },
  { src: "/F4.png", title: "CII Young Indians Conference" },
  { src: "/CMpic.png", title: "CII Young Indians Conference" },
  { src: "/F3.png", title: "CII Young Indians Conference" },
  { src: "/F4.png", title: "CII Young Indians Conference" },
  { src: "/CMpic.png", title: "CII Young Indians Conference" },
];




export default function Navbar() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 16;

  const filteredImages = images.filter((img) =>
    img.title.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination logic
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = filteredImages.slice(indexOfFirstImage, indexOfLastImage);
  const totalPages = Math.ceil(filteredImages.length / imagesPerPage);
 
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 100 >=
      document.documentElement.offsetHeight
    ) {
      setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    }
  };

  

  return (
    <div className="min-h-screen bg-white">
    <nav className="w-full h-[80px] bg-white shadow-md flex items-center px-4 md:px-6 justify-between">
      {/* Left Section: Logo */}
      <div className="flex items-center gap-4">
        <img src="CG logo.webp" alt="Logo" className="w-[60px] h-[60px] md:w-[71px] md:h-[71px]" />
      </div>

      {/* Middle Section: Search Bar (Hidden in Small Screens) */}
      <div className="hidden md:flex items-center border border-gray-300 rounded-full overflow-hidden bg-gray-100 w-[600px] lg:w-[900px] h-[45px] px-3">
        <button onClick={() => setShowFilter(true)} className="px-4 py-2 text-gray-600 flex items-center gap-2">
          Filter <FaChevronDown className="text-sm" />
        </button>
        <span className="text-gray-400 px-3">|</span>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-transparent text-gray-700 outline-none px-2"
        />
        <button onClick={() => setSearch("")} className="text-gray-500">✕</button>
        <span className="text-gray-400 px-3">|</span>
        <button className="text-gray-600">
          <img src="/Search_i.png" alt="Search" className="w-7 h-5" />
        </button>
      </div>

      {/* Right Section: Buttons */}
      <div className="flex items-center gap-4">
        {/* Mobile View: Icons for Filter & Search */}
        <div className="flex md:hidden gap-3">
          <button onClick={() => setShowFilter(true)}>
            <FaSlidersH size={20} className="text-gray-600" />
          </button>
          <button>
            <img src="/Search_i.png" alt="Search" className="w-5 h-5" />
          </button>
        </div>

        {/* Search Button (Desktop Only) */}
        <button
          onClick={() => router.push("/dashboard/uploadphoto")}
          className="hidden md:flex w-[180px] h-[50px] bg-[#170645] text-yellow-300 rounded-full shadow-lg flex items-center justify-center px-4 py-2 transition-all"
        >
          Search Now
        </button>

        {/* Profile Icon */}
        <button className="w-9 h-9 rounded-full border border-gray-300 overflow-hidden">
          <img src="/pro.png" alt="User Profile" className="w-full h-full object-cover" />
        </button>
      </div>
    </nav>
    
       <div className="">
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {currentImages.map((image, index) => (
            <div key={index} className="break-inside-avoid bg-white p-4 rounded-lg group transition-all duration-300">
              {/* Image */}
              <div className="relative rounded-[30px] overflow-hidden">
                <img src={image.src} alt={image.title} className="w-full rounded-[30px] transition-all duration-300 ease-in-out group-hover:brightness-75" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-between items-end p-4 rounded-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-left">
                    <span className="text-white font-extrabold text-4xl leading-none block">250</span>
                    <span className="text-white font-semibold text-lg block mt-[-5px]">Photos</span>
                  </div>
                  <span className="text-white text-lg font-medium">2 Nov 2024</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-[20px] font-bold capitalize text-black mt-4 p-2 rounded-md transition-all duration-300 group-hover:text-[rgba(23,6,69,1)]">
                {image.title}
              </h3>

              {/* Buttons */}
              <div className="flex gap-[15px] items-center mt-5">
                <button className="w-[30px] h-[30px] border border-gray-400 flex items-center justify-center rounded-full transition-all duration-300 group-hover:bg-[rgba(23,6,69,1)] group-hover:text-white">
                  <FiShare size={18} className="text-gray-500 group-hover:text-white" />
                </button>
                <button className="w-[30px] h-[30px] border border-gray-400 flex items-center justify-center rounded-full transition-all duration-300 group-hover:bg-[rgba(23,6,69,1)] group-hover:text-white">
                  <FiLink size={18} className="text-gray-500 group-hover:text-white" />
                </button>
                <button className="w-[30px] h-[30px] border border-gray-400 flex items-center justify-center rounded-full transition-all duration-300 group-hover:bg-[rgba(23,6,69,1)] group-hover:text-white">
                  <FiDownload size={18} className="text-gray-500 group-hover:text-white" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
  <div className="flex justify-center mt-6 mb-4 space-x-4">
    {/* Previous Button */}
    <button
      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
      disabled={currentPage === 1}
      className="px-4 py-2 border rounded-lg bg-[#170645] text-yellow-500"
    >
      {"<<"}
    </button>

    {/* Page Number Display */}
    <span className="px-4 py-2 border rounded-lg bg-[#170645] text-yellow-500">
      Page {currentPage} of {totalPages}
    </span>

    {/* Next Button */}
    <button
      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
      disabled={currentPage === totalPages}
      className="px-4 py-2 border text-sm rounded-lg text-yellow-500 bg-[#170645] "
    >
      {">>"}
    </button>
  </div>
)}

        
      {showFilter && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-10 p-4">
          <div className="bg-white p-4 sm:p-6 rounded-[30px] shadow-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <div className="flex justify-between mb-4">
              <button
                onClick={() => setShowFilter(false)}
                className="text-xl text-gray-500"
              >
                ✖
              </button>
              <button
                onClick={() => {
                  document
                    .querySelectorAll('input[type="checkbox"]')
                    .forEach((checkbox) => (checkbox.checked = false));
                  document
                    .querySelectorAll('input[type="date"]')
                    .forEach((input) => (input.value = ""));
                }}
                className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-red-600"
              >
                Clear All
              </button>
            </div>

            {/* Event Section */}
            <div>
              <p className="text-lg font-semibold mb-2 text-black">Event</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 text-gray-600">
                {[
                  "Azadi Ka Amrit Mahotsav",
                  "Rajim Kumbh Mela",
                  "Rajutsav 2025",
                  "Harihar Chhattisgarh",
                  "Mahatari Vandan Yojna",
                  "Chhattisgarh Yojna",
                ].map((event, index) => (
                  <label
                    key={index}
                    className="flex items-center gap-2 bg-gray-100 p-2 rounded-full border border-gray-300 hover:border-[#170645] cursor-pointer text-sm sm:text-base"
                  >
                    <input type="checkbox" className="w-4 h-4" />
                    <span className="truncate">{event}</span>
                  </label>
                ))}
              </div>
              <div className="border-b border-gray-300 my-4"></div>
            </div>

            {/* Category Section */}
            <div className="mt-2">
              <p className="text-lg font-semibold mb-2 text-black">Category</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 text-gray-600">
                {[
                  "Azadi Ka Amrit Mahotsav",
                  "Rajim Kumbh Mela",
                  "Rajutsav 2025",
                  "Harihar Chhattisgarh",
                  "Mahatari Vandan Yojna",
                  "Chhattisgarh Yojna",
                  "Ujjwala Yojna",
                ].map((category, index) => (
                  <label
                    key={index}
                    className="flex items-center gap-2 bg-gray-100 p-2 rounded-full border border-gray-300 hover:border-[#170645] cursor-pointer text-sm sm:text-base"
                  >
                    <input type="checkbox" className="w-4 h-4" />
                    <span className="truncate">{category}</span>
                  </label>
                ))}
              </div>
              <div className="border-b border-gray-300 my-4"></div>
            </div>

            {/* District Section */}
            <div className="mt-2">
              <p className="text-lg font-semibold mb-2 text-black">Districts</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 text-gray-600">
                {[
                  "Balod", "Sukma", "Dantewada", "Bastar", "Kondagaon", "Narayanpur", "Kanker",
                  "Kawardha", "Baloda Bazar", "Balrampur", "Bemetara", "Bijapur", "Bilaspur",
                  "Dhamtari", "Durg", "Gariaband", "Gaurela-Pendra-Marwahi", "Janjgir-Champa",
                  "Jashpur", "Korba", "Koriya", "Mahasamund", "Mungeli", "Raigarh", "Raipur",
                  "Rajnandgaon", "Surajpur", "Surguja",
                ].map((district, index) => (
                  <label
                    key={index}
                    className="flex items-center gap-2 bg-gray-100 p-2 rounded-full border border-gray-300 hover:border-[#170645] cursor-pointer text-sm sm:text-base"
                  >
                    <input type="checkbox" className="w-4 h-4" />
                    <span className="truncate">{district}</span>
                  </label>
                ))}
              </div>
              <div className="border-b border-gray-300 my-4"></div>
            </div>

            {/* Date Range Section */}
            <div className="mt-4">
              <p className="text-lg font-semibold mb-2 text-black">Date</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600">Date From</label>
                  <input
                    type="date"
                    className="border p-2 w-full rounded-md text-gray-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">Date To</label>
                  <input
                    type="date"
                    className="border p-2 w-full rounded-md text-gray-600"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
       <Footer />
    </div>
    </div>
  );
}
