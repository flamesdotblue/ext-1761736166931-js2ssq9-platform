import React from 'react';
import HeroSpline from './components/HeroSpline';
import JDBCCode from './components/JDBCCode';
import StudentTable from './components/StudentTable';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-inter">
      <HeroSpline />

      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        <section className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">JDBC Program: Display Student Records from StuRec</h2>
          <p className="text-neutral-300">Copy, compile, and run this Java program to fetch and display student records from the StuRec table using JDBC. It prints to the console and also renders a Swing table.</p>
          <JDBCCode />
        </section>

        <section className="space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold tracking-tight">Example UI Table</h3>
          <p className="text-neutral-300">Below is an example of how the data might look when rendered in a web table. This is a static preview for design purposes.</p>
          <StudentTable />
        </section>
      </main>

      <Footer />
    </div>
  );
}
