import React, { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: 'Home', href: '/', current: true },
  { name: 'Services', href: '/Services', current: false },
  { name: 'Contact Us', href: '/contactus', current: false },
];

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

const Example: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Disclosure as="nav" className="bg-yellow-100 fixed w-full top-0 left-0 z-50 shadow-md">
        {({ open }: { open: boolean }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="flex items-center">
                  <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  >
                    <span className="absolute -inset-0.5" />
                    <Bars3Icon
                      aria-hidden="true"
                      className={classNames(
                        sidebarOpen ? 'hidden' : 'block',
                        'h-6 w-6'
                      )}
                    />
                    <XMarkIcon
                      aria-hidden="true"
                      className={classNames(
                        sidebarOpen ? 'block' : 'hidden',
                        'h-6 w-6'
                      )}
                    />
                  </button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          aria-current={item.current ? 'page' : undefined}
                          className={classNames(
                            item.current
                              ? 'bg-gray-100 text-black'
                              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium'
                          )}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex flex-shrink-0 items-center">
                  <img
                    alt="logo"
                    src="https://www.databrixsoft.com/static/media/DataBrifsoft%20Logo.f3e8b522603001dbb716.png"
                    className="h-8 w-auto"
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </Disclosure>
      <div
        className={`fixed inset-0 z-50 transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out bg-gray-800 text-white w-64`}
      >
        <div className="p-4">
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-5">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium'
              )}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black opacity-50"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
};

export default Example;
