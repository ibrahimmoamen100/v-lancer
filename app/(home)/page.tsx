import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl"> thIS Home Page</h1>
      <Link
        href={"/service"}
        className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2"
      >
        {" "}
        Service
      </Link>
    </div>
  );
}
