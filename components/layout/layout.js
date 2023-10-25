import Navbar from '../navbar/navbar'

export default function Layout ({navState, setNavState, children}) {
    return(
        <>
        <Navbar navigation={navState} setNavigation={setNavState} />
        <div>{children}</div>
        </>
    )
}
