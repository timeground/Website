// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="border-t border-neutral-200">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-neutral-500 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} AY-Global. All rights reserved.</p>
        <p className="text-[11px]">
          A holding structure by <span className="font-medium">Athul Yesudas</span>.
        </p>
      </div>
    </footer>
  );
}
