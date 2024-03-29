import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">

      <h1 className="text-6xl font-bold">
        Welcome to{" "}
        <a
          href="https://fresh.fly.dev"
          className="text-blue-600"
        >
          Fresh!
        </a>
      </h1>
    </div>
  );
}
