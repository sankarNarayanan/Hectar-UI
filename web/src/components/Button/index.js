
export default function Button({children}) {
    return (
        <button className="rounded-full bg-black text-white px-[50px] py-4 text-xl">
            {children}
        </button>
    )
}