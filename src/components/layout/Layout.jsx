import { Link, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';

const Sidebar = () => {
    const location = useLocation();
    
    // Función para mostrar el aviso de "En construcción"
    const handleNotImplemented = (e) => {
        e.preventDefault();
        toast.error('Función no implementada aún', {
            style: { border: '1px solid #d32f2f', padding: '16px', color: '#d32f2f' },
            iconTheme: { primary: '#d32f2f', secondary: '#ffffff' },
        });
    };

    const navItems = [
        { path: '/home', icon: 'dashboard', label: 'Inicio' },
        { path: '/agendar', icon: 'calendar_add_on', label: 'Agendar cita' },
        { path: '/citas', icon: 'event_note', label: 'Mis citas' },
        { path: '/perfil', icon: 'person', label: 'Perfil', restricted: true },
        { path: '/panel-medico', icon: 'medical_services', label: 'Panel médico', restricted: true },
    ];

    return (
        <aside className="hidden md:flex flex-col h-full py-xl px-md gap-base bg-surface-container-lowest border-r border-outline-variant w-64 fixed left-0 top-0 z-50">
            <div className="mb-lg px-md">
                <h1 className="text-headline-lg-mobile font-headline-lg-mobile text-primary">SaludYa</h1>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Portal Médico</p>
            </div>
            <nav className="flex-1 flex flex-col gap-sm">
                {navItems.map(item => {
                    const isActive = location.pathname.startsWith(item.path);
                    const className = `${isActive ? 'bg-secondary-container text-on-secondary-container' : 'text-secondary hover:bg-surface-container hover:text-primary'} rounded-xl flex items-center gap-md px-md py-sm transition-all active:opacity-80`;

                    if (item.restricted) {
                        return (
                            <button key={item.path} onClick={handleNotImplemented} className={`${className} w-full text-left`}>
                                <span className="material-symbols-outlined" style={{fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0"}}>{item.icon}</span>
                                <span className="text-label-md font-label-md">{item.label}</span>
                            </button>
                        );
                    }

                    return (
                        <Link key={item.path} to={item.path} className={className}>
                            <span className="material-symbols-outlined" style={{fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0"}}>{item.icon}</span>
                            <span className="text-label-md font-label-md">{item.label}</span>
                        </Link>
                    );
                })}
            </nav>
            <div className="mt-auto pt-xl border-t border-outline-variant">
                <Link to="/" className="text-secondary flex items-center gap-md px-md py-sm hover:bg-surface-container hover:text-primary transition-all active:opacity-80 rounded-xl">
                    <span className="material-symbols-outlined">logout</span>
                    <span className="text-label-md font-label-md">Cerrar sesión</span>
                </Link>
            </div>
        </aside>
    );
};

const MobileNav = () => {
    const location = useLocation();
    
    const handleNotImplemented = (e) => {
        e.preventDefault();
        toast.error('Función no implementada aún', {
            style: { border: '1px solid #d32f2f', padding: '16px', color: '#d32f2f' },
            iconTheme: { primary: '#d32f2f', secondary: '#ffffff' },
        });
    };

    const navItems = [
        { path: '/home', icon: 'dashboard', label: 'Inicio' },
        { path: '/agendar', icon: 'calendar_add_on', label: 'Agendar' },
        { path: '/citas', icon: 'event_note', label: 'Citas' },
        { path: '/perfil', icon: 'person', label: 'Perfil', restricted: true },
    ];

    return (
        <nav className="md:hidden fixed bottom-0 w-full bg-surface-container-lowest border-t border-outline-variant flex justify-around items-center h-16 z-50 px-sm pb-safe">
            {navItems.map(item => {
                const isActive = location.pathname.startsWith(item.path);
                const className = `flex flex-col items-center gap-xs ${isActive ? 'text-primary' : 'text-on-surface-variant'}`;

                if (item.restricted) {
                    return (
                        <button key={item.path} onClick={handleNotImplemented} className={className}>
                            <span className="material-symbols-outlined text-[24px]" style={{fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0"}}>{item.icon}</span>
                            <span className="text-label-md font-label-md">{item.label}</span>
                        </button>
                    );
                }

                return (
                    <Link key={item.path} to={item.path} className={className}>
                        <span className="material-symbols-outlined text-[24px]" style={{fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0"}}>{item.icon}</span>
                        <span className="text-label-md font-label-md">{item.label}</span>
                    </Link>
                );
            })}
        </nav>
    );
};

export default function Layout({ children }) {
    return (
        <div className="flex-1 flex flex-col min-h-screen">
            <Sidebar />
            <main className="flex-1 md:ml-64 flex flex-col min-h-screen pb-16 md:pb-0">{children}</main>
            <MobileNav />
        </div>
    );
}