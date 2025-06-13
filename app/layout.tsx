import './globals.css';
import AOSInitializer from '../components/AOSInitializer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Portfolio Website',
  description: 'A creative portfolio showcasing my work as a Graphics Designer and Video Editor',
  keywords: 'portfolio, graphics design, video editing, motion graphics, creative',
  authors: [{ name: 'Your Name' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
      </head>
      <body>
        <AOSInitializer />
        {children}
      </body>
    </html>
  );
}
