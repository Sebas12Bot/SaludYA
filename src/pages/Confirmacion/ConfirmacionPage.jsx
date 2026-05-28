import { useNavigate } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import { appointmentService } from '../../services/appointmentService';

export default function ConfirmacionPage() {
    const navigate = useNavigate();
    const cita = appointmentService.getLastBooked();

    if (!cita) return <Layout><div className="p-10">No hay datos de cita.</div></Layout>;

    return (
        <Layout>
            <div className="flex flex-col items-center justify-center min-h-[80vh] p-6 animate-fadeIn">
                <div className="bg-white border border-outline-variant rounded-3xl p-10 shadow-xl max-w-md w-full text-center">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="material-symbols-outlined text-5xl" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                    </div>
                    <h2 className="text-3xl font-bold text-on-surface mb-2">¡Cita Confirmada!</h2>
                    <p className="text-secondary text-sm mb-8">Tu cita ha sido programada exitosamente en el sistema.</p>
                    
                    <div className="bg-surface-container-low rounded-2xl p-6 text-left mb-8 border border-outline-variant">
                        <div className="flex items-center gap-4 mb-4">
                            <img className="w-12 h-12 rounded-full object-cover" src={cita.img} />
                            <div>
                                <h4 className="font-bold text-on-surface">{cita.doctor}</h4>
                                <p className="text-xs text-secondary">{cita.specialty}</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 border-t border-outline-variant pt-4">
                            <div>
                                <p className="text-[10px] uppercase font-bold text-secondary">Fecha</p>
                                <p className="text-sm font-semibold">{cita.date}</p>
                            </div>
                            <div>
                                <p className="text-[10px] uppercase font-bold text-secondary">Hora</p>
                                <p className="text-sm font-semibold">{cita.time}</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <button onClick={() => navigate('/agendar')} className="w-full py-3 rounded-xl border-2 border-primary text-primary font-bold hover:bg-primary/5 transition-all">
                            Nuevo agendamiento
                        </button>
                        <button onClick={() => navigate('/citas')} className="w-full py-3 rounded-xl bg-primary text-white font-bold shadow-lg hover:opacity-90 transition-all">
                            Ver mis citas
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    );
}