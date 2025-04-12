import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, Code2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <section className="container flex flex-col items-center justify-center gap-6 py-12 text-center md:py-20">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Automate Your Development Roadmaps
          </h1>
          <p className="text-muted-foreground mx-auto max-w-[700px] text-lg md:text-xl">
            Stop spending hours on manual planning. AutoManager generates
            optimized project timelines in minutes.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button size="lg" asChild>
            <Link href="/sign-in">
              Try AutoManager <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="bg-background relative mx-auto aspect-video w-full max-w-5xl overflow-hidden rounded-lg border shadow-xl">
          <Image
            src="/dashboard.png?height=720&width=1280"
            alt="AutoManager Dashboard Preview"
            width={1280}
            height={720}
            className="object-cover"
            priority
          />
          <div className="from-background absolute inset-0 bg-gradient-to-t to-transparent to-80%"></div>
        </div>
      </section>

      <section className="container py-12 md:py-20">
        <div className="mx-auto mb-12 max-w-[800px] text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Simplify Complex Project Planning
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            AutoManager transforms your inputs into clear, actionable roadmaps
            that optimize your team&apos;s time and resources.
          </p>
        </div>
        <div className="grid gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <Clock className="text-primary h-10 w-10" />
              <CardTitle className="mt-4">Save Planning Time</CardTitle>
              <CardDescription>
                Reduce roadmap creation from hours to minutes with automated
                scheduling.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="text-primary mr-2 h-5 w-5" />
                  <span>Automatic dependency resolution</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-primary mr-2 h-5 w-5" />
                  <span>Resource allocation optimization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-primary mr-2 h-5 w-5" />
                  <span>Instant timeline recalculation</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Code2 className="text-primary h-10 w-10" />
              <CardTitle className="mt-4">Optimize Development</CardTitle>
              <CardDescription>
                Visualize bottlenecks and optimize your development workflow.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="text-primary mr-2 h-5 w-5" />
                  <span>Critical path identification</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-primary mr-2 h-5 w-5" />
                  <span>Bottleneck visualization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-primary mr-2 h-5 w-5" />
                  <span>Resource utilization insights</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Users className="text-primary h-10 w-10" />
              <CardTitle className="mt-4">Team Alignment</CardTitle>
              <CardDescription>
                Keep everyone on the same page with clear visual roadmaps.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="text-primary mr-2 h-5 w-5" />
                  <span>Shareable Gantt charts</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-primary mr-2 h-5 w-5" />
                  <span>Team workload visualization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-primary mr-2 h-5 w-5" />
                  <span>Progress tracking</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-muted w-full px-4 py-12 md:px-8 md:py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-[800px] text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              How It Works
            </h2>
            <p className="text-muted-foreground mt-4 text-lg">
              Four simple steps to transform your project planning process
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="relative flex flex-col items-center text-center">
              <div className="bg-primary text-primary-foreground flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold">
                1
              </div>
              <h3 className="mt-4 text-xl font-bold">Input Tasks</h3>
              <p className="text-muted-foreground mt-2">
                Enter your project tasks and their descriptions
              </p>
            </div>
            <div className="relative flex flex-col items-center text-center">
              <div className="bg-primary text-primary-foreground flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold">
                2
              </div>
              <h3 className="mt-4 text-xl font-bold">Set Estimates</h3>
              <p className="text-muted-foreground mt-2">
                Add time estimates and define dependencies between tasks
              </p>
            </div>
            <div className="relative flex flex-col items-center text-center">
              <div className="bg-primary text-primary-foreground flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold">
                3
              </div>
              <h3 className="mt-4 text-xl font-bold">Specify Resources</h3>
              <p className="text-muted-foreground mt-2">
                Enter the number of developers and their availability
              </p>
            </div>
            <div className="relative flex flex-col items-center text-center">
              <div className="bg-primary text-primary-foreground flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold">
                4
              </div>
              <h3 className="mt-4 text-xl font-bold">Generate Roadmap</h3>
              <p className="text-muted-foreground mt-2">
                Get an optimized Gantt chart showing your project timeline
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container px-6 py-12 md:px-10 md:py-20">
        <div className="bg-primary text-primary-foreground mx-auto max-w-[800px] rounded-lg p-8 text-center md:p-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Streamline Your Project Planning?
          </h2>
          <p className="text-primary-foreground/90 mx-auto mt-4 max-w-[600px] text-lg">
            Join the teams that are saving hours every week with automated
            roadmap generation.
          </p>
        </div>
      </section>
    </div>
  );
}
