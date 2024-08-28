import { NavLink } from "react-router-dom";
const Navbar = () => {
    const activeStyle = 'underline underline-offset-4'

    return (
        <nav className="flex justify-between items-center fixed top-0 z-10 w-full py-6 px-4 text-sm font-medium bg-red-700"> 
        
            <ul className="flex items-center gap-3 text-white/80">
                <li> 
                    <NavLink to='/' className={({isActive}) =>
                    isActive ? activeStyle : undefined
                    }>
                        <img className="w-48" src="http://tmroldansrl.com.ar/wp-content/uploads/2023/09/cropped-Logotipo-350x100-03.png" alt="tmroldan" />
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/equipos' className={({isActive}) =>
                    isActive ? activeStyle : undefined
                    }> 
                        Equipos
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/horometros' className={({isActive}) =>
                    isActive ? activeStyle : undefined
                    }>
                        Horometros
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/repuestos' className={({isActive}) =>
                    isActive ? activeStyle : undefined
                    }>
                        Repuestos
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/torneria' className={({isActive}) =>
                    isActive ? activeStyle : undefined
                    }>
                        Torneria
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3 text-sm">
                <li className="text-white/60">
                    taller@tmroldasrl.com.ar
                </li>
                <li className="text-white/80">
                    <NavLink to='/signin' className={({isActive}) =>
                    isActive ? activeStyle : undefined
                    }>
                        Inicia sesión
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar