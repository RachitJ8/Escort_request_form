
import { LoginScreen } from "@/components/login/LoginScreen";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LoginPage = () => {
  const navigate = useNavigate();

  // Simulate login success and redirect to form selection
  useEffect(() => {
    // This is a placeholder for actual login logic
    // In a real app, you'd handle the login success differently
    const handleLoginSuccess = () => {
      setTimeout(() => {
        navigate("/form-select");
      }, 2000); // Simulate login process
    };

    // You can trigger this based on actual login success
    // handleLoginSuccess();
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="w-full max-w-md">
        <LoginScreen />
        <div className="mt-4 text-center">
          <button
            onClick={() => navigate("/form-select")}
            className="text-[#663399] underline text-sm"
          >
            Skip to Form Selection (Demo)
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
