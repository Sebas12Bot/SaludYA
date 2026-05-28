import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Layout from '../../components/layout/Layout';
import { appointmentService } from '../../services/appointmentService';

const doctors = [
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

export default function AgendarPage() {
    const navigate = useNavigate();
    const [selectedDoctorId, setSelectedDoctorId] = useState(1);
    const [selectedDate, setSelectedDate] = useState(new Date().getDate());
    const [selectedTime, setSelectedTime] = useState('10:30 AM');
    const [viewDate, setViewDate] = useState(new Date(2026, 6, 1));
    const daysOfWeek = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const selectedDoctor = doctors.find(d => d.id === selectedDoctorId) || doctors[0];

    const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
    const getFirstDayOfMonth = (year, month) => {
        let firstDay = new Date(year, month, 1).getDay();
        return firstDay === 0 ? 6 : firstDay - 1;
    };

    const handleMonthChange = (offset) => {
        setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + offset, 1));
    };

    const handleConfirmar = () => {
        appointmentService.saveAppointment({
            doctor: selectedDoctor.name,
            specialty: selectedDoctor.specialty,
            date: `${selectedDate} de ${months[viewDate.getMonth()]} ${viewDate.getFullYear()}`,
            time: selectedTime,
            img: selectedDoctor.img
        });

        toast.success('Cita confirmada correctamente');
        navigate('/confirmacion');
    };

    return (
        <Layout>
            <div className="p-container-margin-mobile md:p-container-margin-desktop max-w-[1200px] mx-auto w-full flex flex-col gap-8 pb-10">
                <h2 className="text-2xl font-bold text-on-surface">Agendar nueva cita</h2>

                <section className="flex flex-col gap-4">
                    <h3 className="text-lg font-semibold">1. Seleccionar Médico</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {doctors.map((doctor) => (
                            <div 
                                key={doctor.id} 
                                onClick={() => setSelectedDoctorId(doctor.id)} 
                                className={`bg-white border rounded-xl p-4 cursor-pointer relative transition-all ${selectedDoctorId === doctor.id ? 'border-primary border-2 ring-4 ring-primary/10' : 'border-outline-variant'}`}
                            >
                                {selectedDoctorId === doctor.id && <span className="material-symbols-outlined absolute top-4 right-4 text-primary" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>}
                                <div className="flex items-center gap-4">
                                    <img className="w-14 h-14 rounded-full" src={doctor.img} alt={doctor.name} />
                                    <div>
                                        <h4 className="font-bold">{doctor.name}</h4>
                                        <p className="text-sm text-secondary">{doctor.specialty}</p>
                                        <div className="flex items-center text-xs text-secondary mt-1">
                                            <span className="material-symbols-outlined text-sm text-on-surface mr-1" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                                            {doctor.rating}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <section className="flex flex-col gap-4">
                        <h3 className="text-lg font-semibold">2. Seleccionar Fecha</h3>
                        <div className="bg-white border border-outline-variant rounded-2xl p-6 shadow-sm">
                            <div className="flex justify-between items-center mb-6">
                                <button onClick={() => handleMonthChange(-1)} className="p-2 hover:bg-surface-container rounded-full transition-colors">
                                    <span className="material-symbols-outlined">chevron_left</span>
                                </button>
                                <span className="font-bold text-on-surface">{months[viewDate.getMonth()]} {viewDate.getFullYear()}</span>
                                <button onClick={() => handleMonthChange(1)} className="p-2 hover:bg-surface-container rounded-full transition-colors">
                                    <span className="material-symbols-outlined">chevron_right</span>
                                </button>
                            </div>
                            <div className="grid grid-cols-7 gap-1 text-center mb-2">
                                {daysOfWeek.map(d => <div key={d} className="text-xs font-medium text-secondary py-2">{d}</div>)}
                            </div>
                            <div className="grid grid-cols-7 gap-1 text-center">
                                {Array(getFirstDayOfMonth(viewDate.getFullYear(), viewDate.getMonth())).fill(null).map((_, i) => <div key={`empty-${i}`} />)}
                                {Array.from({ length: getDaysInMonth(viewDate.getFullYear(), viewDate.getMonth()) }, (_, i) => i + 1).map(day => (
                                    <div key={day} onClick={() => setSelectedDate(day)}
                                        className={`w-10 h-10 flex items-center justify-center mx-auto rounded-full cursor-pointer text-sm transition-all
                                        ${selectedDate === day ? 'bg-primary text-white font-bold shadow-md scale-110' : 'hover:bg-surface-container text-on-surface'}`}>
                                        {day}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="flex flex-col gap-4">
                        <h3 className="text-lg font-semibold">3. Seleccionar Hora</h3>
                        <div className="bg-white border border-outline-variant rounded-2xl p-6 shadow-sm h-full">
                            <p className="text-sm text-secondary mb-4">Horarios para el {selectedDate} de {months[viewDate.getMonth()]}</p>
                            <div className="flex flex-wrap gap-3">
                                {['09:00', '10:00', '10:30', '11:00', '14:00', '15:30'].map(t => (
                                    <button key={t} onClick={() => setSelectedTime(`${t} AM`)}
                                        className={`px-5 py-2 rounded-lg border text-sm transition-all
                                        ${selectedTime.includes(t) ? 'border-primary bg-primary-container/10 text-primary font-bold shadow-sm' : 'border-outline-variant text-on-surface hover:border-primary'}`}>
                                        {t}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>

                <div className="mt-4 p-6 bg-white border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-4 rounded-xl">
                    <div className="flex items-center gap-3 bg-blue-50 px-4 py-2 rounded-lg border border-blue-100">
                        <span className="material-symbols-outlined text-primary">info</span>
                        <p className="text-sm font-medium">
                            {selectedDoctor.name} • {selectedDate} {months[viewDate.getMonth()]}, {selectedTime}
                        </p>
                    </div>
                    <button onClick={handleConfirmar} className="bg-primary text-white px-10 py-3 rounded-xl font-bold shadow-lg hover:opacity-90 transition-all w-full md:w-auto">
                        Confirmar cita
                    </button>
                </div>
            </div>
        </Layout>
    );
}