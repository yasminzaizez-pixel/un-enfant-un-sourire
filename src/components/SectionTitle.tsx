type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionTitleProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.24em] text-[#174c73]">
        {eyebrow}
      </p>
      <h2 className="font-[family-name:var(--font-manrope)] text-3xl font-extrabold leading-[1.12] tracking-[-0.045em] text-[#12314a] sm:text-[2.75rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-7 text-slate-600 sm:text-[17px] sm:leading-8">{description}</p>
      ) : null}
    </div>
  );
}
