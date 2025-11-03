import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

// --- Icon Components for Social Links ---
// (You can move these to a separate icons file if you prefer)

// LinkedIn Icon
const IconLinkedIn = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect width="4" height="12" x="2" y="9"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

// GitHub Icon
const IconGitHub = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

// Website (Link) Icon
const IconWebsite = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"></path>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"></path>
  </svg>
);
// --- End of Icon Components ---

export default function TeamSection() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
          Founding Team
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* --- Vedant Mistry --- */}
          <Card className="overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
            <CardContent className="p-6 text-center flex flex-col flex-grow">
              <Image
                src="https://res.cloudinary.com/dcwzstwur/image/upload/v1762169923/Best_eygrae.jpg"
                alt="Vedant Mistry"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                width={128}
                height={128}
              />
              <h3 className="text-2xl font-semibold mb-2 text-foreground">
                Mr. Vedant Mistry
              </h3>
              <p className="text-muted-foreground">Project Lead / Co-Founder</p>

              {/* Social Links */}
              <div className="flex justify-center gap-4 my-4">
                <a
                  href="#" // <-- Add Vedant's LinkedIn URL here
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                  aria-label="LinkedIn"
                >
                  <IconLinkedIn className="h-6 w-6" />
                </a>
                <a
                  href="#" // <-- Add Vedant's GitHub URL here
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                  aria-label="GitHub"
                >
                  <IconGitHub className="h-6 w-6" />
                </a>
                <a
                  href="https://www.vedantmistry.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                  aria-label="Website"
                >
                  <IconWebsite className="h-6 w-6" />
                </a>
              </div>

              {/* Quote */}
              <blockquote className="border-l-2 border-primary pl-4 italic text-sm text-left text-muted-foreground mt-2 flex-grow">
                "This project was a masterclass in separating a 'good idea' from
                a 'viable business.' The data-driven decision to stop was our
                biggest success."
              </blockquote>
            </CardContent>
          </Card>

          {/* --- Hrishikesh Singh --- */}
          <Card className="overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
            <CardContent className="p-6 text-center flex flex-col flex-grow">
              <Image
                src="https://res.cloudinary.com/dcwzstwur/image/upload/v1762170109/dummy_mrraqg.jpg"
                alt="Hrishikesh Singh"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                width={128}
                height={128}
              />
              <h3 className="text-2xl font-semibold mb-2 text-foreground">
                Mr. Hrishikesh Singh
              </h3>
              <p className="text-muted-foreground">
                Technical Lead / Co-Founder
              </p>

              {/* Social Links */}
              <div className="flex justify-center gap-4 my-4">
                <a
                  href="#" // <-- Add Hrishikesh's LinkedIn URL here
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                  aria-label="LinkedIn"
                >
                  <IconLinkedIn className="h-6 w-6" />
                </a>
                <a
                  href="#" // <-- Add Hrishikesh's GitHub URL here
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                  aria-label="GitHub"
                >
                  <IconGitHub className="h-6 w-6" />
                </a>
                <a
                  href="#" // <-- Add Hrishikesh's Website URL here
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                  aria-label="Website"
                >
                  <IconWebsite className="h-6 w-6" />
                </a>
              </div>

              {/* Quote */}
              <blockquote className="border-l-2 border-primary pl-4 italic text-sm text-left text-muted-foreground mt-2 flex-grow">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                euismod, nisl nec faucibus, nisl nisl aliquet nisl, nec aliquet
                nisl nisl sit."
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
