function Navbar(){
    return(
        <nav className="nav">
            <a href="/" className="logo">
                logo
            </a>
            <ul>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/services">Services</a>
                </li>
                <li>
                    <a href="/contacts">Contacts</a>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;