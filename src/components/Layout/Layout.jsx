import Navbar from "../Navbar/Navbar"

const Layout = ({ children }) => {
    return(
        <main>
            <Navbar/>
            <section>
                {children}
            </section>
        </main>
    )
}


export default Layout