"use client";

import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1 items-center">
          <a href="#" className="-m-1.5 p-1.5 text-xl font-bold text-indigo-600">
            {/* Replace with your logo if you have one */}
            <span className="sr-only">Roshini Portfolio</span>
            Sathwika
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a href="#home" className="text-sm font-semibold text-gray-900">
            Home
          </a>
          
          <a href="#resume" className="text-sm font-semibold text-gray-900">
            Resume
          </a>
          <a href="#projects" className="text-sm font-semibold text-gray-900">
            Projects
          </a>
          <a href="#contact" className="text-sm font-semibold text-gray-900">
            Contact
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#contact"
            className="text-sm font-semibold text-indigo-600 hover:text-indigo-800"
          >
            Hire Me <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>

      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full max-w-sm overflow-y-auto bg-white px-6 py-6 sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5 text-xl font-bold text-indigo-600">
              Roshini
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a href="#home" className="block py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">
                  Home
                </a>
                <a href="#education" className="block py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">
                  Education
                </a>
                <a href="#resume" className="block py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">
                  Resume
                </a>
                <a href="#projects" className="block py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">
                  Projects
                </a>
                <a href="#contact" className="block py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">
                  Contact
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#contact"
                  className="block py-2 text-base font-semibold text-indigo-600 hover:bg-gray-50"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}