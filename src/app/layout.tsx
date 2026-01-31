import '@/shared/styles/global.scss';

import {Metadata} from 'next';
import {Inter} from 'next/font/google';

import {Providers} from '@/app/providers';
import {Header} from '@/widgets/header';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-primary',
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
    <html lang="en" className={inter.variable}>
      <body >
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
