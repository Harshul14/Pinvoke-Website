'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-10 border-t border-outline/30 mt-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="relative w-10 h-10 flex items-center justify-center">
            <Image
              src="/images/ic_launcher_foreground.webp"
              alt="Pinvoke Logo"
              width={40}
              height={40}
              className="object-contain scale-150"
            />
          </div>
          <span className="font-bold text-xl tracking-tight">Pinvoke</span>
        </div>
        
        <p className="text-on-surface-variant text-sm">
          &copy; {new Date().getFullYear()} Pinvoke. All rights reserved.
        </p>
        
        <div className="flex gap-6">
          <Link href="/privacy" className="text-on-surface-variant hover:text-primary transition-colors text-sm">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-on-surface-variant hover:text-primary transition-colors text-sm">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
