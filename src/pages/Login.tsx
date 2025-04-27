
import LoginForm from "@/components/auth/LoginForm";
import { Card } from "@/components/ui/card";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-resume-lightGray py-12 px-4">
      <div className="w-full max-w-md">
        <LoginForm />
        <div className="mt-6 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <a href="/register" className="text-primary hover:underline">
            Register here
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
