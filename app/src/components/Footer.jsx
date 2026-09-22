/**
 * Footer — zip-parity global shell (UXD v3.0 Gate 1): dark saffron panel under
 * a gold rule, sacred emblems row, Tamil dedicatory line, attribution and the
 * local-storage privacy note (FR-51/71).
 */
import { ThirumanIcon, ShankaIcon, ChakraIcon, LotusIcon } from './SacredIcons.jsx';

export default function Footer() {
  return (
    <footer className="site-footer mt-16 bg-[#571F00] text-[#F7ECD9]">
      {/* Top golden hairline accent */}
      <div className="h-[3px] bg-gradient-to-r from-transparent via-[#C99A2E] to-transparent"></div>

      <div className="max-w-6xl mx-auto px-6 py-10 text-center text-sm space-y-3">
        {/* Sacred Emblems Row */}
        <div className="flex items-center justify-center gap-4 py-2">
          <ShankaIcon className="w-5 h-5" />
          <ThirumanIcon className="w-5 h-7" />
          <ChakraIcon className="w-5 h-5" />
        </div>

        {/* Traditional Tamil dedicatory prayer */}
        <p className="font-display text-base text-[#E2C47C]" lang="ta">
          சர்வம் ஸ்ரீமந் நாராயண சரணாரவிந்தார்ப்பணமஸ்து
        </p>

        <div className="space-y-1.5 pt-1 text-[#F7ECD9]/90 max-w-3xl mx-auto leading-relaxed">
          <p>
            Compiled with reverence from the Nalayira Divya Prabandham tradition and
            standard published lists of the 108 Divya Desams.
          </p>
          <p>
            Content is provided in good faith for devotional and educational purposes.
          </p>
          <p className="text-[#F7ECD9]/70 text-xs pt-1">
            Your visited marks and trip are stored only in your browser — never sent to any server.
          </p>
        </div>

        {/* Sacred footer mark */}
        <div className="pt-3 border-t border-[#7A2E00]/60 flex items-center justify-center gap-2 text-xs text-[#E2C47C]/70">
          <LotusIcon className="w-3.5 h-3.5" />
          <span>108 Divya Desams • Sri Ramanuja Dasa</span>
          <LotusIcon className="w-3.5 h-3.5" />
        </div>
      </div>
    </footer>
  );
}
