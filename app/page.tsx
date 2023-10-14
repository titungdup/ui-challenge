import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-7">
      <div className=" my-10 max-w-xl ">
        <h2 className="mb-3 text-7xl font-bold">Hi, I&apos;m Dhondup</h2>
        <p className="mb-4 text-lg font-light">
          I am a frontend developer based in Australia.
        </p>
        <div className="space-y-4 font-light">
          <p>
            In order to up my UI game, I am doing a UI challenge where I build
            exciting UI using HTML, CSS, React, NextJS, GSAP and maybe some
            Threejs. The objective? To constantly refine my skills, spark
            creativity, and stay up-to-date with the latest trends in web
            development.
          </p>
          <p>
            I will mostly be following <span className="italic">iCodeThis</span>
            , <span className="italic">Dribbble</span> and{" "}
            <span className="italic">Behance</span> for UI inspiration.
          </p>
          <p>
            You can find me on{" "}
            <a href="http://twitter.com/titungdup" className="underline">
              Twitter
            </a>
          </p>
        </div>
      </div>
      <ul>
        <li>
          <Link href="/booking">Booking</Link>
        </li>
      </ul>
    </main>
  );
}
