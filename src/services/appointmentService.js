export const appointmentService = {

    saveAppointment: (data) => {
        const current = JSON.parse(localStorage.getItem('saludya_appointments') || '[]');
        const newApp = { 
            ...data, 
            id: Date.now(), 
            status: 'Confirmada',
            timestamp: new Date()
        };
        const updated = [newApp, ...current];
        localStorage.setItem('saludya_appointments', JSON.stringify(updated));
        localStorage.setItem('saludya_last_booked', JSON.stringify(newApp));
        return newApp;
    },
    getLastBooked: () => JSON.parse(localStorage.getItem('saludya_last_booked')),
    getAll: () => JSON.parse(localStorage.getItem('saludya_appointments') || '[]')
};