import Image from "next/image";

interface PhotoSlotProps {
  src?: string | null;
  alt: string;
  label: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

/**
 * PhotoSlot — placeholder elegante enquanto a foto real não chega.
 * Assim que `src` for preenchido (via src/data/profile.ts), a foto real
 * aparece automaticamente com next/image (otimização, lazy loading, etc).
 */
export default function PhotoSlot({ src, alt, label, className, priority = false, sizes = "(min-width: 1024px) 40vw, 90vw" }: PhotoSlotProps) {
  return (
    <div className={`photo-slot ${className ?? ""}`}>
      {src ? (
        <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover" />
      ) : (
        <span className="photo-slot__label">{label}</span>
      )}
    </div>
  );
}
