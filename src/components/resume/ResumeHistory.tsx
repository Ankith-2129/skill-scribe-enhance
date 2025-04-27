
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Eye } from "lucide-react";
import { useState } from "react";

interface ResumeHistoryItem {
  id: string;
  fileName: string;
  uploadDate: Date;
  score: number;
}

const ResumeHistory = () => {
  const [historyItems, setHistoryItems] = useState<ResumeHistoryItem[]>([
    {
      id: "1",
      fileName: "resume_software_engineer.pdf",
      uploadDate: new Date(2023, 3, 15),
      score: 78,
    },
    {
      id: "2",
      fileName: "resume_updated_april.docx",
      uploadDate: new Date(2023, 3, 28),
      score: 85,
    }
  ]);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5" />
          Resume History
        </CardTitle>
        <CardDescription>
          View your previously uploaded resumes and their analyses
        </CardDescription>
      </CardHeader>
      <CardContent>
        {historyItems.length > 0 ? (
          <div className="space-y-4">
            {historyItems.map((item) => (
              <div 
                key={item.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <FileText className="h-10 w-10 text-primary" />
                  <div>
                    <p className="font-medium">{item.fileName}</p>
                    <p className="text-sm text-gray-500">
                      Uploaded on {formatDate(item.uploadDate)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Badge 
                    variant={item.score >= 80 ? "default" : item.score >= 60 ? "secondary" : "destructive"}
                  >
                    Score: {item.score}/100
                  </Badge>
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    View
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500">You haven't uploaded any resumes yet.</p>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button variant="link" className="text-primary">
          View all resume history
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ResumeHistory;
