export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold text-foreground">🌳 Vườn cây của ba</h3>
          <p className="text-muted-foreground max-w-md mx-auto text-pretty">
            Nơi lưu giữ những cây bonsai được chăm sóc tỉ mỉ qua nhiều năm, mỗi cây đều kể một câu chuyện về sự kiên nhẫn và tình yêu thiên nhiên.
          </p>
          <div className="flex justify-center gap-6 pt-4">
            <a
              href="tel:"
              className="text-muted-foreground hover:text-accent transition-colors font-bold"
            >
              Liên hệ: SĐT
            </a>
          </div>
          <p className="text-sm text-muted-foreground pt-4">© 2025 Vườn cây của ba</p>
        </div>
      </div>
    </footer>
  )
}
