'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ReactLenis, useLenis } from 'lenis/react';

function LenisScrollReset() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname, lenis]);

  return null;
}

function LenisProviderInner({ children }: { children: React.ReactNode }) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <>
      <ReactLenis root />
      <LenisScrollReset />
      {children}
    </>
  );
}

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return <LenisProviderInner>{children}</LenisProviderInner>;
}
