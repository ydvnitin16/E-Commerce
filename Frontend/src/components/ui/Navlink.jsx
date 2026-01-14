
import { NavLink } from 'react-router-dom';

const Navlink = ({slug, children }) => {
    return (
        <NavLink
            className={({ isActive }) =>
                isActive
                    ? 'flex items-center gap-3 px-4 py-2 rounded-lg text-zinc-200 bg-zinc-900'
                    : 'flex items-center gap-3 px-4 py-2 rounded-lg text-zinc-600 hover:bg-zinc-100'
            }
            to={slug}
        >
            {children}
        </NavLink>
    );
};

export default Navlink;
