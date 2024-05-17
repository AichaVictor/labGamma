import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="font-bold text-2xl py-5 text-teal-500">lab Gamma Final</h1>
      <Link className="px-3 transition hover:text-teal-500 font-bold" href="/product">Product</Link>
      <Link className="px-3 transition hover:text-teal-500 font-bold" href="/movie">Movie</Link>
      <Link className="px-3 transition hover:text-teal-500 font-bold" href="/about">About</Link>

    </div>
  );
}
