import classes from './Layout.module.css'
import MainNavigation from './MainNavigation'

const Layout = (props) => {
    return (
        <>
            <MainNavigation />
            <main>
                {props.children}
            </main>

        </>
    )
}

export default Layout;
