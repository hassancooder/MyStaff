import { ArrowRight } from "lucide-react";
const InfoSection = () => {
  return (
    <div className="bg-[#DC9B16] py-8 px-4 sm:py-12 md:py-16">
      <div className="relative flex flex-col md:flex-row gap-6 max-w-[1180px] mx-auto">
        {/* Left Box */}
        <div className="bg-black text-white py-6 px-8 rounded-2xl flex-1">
          <p className="text-sm leading-relaxed">
            Frontline teams in production, quality, and safety roles are under
            constant pressure to stay compliant with complex regulations, but
            the documents they rely on, like SOPs and safety protocols, are
            often <b>buried, outdated, or inconsistent.</b>
          </p>
        </div>

        {/* Right Box */}
        <div className="bg-white text-blue-600 py-6 px-9 rounded-2xl flex-1">
          <p className="text-sm leading-relaxed">
            That's where MyStaff app comes in: it puts the right version in the
            right hands instantly, tracks compliance, automatically, and{" "}
            <b>keeps your whole team aligned and audit-ready.</b>
          </p>
        </div>

        {/* Icon */}
        <div className="absolute inset-0 flex items-center justify-center mt-0">
          <div className="w-16 h-16 bg-blue-600 border-[6px] border-[#DC9B16] rotate-90 md:rotate-0 rounded-full flex items-center justify-center">
            <ArrowRight color="white" size={32} strokeWidth={3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
