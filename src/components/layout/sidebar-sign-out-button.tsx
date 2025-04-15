"use client";

import { authClient } from "@/lib/auth/client";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { SidebarMenuButton } from "@/components/ui/sidebar";
import { toast } from "sonner";

export function SidebarSignOutButton() {
  const router = useRouter();

  const signOut = async () => {
    const { error } = await authClient.signOut();
    if (error) {
      toast.error("Failed to sign out");
      return;
    }
    router.push("/sign-in");
  };

  return (
    <SidebarMenuButton variant="outline" onClick={signOut}>
      <LogOut className="h-4 w-4" />
      <span>Sign Out</span>
    </SidebarMenuButton>
  );
}
