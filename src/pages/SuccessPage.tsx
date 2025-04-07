
import { useNavigate } from "react-router-dom";

const SuccessPage = () => {
  const navigate = useNavigate();
  
  const handleDoneClick = () => {
    // Redirect to login page
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="max-w-[360px] w-full bg-white rounded-[20px] overflow-hidden shadow-md py-8 px-5 flex flex-col items-center">
        <div className="w-16 h-16 bg-[#0C6B2E] rounded-full flex items-center justify-center mb-6">
          <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M9.00016 15.1698L3.83016 9.99984L1.41016 12.4098L9.00016 19.9998L27.0002 1.99984L24.5902 -0.410156L9.00016 15.1698Z" 
              fill="white"
            />
          </svg>
        </div>

        <h2 className="text-2xl font-bold text-black mb-2">Success</h2>
        
        <p className="text-center text-[#6C3A9C] mb-8">
          Your submission has been successfully processed. A confirmation email will be sent to you shortly with the details of this submission.
        </p>
        
        <p className="text-center text-[#6C3A9C] mb-10">
          Thank you for your attention to this matter.
        </p>
        
        <button 
          onClick={handleDoneClick} 
          className="w-full py-3 bg-[#4A2272] text-white rounded-md hover:bg-[#3D1C5F] transition-colors"
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;
