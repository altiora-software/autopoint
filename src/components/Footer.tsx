import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[--color-background] text-[--color-foreground] px-6 py-12 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        {/* Logo y nombre */}
        <div className="flex flex-col items-start gap-4">
          <Image
            src="/autopoint.logo.png" 
            alt="Autopoint Jujuy Logo"
            width={140}
            height={40}
            className="object-contain"
          />
          <p className="text-sm text-[--color-secondary]">
            © 2025 Autopoint Jujuy. Todos los derechos reservados.
          </p>
        </div>

        {/* Enlaces */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-4 text-base">
          <Link href="/0km" className="hover:text-[--color-primary] transition">
            0 KM
          </Link>
          <Link
            href="/plan-ahorro"
            className="hover:text-[--color-primary] transition"
          >
            Plan de ahorro
          </Link>
          <Link
            href="/motos"
            className="hover:text-[--color-primary] transition"
          >
            Motos
          </Link>
          <Link
            href="/usados"
            className="hover:text-[--color-primary] transition"
          >
            Usados
          </Link>
          <Link
            href="/postventa"
            className="hover:text-[--color-primary] transition"
          >
            Postventa
          </Link>
          <Link
            href="/empresas"
            className="hover:text-[--color-primary] transition"
          >
            Empresas
          </Link>
          <Link
            href="/contacto"
            className="hover:text-[--color-primary] transition"
          >
            Contacto
          </Link>
          <Link
            href="/legales"
            className="hover:text-[--color-primary] transition"
          >
            Legales
          </Link>
        </div>

        {/* WhatsApp flotante opcional si querés dejarlo fijo en otra parte */}
        <a
          href="https://wa.me/5493884136771"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block"
        >
          <Image
            src="/autopoint.logo.png"
            alt="WhatsApp"
            width={48}
            height={48}
            className="hover:scale-110 transition"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
