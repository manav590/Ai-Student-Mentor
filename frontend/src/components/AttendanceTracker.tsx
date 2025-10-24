import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, TrendingUp } from "lucide-react";

// Placeholder data for subjects
const subjectData = [
  { id: 1, subject: "Biology", attended: 38, total: 45 },
  { id: 2, subject: "Mathematics", attended: 42, total: 45 },
  { id: 3, subject: "Chemistry", attended: 30, total: 45 },
  { id: 4, subject: "Physics", attended: 35, total: 45 },
];

// Helper function to calculate percentage
const calculatePercentage = (attended: number, total: number): number => {
  return Math.round((attended / total) * 100 * 10) / 10;
};

// Helper function to determine status
const getAttendanceStatus = (percentage: number): { label: string; variant: "default" | "secondary" | "destructive" } => {
  if (percentage >= 80) return { label: "Good", variant: "default" };
  if (percentage >= 75) return { label: "At Risk", variant: "secondary" };
  return { label: "Critical", variant: "destructive" };
};

// Calculate overall attendance
const calculateOverallAttendance = () => {
  const totalAttended = subjectData.reduce((sum, subject) => sum + subject.attended, 0);
  const totalClasses = subjectData.reduce((sum, subject) => sum + subject.total, 0);
  return calculatePercentage(totalAttended, totalClasses);
};

const AttendanceTracker = () => {
  const overallPercentage = calculateOverallAttendance();
  const overallStatus = getAttendanceStatus(overallPercentage);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/dashboard">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Attendance Tracker - NeuroMentor
            </h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Overall Summary Card */}
        <Card className="mb-8 gradient-card">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl">Overall Attendance</CardTitle>
                <CardDescription>Your total attendance across all subjects</CardDescription>
              </div>
              <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-end gap-4">
              <div className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {overallPercentage}%
              </div>
              <Badge variant={overallStatus.variant} className="mb-2 text-sm">
                {overallStatus.label}
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Subject Records Table */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Subject Records</CardTitle>
            <CardDescription>Detailed attendance breakdown by subject</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Subject</TableHead>
                  <TableHead>Attended/Total</TableHead>
                  <TableHead>Percentage</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {subjectData.map((subject) => {
                  const percentage = calculatePercentage(subject.attended, subject.total);
                  const status = getAttendanceStatus(percentage);
                  
                  return (
                    <TableRow key={subject.id}>
                      <TableCell className="font-medium">{subject.subject}</TableCell>
                      <TableCell>{subject.attended}/{subject.total}</TableCell>
                      <TableCell>{percentage}%</TableCell>
                      <TableCell>
                        <Badge variant={status.variant}>{status.label}</Badge>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AttendanceTracker;
