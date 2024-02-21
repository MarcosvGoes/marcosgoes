import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="py-4 shadow-xl">
            <section className="max-w-[90%] items-center mx-auto w-full flex justify-between">
                <Link href="/" className="flex gap-x-1 items-center">
                    <p className="text-3xl"><Image src='/logo.png' width={40} height={22.5} alt="logo" /></p>
                    <div className="leading-4 text-[#B4CDED] font-medium">
                        <p>Marcos</p>
                        <p>Goes</p>
                    </div>
                </Link>
                <div>
                    <ul className="flex gap-x-2 text-sm text-[#B4CDED] font-medium">
                        <li><Link href='/work'>Work</Link></li>
                        <li><Link href='/about'>About</Link></li>
                        <li><Link href='/contact'>Contact</Link></li>
                    </ul>
                </div>
            </section>
        </nav>
    )
}