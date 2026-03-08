// import { cn } from "@/lib/utils";

// interface DocNearLogoProps {
//     inverted?: boolean;
//     size?: "sm" | "md" | "lg";
// }

// const SIZE_MAP = {
//     sm: { icon: 28, text: "text-lg" },
//     md: { icon: 32, text: "text-xl" },
//     lg: { icon: 40, text: "text-2xl" },
// } as const;

// export default function DocNearLogo({ inverted = false, size = "md" }: DocNearLogoProps) {
//     const { icon, text } = SIZE_MAP[size];

//     return (
//         <span className="flex items-center gap-2.5" aria-label="DocNear">
//             <svg
//                 width={icon}
//                 height={icon}
//                 viewBox="0 0 40 40"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//                 aria-hidden="true"
//             >
//                 {/* Background rounded square */}
//                 <rect width="40" height="40" rx="10" fill="#0d9488" />

//                 {/* Subtle inner glow ring */}
//                 <circle cx="20" cy="20" r="13" fill="white" fillOpacity="0.08" />

//                 {/* Map Pin body */}
//                 <path
//                     d="M20 8C16.134 8 13 11.134 13 15C13 19.5 20 28 20 28C20 28 27 19.5 27 15C27 11.134 23.866 8 20 8Z"
//                     fill="white"
//                     fillOpacity="0.9"
//                 />

//                 {/* Map Pin inner circle (hole) */}
//                 <circle cx="20" cy="15" r="3.2" fill="#0d9488" />

//                 {/* Medical + cross over the pin hole */}
//                 <path
//                     d="M20 13.2V16.8M18.2 15H21.8"
//                     stroke="white"
//                     strokeWidth="1.6"
//                     strokeLinecap="round"
//                 />
//             </svg>

//             <span
//                 className={cn(
//                     "font-bold tracking-tight",
//                     text,
//                     inverted ? "text-white" : "text-gray-900"
//                 )}
//             >
//                 Doc<span className="text-teal-600">Near</span>
//             </span>
//         </span>
//     );
// }
import { cn } from "@/lib/utils";

interface DocNearLogoProps {
  inverted?: boolean;
  size?: "sm" | "md" | "lg";
}

const SIZE_MAP = {
  sm: { icon: 28, text: "text-lg" },
  md: { icon: 32, text: "text-xl" },
  lg: { icon: 40, text: "text-2xl" },
} as const;

export default function DocNearLogo({ inverted = false, size = "md" }: DocNearLogoProps) {
  const { icon, text } = SIZE_MAP[size];

  return (
    <span className="flex items-center gap-2.5" aria-label="DocNear">
      <svg
        width={icon}
        height={icon}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect width="40" height="40" rx="10" fill="#0d9488" />
        <circle cx="20" cy="20" r="13" fill="white" fillOpacity="0.08" />
        <path
          d="M20 8C16.134 8 13 11.134 13 15C13 19.5 20 28 20 28C20 28 27 19.5 27 15C27 11.134 23.866 8 20 8Z"
          fill="white"
          fillOpacity="0.92"
        />
        <circle cx="20" cy="15" r="3.2" fill="#0d9488" />
        <path
          d="M20 13.2V16.8M18.2 15H21.8"
          stroke="white"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>

      <span className={cn("font-bold tracking-tight", text)}>
        {/*
          On hero (inverted=true)  → "Doc" white,  "Near" teal-300 (light, pops on dark bg)
          On white navbar (inverted=false) → "Doc" gray-900, "Near" teal-600 (dark, readable on white)
        */}
        <span
          className={cn(
            "transition-colors duration-300",
            inverted ? "text-white" : "text-gray-900",
          )}
        >
          Doc
        </span>
        <span
          className={cn(
            "transition-colors duration-300",
            inverted ? "text-teal-300" : "text-teal-600",
          )}
        >
          Near
        </span>
      </span>
    </span>
  );
}
