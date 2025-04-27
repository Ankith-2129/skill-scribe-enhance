
import { Card } from "@/components/ui/card";
import { GraduationCap, Users, LineChart, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About ResumeEnhancer</h1>
        
        <section className="mb-12">
          <p className="text-lg text-gray-700 mb-6">
            At ResumeEnhancer, we believe that everyone deserves the opportunity to present themselves in the best possible light to potential employers. Our AI-powered resume analysis tool was created to help job seekers optimize their resumes and increase their chances of landing interviews.
          </p>
          
          <p className="text-lg text-gray-700 mb-6">
            Founded in 2023, our platform combines cutting-edge artificial intelligence with proven resume best practices to provide personalized recommendations for improving your resume's content, structure, and overall impact.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
          <div className="bg-resume-blue bg-opacity-5 border-l-4 border-resume-blue p-6 rounded-lg">
            <p className="text-lg italic">
              "To democratize access to professional resume advice and empower job seekers with AI-driven tools that help them present their best professional selves."
            </p>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-resume-blue bg-opacity-10 p-2 rounded-full mr-4">
                  <GraduationCap className="h-6 w-6 text-resume-blue" />
                </div>
                <h3 className="text-xl font-semibold">Expert Knowledge</h3>
              </div>
              <p className="text-gray-700">
                Our AI is trained on thousands of successful resumes across various industries and job positions.
              </p>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-resume-blue bg-opacity-10 p-2 rounded-full mr-4">
                  <Users className="h-6 w-6 text-resume-blue" />
                </div>
                <h3 className="text-xl font-semibold">Human-Centered Design</h3>
              </div>
              <p className="text-gray-700">
                Our platform is designed to be intuitive and easy to use, with clear suggestions you can implement right away.
              </p>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-resume-blue bg-opacity-10 p-2 rounded-full mr-4">
                  <LineChart className="h-6 w-6 text-resume-blue" />
                </div>
                <h3 className="text-xl font-semibold">Data-Driven Insights</h3>
              </div>
              <p className="text-gray-700">
                We continually analyze hiring trends and ATS systems to provide the most up-to-date recommendations.
              </p>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-resume-blue bg-opacity-10 p-2 rounded-full mr-4">
                  <Lightbulb className="h-6 w-6 text-resume-blue" />
                </div>
                <h3 className="text-xl font-semibold">Personalized Approach</h3>
              </div>
              <p className="text-gray-700">
                Every resume is unique, and our AI provides tailored suggestions based on your specific background and goals.
              </p>
            </Card>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Our Technology</h2>
          <p className="text-lg text-gray-700 mb-6">
            ResumeEnhancer leverages advanced natural language processing and machine learning algorithms to analyze resumes across multiple dimensions:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li><strong>Content Analysis:</strong> We evaluate the strength and impact of your statements, suggesting improvements to highlight your achievements.</li>
            <li><strong>Keyword Optimization:</strong> Our system identifies industry-specific keywords that help your resume pass through Applicant Tracking Systems (ATS).</li>
            <li><strong>Grammar and Style:</strong> We check for grammatical errors, consistency, and readability to ensure your resume is polished and professional.</li>
            <li><strong>Structure and Format:</strong> We analyze the organization and layout of your resume, suggesting improvements for better visual appeal and information hierarchy.</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-6">Privacy and Security</h2>
          <p className="text-lg text-gray-700">
            We understand that your resume contains sensitive personal information. At ResumeEnhancer, we prioritize your privacy and data security. Your uploaded documents are encrypted, processed securely, and never shared with third parties without your explicit consent.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
