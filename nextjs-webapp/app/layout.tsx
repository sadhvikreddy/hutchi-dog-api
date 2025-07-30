import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import  Image from "next/image";

import { Providers } from "./providers";
import Menubar from "./(components)/menu-bar/menu-bar";

export const metadata: Metadata = {
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen text-foreground font-sans antialiased",
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col h-screen">
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              <Image
              className="fixed h-screen w-screen top-0 left-0 -z-10"
              src={'/backgrounds/image.png'}
              alt=""
              width={300}
              height={300}
              />
              <Image
              className="fixed -bottom-20 left-0 opacity-30"
              src={'/backgrounds/beagle.png'}
              alt="beagle background"
              width={300}
              height={300}
              
              />

              <Image
              className="fixed bottom-0 right-0 opacity-30"
              src={'/backgrounds/germans.png'}
              alt="beagle background"
              width={300}
              height={300}
              
              />
               <Menubar />
              {children}
              <div className="h-20"></div>
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
