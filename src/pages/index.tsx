import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="h-screen bg-white">
      <Head>
        <title>Otentik - Open Source two factor authenticator</title>
        <meta
          name="description"
          content="Otentik is a secure app which compatible with Google Authenticator to manage your 2-step verification (2FA) tokens for your online services."
        />
        <link rel="icon" href="/favicon.ico" />
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
              <p className="text-2xl font-semibold text-blue-600">Hello!</p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                We are still building something funtastic.
              </h1>
              <div className="mx-auto max-w-2xl">
                <p className="mt-6 text-lg text-gray-500">
                  Our site is currently a draft. Look back later to see
                  what&rsquo;s changed. <br className="hidden sm:block" />
                  Meanwhile, you can follow our social media at Twitter and
                  GitHub.
                </p>
              </div>
              <div className="mt-8">
                <a
                  href="https://github.com/otentikapp/clients/releases/latest"
                  className="text-base font-medium text-blue-600 hover:text-blue-500"
                >
                  Download latest beta release
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
