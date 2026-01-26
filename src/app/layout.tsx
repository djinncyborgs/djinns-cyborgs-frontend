import '@/shared/styles/global.scss';

import {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  icons: {
    icon: [
      {url: '/favicon-dark.svg', media: '(prefers-color-scheme: light)'},
      {url: '/favicon-light.svg', media: '(prefers-color-scheme: dark)'},
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
