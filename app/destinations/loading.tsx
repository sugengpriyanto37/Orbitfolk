export default function Loading() {
  return <div className="min-h-screen bg-[#FDFCFB] px-5 py-24"><div className="mx-auto max-w-7xl animate-pulse"><div className="mx-auto h-14 max-w-2xl rounded bg-[#EDE9E6]" /><div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{[1, 2, 3, 4, 5, 6].map((item) => <div key={item} className="h-80 rounded-2xl bg-[#EDE9E6]" />)}</div></div></div>;
}
