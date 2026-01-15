import Navlink from '../ui/Navlink';
import { PanelLeft, X } from 'lucide-react';

const Sidebar = ({ panelDetails, navLinks, isOpen, onClose }) => {
    return (
        <>
            {/* Click anywere to close it */}
            {isOpen && (
                <div
                    onClick={onClose}
                    className="fixed inset-0 bg-black/30 z-40 lg:hidden"
                />
            )}

            <aside
                className={`
                    fixed h-screen left-0 z-50 w-64
                    bg-white border-r border-zinc-200
                    transition-transform duration-300 ease-in-out
                    ${isOpen ? 'translate-x-0' : '-translate-x-full'}
                    lg:translate-x-0 lg:z-auto
                    flex flex-col
                `}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-4 h-16 border-b border-zinc-200">
                    <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-md bg-zinc-900 text-white flex items-center justify-center">
                            {panelDetails.icon}
                        </div>
                        <span className="text-sm font-semibold tracking-tight">
                            {panelDetails.label}
                        </span>
                    </div>

                    {/* Close sidebar for mobile only */}
                    <button
                        onClick={onClose}
                        className="lg:hidden p-1 rounded hover:bg-zinc-100 "
                    >
                        <PanelLeft size={18} />
                    </button>
                </div>

                {/* nav links */}
                <nav className="flex-1 px-3 py-4 space-y-1">
                    {navLinks.map((item) => (
                        <Navlink key={item.slug} slug={item.slug}>
                            <div className="flex items-center gap-3 text-sm">
                                {item.icon}
                                <span>{item.label}</span>
                            </div>
                        </Navlink>
                    ))}
                </nav>

                {/* Footer */}
                <div className="px-4 py-3 border-t border-zinc-200 text-sm text-zinc-600">
                    Logged in as Admin
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
