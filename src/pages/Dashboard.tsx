
import { useState, useContext } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AuthContext } from "@/context/AuthContext";
import { Navigate } from "react-router-dom";
import ResumeUploader from "@/components/resume/ResumeUploader";
import ResumeAnalysis from "@/components/resume/ResumeAnalysis";
import ResumeHistory from "@/components/resume/ResumeHistory";
import { FileText, History, Settings } from "lucide-react";

const Dashboard = () => {
  const { user, isAuthenticated, loading } = useContext(AuthContext);
  const [resumeText, setResumeText] = useState<string | null>(null);

  // If still loading auth state, show loading indicator
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4">Loading...</p>
        </div>
      </div>
    );
  }

  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const handleUploadComplete = (text: string) => {
    setResumeText(text);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome, {user?.name || "User"}!</h1>
        <p className="text-gray-600">
          Upload your resume for AI-powered analysis and improvement suggestions.
        </p>
      </div>

      <Tabs defaultValue="upload" className="space-y-6">
        <TabsList>
          <TabsTrigger value="upload" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Upload Resume
          </TabsTrigger>
          <TabsTrigger value="history" className="flex items-center gap-2">
            <History className="h-4 w-4" />
            Resume History
          </TabsTrigger>
          <TabsTrigger value="settings" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            Account Settings
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="upload" className="space-y-8">
          {!resumeText ? (
            <ResumeUploader onUploadComplete={handleUploadComplete} />
          ) : (
            <ResumeAnalysis resumeText={resumeText} />
          )}
        </TabsContent>
        
        <TabsContent value="history">
          <ResumeHistory />
        </TabsContent>
        
        <TabsContent value="settings">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Account Settings
              </CardTitle>
              <CardDescription>
                Manage your account preferences and information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Name</p>
                      <p>{user?.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p>{user?.email}</p>
                    </div>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <p className="text-sm text-gray-500">
                    Account settings functionality will be available in a future update.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
