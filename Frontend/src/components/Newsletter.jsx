const Newsletter = () => {
    return (
        <section className='w-full bg-blue-700 py-16 text-white sm:py-20'>
            <div className='mx-auto flex max-w-3xl flex-col items-center px-4 text-center sm:px-6'>
                <p className='text-xs font-bold uppercase tracking-[0.28em] text-blue-100'>Stay Updated</p>
                <h2 className='mt-4 text-3xl font-bold sm:text-4xl'>Get early access to new drops</h2>
                <p className='mt-5 text-base text-blue-50'>Join 50,000+ subscribers. Unsubscribe any time.</p>

                <form className='mt-9 flex w-full max-w-xl flex-col gap-3 sm:flex-row' onSubmit={(event) => event.preventDefault()}>
                    <input
                        type='email'
                        placeholder='you@example.com'
                        aria-label='Email address'
                        className='min-h-12 flex-1 rounded-full border border-white/25 bg-white/10 px-5 text-white outline-none placeholder:text-blue-100 focus:border-white focus:bg-white/15'
                    />
                    <button className='min-h-12 rounded-full bg-white px-8 text-sm font-bold text-blue-700 transition hover:bg-blue-50'>
                        Subscribe
                    </button>
                </form>

                <p className='mt-5 text-xs text-blue-200'>We respect your privacy. No spam, ever.</p>
            </div>
        </section>
    )
}

export default Newsletter
