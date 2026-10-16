interface SectionHeadingProps {
  heading: string;
  subheading?: string;
  className?: string;
  dark?: boolean;
}

export function SectionHeading({ heading, subheading, className = '', dark = false }: SectionHeadingProps) {
  return (
    <div className={`mb-16 md:mb-20 ${className}`}>
      <h2 className={`text-[28px] md:text-[36px] font-light tracking-[-0.02em] leading-tight ${dark ? 'text-[#f5f3ef]' : 'text-[#1a1a1a]'}`}>
        {heading}
      </h2>
      {subheading && (
        <p className={`mt-4 text-[15px] leading-relaxed max-w-xl ${dark ? 'text-[#6a6a6a]' : 'text-[#7a7a7a]'}`}>
          {subheading}
        </p>
      )}
    </div>
  );
}
