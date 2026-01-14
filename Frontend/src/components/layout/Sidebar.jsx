import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Navlink from '../ui/Navlink';
import { PanelRight, Store, User } from 'lucide-react';

const Sidebar = ({ heading, data, role, name }) => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    return (
        <aside className="w-fit bg-white border-r border-zinc-200 hidden lg:flex flex-col">
            <div className="flex justify-between px-6 py-5 text-xl font-semibold tracking-tight">
                <span>{isSideBarOpen ? heading : <User />}</span>
                <span onClick={() => setIsSideBarOpen((prev) => !prev)}>
                    <PanelRight />
                </span>
            </div>

            <nav className="flex-1 px-4 space-y-1">
                {data?.map((d) => (
                    <Navlink slug={d.slug}>
                        {' '}
                        {d.icon} {isSideBarOpen && d.label}
                    </Navlink>
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;
