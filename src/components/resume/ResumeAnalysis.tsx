
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clipboard, Download, GraduationCap } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface ResumeAnalysisProps {
  resumeText: string;
}

interface SuggestionItem {
  original?: string;
  suggestion: string;
  explanation?: string;
  category: string;
}

const ResumeAnalysis = ({ resumeText }: ResumeAnalysisProps) => {
  const [isAnalyzing, setIsAnalyzing] = useState(true);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [score, setScore] = useState(0);
  const [suggestions, setSuggestions] = useState<SuggestionItem[]>([]);
  const [keywordScore, setKeywordScore] = useState(0);
  const [grammarScore, setGrammarScore] = useState(0);
  const [structureScore, setStructureScore] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    // Simulate AI analysis
    const interval = setInterval(() => {
      setAnalysisProgress((prev) => {
        const newProgress = prev + 5;
        if (newProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return newProgress;
      });
    }, 200);

    // After "analysis" is complete
    setTimeout(() => {
      clearInterval(interval);
      setAnalysisProgress(100);
      
      // Generate mock analysis
      const mockSuggestions: SuggestionItem[] = [
        {
          original: "Experienced software engineer with 5 years of experience in web development.",
          suggestion: "Results-driven software engineer with 5+ years of experience delivering scalable web applications that drive business growth.",
          explanation: "Be more specific about your impact and value.",
          category: "content"
        },
        {
          original: "Developed and maintained front-end applications using React",
          suggestion: "Architected and optimized React-based front-end applications, improving load times by 40%",
          explanation: "Quantify achievements with specific metrics.",
          category: "content"
        },
        {
          original: "Collaborated with cross-functional teams to deliver high-quality products",
          suggestion: "Led cross-functional collaboration between design, product, and engineering teams to deliver 3 high-impact products on schedule",
          explanation: "Demonstrate leadership and specify outcomes.",
          category: "content"
        },
        {
          suggestion: "Add keywords like 'full-stack development', 'cloud infrastructure', and 'performance optimization'",
          explanation: "These are highly sought-after skills in job descriptions.",
          category: "keyword"
        },
        {
          suggestion: "Consider adding a brief professional profile at the top highlighting your unique value proposition",
          explanation: "This helps recruiters quickly understand what makes you stand out.",
          category: "structure"
        },
        {
          suggestion: "Group your skills into categories (e.g., Frontend, Backend, Tools & Methodologies)",
          explanation: "This makes your skills section easier to scan.",
          category: "structure"
        },
        {
          suggestion: "Fix inconsistent tense usage in your experience descriptions",
          explanation: "Use past tense for previous roles and present tense for current role consistently.",
          category: "grammar"
        }
      ];
      
      setSuggestions(mockSuggestions);
      setKeywordScore(72);
      setGrammarScore(86);
      setStructureScore(65);
      
      // Calculate overall score (weighted average)
      const overallScore = Math.round(
        (keywordScore * 0.3) + (grammarScore * 0.4) + (structureScore * 0.3)
      );
      setScore(overallScore);
      
      setIsAnalyzing(false);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(resumeText);
    toast({
      title: "Copied to clipboard",
      description: "Resume text copied to clipboard successfully.",
    });
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([resumeText], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "resume_with_suggestions.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  if (isAnalyzing) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Analyzing Your Resume</CardTitle>
          <CardDescription>
            Our AI is reviewing your resume for improvement suggestions...
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Progress value={analysisProgress} />
          <p className="text-center text-sm text-gray-500">
            {analysisProgress}% complete
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Resume Analysis</CardTitle>
          <Badge variant={score >= 80 ? "default" : score >= 60 ? "secondary" : "destructive"} className="text-lg py-1 px-3">
            Score: {score}/100
          </Badge>
        </div>
        <CardDescription>
          AI-powered analysis and suggestions to improve your resume
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="p-4">
              <CardTitle className="text-base">Keywords</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="flex items-center justify-between">
                <Progress value={keywordScore} className="w-3/4" />
                <span className="font-medium">{keywordScore}%</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="p-4">
              <CardTitle className="text-base">Grammar & Style</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="flex items-center justify-between">
                <Progress value={grammarScore} className="w-3/4" />
                <span className="font-medium">{grammarScore}%</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="p-4">
              <CardTitle className="text-base">Structure</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="flex items-center justify-between">
                <Progress value={structureScore} className="w-3/4" />
                <span className="font-medium">{structureScore}%</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="content">
          <TabsList className="grid grid-cols-4 mb-4">
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="keywords">Keywords</TabsTrigger>
            <TabsTrigger value="structure">Structure</TabsTrigger>
            <TabsTrigger value="grammar">Grammar</TabsTrigger>
          </TabsList>
          
          <TabsContent value="content" className="space-y-4">
            {suggestions
              .filter((item) => item.category === "content")
              .map((suggestion, index) => (
                <Card key={`content-${index}`}>
                  <CardContent className="p-4 space-y-2">
                    {suggestion.original && (
                      <div>
                        <h4 className="font-semibold text-sm text-gray-500">Original:</h4>
                        <p className="text-sm">{suggestion.original}</p>
                      </div>
                    )}
                    <div>
                      <h4 className="font-semibold text-sm text-resume-blue">Suggestion:</h4>
                      <p className="text-sm">{suggestion.suggestion}</p>
                    </div>
                    {suggestion.explanation && (
                      <div>
                        <h4 className="font-semibold text-sm text-gray-500">Why:</h4>
                        <p className="text-sm">{suggestion.explanation}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
          </TabsContent>
          
          <TabsContent value="keywords" className="space-y-4">
            {suggestions
              .filter((item) => item.category === "keyword")
              .map((suggestion, index) => (
                <Card key={`keyword-${index}`}>
                  <CardContent className="p-4 space-y-2">
                    <div>
                      <h4 className="font-semibold text-sm text-resume-blue">Suggestion:</h4>
                      <p className="text-sm">{suggestion.suggestion}</p>
                    </div>
                    {suggestion.explanation && (
                      <div>
                        <h4 className="font-semibold text-sm text-gray-500">Why:</h4>
                        <p className="text-sm">{suggestion.explanation}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
          </TabsContent>
          
          <TabsContent value="structure" className="space-y-4">
            {suggestions
              .filter((item) => item.category === "structure")
              .map((suggestion, index) => (
                <Card key={`structure-${index}`}>
                  <CardContent className="p-4 space-y-2">
                    <div>
                      <h4 className="font-semibold text-sm text-resume-blue">Suggestion:</h4>
                      <p className="text-sm">{suggestion.suggestion}</p>
                    </div>
                    {suggestion.explanation && (
                      <div>
                        <h4 className="font-semibold text-sm text-gray-500">Why:</h4>
                        <p className="text-sm">{suggestion.explanation}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
          </TabsContent>
          
          <TabsContent value="grammar" className="space-y-4">
            {suggestions
              .filter((item) => item.category === "grammar")
              .map((suggestion, index) => (
                <Card key={`grammar-${index}`}>
                  <CardContent className="p-4 space-y-2">
                    <div>
                      <h4 className="font-semibold text-sm text-resume-blue">Suggestion:</h4>
                      <p className="text-sm">{suggestion.suggestion}</p>
                    </div>
                    {suggestion.explanation && (
                      <div>
                        <h4 className="font-semibold text-sm text-gray-500">Why:</h4>
                        <p className="text-sm">{suggestion.explanation}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={handleCopyToClipboard}>
          <Clipboard className="h-4 w-4 mr-2" />
          Copy Text
        </Button>
        <Button onClick={handleDownload}>
          <Download className="h-4 w-4 mr-2" />
          Download Analysis
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ResumeAnalysis;
