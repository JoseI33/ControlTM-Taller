import { NavLink } from "react-router-dom";

const Navbar = () => {
    const activeStyle = 'underline underline-offset-4'

    return (
        <nav className="flex justify-between items-center top-0 fixed z-10 w-full py-5 px-8 text-sm font-light">
           <ul className="flex items-center gap-3">
            <li className="font-semibold text-lg">
                <NavLink to='/'>
                    TMROLDAN SRL
                </NavLink>
            </li>
            <li>
                <NavLink to='/repuestos' className={({isActive}) =>
                isActive ? activeStyle : undefined }>
                    Repuestos
                </NavLink>
            </li>
            <NavLink to='/equipos'
            className={({isActive}) =>
                isActive ? activeStyle : undefined }>
                    Equipos
            </NavLink>
            <li>
                <NavLink to='horometros' 
                className={({isActive}) =>
                isActive ? activeStyle : undefined }> 
                    Horometros
                </NavLink>
            </li>
            <li>
                <NavLink to='/torneria'
                className={({isActive}) =>
                    isActive ? activeStyle : undefined }>
                    Torneria
                </NavLink>
            </li>
            </ul> 
            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                        taller@tmroldansrl.com.ar
                </li>
                <li>
                    <NavLink to='/signin'
                    className={({isActive}) =>
                        isActive ? activeStyle : undefined }>
                        Inicia sesión
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar