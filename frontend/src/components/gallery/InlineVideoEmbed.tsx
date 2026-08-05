import { useEffect, useRef, useState } from "react";

type InlineVideoEmbedProps = {
  src: string;
  title: string;
  wrapperClassName?: string;
  iframeClassName?: string;
};

const InlineVideoEmbed = ({
  src,
  title,
  wrapperClassName,
  iframeClassName,
}: InlineVideoEmbedProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (shouldLoad) {
      return;
    }

    const element = containerRef.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: "180px",
        threshold: 0.2,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [shouldLoad]);

  return (
    <div ref={containerRef} className={wrapperClassName}>
      {shouldLoad ? (
        <iframe
          src={src}
          title={title}
          className={iframeClassName}
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      ) : (
        <div className="h-full w-full bg-stone-950/80" />
      )}
    </div>
  );
};

export default InlineVideoEmbed;
