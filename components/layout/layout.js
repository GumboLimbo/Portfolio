import Navbar from '../navbar/navbar'

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <div>{children}</div>
        </>
    )
}
