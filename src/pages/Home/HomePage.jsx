import { useNavigate } from 'react-router-dom';
import Layout from '../../components/layout/Layout';

export default function HomePage() {
    const navigate = useNavigate();
    const doctores = [
        { 
            id: 1, 
            name: 'Dra. Ana Silva', 
            specialty: 'Cardiología', 
            img: 'https://images.pexels.com/photos/5186/person-woman-coffee-cup.jpg', 
            rating: '4.9 (120 reseñas)' 
        },
        { 
            id: 2, 
            name: 'Dr. Carlos Ruiz', 
            specialty: 'Medicina General', 
            img: 'https://images.pexels.com/photos/6110/man-holiday-people-face.jpg', 
            rating: '4.7 (85 reseñas)' 
        }
    ];

    const especialidades = [
        { name: 'Cardiología', icon: 'favorite' },
        { name: 'Odontología', icon: 'dentistry' },
        { name: 'Pediatría', icon: 'child_care' },
        { name: 'Psicología', icon: 'psychology' },
        { name: 'Dermatología', icon: 'face_retouching_natural' },
        { name: 'Neurología', icon: 'neurology' }
    ];

    return (
        <Layout>
            <header className="md:hidden flex justify-between items-center px-4 w-full sticky top-0 z-40 h-16 bg-surface border-b border-outline-variant">
                <h1 className="text-xl font-bold text-primary">SaludYa</h1>
            </header>
            <header className="hidden md:flex justify-between items-center px-10 py-8 w-full sticky top-0 z-40 bg-background/80 backdrop-blur-md">
                <div>
                    <h2 className="text-2xl font-bold text-on-surface">Bienvenido de nuevo</h2>
                    <p className="text-sm text-secondary">Encuentra a tu especialista ideal hoy.</p>
                </div>
            </header>

            <div className="p-container-margin-mobile md:p-container-margin-desktop max-w-[1200px] mx-auto w-full flex flex-col gap-10">
                
                <section className="bg-primary-container text-on-primary-container rounded-xl p-6 md:p-8 flex flex-col gap-6 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-2xl"></div>
                    <div className="relative z-10">
                        <h2 className="text-2xl font-bold mb-2">¿Qué especialista buscas?</h2>
                        <p className="opacity-90 mb-6">Agenda citas presenciales o videoconsultas al instante.</p>
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="relative flex-1">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-secondary">search</span>
                                <input className="w-full pl-12 pr-4 py-3 rounded-lg border-0 bg-surface-container-lowest text-on-surface focus:ring-2 focus:ring-primary shadow-sm h-[48px]" placeholder="Enfermedad, doctor o especialidad..." type="text"/>
                            </div>
                            <button onClick={() => navigate('/agendar')} className="bg-surface-container-lowest text-primary h-[48px] px-8 rounded-lg font-semibold hover:bg-surface-container-low transition-colors shadow-sm">
                                Buscar
                            </button>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="text-xl font-bold text-on-surface mb-6">Especialidades</h3>
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                        {especialidades.map((esp, i) => (
                            <button key={i} onClick={() => navigate('/agendar')} className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant flex flex-col items-center gap-3 hover:border-primary hover:shadow-sm transition-all group">
                                <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined">{esp.icon}</span>
                                </div>
                                <span className="text-xs font-bold text-center">{esp.name}</span>
                            </button>
                        ))}
                    </div>
                </section>

                <section className="mb-10">
                    <h3 className="text-xl font-bold text-on-surface mb-6">Médicos destacados</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {doctores.map((doc) => (
                            <div key={doc.id} className="bg-white p-5 rounded-2xl border border-outline-variant shadow-sm flex flex-col gap-4">
                                <div className="flex items-center gap-4">
                                    <img src={doc.img} alt={doc.name} className="w-16 h-16 rounded-full object-cover border-2 border-surface-container" />
                                    <div>
                                        <h4 className="font-bold text-lg">{doc.name}</h4>
                                        <p className="text-sm text-secondary">{doc.specialty}</p>
                                        <p className="text-xs font-bold text-yellow-600">★ {doc.rating}</p>
                                    </div>
                                </div>
                                <button onClick={() => navigate('/agendar')} className="w-full py-2 bg-primary text-white rounded-lg font-bold hover:bg-primary/90 transition-all">
                                    Agendar cita
                                </button>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </Layout>
    );
}