import { Linkedin, Youtube, BookOpen, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialButtonsProps {
  variant?: "icons-only" | "icon-label";
  className?: string;
  includeEmail?: boolean;
}

export function SocialButtons({ variant = "icon-label", className, includeEmail = true }: SocialButtonsProps) {
  const isIconOnly = variant === "icons-only";

  return (
    <div className={cn("flex flex-wrap items-center gap-4", className)}>
      <a
        href="https://www.linkedin.com/in/aboupreneur"
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "flex items-center gap-2 border border-white/20 rounded-full transition-all duration-300 hover:border-[#0A66C2] hover:text-[#0A66C2]",
          isIconOnly ? "p-2" : "px-4 py-2 text-sm"
        )}
      >
        <Linkedin className={cn("w-5 h-5", isIconOnly && "w-4 h-4")} />
        {!isIconOnly && <span>LinkedIn</span>}
      </a>

      <a
        href="https://youtube.com/@aboupreneur"
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "flex items-center gap-2 border border-white/20 rounded-full transition-all duration-300 hover:border-[#FF0000] hover:text-[#FF0000]",
          isIconOnly ? "p-2" : "px-4 py-2 text-sm"
        )}
      >
        <Youtube className={cn("w-5 h-5", isIconOnly && "w-4 h-4")} />
        {!isIconOnly && <span>YouTube</span>}
      </a>

      <a
        href="https://aboupreneur.substack.com/"
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "flex items-center gap-2 border border-white/20 rounded-full transition-all duration-300 hover:border-[#FF6719] hover:text-[#FF6719]",
          isIconOnly ? "p-2" : "px-4 py-2 text-sm"
        )}
      >
        <BookOpen className={cn("w-5 h-5", isIconOnly && "w-4 h-4")} />
        {!isIconOnly && <span>Substack</span>}
      </a>

      {!isIconOnly && includeEmail && (
        <a
          href="mailto:hello@aboupreneur.page"
          className="flex items-center gap-2 border border-white/20 rounded-full px-4 py-2 text-sm transition-all duration-300 hover:border-white hover:text-white"
        >
          <Mail className="w-5 h-5" />
          <span>Email</span>
        </a>
      )}
    </div>
  );
}

export default SocialButtons;