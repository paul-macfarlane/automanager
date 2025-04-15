"use client";

import { authClient } from "@/lib/auth/client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { GoogleIcon } from "@/components/icons/google";
import { toast } from "sonner";

export function GoogleSignInButton() {
  const router = useRouter();

  const googleSignIn = async () => {
    const { error } = await authClient.signIn.social({
      provider: "google",
    });
    if (error) {
      toast.error("Failed to sign in with Google");
      return;
    }
    router.push("/app");
  };

  return (
    <Button
      variant="secondary"
      size="lg"
      className="h-12 w-full gap-2 text-base shadow-sm"
      onClick={googleSignIn}
    >
      <GoogleIcon className="h-5 w-5" />
      Sign in with Google
    </Button>
  );
}
