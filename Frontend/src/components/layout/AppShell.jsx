import { useState } from 'react';
import { PanelRight } from 'lucide-react';
import Sidebar from './Sidebar';

const AppShell = ({ panelDetails, navLinks, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex min-h-screen bg-zinc-50 text-zinc-900">
            {/* MOBILE TOGGLE BUTTON */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed top-4 left-4 z-50 p-2 rounded-md border border-zinc-300 bg-white shadow lg:hidden"
            >
                <PanelRight size={18} />
            </button>

            {/* SIDEBAR */}
            <Sidebar
                panelDetails={panelDetails}
                navLinks={navLinks}
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />

            {/* MAIN CONTENT */}
            <main className="flex-1 lg:ml-64 transition-all duration-300">
                <div className="p-4 md:p-6">{children}</div>
            </main>
        </div>
    );
};

export default AppShell;
