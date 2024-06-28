import type { Metadata } from "next";
import Navbar from "./_component/Navbar";
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
      <div className="bg-[#181818] min-h-screen font-[Carola]">
        <Navbar />
        {children}
      </div>
    </>
  );
}
