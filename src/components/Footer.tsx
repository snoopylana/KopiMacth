import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-20 border-t border-[#E8DFD5] bg-[#F4EFEA] text-[#6B5E55] text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2 text-lg font-bold text-[#2C2420]">
              <span className="text-xl">☕</span>
              <span className="font-display">KopiMatch</span>
            </div>
            <p className="text-xs sm:text-sm text-[#7D7067] max-w-md leading-relaxed">
              Platform kurasi coffee shop berbasis aktivitas mahasiswa. Temukan tempat belajar yang tenang, ruang meeting kelompok dengan whiteboard, colokan melimpah, dan kopi lezat ramah kantong.
            </p>
            <div className="text-xs text-[#9E9086] pt-1">
              Finding · Evaluating · Choosing with confidence
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-[#2C2420] uppercase tracking-wider mb-3">
              Aktivitas
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/explore?activity=study" className="hover:text-[#2C2420] transition-colors">
                  📚 Study & Review
                </Link>
              </li>
              <li>
                <Link to="/explore?activity=work" className="hover:text-[#2C2420] transition-colors">
                  💻 Individual Work & Coding
                </Link>
              </li>
              <li>
                <Link to="/explore?activity=discussion" className="hover:text-[#2C2420] transition-colors">
                  👥 Group Discussion
                </Link>
              </li>
              <li>
                <Link to="/explore?activity=project" className="hover:text-[#2C2420] transition-colors">
                  🚀 Project & Meeting Room
                </Link>
              </li>
              <li>
                <Link to="/explore?activity=relax" className="hover:text-[#2C2420] transition-colors">
                  🌿 Relax & Chill
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-[#2C2420] uppercase tracking-wider mb-3">
              Fitur Utama
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/explore" className="hover:text-[#2C2420] transition-colors">
                  Filter Fasilitas & Colokan
                </Link>
              </li>
              <li>
                <Link to="/explore" className="hover:text-[#2C2420] transition-colors">
                  Filter Ruang Meeting & Kapasitas
                </Link>
              </li>
              <li>
                <Link to="/compare" className="hover:text-[#2C2420] transition-colors">
                  Komparasi 2–3 Coffee Shop
                </Link>
              </li>
              <li>
                <span className="text-[#9E9086]">Student Budget Matching</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#E2D7CC] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A7D73]">
          <div>
            © 2026 KopiMatch. Didesain untuk mahasiswa & pencari tempat produktif.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-[#2C2420] cursor-pointer">Bantuan</span>
            <span aria-hidden="true">·</span>
            <span className="hover:text-[#2C2420] cursor-pointer">Panduan Mahasiswa</span>
            <span aria-hidden="true">·</span>
            <span className="hover:text-[#2C2420] cursor-pointer">Daftarkan Coffee Shop</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
