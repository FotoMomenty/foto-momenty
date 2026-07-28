export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">

      {/* Telefon */}
      <a
        href="tel:+48511337594"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow-500 text-2xl shadow-xl transition hover:scale-110"
        title="Zadzwoń"
      >
        📞
      </a>

      {/* Facebook */}
      <a
        href="https://facebook.com/fotomomenty"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-2xl shadow-xl transition hover:scale-110"
        title="Facebook"
      >
        f
      </a>

    </div>
  );
}