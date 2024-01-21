import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <div className="hero min-h-[calc(100vh-250px-88px)] bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <Image src="/fbex.svg" width={600} height={600} alt="fbex logo" />
            <div className="grid text-center sm:max-w-5xl sm:grid-cols-2 sm:text-left sm:mx-11">
              <Link
                href={'/notes'}
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              >
                <h2 className={`mb-3 text-2xl font-semibold`}>
                  Notes{' '}
                  <span
                    className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">-&gt;</span>
                </h2>
                <p className={`m-0 text-sm opacity-50`}>
                  Stuff I write about.
                </p>
              </Link>
              <Link
                href="https://github.com/fbex"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className={`mb-3 text-2xl font-semibold`}>
                  Projects{' '}
                  <span
                    className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">-&gt;</span>
                </h2>
                <p className={`m-0 text-sm opacity-50`}>
                  Stuff I build.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
