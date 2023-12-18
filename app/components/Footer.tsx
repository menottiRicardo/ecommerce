import {Logo} from '~/components/Logo'
import type {LogoProps} from '~/types/home'

export function Footer(props: LogoProps) {
  return (
    <header className="border-t border-gray-100 transition-colors duration-1000 ease-in-out dark:border-gray-900">
      <div className="container mx-auto flex items-center justify-between p-4 lg:px-12">
        <Logo home={props.home} />
        <div className="flex max-w-sm text-right flex-1 flex-col items-end justify-end gap-2 text-sm lg:flex-row lg:items-center">
          <a
            className="hover:text-cyan-600 dark:hover:text-cyan-200 dark:text-white"
            href="/studio"
          >
            <img
              src="/x.svg"
              className="w-5 h-5 dark:bg-white rounded-md"
              alt="twitter logo"
            />
          </a>
          <a
            className="hover:text-cyan-600 dark:hover:text-cyan-200"
            href="https://sanity.io"
          >
            <img src="/ig.svg" className="w-5 h-5" />
          </a>
        </div>
      </div>
    </header>
  )
}
