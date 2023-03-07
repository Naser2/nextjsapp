import { createContext, Fragment, useContext } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { motion } from 'framer-motion'
import create from 'zustand'
import { useRouter } from 'next/router'

import { Header } from '@/components/Header'
import { Navigation } from '@/components/Navigation'
import Link from 'next/link'

function MenuIcon(props) {
  return (
    <svg
      viewBox="0 0 10 9"
      fill="none"
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M.5 1h9M.5 8h9M.5 4.5h9" />
    </svg>
  )
}

function XIcon(props) {
  return (
    <svg
      viewBox="0 0 10 9"
      fill="none"
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      <path d="m1.5 1 7 7M8.5 1l-7 7" />
    </svg>
  )
}

const IsInsideMobileNavigationContext = createContext(false)

export function useIsInsideMobileNavigation() {
  return useContext(IsInsideMobileNavigationContext)
}

export const useMobileNavigationStore = create((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}))

export function MobileNavigation(props) {
  const router = new useRouter()

  console.log('MOPBILE_NAV_PROPS', props)
  let isInsideMobileNavigation = useIsInsideMobileNavigation()
  let { isOpen, toggle, close } = useMobileNavigationStore()
  let ToggleIcon = isOpen ? XIcon : MenuIcon
  function TopLevelNavItem({ href, children }) {
    return (
      <li>
        <Link
          href={href}
          className="text-sm font-semibold leading-6 text-slate-700 dark:text-slate-200"
        >
          {children}
        </Link>
      </li>
    )
  }
  let shortCuts = [
    { title: 'Site', href: '/' },
    { title: 'Courses', href: '/courses' },
    { title: 'Profile', href: '/courses/profile' },
    { title: 'Settings', href: '/courses/settings' },
  ]
  const path = ['/courses/dev']
  const isCurrentRoute = (navEl) => {
    // const fullHref = [`${navEl}`]
    const fullHref = ['courses']
    console.log(
      'FULL_NAV_PATH',
      fullHref,
      'Routher-Path:',
      router.pathname,
      'INCLUDES',
      router.pathname.includes(navEl) ? true : false
    )
    return router.pathname.includes(navEl) ? true : false
  }

  return (
    <IsInsideMobileNavigationContext.Provider value={true}>
      <button
        type="button"
        className="flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5"
        aria-label="Toggle navigation"
        onClick={toggle}
      >
        <ToggleIcon className="w-.5 stroke-zinc-900 dark:stroke-white" />
      </button>
      {!isInsideMobileNavigation && (
        <Transition.Root show={isOpen} as={Fragment}>
          <Dialog
            onClose={close}
            className="fixed inset-0  z-50 mt-20  lg:hidden"
          >
            <Transition.Child
              as={Fragment}
              enter="duration-300 ease-out"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="duration-200 ease-in"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 top-14 bg-zinc-400/20 backdrop-blur-sm dark:bg-black/40" />
            </Transition.Child>

            <Dialog.Panel>
              <Transition.Child
                as={Fragment}
                enter="duration-300 ease-out"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="duration-200 ease-in"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <h1 href="/HEADER-HEADER SHOULD SHOW HER">HEADER TITLE</h1>
              </Transition.Child>

              <Transition.Child
                as={Fragment}
                enter="duration-500 ease-in-out"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="duration-500 ease-in-out"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <motion.div
                  layoutScroll
                  className="ring-zinc-900/7.5 fixed left-0 top-14 bottom-0 w-full overflow-y-auto bg-white  pb-4 shadow-lg shadow-zinc-900/10 ring-1 dark:bg-zinc-900 dark:ring-zinc-800 min-[416px]:max-w-sm sm:px-6 sm:pb-10"
                >
                  <div class="flex items-center gap-4  p-4 ">
                    <img
                      class="h-12 w-12 rounded-full"
                      src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
                    />
                    <strong class="text-sm font-medium text-slate-900 dark:text-slate-200">
                      User.name
                    </strong>
                  </div>
                  {router.pathname.includes(['/dev/']) && (
                    <div class="black-2-bg flex items-center gap-4 p-4">
                      {shortCuts.map((shortcut) => (
                        <Link
                          href={shortcut.href}
                          key={shortcut.href}
                          className={[
                            isCurrentRoute(shortcut.href)
                              ? 'button-wrap flex items-center rounded-md bg-white px-2 text-slate-700'
                              : 'button-wrap flex items-center rounded-md border  bg-slate-800 px-2 text-slate-200',
                          ]}
                        >
                          {isCurrentRoute(shortcut.href) && (
                            <div class="mr-1 h-2.5 w-2.5 rounded-full bg-sky-400"></div>
                          )}

                          {shortcut.title}
                        </Link>
                      ))}
                    </div>
                  )}

                  <Navigation {...props} />
                </motion.div>
              </Transition.Child>
            </Dialog.Panel>
          </Dialog>
        </Transition.Root>
      )}
    </IsInsideMobileNavigationContext.Provider>
  )
}
