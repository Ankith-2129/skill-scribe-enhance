
import RegisterForm from "@/components/auth/RegisterForm";
import { Card } from "@/components/ui/card";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-resume-lightGray py-12 px-4">
      <div className="w-full max-w-md">
        <RegisterForm />
        <div className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <a href="/login" className="text-primary hover:underline">
            Login here
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
