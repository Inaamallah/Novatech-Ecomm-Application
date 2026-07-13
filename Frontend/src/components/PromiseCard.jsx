const PromiseCard = ({ icon: Icon, title, description }) => {
    return (
        <article className='flex h-full flex-col items-center rounded-2xl bg-[#f8fafc] px-6 py-8 text-center transition duration-300 hover:-translate-y-1 hover:shadow-lg'>
            <div className='mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600'>
                <Icon size={24} strokeWidth={2} />
            </div>

            <h3 className='text-base font-bold text-slate-950'>{title}</h3>
            <p className='mt-3 max-w-56 text-sm leading-6 text-slate-600'>{description}</p>
        </article>
    )
}

export default PromiseCard
