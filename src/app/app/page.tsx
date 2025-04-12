import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="space-y-6 p-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">
          Welcome to AutoManager
        </h2>
        <p className="text-muted-foreground">
          Automate your project management workflow and streamline your
          development roadmap.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Tasks</CardTitle>
            <CardDescription>Manage your project tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Add tasks, provide time estimates, and define dependencies.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Resources</CardTitle>
            <CardDescription>Manage your team resources</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Specify the number of available developers and their skills.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Roadmap</CardTitle>
            <CardDescription>Visualize your project roadmap</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Automatically calculate and visualize your project roadmap.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
