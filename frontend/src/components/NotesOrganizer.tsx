import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download, FileText, Plus } from "lucide-react";

const NotesOrganizer = () => {
  const notes = [
    {
      no: 1,
      subject: "Computer Science",
      chapter: "Data Structures",
      difficulty: "Medium",
      file: "data-structures.pdf"
    },
    {
      no: 2,
      subject: "Mathematics",
      chapter: "Calculus I",
      difficulty: "Hard",
      file: "calculus-notes.pdf"
    },
    {
      no: 3,
      subject: "Physics",
      chapter: "Mechanics",
      difficulty: "Easy",
      file: "mechanics-basics.pdf"
    },
    {
      no: 4,
      subject: "Computer Science",
      chapter: "Algorithms",
      difficulty: "Hard",
      file: "algorithms-guide.pdf"
    },
    {
      no: 5,
      subject: "English",
      chapter: "Literature Analysis",
      difficulty: "Medium",
      file: "literature-notes.pdf"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case "easy":
        return "bg-accent text-accent-foreground";
      case "medium":
        return "bg-secondary text-secondary-foreground";
      case "hard":
        return "bg-destructive text-destructive-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/dashboard">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
              </Link>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Notes - NeuroMentor
              </h1>
            </div>
            <Button variant="hero">
              <Plus className="w-4 h-4 mr-2" />
              Add Note
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <Card className="shadow-medium">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl flex items-center gap-2">
                <FileText className="w-6 h-6 text-primary" />
                Your Notes Library
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                {notes.length} notes organized
              </p>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-16">No.</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Chapter</TableHead>
                    <TableHead>Difficulty Level</TableHead>
                    <TableHead>File</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {notes.map((note) => (
                    <TableRow key={note.no} className="hover:bg-muted/50 transition-smooth">
                      <TableCell className="font-medium">{note.no}</TableCell>
                      <TableCell className="font-medium">{note.subject}</TableCell>
                      <TableCell>{note.chapter}</TableCell>
                      <TableCell>
                        <Badge className={getDifficultyColor(note.difficulty)}>
                          {note.difficulty}
                        </Badge>
                      </TableCell>
                      <TableCell className="font-mono text-sm text-muted-foreground">
                        {note.file}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NotesOrganizer;
