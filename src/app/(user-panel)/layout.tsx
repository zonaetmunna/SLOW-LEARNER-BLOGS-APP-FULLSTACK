import LayoutUser from "@/components/layout/layout-user";
export default function UserPanelRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LayoutUser>{children}</LayoutUser>;
}
