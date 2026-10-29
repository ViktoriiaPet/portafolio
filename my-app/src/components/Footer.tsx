export function Footer () {
    const currentYear = new Date().getFullYear()
    return (
        <section className="w-full flex flex-col items-center">
            <div className="flex flex-col w-full px-4 max-w-[1514px]">
                <div className="flex flex-row p-1 justify-between">
                    <p className="text-[#0b2639] font-[DM Mono] tracking-tighter xl:text-xl">© {currentYear} Viktoriia</p>
                    <p className="text-[#0b2639] font-[DM Mono] tracking-tighter xl:text-xl">Built with care.</p>
                </div>
                <div className="flex flex-row p-1 pt-3 xl:pt-6 justify-between">
                    <p className="text-[#0b2639] font-[DM Mono] tracking-tighter xl:text-xl">FULL STACK DEVELOPER</p>
                    <button className="text-[#0b2639] font-[DM Mono] tracking-tighter xl:text-xl" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                    Back to top ↑
                    </button>
                </div>
            </div>
        </section>
    )
}