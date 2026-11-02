import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Base({ children, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export const MenuIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Base>
);

export const CloseIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M18 6 6 18M6 6l12 12" />
  </Base>
);

export const ArrowIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M19 12H5M11 6l-6 6 6 6" />
  </Base>
);

export const ShieldIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" />
  </Base>
);

export const MedicalIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6V3Z" />
  </Base>
);

export const StarIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3Z" />
  </Base>
);

export const BuildingIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M3 21h18M5 21V10M19 21V10M9 21v-6h6v6M2 10l10-6 10 6" />
  </Base>
);

export const PickaxeIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M14.5 9.5 4 20M5 7c4-3 10-3 14 1M17 5c3 4 3 10-1 14" />
  </Base>
);

export const TruckIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M2 6h11v10H2zM13 10h4l4 4v2h-8" />
    <circle cx="6" cy="18" r="2" />
    <circle cx="17" cy="18" r="2" />
  </Base>
);

export const FactoryIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M3 21V9l6 4V9l6 4V5h4l2 16H3Z" />
    <path d="M8 17h2M13 17h2" />
  </Base>
);

export const ScaleIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3v18M7 21h10M4 7h16M6 7l-3 7a3 3 0 0 0 6 0L6 7ZM18 7l-3 7a3 3 0 0 0 6 0l-3-7Z" />
  </Base>
);

export const WrenchIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M14.7 6.3a4 4 0 0 0 5 5L21 13l-8 8-3-3 8-8M14.7 6.3 13 4.6a4 4 0 0 0-5.7 5.7L3 14.6 9.4 21" />
  </Base>
);

export const CarIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M5 16h14M3 16v-3l2-5h14l2 5v3h-2M3 16h2" />
    <circle cx="7" cy="17" r="2" />
    <circle cx="17" cy="17" r="2" />
  </Base>
);

export const MapPinIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" />
    <circle cx="12" cy="9" r="2.5" />
  </Base>
);

export const ChatIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 5h16v11H8l-4 4V5Z" />
    <path d="M8 10h.01M12 10h.01M16 10h.01" />
  </Base>
);

export const MaskIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M3 8c3-2 15-2 18 0 0 6-3 10-9 10S3 14 3 8Z" />
    <path d="M7 11h3M14 11h3" />
  </Base>
);

export const UsersIcon = (p: IconProps) => (
  <Base {...p}>
    <circle cx="9" cy="8" r="3.5" />
    <path d="M2 20c0-3.5 3-6 7-6s7 2.5 7 6M16 4.5a3.5 3.5 0 0 1 0 7M18 14c2.5.7 4 2.9 4 6" />
  </Base>
);

export const ChevronDownIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="m6 9 6 6 6-6" />
  </Base>
);

export const CheckIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="m5 12 5 5 9-10" />
  </Base>
);

export const TrashIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13M10 11v5M14 11v5" />
  </Base>
);

export const PackageIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3ZM4 7.5l8 4.5 8-4.5M12 12v9" />
  </Base>
);

export const BriefcaseIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M3 8h18v12H3zM9 8V5h6v3M3 13h18" />
  </Base>
);

export const TrendingIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="m3 17 6-6 4 4 8-8M15 7h6v6" />
  </Base>
);

export const ClockIcon = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </Base>
);

export const InfoIcon = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5M12 8h.01" />
  </Base>
);

export const RadioIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 10h16v10H4zM8 10 16 4M8 15h.01M14 15h3" />
  </Base>
);

export const BookIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 4h7a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4V4ZM20 4h-4a2 2 0 0 0-2 2" />
  </Base>
);
