import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="min-h-screen w-full bg-background flex items-center justify-center p-gutter relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 50% 50%, var(--tw-colors-primary-container) 0%, transparent 60%)'}}></div>
            <main className="w-full max-w-[440px] bg-surface-container-lowest rounded-xl border border-outline-variant shadow-[0_4px_12px_rgba(0,0,0,0.05)] p-xl flex flex-col gap-xl relative z-10">
                <div className="flex flex-col items-center text-center gap-base">
                    <div className="w-14 h-14 bg-primary-fixed text-primary rounded-xl flex items-center justify-center mb-xs">
                        <span className="material-symbols-outlined" style={{fontSize: '32px', fontVariationSettings: "'FILL' 1"}}>medical_services</span>
                    </div>
                    <h1 className="text-headline-lg font-headline-lg text-primary tracking-tight">SaludYa</h1>
                    <p className="text-body-sm font-body-sm text-on-surface-variant">Acceso seguro al portal médico</p>
                </div>
                <form className="flex flex-col gap-md" onSubmit={(e) => { e.preventDefault(); navigate('/home'); }}>
                    <div className="flex flex-col gap-xs">
                        <label className="text-label-md font-label-md text-on-surface">Correo Electrónico</label>
                        <div className="relative flex items-center group">
                            <span className="material-symbols-outlined absolute left-md text-outline group-focus-within:text-primary transition-colors">mail</span>
                            <input className="w-full bg-surface text-on-surface font-body-sm text-body-sm rounded-DEFAULT py-[14px] pl-[44px] pr-md outline-none transition-all focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary border-none placeholder:text-outline-variant" placeholder="ejemplo@clinica.com" required type="email"/>
                        </div>
                    </div>
                    <div className="flex flex-col gap-xs">
                        <div className="flex justify-between items-center">
                            <label className="text-label-md font-label-md text-on-surface">Contraseña</label>
                        </div>
                        <div className="relative flex items-center group">
                            <span className="material-symbols-outlined absolute left-md text-outline group-focus-within:text-primary transition-colors">lock</span>
                            <input className="w-full bg-surface text-on-surface font-body-sm text-body-sm rounded-DEFAULT py-[14px] pl-[44px] pr-md outline-none transition-all focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary border-none placeholder:text-outline-variant" placeholder="••••••••" required type={showPassword ? "text" : "password"}/>
                            <button className="absolute right-md text-outline hover:text-on-surface transition-colors focus:outline-none" onClick={() => setShowPassword(!showPassword)} type="button">
                                <span className="material-symbols-outlined">{showPassword ? 'visibility' : 'visibility_off'}</span>
                            </button>
                        </div>
                    </div>
                    <button className="w-full bg-primary text-on-primary hover:bg-on-primary-fixed-variant active:scale-[0.98] transition-all py-sm px-md rounded-xl text-body-lg font-body-lg flex items-center justify-center gap-sm mt-sm shadow-sm" type="submit">
                        <span>Ingresar</span>
                        <span className="material-symbols-outlined">login</span>
                    </button>
                </form>
            </main>
        </div>
    );
}