
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";
import { FilePlus, Upload, FileText } from "lucide-react";

interface ResumeUploaderProps {
  onUploadComplete: (resumeText: string) => void;
}

const ResumeUploader = ({ onUploadComplete }: ResumeUploaderProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      // Check if it's a PDF or DOCX file
      if (
        selectedFile.type === "application/pdf" ||
        selectedFile.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      ) {
        setFile(selectedFile);
      } else {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF or DOCX file.",
          variant: "destructive",
        });
      }
    }
  };

  const handleUpload = async () => {
    if (!file) {
      toast({
        title: "No file selected",
        description: "Please select a resume file to upload.",
        variant: "destructive",
      });
      return;
    }

    setIsUploading(true);
    setUploadProgress(0);

    // Simulate file upload with progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        const newProgress = prev + 10;
        if (newProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return newProgress;
      });
    }, 300);

    // Simulate file processing
    setTimeout(() => {
      clearInterval(interval);
      setUploadProgress(100);
      
      // Mock reading file content
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          // In a real application, we would send the file to a backend API
          // For now, just simulate extracting text from the resume
          const mockResumeText = `
John Doe
Software Engineer
john.doe@email.com | (555) 123-4567

SUMMARY
Experienced software engineer with 5 years of experience in web development.

SKILLS
- JavaScript, TypeScript, React, Node.js
- Agile methodologies and project management
- Database design and optimization

EXPERIENCE
Senior Software Engineer | Tech Company Inc. | 2020 - Present
- Developed and maintained front-end applications using React
- Collaborated with cross-functional teams to deliver high-quality products
- Mentored junior developers and conducted code reviews

Software Engineer | Digital Solutions LLC | 2018 - 2020
- Built RESTful APIs using Node.js and Express
- Optimized database queries resulting in 30% performance improvement
- Implemented CI/CD pipelines for automated testing and deployment

EDUCATION
Bachelor of Science in Computer Science | University of Technology | 2018
- GPA: 3.8/4.0
- Dean's List: 6 semesters
`;
          
          onUploadComplete(mockResumeText);
          
          toast({
            title: "Upload complete",
            description: "Your resume has been successfully processed.",
          });
        }
      };
      reader.readAsText(file);
      
      setIsUploading(false);
    }, 3000);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5" />
          Upload Your Resume
        </CardTitle>
        <CardDescription>
          Upload your resume in PDF or DOCX format for AI-powered analysis and improvement suggestions.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50 transition-colors">
          <Input
            type="file"
            id="resume-upload"
            accept=".pdf,.docx"
            onChange={handleFileChange}
            className="hidden"
          />
          <label
            htmlFor="resume-upload"
            className="cursor-pointer flex flex-col items-center space-y-2"
          >
            <FilePlus className="h-10 w-10 text-primary" />
            <div className="font-medium">Click to select a file</div>
            <p className="text-sm text-gray-500">
              PDF or DOCX up to 5MB
            </p>
          </label>
        </div>
        
        {file && (
          <div className="bg-gray-50 p-3 rounded-md flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <FileText className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">{file.name}</p>
                <p className="text-xs text-gray-500">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </div>
          </div>
        )}
        
        {isUploading && (
          <div className="space-y-2">
            <Progress value={uploadProgress} />
            <p className="text-sm text-center">{uploadProgress}% uploaded</p>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button
          onClick={handleUpload}
          className="w-full"
          disabled={!file || isUploading}
        >
          <Upload className="h-4 w-4 mr-2" />
          {isUploading ? "Uploading..." : "Upload Resume"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ResumeUploader;
