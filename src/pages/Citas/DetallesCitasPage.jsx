import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Layout from '../../components/layout/Layout';
import { appointmentService } from '../../services/appointmentService';

export default function DetallesCitasPage() {
    const navigate = useNavigate();
    const [citas, setCitas] = useState(appointmentService.getAll());

    const handleNotImplemented = () => {
        toast.error('Función no implementada aún', {
            style: { border: '1px solid #d32f2f', padding: '16px', color: '#d32f2f' },
            iconTheme: { primary: '#d32f2f', secondary: '#ffffff' },
        });
    };

    const handleEliminar = (id) => {
        appointmentService.deleteAppointment(id);
        setCitas(appointmentService.getAll());
        toast.success('Cita eliminada');
    };

    return (
        <Layout>
            <div className="p-container-margin-mobile md:p-container-margin-desktop max-w-[1000px] mx-auto w-full pt-10">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h2 className="text-3xl font-bold text-on-surface">Mis citas agendadas</h2>
                        <p className="text-secondary">Gestiona tus próximas consultas médicas e historial.</p>
                    </div>
                    <button onClick={() => navigate('/agendar')} className="bg-primary text-white px-6 py-2 rounded-xl font-bold flex items-center gap-2 shadow-md">
                        <span className="material-symbols-outlined">add</span> Programar Cita
                    </button>
                </div>

                <div className="flex flex-col gap-6">
                    {citas.length === 0 ? (
                        <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-outline-variant">
                            <span className="material-symbols-outlined text-6xl text-outline-variant mb-4">event_busy</span>
                            <p className="text-secondary font-medium">Aún no tienes citas programadas.</p>
                        </div>
                    ) : (
                        citas.map((cita) => (
                            <div key={cita.id} className="bg-white border border-outline-variant rounded-2xl p-6 shadow-sm border-l-[6px] border-l-primary flex flex-col md:flex-row justify-between items-center gap-6">
                                <div className="flex items-center gap-6 w-full">
                                    <div className="bg-primary-container/10 p-3 rounded-xl text-primary text-center min-w-[100px]">
                                        <p className="text-[10px] uppercase font-bold opacity-70">
                                            {cita.date?.split(' de ')[1]?.split(' ')[0] || ''}
                                        </p>
                                        <p className="text-xl font-black">
                                            {cita.date?.split(' de ')[0] || ''}
                                        </p>
                                        <p className="text-xs font-bold">{cita.time}</p>
                                    </div>
                                    
                                    <div className="flex items-center gap-4">
                                        <img className="w-16 h-16 rounded-full border-2 border-surface-container" src={cita.img} alt={cita.doctor} />
                                        <div>
                                            <h4 className="text-lg font-bold text-on-surface">{cita.doctor}</h4>
                                            <p className="text-sm text-secondary mb-2">{cita.specialty}</p>
                                            <span className="bg-green-100 text-green-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                                Cita Confirmada
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-3 w-full md:w-auto">
                                    <button 
                                        onClick={handleNotImplemented}
                                        className="flex-1 md:flex-none px-6 py-2 rounded-lg border border-outline-variant text-sm font-bold hover:bg-surface-container transition-all"
                                    >
                                        Reprogramar
                                    </button>
                                    <button 
                                        onClick={handleNotImplemented}
                                        className="flex-1 md:flex-none px-6 py-2 rounded-lg bg-surface-container-highest text-on-surface text-sm font-bold hover:bg-outline-variant transition-all"
                                    >
                                        Gestionar
                                    </button>
                                    <button 
                                        onClick={() => handleEliminar(cita.id)}
                                        className="flex-1 md:flex-none px-6 py-2 rounded-lg bg-red-50 text-red-600 text-sm font-bold hover:bg-red-100 transition-all"
                                    >
                                        Eliminar
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </Layout>
    );
}