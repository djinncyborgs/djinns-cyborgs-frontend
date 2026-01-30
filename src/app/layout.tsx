import '@/shared/styles/global.scss';

import {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';

import {Providers} from '@/app/providers';
import {Header} from '@/widgets/header';

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
        <Providers>
          <div id="root">
            <Header />
            <main>{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
