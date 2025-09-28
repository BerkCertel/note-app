import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import React, { Suspense } from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <SidebarProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <AppSidebar />
      </Suspense>
      <main className="flex-1">{children}</main>
    </SidebarProvider>
  );
}

export default DashboardLayout;
