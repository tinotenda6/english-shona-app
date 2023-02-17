'use client'
import Navbar from "./Navbar";

export default function EngShoLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode,
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <Navbar/>

      {children}
    </section>
  );
}