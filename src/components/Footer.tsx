export default function Footer() {
  return (
    <footer className="py-8 relative overflow-hidden text-center text-sm text-gray-500 font-mono border-t border-white/5">
      {/* Animated gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-accent-from to-transparent opacity-50 bg-[length:200%_100%] animate-gradient" />
      
      <p>Designed & Developed by Paradox</p>
    </footer>
  );
}
