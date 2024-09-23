import "./globals.scss";
import type { Metadata } from "next";
// import { Poppins } from "next/font/google";

// this doesn't working
// const poppins = Poppins({
//   display: "swap",
//   style: "normal",
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600"],
// });

export const metadata: Metadata = {
  title: `${
    process.env.REACT_APP_ENV_NAME === "development" ? "Test -" : ""
  } Quicktranslates`,
  description: "AI generated transcripts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" href="./logo-qt.png" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="google-site-verification"
          content="zVmX0tCvotBRXGoslk6CyMNLhiexx4ERe41OR-JVIJw"
        />
        <meta
          name="google-site-verification"
          content="OaJ4yEmBPCPUwXbgv9Ayeuun73jeDfUYfNtQNo_1Hlg"
        />
        <meta
          name="google-site-verification"
          content="ozJvW1pCThMxtyb69VxwMB138sISI0VQAuVfQAWLQVY"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-11427072053"
        ></script>

        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11427072053', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
