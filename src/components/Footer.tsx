import "../scss/footer.scss"

export function Footer() {
  return (
    <footer className="page-footer">
      <section className="footer-section">
        <header>About</header>
        <main>
          <p>This is a personal project.</p>
          <p>This is a mock shopping website.</p>
        </main>
      </section>
      <section className="footer-section">
        <header>Contact</header>
        <main>
          <p>Source can be found at:</p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/steve-kaufman/eshop-react-app"
          >
            github.com/steve-kaufman/eshop-react-app
          </a>
        </main>
      </section>
    </footer>
  )
}
