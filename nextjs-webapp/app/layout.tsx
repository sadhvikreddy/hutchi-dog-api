import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import  Image from "next/image";

import { Providers } from "./providers";
import Menubar from "./(components)/menu-bar/menu-bar";

export const metadata: Metadata = {
  title: "Dog JSON Viewer",
  description: "The app allows you to upload, download and edit an JSON which has dog breeds.",
  authors: {
    name:"Sadhvik Puchalapalli",
  },

  openGraph: {
    title: "Dog JSON Viewer",
    description: "The app allows you to upload, download and edit an JSON which has dog breeds.",
    url: 'beautiful-dog-json-viewer.vercel.app',
    siteName: "Beautiful Dog JSON Viewer",
    type: 'website',
    images: [{
      url: "https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }]
  }
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
                className="fixed h-screen w-screen top-0 left-0 -z-10 opacity-50"
                src={'/backgrounds/image.png'}
                alt=""
                width={300}
                height={300}
              />
              <Image
              className="fixed -bottom-20 left-0 opacity-5 object-contain"
              src={'/backgrounds/beagle.png'}
              alt="beagle background"
              width={300}
              height={300}
              
              />
                <Image
              className="fixed top-5 left-5 z-50"
              src={'/logo/logo.png'}
              alt="beagle background"
              width={50}
              height={50}
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
