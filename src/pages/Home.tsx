
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Check, FileText, FileUp, PenTool } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-resume-blue text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Enhance Your Resume with AI-Powered Suggestions
              </h1>
              <p className="text-xl mb-6">
                Upload your resume and get instant feedback to improve your chances of landing your dream job.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => navigate("/register")}
                  size="lg"
                  className="bg-white text-resume-blue hover:bg-gray-100"
                >
                  Get Started
                </Button>
                <Button
                  onClick={() => navigate("/about")}
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-resume-blue"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <div className="bg-white rounded-lg shadow-xl p-6 text-gray-800">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <div className="ml-2 text-xs text-gray-500">Resume.pdf</div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="h-5 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-5 bg-gray-200 rounded"></div>
                  <div className="h-5 bg-gray-200 rounded w-5/6"></div>
                </div>
                <div className="p-3 bg-green-50 border border-green-200 rounded-md text-sm">
                  <p className="font-medium text-green-800">AI Suggestion:</p>
                  <p className="text-green-700">
                    Consider adding specific metrics to highlight your achievements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-resume-lightGray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 bg-resume-blue bg-opacity-10 flex items-center justify-center rounded-full mb-4">
                <FileUp className="h-6 w-6 text-resume-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Upload Your Resume</h3>
              <p className="text-gray-600">
                Simply upload your resume in PDF or DOCX format to get started.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 bg-resume-blue bg-opacity-10 flex items-center justify-center rounded-full mb-4">
                <FileText className="h-6 w-6 text-resume-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Analysis</h3>
              <p className="text-gray-600">
                Our AI reviews your resume for grammar, structure, and key terms.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 bg-resume-blue bg-opacity-10 flex items-center justify-center rounded-full mb-4">
                <PenTool className="h-6 w-6 text-resume-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Get Suggestions</h3>
              <p className="text-gray-600">
                Receive detailed improvement suggestions to enhance your resume.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose ResumeEnhancer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex">
              <div className="mr-4 text-resume-blue">
                <Check className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">AI-Powered Analysis</h3>
                <p className="text-gray-600">
                  Our advanced AI provides detailed suggestions based on industry standards and best practices.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="mr-4 text-resume-blue">
                <Check className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Industry-Specific Keywords</h3>
                <p className="text-gray-600">
                  Get suggestions for keywords that are relevant to your industry to pass through ATS systems.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="mr-4 text-resume-blue">
                <Check className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Grammar and Style Recommendations</h3>
                <p className="text-gray-600">
                  Identify and fix grammatical errors and improve your writing style for clarity and impact.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="mr-4 text-resume-blue">
                <Check className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Structure and Format Improvements</h3>
                <p className="text-gray-600">
                  Get advice on how to structure your resume for maximum readability and professional appearance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-resume-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Enhance Your Resume?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of job seekers who have improved their resumes and landed their dream jobs.
          </p>
          <Button
            onClick={() => navigate("/register")}
            size="lg"
            className="bg-white text-resume-blue hover:bg-gray-100"
          >
            Get Started for Free
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
