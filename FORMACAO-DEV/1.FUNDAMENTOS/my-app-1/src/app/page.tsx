import Image from "next/image";
import Modelo from '@/components/Modelo';

export default function Home() {
  return (
    <Modelo
        cabecalho_titulo="Página Principal"
    >
        <h1>Página principal</h1>
        <p>Navegue pelos links ao lado</p>
    </Modelo>
  );
}
