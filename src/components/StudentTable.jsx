import React from 'react';

const sample = [
  { enroll: 'ENR001', name: 'Aarav Shah', address: 'Ahmedabad, GJ', mobile: '+91 98765 43210', email: 'aarav.shah@example.com' },
  { enroll: 'ENR002', name: 'Isha Patel', address: 'Surat, GJ', mobile: '+91 91234 56789', email: 'isha.patel@example.com' },
  { enroll: 'ENR003', name: 'Rahul Verma', address: 'Pune, MH', mobile: '+91 99887 66554', email: 'rahul.verma@example.com' },
  { enroll: 'ENR004', name: 'Sneha Iyer', address: 'Chennai, TN', mobile: '+91 90909 80808', email: 'sneha.iyer@example.com' },
];

export default function StudentTable() {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-neutral-900/60">
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-white/5 text-neutral-200">
            <tr>
              <th className="px-4 py-3 font-medium">Enroll No</th>
              <th className="px-4 py-3 font-medium">Name</th>
              <th className="px-4 py-3 font-medium">Address</th>
              <th className="px-4 py-3 font-medium">Mobile No</th>
              <th className="px-4 py-3 font-medium">Email-ID</th>
            </tr>
          </thead>
          <tbody>
            {sample.map((s) => (
              <tr key={s.enroll} className="border-t border-white/10 hover:bg-white/5">
                <td className="px-4 py-3 font-mono text-cyan-300">{s.enroll}</td>
                <td className="px-4 py-3">{s.name}</td>
                <td className="px-4 py-3 text-neutral-300">{s.address}</td>
                <td className="px-4 py-3">{s.mobile}</td>
                <td className="px-4 py-3 text-cyan-200">{s.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
