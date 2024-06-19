import type { Metadata } from "next";
import { Container } from "./_component/container";
export const metadata: Metadata = {
  title: "Privy Auth Dashbord",
  description: "",
};
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex h-full">
        <Container>
          {children}
        </Container>
      </div>
    </>
  );
}
