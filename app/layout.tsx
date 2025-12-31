import type { Metadata } from "next";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import { AuthProvider } from "@/contexts/AuthContext";
import { BillingProvider } from "@/contexts/BillingContext";
import { DeviceProvider } from "@/contexts/DeviceContext";
import Header from "@/components/Header";
import AuthModals from "@/components/auth/AuthModals";
import "./globals.css";
import { Container } from "@mui/material";

export const metadata: Metadata = {
  title: "AI Powered To-Do List",
  description: "A smart to-do list powered by Gemini",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <AuthProvider>
            <BillingProvider>
              <DeviceProvider>
                <Header />
                <Container maxWidth="lg">
                  {children}
                </Container>
                <AuthModals />
              </DeviceProvider>
            </BillingProvider>
          </AuthProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
