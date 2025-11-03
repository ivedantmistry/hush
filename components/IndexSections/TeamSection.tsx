import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import teamVedant from "@/assets/team-vedant.jpg";
import teamHrishikesh from "@/assets/team-hrishikesh.jpg";

export default function TeamSection() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-foreground">The Team</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="overflow-hidden hover:shadow-xl transition-shadow">
            <CardContent className="p-6 text-center">
              <Image
                src={teamVedant}
                alt="Vedant Mistry"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                width={128}
                height={128}
              />
              <h3 className="text-2xl font-semibold mb-2 text-foreground">Vedant Mistry</h3>
              <p className="text-muted-foreground">Project Lead / Co-Founder</p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden hover:shadow-xl transition-shadow">
            <CardContent className="p-6 text-center">
              <Image
                src={teamHrishikesh}
                alt="Hrishikesh Singh"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                width={128}
                height={128}
              />
              <h3 className="text-2xl font-semibold mb-2 text-foreground">Hrishikesh Singh</h3>
              <p className="text-muted-foreground">Technical Lead / Co-Founder</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}