import Image from "next/image";
import { cn } from "@/lib/utils";

interface ScreenshotImageProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}

export function ScreenshotImage({ src, alt, caption, className }: ScreenshotImageProps) {
  return (
    <figure className={cn("my-6", className)}>
      <div className="rounded-lg overflow-hidden border border-border">
        <Image
          src={src}
          alt={alt}
          width={900}
          height={600}
          className="w-full h-auto"
        />
      </div>
      {caption && (
        <figcaption className="text-xs text-muted mt-2 text-center">{caption}</figcaption>
      )}
    </figure>
  );
}
