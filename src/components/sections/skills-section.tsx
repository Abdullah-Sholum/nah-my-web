import { skillGroups } from "@/data/skills";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeList } from "@/components/shared/badge-list";
import { Section } from "@/components/shared/section";

export function SkillsSection() {
  return (
    <Section
      title="Skills"
      description="Dikelompokkan berdasarkan bidang."
      className="border-t"
    >
      <div className="grid gap-4 md:grid-cols-2">
        {skillGroups.map((group) => (
          <Card
            key={group.id}
            className="md:[&:last-child:nth-child(odd)]:col-span-2"
          >
            <CardHeader>
              <CardTitle className="text-base">{group.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <BadgeList items={group.items} />
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
