import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'eduLearn',
  description: 'Platform Kursus Online',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
