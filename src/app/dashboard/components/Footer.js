const Footer = () => {
    // Dynamic District List
    const districts = [
      "Bijapur", "Sukma", "Dantewada", "Bastar", "Kondagaon", "Narayanpur", "Kanker", "Kawardha", "Balod",
      "Rajnandgaon", "Durg", "Bemetara", "Dhamtari", "Gariaband", "Raipur", "Baloda Bazar", "Mahasamund",
      "Bilaspur", "Mungeli", "Korba", "Janjgir-Champa", "Raigarh", "Jashpur", "Korea", "Surajpur", "Surguja", "Balrampur"
    ];
  
    // Dynamic Featured Links
    const featuredLinks = [
      { name: "Home", url: "#" },
      { name: "Copyright Policy", url: "#" },
      { name: "Disclaimer", url: "#" },
      { name: "Site Map", url: "#" },
      { name: "Hyperlink Policy", url: "#" },
      { name: "Privacy Policy", url: "#" },
      { name: "Terms And Conditions", url: "#" },
      { name: "Terms Of Use", url: "#" }
    ];
  
    // Dynamic Social Media Links
    const socialLinks = [
      { name: "Twitter", icon: "/twit.png", url: "#" },
      { name: "Facebook", icon: "/facebook 3.png", url: "#" },
      { name: "Instagram", icon: "/instagram (3) 2.png", url: "#" },
      { name: "YouTube", icon: "/youtube 1.png", url: "#" },
      { name: "LinkedIn", icon: "/linkedin (1) 1.png", url: "#" }
    ];
  
    return (
      <footer className="bg-gray-200 text-black py-8">
        <div className="max-w-[1621px] mx-auto px-6 md:px-16">
  
          {/* District List - Full Width */}
          <div className="border-b border-gray-400 pb-6 mb-6">
                    <h3 className="font-bold text-lg text-gray-800 mb-3">Districts List</h3>
                    <p className="text-sm text-gray-600 leading-relaxed flex flex-wrap gap-3">
                        {districts.map((district, index) => (
                            <span key={index} className="flex items-center">
                                {district}
                                {index !== districts.length - 1 && <span className="mx-3">|</span>}
                            </span>
                        ))}
                    </p>
                </div>
  
          {/* Featured Links & Reach Us (2 Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* Featured Links */}
            <div>
              <h3 className="font-bold text-lg text-gray-800 mb-3">Featured Links</h3>
              <div className="text-sm text-gray-600 flex flex-wrap gap-x-2 gap-y-2">
                {featuredLinks.map((link, index) => (
                  <span key={index} className="flex items-center">
                    <a href={link.url} className="hover:underline">{link.name}</a>
                    {index !== featuredLinks.length - 1 && <span className="mx-2">|</span>}
                  </span>
                ))}
              </div>
            </div>
  
            {/* Reach Us */}
            <div>
              <h3 className="font-bold text-lg text-gray-800 mb-3">Reach Us</h3>
              <div className="text-sm text-gray-600 space-y-3">
                <p className="flex items-center gap-3">
                  <img src="/location.png" alt="Location" className="w-5 h-5" /> 
                  Directorate of Public Relations, Naya Raipur, Chhattisgarh, 492001
                </p>
                <p className="flex items-center gap-3">
                  <img src="/call.png" alt="Phone" className="w-5 h-5" /> 
                  +91-771-2221614
                </p>
                <p className="flex items-center gap-3">
                  <img src="/mail.png" alt="Email" className="w-5 h-5" /> 
                  dprcgh@gmail.com
                </p>
              </div>
            </div>
  
          </div>
  
          {/* Horizontal Division (Only One Line Now) */}
          <div className="border-b border-gray-400 my-6"></div>
  
          {/* Download App & Social Media */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-16">
            
            {/* Download Our App */}
            <div>
              <h3 className="font-bold text-lg text-gray-800 mb-3">Download Our App</h3>
              <div className="flex gap-6">
                <img src="/play_store 1.png" alt="Google Play" className="w-36 h-auto" />
                <img src="/IOS.png" alt="App Store" className="w-36 h-auto" />
              </div>
            </div>
  
            {/* Logos */}
            <div>
              <div className="flex gap-6 mt-8">
                <img src="/CG logo.webp" alt="Logo 1" className="w-[50px] h-auto" />
                <img src="/digitalIndia 1.png" alt="Logo 2" className="w-[75px] h-auto" />
                <img src="/mygov.png" alt="Logo 3" className="w-[75px] h-auto" />
                <img src="/azadi-ka-amrit-mahotsav 1.png" alt="Logo 4" className="w-[75px] h-auto" />
              </div>
            </div>
  
            {/* Follow Us */}
            <div>
              <h3 className="font-bold text-lg text-gray-800 mb-3">Follow Us</h3>
              <div className="flex gap-6">
                {socialLinks.map((social, index) => (
                  <a key={index} href={social.url}>
                    <img src={social.icon} alt={social.name} className="w-7 h-7" />
                  </a>
                ))}
              </div>
            </div>
  
          </div>
  
          {/* Footer Bottom */}
          <div className="w-full text-center py-4 mt-8 ml-8">
            <p className="text-sm text-gray-500">
               © 2025 CMO Gallery | Initiative by DPR Chhattisgarh
            </p>
          </div>
  
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
