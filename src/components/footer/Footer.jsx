import React from 'react'
import Logo from '../logo/Logo'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <section className="relative overflow-hidden py-12 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-t border-gray-700">
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="-m-6 flex flex-wrap">
                    <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                        <div className="flex h-full flex-col justify-between">
                            <div className="mb-4 inline-flex items-center">
                                <Logo width="100px" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    Creating beautiful content experiences with modern technology. 
                                    Share your thoughts with the world.
                                </p>
                                <p className="text-xs text-gray-500 mt-4">
                                    &copy; Copyright 2024. All Rights Reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-wider mb-6 text-sm font-semibold uppercase text-indigo-400">
                                Platform
                            </h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link
                                        className="text-base font-medium text-gray-300 hover:text-indigo-400 transition-colors duration-200"
                                        to="/"
                                    >
                                        Features
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-base font-medium text-gray-300 hover:text-indigo-400 transition-colors duration-200"
                                        to="/"
                                    >
                                        Pricing
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-base font-medium text-gray-300 hover:text-indigo-400 transition-colors duration-200"
                                        to="/"
                                    >
                                        Community
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-base font-medium text-gray-300 hover:text-indigo-400 transition-colors duration-200"
                                        to="/"
                                    >
                                        Resources
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-wider mb-6 text-sm font-semibold uppercase text-indigo-400">
                                Support
                            </h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link
                                        className="text-base font-medium text-gray-300 hover:text-indigo-400 transition-colors duration-200"
                                        to="/"
                                    >
                                        Help Center
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-base font-medium text-gray-300 hover:text-indigo-400 transition-colors duration-200"
                                        to="/"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-base font-medium text-gray-300 hover:text-indigo-400 transition-colors duration-200"
                                        to="/"
                                    >
                                        Status
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-base font-medium text-gray-300 hover:text-indigo-400 transition-colors duration-200"
                                        to="/"
                                    >
                                        API Docs
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                        <div className="h-full">
                            <h3 className="tracking-wider mb-6 text-sm font-semibold uppercase text-indigo-400">
                                Legal
                            </h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link
                                        className="text-base font-medium text-gray-300 hover:text-indigo-400 transition-colors duration-200"
                                        to="/"
                                    >
                                        Terms of Service
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-base font-medium text-gray-300 hover:text-indigo-400 transition-colors duration-200"
                                        to="/"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-base font-medium text-gray-300 hover:text-indigo-400 transition-colors duration-200"
                                        to="/"
                                    >
                                        License
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Footer