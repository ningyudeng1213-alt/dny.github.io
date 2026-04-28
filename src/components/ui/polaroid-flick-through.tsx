'use client';

import * as React from "react";
import { motion, useReducedMotion, type Transition } from "framer-motion";
import { RefreshCw } from "lucide-react";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
const POLAROID_MAX_IMAGE_HEIGHT = 580;
const VIEW_PANEL_X = 100;

// NOTE: The following is a placeholder for the original Button component.
// In a real app, you would use your existing UI library.
const Button = ({
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    className={`inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 ${className || ""}`}
    {...props}
  >
    {children}
  </button>
);

// Seeded pseudo-random number generator
class SeededRandom {
  private seed: number;

  constructor(seed: number) {
    this.seed = seed;
  }

  next(): number {
    this.seed = (this.seed * 9301 + 49297) % 233280;
    return this.seed / 233280;
  }

  range(min: number, max: number): number {
    return min + this.next() * (max - min);
  }
}

interface ImageData {
  src: string;
  alt: string;
  caption?: string;
  id: string;
  width?: number;
  height?: number;
}

interface ScatterPosition {
  x: number;
  y: number;
  rotation: number;
  scale: number;
}

interface ImageStackProps {
  images?: ImageData[];
  maxRotation?: number;
  scatterRadius?: number;
  seed?: number;
  className?: string;
  onReshuffle?: () => void;
  onAllViewedChange?: (allViewed: boolean) => void;
}

interface ImageStackRef {
  reshuffle: () => void;
}

const ImageStack = React.forwardRef<ImageStackRef, ImageStackProps>(
  (
    {
      images = [
        {
          id: "1",
          src: `${BASE}/polaroid/photo1.webp`,
          alt: "我的图1",
          caption: "毕业致谢",
          width: 1278,
          height: 2500,
        },
        {
          id: "2",
          src: `${BASE}/polaroid/photo2.webp`,
          alt: "我的图2",
          caption: "经验分享",
          width: 1280,
          height: 2600,
        },
        {
          id: "3",
          src: `${BASE}/polaroid/photo3.webp`,
          alt: "我的图3",
          caption: "经验分享",
          width: 1280,
          height: 2619,
        },
        {
          id: "4",
          src: `${BASE}/polaroid/photo4.webp`,
          alt: "我的图4",
          caption: "知识分享",
          width: 1274,
          height: 2625,
        },
        {
          id: "5",
          src: `${BASE}/polaroid/photo5.webp`,
          alt: "我的图5",
          caption: "生活感悟",
          width: 1277,
          height: 2619,
        },
      ],
      maxRotation = 15,
      scatterRadius = 40,
      seed = 12345,
      className = "",
      onReshuffle,
      onAllViewedChange,
    },
    ref
  ) => {
    const [imagesLoaded, setImagesLoaded] = React.useState(false);
    const [scatterPositions, setScatterPositions] = React.useState<ScatterPosition[]>([]);
    const [currentSeed, setCurrentSeed] = React.useState(seed);
    const [rightStackIds, setRightStackIds] = React.useState<string[]>([]);
    const [viewedIds, setViewedIds] = React.useState<Set<string>>(new Set());
    const [, setLoadedImages] = React.useState<Set<string>>(new Set());

    const containerRef = React.useRef<HTMLDivElement>(null);
    const prefersReducedMotion = useReducedMotion();

    // Generate scatter positions to the left of the center
    const generateScatterPositions = React.useCallback(
      (seedValue: number) => {
        const rng = new SeededRandom(seedValue);
        return images.map(() => ({
          x: rng.range(-280, -240),
          y: rng.range(-scatterRadius, scatterRadius),
          rotation: rng.range(-maxRotation, maxRotation),
          scale: rng.range(0.95, 1.05),
        }));
      },
      [images, scatterRadius, maxRotation]
    );

    // Preload images
    React.useEffect(() => {
      const preloadImages = async () => {
        const loadPromises = images.map((image) => {
          return new Promise<string>((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
              setLoadedImages((prev) => new Set(prev).add(image.id));
              resolve(image.id);
            };
            img.onerror = () => {
              console.warn(`Failed to load image: ${image.id}`);
              reject(new Error(`Failed to load image: ${image.id}`));
            };
            img.src = image.src;
          });
        });

        try {
          await Promise.all(loadPromises);
          setImagesLoaded(true);
        } catch (error) {
          console.error("Error preloading images:", error);
          setImagesLoaded(true);
        }
      };

      preloadImages();
    }, [images]);

    // Generate initial positions
    React.useEffect(() => {
      setScatterPositions(generateScatterPositions(currentSeed));
    }, [currentSeed, generateScatterPositions]);

    const allViewed = images.length > 0 && viewedIds.size === images.length;

    React.useEffect(() => {
      onAllViewedChange?.(allViewed);
    }, [allViewed, onAllViewedChange]);

    // Reshuffle function
    const reshuffle = React.useCallback(() => {
      const newSeed = Math.floor(Math.random() * 1000000);
      setCurrentSeed(newSeed);
      setRightStackIds([]);

      onReshuffle?.();
    }, [onReshuffle]);

    const handleImageClick = (id: string) => {
      setRightStackIds((prev) => {
        if (prev.includes(id)) return prev;
        return [...prev, id];
      });
      setViewedIds((prev) => {
        if (prev.has(id)) return prev;
        const next = new Set(prev);
        next.add(id);
        return next;
      });
    };

    // Expose reshuffle via ref
    React.useImperativeHandle(
      ref,
      () => ({
        reshuffle,
      }),
      [reshuffle]
    );

    const springConfig: Transition = prefersReducedMotion
      ? { type: "tween", duration: 0.3 }
      : { type: "spring", stiffness: 100, damping: 20 };

    return (
      <div
        className={`relative w-full h-[900px] flex items-center justify-center overflow-visible ${className}`}
      >
        <motion.div
          ref={containerRef}
          className="relative w-full h-full min-w-[1400px]"
          style={{ perspective: "1000px" }}
        >
          {!imagesLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-gray-500">Loading images...</div>
            </div>
          )}

          {images.map((image, index) => {
            const position = scatterPositions[index];
            if (!position) return null;
            const rightStackIndex = rightStackIds.indexOf(image.id);
            const isRightStacked = rightStackIndex !== -1;

            return (
              <motion.div
                key={`${image.id}-${currentSeed}`}
                className="absolute"
                initial={false}
                animate={
                  isRightStacked
                    ? {
                        x: VIEW_PANEL_X,
                        y: 0,
                        rotate: 0,
                        scale: 1.04,
                        zIndex: images.length + 20 + rightStackIndex,
                        transition: springConfig,
                      }
                    : {
                        x: position.x,
                        y: position.y,
                        rotate: position.rotation,
                        scale: position.scale,
                        zIndex: images.length - index,
                        transition: springConfig,
                      }
                }
                style={{
                  left: "50%",
                  top: "50%",
                }}
                onClick={() => handleImageClick(image.id)}
              >
                <div style={{ transform: "translate(-50%, -50%)" }}>
                  <div className="bg-white p-6 shadow-xl border rounded-sm inline-block">
                    <img
                      src={image.src}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      className="block h-auto w-auto rounded-sm object-contain cursor-pointer"
                      style={{ maxHeight: `${POLAROID_MAX_IMAGE_HEIGHT}px` }}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src =
                          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='384'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%236b7280'%3EImage not found%3C/text%3E%3C/svg%3E";
                      }}
                    />
                    <div
                      className="mt-3 text-xs text-gray-600 text-center font-medium"
                      style={{ fontFamily: "'Adobe Song Std', 'AdobeSongStd', serif", letterSpacing: '0.08em' }}
                    >
                      {image.caption ?? image.alt}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    );
  }
);
ImageStack.displayName = "ImageStack";

interface ImageStackDemoProps {
  onAllViewedChange?: (allViewed: boolean) => void;
}

const ImageStackDemo = ({ onAllViewedChange }: ImageStackDemoProps) => {
  const sampleImages = React.useMemo<ImageData[]>(
    () => [
      {
        id: "mountain",
        src: `${BASE}/polaroid/photo1.webp`,
        alt: "我的图1",
        caption: "毕业致谢",
        width: 1278,
        height: 2500,
      },
      {
        id: "forest",
        src: `${BASE}/polaroid/photo2.webp`,
        alt: "我的图2",
        caption: "经验分享",
        width: 1280,
        height: 2600,
      },
      {
        id: "ocean",
        src: `${BASE}/polaroid/photo3.webp`,
        alt: "我的图3",
        caption: "经验分享",
        width: 1280,
        height: 2619,
      },
      {
        id: "desert",
        src: `${BASE}/polaroid/photo4.webp`,
        alt: "我的图4",
        caption: "知识分享",
        width: 1274,
        height: 2625,
      },
      {
        id: "city",
        src: `${BASE}/polaroid/photo5.webp`,
        alt: "我的图5",
        caption: "生活感悟",
        width: 1277,
        height: 2619,
      },
    ],
    []
  );

  return (
    <div className="flex w-full items-center justify-center py-8">
      <div className="w-full">
        <ImageStack images={sampleImages} onAllViewedChange={onAllViewedChange} />
      </div>
    </div>
  );
};

// Keep these references to avoid removing placeholder code used in shared snippets.
void Button;
void RefreshCw;

export default ImageStackDemo;
