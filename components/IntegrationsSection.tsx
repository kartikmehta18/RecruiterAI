'use client'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

export default function IntegrationsSection() {
    return (
        <section>
            <div className="bg-gray-50 py-24 md:py-32">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="grid items-center sm:grid-cols-2 gap-8">
                        <div className="relative mx-auto w-fit">
                            <div
                                aria-hidden
                                className="absolute inset-0 z-10 from-transparent to-75%"
                            />
                            <div className="mx-auto mb-4 flex w-fit justify-center gap-3">
                                <IntegrationCard>
                                    <Image src="/google-gemini.svg" alt="Google Gemini" width={32} height={32} className="w-8 h-8" />
                                </IntegrationCard>
                                <IntegrationCard>
                                    <Image src="/claude-ai.svg" alt="Vapi" width={32} height={32} className="w-8 h-8" />
                                </IntegrationCard>
                            </div>
                            <div className="mx-auto my-4 flex w-fit justify-center gap-3">
                                <IntegrationCard>
                                    <Image src="/chatgpt.svg" alt="ChatGPT" width={32} height={32} className="w-8 h-8" />
                                </IntegrationCard>
                                <IntegrationCard className="bg-primary/10 border-primary/20">
                                    <Image src="/image.png" alt="Claude" width={32} height={32} className="w-8 h-8" />
                                </IntegrationCard>
                                <IntegrationCard>
                                    <Image src="/supabase.svg" alt="Supabase" width={32} height={32} className="w-8 h-8" />
                                </IntegrationCard>
                            </div>

                            <div className="mx-auto flex w-fit justify-center gap-3">
                                <IntegrationCard>
                                    <Image src="/globe.svg" alt="Integrations" width={32} height={32} className="w-8 h-8" />
                                </IntegrationCard>

                                <IntegrationCard>
                                    <Image src="/google-gemini.svg" alt="Google Gemini" width={32} height={32} className="w-8 h-8" />
                                </IntegrationCard>
                            </div>
                        </div>
                        <div className="mx-auto mt-6 max-w-lg space-y-6 text-center sm:mt-0 sm:text-left">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                                    Powered by Leading AI & Cloud Platforms
                                </h2>
                                <p className="text-gray-600 text-lg">
                                    RecruiterAI integrates with industry-leading platforms to deliver the most advanced recruitment experience.
                                </p>
                            </div>

                            <div className="space-y-2 text-sm text-gray-700">
                                <p>✓ <span className="font-semibold">Vapi</span> - Real-time voice interviews</p>
                                <p>✓ <span className="font-semibold">OpenAI & Claude</span> - Advanced AI evaluation</p>
                                <p>✓ <span className="font-semibold">Supabase</span> - Secure data storage</p>
                                <p>✓ <span className="font-semibold">Google Gemini</span> - Enhanced analytics</p>
                            </div>

                            <Button
                                className="w-full sm:w-auto"
                                asChild>
                                <Link href="/auth">Get Started for Free</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const IntegrationCard = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
    return (
        <div className={cn('bg-white relative flex size-20 items-center justify-center rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow', className)}>
            <div className="relative z-20 m-auto size-fit">
                {children}
            </div>
        </div>
    )
}
