import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Error404() {
  return (
    <div className="h-screen bg-white">
      <Head>
        <title>404 Not Found</title>
      </Head>
      <div className="flex min-h-full flex-col pb-12">
        <main className="mx-auto flex w-full max-w-5xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
          <div className="flex flex-shrink-0 justify-center">
            <Link href="/" className="inline-flex">
              <span className="sr-only">Otentik Authenticator</span>
              <Image
                src="/logo.svg"
                width={72}
                height={16}
                className="h-28 w-auto"
                alt="brand-logo"
              />
            </Link>
          </div>
          <div className="py-14">
            <div className="text-center">
              <p className="text-2xl font-semibold text-blue-600">
                404: Not Found
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Uh oh! I think you&rsquo;re lost.
              </h1>
              <div className="mx-auto max-w-2xl">
                <p className="mt-6 text-lg text-gray-500">
                  Unfortunately, the page{' '}
                  {/* <code className="mx-1 rounded bg-blue-100 px-1.5 py-1 font-mono text-sm text-black">
                    /404
                  </code> */}
                  you are trying to open does not exist. You may have mistyped
                  the address, or the page has been moved to another URL.
                </p>
              </div>
              <div className="mt-8">
                <a
                  href="https://github.com/otentikapp"
                  className="text-base font-medium text-blue-600 hover:text-blue-500"
                >
                  Visit project page
                  <span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </main>
        <footer className="mx-auto w-full max-w-5xl flex-shrink-0 px-4 sm:px-6 lg:px-8">
          <nav className="flex justify-center space-x-4">
            <a
              href="https://github.com/otentikapp"
              className="text-sm font-medium text-gray-500 hover:text-gray-600"
            >
              GitHub
            </a>
            <span
              className="inline-block border-l border-gray-300"
              aria-hidden="true"
            />
            <a
              href="https://twitter.com/riipandi"
              className="text-sm font-medium text-gray-500 hover:text-gray-600"
            >
              Twitter
            </a>
          </nav>
        </footer>
      </div>
    </div>
  )
}
