import type React from "react";
import { AppSidebar } from "@/components/layout/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full overflow-hidden">
        <AppSidebar />
        <main className="flex-1 overflow-auto">
          <SidebarTrigger className="ml-2" />
          <div className="container p-6">{children}</div>
        </main>
      </div>
    </SidebarProvider>
  );
}
