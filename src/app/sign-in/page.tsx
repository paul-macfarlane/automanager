import Link from "next/link";
import type { Metadata } from "next";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GoogleIcon } from "@/components/google-icon";

export const metadata: Metadata = {
  title: "Sign In | AutoManager",
  description: "Sign in to access your roadmaps and project plans",
};

export default function SignInPage() {
  return (
    <div className="bg-muted/40 flex min-h-screen items-center justify-center p-4">
      <Card className="mx-auto w-full max-w-md shadow-lg">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-3xl font-bold">AutoManager</CardTitle>
          <CardDescription className="text-base">
            Sign in to access your roadmaps
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col space-y-4 p-6">
          <Button
            variant="secondary"
            size="lg"
            className="h-12 w-full gap-2 text-base shadow-sm"
          >
            <GoogleIcon className="h-5 w-5" />
            Sign in with Google
          </Button>
        </CardContent>
        <CardFooter className="text-muted-foreground flex flex-col space-y-4 text-center text-sm">
          <p>
            By signing in, you agree to our{" "}
            <Link
              href="/terms"
              className="hover:text-primary underline underline-offset-2"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="hover:text-primary underline underline-offset-2"
            >
              Privacy Policy
            </Link>
            .
          </p>
          <p>
            Back to{" "}
            <Link
              href="/"
              className="text-primary hover:text-primary/80 font-medium underline underline-offset-2"
            >
              Home
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
