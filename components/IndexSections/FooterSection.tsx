export default function FooterSection() {
  return (
    <footer className="py-16 px-6 bg-card text-center">
      <div className="max-w-2xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4 text-foreground">Let's Connect</h3>
        <p className="text-lg mb-8 text-foreground/80">
          Interested in this project or future collaborations? Contact Vedant Mistry for inquiries.
        </p>
        <p className="text-sm text-muted-foreground">
          © 2025 Hush – Future of Fair Rides. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          Website Maintained and designed by{" "}
          <a
            href="https://www.vedantmistry.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:text-primary transition-colors"
          >
            Vedant Mistry
          </a>
        </p>
      </div>
    </footer>
  );
}