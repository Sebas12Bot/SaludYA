const APPOINTMENTS_KEY = 'saludya_appointments';
const LAST_BOOKED_KEY = 'saludya_last_booked';

export const appointmentService = {
    getAll: () => {
        const data = localStorage.getItem(APPOINTMENTS_KEY);
        return data ? JSON.parse(data) : [];
    },

    saveAppointment: (data) => {
        const current = appointmentService.getAll();
        const newApp = { 
            ...data, 
            id: Date.now(),
            status: 'Confirmada',
            timestamp: new Date()
        };
        
        const updated = [newApp, ...current];
        
        localStorage.setItem(APPOINTMENTS_KEY, JSON.stringify(updated));
        localStorage.setItem(LAST_BOOKED_KEY, JSON.stringify(newApp));
        
        return newApp;
    },

    deleteAppointment: (id) => {
        const current = appointmentService.getAll();
        const updated = current.filter(item => item.id !== id);
        localStorage.setItem(APPOINTMENTS_KEY, JSON.stringify(updated));
    },

    getLastBooked: () => {
        const data = localStorage.getItem(LAST_BOOKED_KEY);
        return data ? JSON.parse(data) : null;
    }
};