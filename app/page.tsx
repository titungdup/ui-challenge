import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen w-full p-7">
      <div className="mx-auto my-10 flex w-full max-w-screen-lg justify-center gap-10 font-light">
        <div className="shrink-0">
          <h2 className="mb-3 text-5xl font-bold">Hi, I&apos;m Dhondup</h2>
          <p className="mb-2 text-lg ">
            A frontend developer based in Australia.
          </p>
          <p>
            You can find me on{" "}
            <a href="http://twitter.com/titungdup" className="underline">
              Twitter
            </a>
          </p>
        </div>
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
