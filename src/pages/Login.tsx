
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", formData);
    navigate('/profile');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">L</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Litzbella</h1>
          </div>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Login</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email/Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email/Phone
              </label>
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Please enter email or phone"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="pl-10"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  📱
                </div>
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Input
                  type="password"
                  placeholder="6+ character"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className="pl-10 pr-10"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  🔒
                </div>
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  👁️
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="remember"
                  checked={formData.rememberMe}
                  onCheckedChange={(checked) => setFormData({...formData, rememberMe: !!checked})}
                />
                <label htmlFor="remember" className="text-sm text-gray-600">
                  Remember me
                </label>
              </div>
              <button
                type="button"
                className="text-sm text-red-500 hover:text-red-600"
              >
                Forgot password?
              </button>
            </div>

            {/* Login Button */}
            <Button 
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold"
            >
              Login
            </Button>

            {/* Divider */}
            <div className="text-center text-gray-500 text-sm">or</div>

            {/* OTP Login */}
            <div className="text-center">
              <span className="text-gray-600 text-sm">Login with </span>
              <button className="text-purple-600 hover:text-purple-700 font-medium text-sm underline">
                OTP
              </button>
            </div>

            {/* Google Login */}
            <Button 
              type="button"
              variant="outline"
              className="w-full border-gray-300 hover:bg-gray-50 py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
            >
              <span className="text-lg">🔍</span>
              Continue with Google
            </Button>

            {/* Sign Up Link */}
            <div className="text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <button 
                type="button"
                className="text-purple-600 hover:text-purple-700 font-medium underline"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
