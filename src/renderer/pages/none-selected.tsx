import logo from '@/assets/svg/logo.svg';
import { Button } from '@/src/components/ui/button';

export default function NoneSelected() {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-16 sm:py-24 lg:px-8">
      <div className="text-center">
        <img
          className="w-32 h-32 mx-auto drop-shadow-2xl"
          src={logo}
          alt="logo"
        />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          easy2links
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Please first select a scene from the dropdown box located in the top
          left corner.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button>Create a scene</Button>
          <a
            href="http://www.jfrobot.com"
            target="_blank"
            rel="noreferrer noopener"
            className="text-sm font-semibold text-gray-900"
          >
            Documents <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </main>
  );
}
