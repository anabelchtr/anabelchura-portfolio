export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto max-w-7xl px-4 py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Anabel Chura Triviño. Todos los derechos reservados.
      </div>
    </footer>
  );
}
