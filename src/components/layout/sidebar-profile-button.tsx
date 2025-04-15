import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";

export function SidebarProfileButton() {
  return (
    <Button asChild variant="outline" size="icon">
      <Suspense fallback={<FallbackRender />}>
        <ButtonRender />
      </Suspense>
    </Button>
  );
}

async function ButtonRender() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) {
    return redirect("/sign-in");
  }

  return (
    <Button asChild variant="outline" size="icon">
      <Link href="/app/profile">
        <Avatar className="h-8 w-8">
          <AvatarImage src={session.user.image ?? undefined} />
          <AvatarFallback>
            {session.user.name?.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </Link>
    </Button>
  );
}

function FallbackRender() {
  return (
    <Button asChild disabled variant="outline" size="icon">
      <Skeleton className="h-8 w-8 rounded-md" />
    </Button>
  );
}
