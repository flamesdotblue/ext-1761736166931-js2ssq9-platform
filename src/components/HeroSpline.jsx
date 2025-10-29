import React from 'react';
import Spline from '@splinetool/react-spline';
import { CheckCircle2 } from 'lucide-react';

export default function HeroSpline() {
  return (
    <section className="relative w-full h-[70vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,200,255,0.18),rgba(0,0,0,0)_60%)]" />

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-[0_0_60px_rgba(56,189,248,0.25)]">
            <div className="flex items-start gap-4">
              <div className="shrink-0 h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-400 via-fuchsia-400 to-blue-600 p-[2px]">
                <div className="h-full w-full rounded-[10px] bg-neutral-950 flex items-center justify-center">
                  <span className="text-xl">👤</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl md:text-4xl font-semibold tracking-tight">Student Identity Records</h1>
                  <CheckCircle2 className="text-cyan-400" />
                </div>
                <p className="text-neutral-300 max-w-2xl">
                  A stylized, iridescent holographic profile card brought to life in 3D. Below, youll find a complete JDBC example to fetch and display student records from the StuRec table.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
