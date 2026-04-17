'use client'
import { Card, CardContent } from '@/components/ui/card'
import { Shield, Users } from 'lucide-react'

export default function FeaturesSection() {
    return (
        <section className="bg-white py-16 md:py-32">
            <div className="mx-auto max-w-6xl px-6">
                {/* Section Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        AI Features for<i className="ml-2 italic font-caramel text-primary"> Modern Hiring</i>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        RecruiterAI combines cutting-edge artificial intelligence with intuitive design to revolutionize your recruitment process. Screen, interview, and hire the best talent faster than ever.
                    </p>
                </div>

                <div className="relative">
                    <div className="relative z-10 grid grid-cols-6 gap-3">
                        <Card className="relative col-span-full flex overflow-hidden lg:col-span-2">
                            <CardContent className="relative m-auto size-fit pt-6">
                                <div className="relative flex h-24 w-56 items-center">
                                    <svg
                                        className="text-gray-200 absolute inset-0 size-full"
                                        viewBox="0 0 254 104"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M112.891 97.7022C140.366 97.0802 171.004 94.6715 201.087 87.5116C210.43 85.2881 219.615 82.6412 228.284 78.2473C232.198 76.3179 235.905 73.9942 239.348 71.3124C241.85 69.2557 243.954 66.7571 245.555 63.9408C249.34 57.3235 248.281 50.5341 242.498 45.6109C239.033 42.7237 235.228 40.2703 231.169 38.3054C219.443 32.7209 207.141 28.4382 194.482 25.534C184.013 23.1927 173.358 21.7755 162.64 21.2989C161.376 21.3512 160.113 21.181 158.908 20.796C158.034 20.399 156.857 19.1682 156.962 18.4535C157.115 17.8927 157.381 17.3689 157.743 16.9139C158.104 16.4588 158.555 16.0821 159.067 15.8066C160.14 15.4683 161.274 15.3733 162.389 15.5286C179.805 15.3566 196.626 18.8373 212.998 24.462C220.978 27.2494 228.798 30.4747 236.423 34.1232C240.476 36.1159 244.202 38.7131 247.474 41.8258C254.342 48.2578 255.745 56.9397 251.841 65.4892C249.793 69.8582 246.736 73.6777 242.921 76.6327C236.224 82.0192 228.522 85.4602 220.502 88.2924C205.017 93.7847 188.964 96.9081 172.738 99.2109C153.442 101.949 133.993 103.478 114.506 103.79C91.1468 104.161 67.9334 102.97 45.1169 97.5831C36.0094 95.5616 27.2626 92.1655 19.1771 87.5116C13.839 84.5746 9.1557 80.5802 5.41318 75.7725C-0.54238 67.7259 -1.13794 59.1763 3.25594 50.2827C5.82447 45.3918 9.29572 41.0315 13.4863 37.4319C24.2989 27.5721 37.0438 20.9681 50.5431 15.7272C68.1451 8.8849 86.4883 5.1395 105.175 2.83669C129.045 0.0992292 153.151 0.134761 177.013 2.94256C197.672 5.23215 218.04 9.01724 237.588 16.3889C240.089 17.3418 242.498 18.5197 244.933 19.6446C246.627 20.4387 247.725 21.6695 246.997 23.615C246.455 25.1105 244.814 25.5605 242.63 24.5811C230.322 18.9961 217.233 16.1904 204.117 13.4376C188.761 10.3438 173.2 8.36665 157.558 7.52174C129.914 5.70776 102.154 8.06792 75.2124 14.5228C60.6177 17.8788 46.5758 23.2977 33.5102 30.6161C26.6595 34.3329 20.4123 39.0673 14.9818 44.658C12.9433 46.8071 11.1336 49.1622 9.58207 51.6855C4.87056 59.5336 5.61172 67.2494 11.9246 73.7608C15.2064 77.0494 18.8775 79.925 22.8564 82.3236C31.6176 87.7101 41.3848 90.5291 51.3902 92.5804C70.6068 96.5773 90.0219 97.7419 112.891 97.7022Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    <span className="mx-auto block w-fit text-5xl font-semibold text-primary">100%</span>
                                </div>
                                <h2 className="mt-6 text-center text-3xl font-semibold text-gray-900">Customizable Plans</h2>
                            </CardContent>
                        </Card>
                        <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2">
                            <CardContent className="pt-6">
                                <div className="relative mx-auto flex aspect-square size-32 rounded-full border border-gray-200 before:absolute before:-inset-2 before:rounded-full before:border before:border-gray-100">
                                    <svg
                                        className="m-auto h-fit w-24 text-gray-400"
                                        viewBox="0 0 212 143"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            className="text-gray-300"
                                            d="M44.0209 55.3542C43.1945 54.7639 42.6916 54.0272 42.5121 53.1442C42.3327 52.2611 42.5995 51.345 43.3125 50.3958C50.632 40.3611 59.812 32.5694 70.8525 27.0208C81.8931 21.4722 93.668 18.6979 106.177 18.6979C118.691 18.6979 130.497 21.3849 141.594 26.7587C152.691 32.1326 161.958 39.8936 169.396 50.0417C170.222 51.1042 170.489 52.0486 170.196 52.875C169.904 53.7014 169.401 54.4097 168.688 55C167.979 55.5903 167.153 55.8571 166.208 55.8004C165.264 55.7437 164.438 55.2408 163.729 54.2917C157.236 45.0833 148.885 38.0307 138.675 33.1337C128.466 28.2368 117.633 25.786 106.177 25.7812C94.7257 25.7812 83.9827 28.2321 73.948 33.1337C63.9132 38.0354 55.5903 45.0881 48.9792 54.2917C48.2709 55.3542 47.4445 55.9444 46.5 56.0625C45.5556 56.1806 44.7292 55.9444 44.0209 55.3542Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </div>
                                <div className="relative z-10 mt-6 space-y-2 text-center">
                                    <h2 className="text-lg font-medium transition text-gray-900">Secure by default</h2>
                                    <p className="text-gray-600">Our platform is built with security at its core, protecting your candidate data and recruitment workflows.</p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2">
                            <CardContent className="pt-6">
                                <div className="pt-6 lg:px-6">
                                    <svg
                                        className="w-full text-gray-400"
                                        viewBox="0 0 386 123"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect width="386" height="123" rx="10" fill="#f9fafb"/>
                                        <g clipPath="url(#clip0_0_106)">
                                            <circle className="text-gray-300" cx="29" cy="29" r="15" fill="currentColor" />
                                            <path d="M29 23V35" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M35 29L29 35L23 29" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M55.2373 32H58.7988C61.7383 32 63.4404 30.1816 63.4404 27.0508V27.0371C63.4404 23.9404 61.7246 22.1357 58.7988 22.1357H55.2373V32ZM56.7686 30.6807V23.4551H58.6279C60.6719 23.4551 61.8818 24.7881 61.8818 27.0576V27.0713C61.8818 29.3613 60.6924 30.6807 58.6279 30.6807H56.7686ZM69.4922 32.1436C71.666 32.1436 72.999 30.6875 72.999 28.2949V28.2812C72.999 25.8887 71.6592 24.4326 69.4922 24.4326C67.3184 24.4326 65.9785 25.8955 65.9785 28.2812V28.2949C65.9785 30.6875 67.3115 32.1436 69.4922 32.1436ZM69.4922 30.9062C68.2139 30.9062 67.4961 29.9424 67.4961 28.2949V28.2812C67.4961 26.6338 68.2139 25.6699 69.4922 25.6699C70.7637 25.6699 71.4883 26.6338 71.4883 28.2812V28.2949C71.4883 29.9355 70.7637 30.9062 69.4922 30.9062Z" fill="currentColor" />
                                        </g>
                                        <path className="text-primary" d="M3 73H209" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <div className="relative z-10 mt-6 space-y-2 text-center">
                                    <h2 className="text-lg font-medium transition text-gray-900">Lightning Fast</h2>
                                    <p className="text-gray-600">Real-time interview processing and instant candidate evaluations powered by advanced AI algorithms.</p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="card variant-outlined relative col-span-full overflow-hidden lg:col-span-3">
                            <CardContent className="grid pt-6 sm:grid-cols-2">
                                <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                                    <div className="relative flex aspect-square size-12 rounded-full border border-gray-200 before:absolute before:-inset-2 before:rounded-full before:border before:border-gray-100">
                                        <Shield className="m-auto size-5 text-primary" strokeWidth={1} />
                                    </div>
                                    <div className="space-y-2">
                                        <h2 className="text-lg font-medium text-gray-900">Enterprise Security</h2>
                                        <p className="text-gray-600">Bank-level encryption and compliance with GDPR, CCPA, and industry standards.</p>
                                    </div>
                                </div>
                                <div className="rounded-tl rounded-tr relative -mb-6 -mr-6 mt-6 h-fit border-l border-t border-gray-200 p-6 py-6 bg-gray-50 sm:ml-6">
                                    <div className="absolute left-3 top-2 flex gap-1">
                                        <span className="block size-2 rounded-full border border-gray-300 bg-gray-200"></span>
                                        <span className="block size-2 rounded-full border border-gray-300 bg-gray-200"></span>
                                        <span className="block size-2 rounded-full border border-gray-300 bg-gray-200"></span>
                                    </div>
                                    <svg className="w-full sm:w-[150%] text-primary/20" viewBox="0 0 366 231" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0 231V150L2 160L5 130L10 142V110L15 100V125L20 145H22V120L25 100L30 95V110L35 130L40 110V100L50 105H55V95L60 80L70 85V105L75 120L80 95L90 108L100 80V70L110 75L115 85V92L120 105L125 115H130L140 100L150 110L155 140L160 120L165 145V155L170 165L175 155L180 165L190 145L200 160L210 145V130L215 155V170L220 160L225 150L230 165L235 175L240 165V150L250 140V155L260 135L270 160L280 155L290 165L300 175L310 160L320 155L330 170L340 165L350 180L360 170L365 180V231H0Z" fill="url(#paint0_linear)" opacity="0.1"/>
                                        <path className="text-primary" d="M0 200L5 180L10 190L20 160L30 175L40 160L50 170L60 180L70 170L80 185L90 175L100 160L110 175L120 165L130 180L140 170L150 160L160 175L170 165L180 180L190 170L200 160L210 180L220 170L230 165L240 180L250 175L260 170L270 185L280 175L290 180L300 175L310 165L320 180L330 170L340 185L350 175L360 180L365 170V231H0V200Z" stroke="currentColor" strokeWidth="2"/>
                                        <defs>
                                            <linearGradient id="paint0_linear" x1="0" y1="0" x2="0" y2="231" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="currentColor" stopOpacity="0.15"/>
                                                <stop offset="1" stopColor="currentColor" stopOpacity="0"/>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="card variant-outlined relative col-span-full overflow-hidden lg:col-span-3">
                            <CardContent className="grid h-full pt-6 sm:grid-cols-2">
                                <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                                    <div className="relative flex aspect-square size-12 rounded-full border border-gray-200 before:absolute before:-inset-2 before:rounded-full before:border before:border-gray-100">
                                        <Users className="m-auto size-6 text-primary" strokeWidth={1} />
                                    </div>
                                    <div className="space-y-2">
                                        <h2 className="text-lg font-medium text-gray-900">Team Collaboration</h2>
                                        <p className="text-gray-600">Seamless collaboration between recruiters, hiring managers, and stakeholders in one unified platform.</p>
                                    </div>
                                </div>
                                <div className="before:bg-gray-200 relative mt-6 before:absolute before:inset-0 before:mx-auto before:w-px sm:-my-6 sm:-mr-6">
                                    <div className="relative flex h-full flex-col justify-center space-y-6 py-6">
                                        <div className="relative flex w-[calc(50%+0.875rem)] items-center justify-end gap-2">
                                            <span className="block h-fit rounded border border-gray-200 px-2 py-1 text-xs text-gray-700 bg-white shadow-sm">Recruiter</span>
                                            <div className="ring-white ring-4 size-7">
                                                <img className="size-full rounded-full" src="https://avatars.githubusercontent.com/u/102558960?v=4" alt="" />
                                            </div>
                                        </div>
                                        <div className="relative ml-[calc(50%-1rem)] flex items-center gap-2">
                                            <div className="ring-white ring-4 size-8">
                                                <img className="size-full rounded-full" src="https://avatars.githubusercontent.com/u/47919550?v=4" alt="" />
                                            </div>
                                            <span className="block h-fit rounded border border-gray-200 px-2 py-1 text-xs text-gray-700 bg-white shadow-sm">Manager</span>
                                        </div>
                                        <div className="relative flex w-[calc(50%+0.875rem)] items-center justify-end gap-2">
                                            <span className="block h-fit rounded border border-gray-200 px-2 py-1 text-xs text-gray-700 bg-white shadow-sm">Hiring</span>
                                            <div className="ring-white ring-4 size-7">
                                                <img className="size-full rounded-full" src="https://avatars.githubusercontent.com/u/31113941?v=4" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
