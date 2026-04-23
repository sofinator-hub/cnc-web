"use client";
import { useState } from "react";

export default function MobileMenu() {
const [open, setOpen] = useState(false);

return (
<>
{/* BOTÓN HAMBURGUESA */}
<button
onClick={() => setOpen(true)}
className="fixed top-5 right-5 z-50 md:hidden text-3xl"
>
☰ </button>

```
  {/* MENU FULLSCREEN */}
  {open && (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center space-y-10 text-2xl">

      {/* CERRAR */}
      <button
        onClick={() => setOpen(false)}
        className="absolute top-5 right-5 text-3xl"
      >
        ✕
      </button>

      <a href="#inicio" onClick={() => setOpen(false)}>Inicio</a>
      <a href="#industrial" onClick={() => setOpen(false)}>Industrial</a>
      <a href="#materiales" onClick={() => setOpen(false)}>Materiales</a>
      <a href="#grabado" onClick={() => setOpen(false)}>Grabado</a>

    </div>
  )}
</>

);
}
