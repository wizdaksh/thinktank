function Header() {
    return (
        <header className="absolute w-full py-5 sm:px-10 px-5 flex justify-between items-center z-10 text-black">
            <h1 className="text-l sm:text-3xl">The Water Wild Cats</h1>
            <menu className="flex flex-col space-x-10 md:flex-row text-right text-sm sm:text-xl ">
                <a href="/mission" className="hover:underline">Our Mission</a>
                <a href="/goals" className="hover:underline">Goals and Objectives</a>
                <a href="donate" className="hover:underline">Donate</a>
            </menu>
        </header>
    )
}

export default Header;