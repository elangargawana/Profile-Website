interface SectionHeadingProps {
  index?: string;
  heading: string;
  subheading?: string;
  className?: string;
}

export function SectionHeading({ index, heading, subheading, className = '' }: SectionHeadingProps) {
  return (
    <div className={`mb-16 md:mb-20 ${className}`}>
      {index && (
        <p className="font-mono text-[11px] tracking-[0.14em] text-[#9a9a9a] uppercase mb-4">
          {index}
        </p>
      )}
      <h2 className="text-[28px] md:text-[36px] font-light tracking-[-0.02em] text-[#1a1a1a] leading-tight">
        {heading}
      </h2>
      {subheading && (
        <p className="mt-4 text-[15px] text-[#7a7a7a] leading-relaxed max-w-xl">
          {subheading}
        </p>
      )}
    </div>
  );
}
