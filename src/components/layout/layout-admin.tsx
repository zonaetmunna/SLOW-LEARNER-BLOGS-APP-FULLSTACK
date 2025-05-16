import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebarAdmin } from "./app-sidebar-admin";
import NavAdmin from "./nav-admin";
export default function LayoutAdmin({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebarAdmin />
      <SidebarInset>
        <NavAdmin />
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
