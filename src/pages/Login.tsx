
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, LogIn } from "lucide-react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    console.log("Login attempt:", formData);
    
    // Add a small delay to simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate('/profile');
    }, 1000);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-8">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-primary-foreground font-bold text-sm">L</span>
            </div>
            <h1 className="text-2xl font-bold text-foreground">Litzbella</h1>
          </div>
        </div>

        {/* Login Form */}
        <Card className="shadow-xl border-border">
          <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/20 rounded-t-lg">
            <CardTitle className="text-xl md:text-2xl font-bold text-center text-foreground flex items-center justify-center gap-2">
              <LogIn className="w-5 h-5" />
              Login
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email/Phone */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email/Phone
                </label>
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Please enter email or phone"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="pl-10 border-border focus:border-primary focus:ring-primary/20"
                    required
                  />
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Password
                </label>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="6+ character"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    className="pl-10 pr-10 border-border focus:border-primary focus:ring-primary/20"
                    required
                  />
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="remember"
                    checked={formData.rememberMe}
                    onCheckedChange={(checked) => handleInputChange('rememberMe', !!checked)}
                  />
                  <label htmlFor="remember" className="text-sm text-muted-foreground">
                    Remember me
                  </label>
                </div>
                <button
                  type="button"
                  className="text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  Forgot password?
                </button>
              </div>

              {/* Login Button */}
              <Button 
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {isLoading ? "Logging in..." : "Login"}
              </Button>

              {/* Divider */}
              <div className="text-center text-muted-foreground text-sm">or</div>

              {/* OTP Login */}
              <div className="text-center">
                <span className="text-muted-foreground text-sm">Login with </span>
                <button 
                  type="button"
                  className="text-primary hover:text-primary/80 font-medium text-sm underline transition-colors"
                >
                  OTP
                </button>
              </div>

              {/* Google Login */}
              <Button 
                type="button"
                variant="outline"
                className="w-full border-border hover:bg-muted py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300"
              >
                <span className="text-lg">🔍</span>
                Continue with Google
              </Button>

              {/* Sign Up Link */}
              <div className="text-center text-sm text-muted-foreground">
                Don't have an account?{" "}
                <button 
                  type="button"
                  className="text-primary hover:text-primary/80 font-medium underline transition-colors"
                >
                  Sign up
                </button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
