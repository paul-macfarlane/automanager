import type React from "react";
import { AppSidebar } from "@/components/app-sidebar";
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
          <div className="flex h-16 items-center border-b px-4">
            <SidebarTrigger className="mr-2" />
            <h1 className="text-xl font-semibold">AutoManager</h1>
          </div>
          <div className="container py-6">{children}</div>
        </main>
      </div>
    </SidebarProvider>
  );
}
