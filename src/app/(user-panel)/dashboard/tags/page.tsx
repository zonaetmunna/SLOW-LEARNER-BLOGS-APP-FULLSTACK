// app/tags/page.tsx
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TagsPage() {
  // Data for trending tags
  const trendingTags = [
    { id: 1, name: "productivity" },
    { id: 2, name: "tech-news" },
    { id: 3, name: "community" },
    { id: 4, name: "typescript" },
    { id: 5, name: "graphql" },
    { id: 6, name: "microservices" },
    { id: 7, name: "llm" },
    { id: 8, name: "javascript" },
    { id: 9, name: "devops" },
    { id: 10, name: "kubernetes" },
  ];

  // Data for popular tags
  const popularTags = [
    { id: 1, name: "productivity" },
    { id: 2, name: "career" },
    { id: 3, name: "ui-design" },
    { id: 4, name: "architecture" },
    { id: 5, name: "cloud" },
    { id: 6, name: "microservices" },
    { id: 7, name: "self-hosting" },
    { id: 8, name: "react" },
    { id: 9, name: "llm" },
    { id: 10, name: "backend" },
  ];

  // Data for recently added tags
  const recentlyAddedTags = [
    { id: 1, name: "google-gemini" },
    { id: 2, name: "deepseek" },
    { id: 3, name: "amazon-q" },
    { id: 4, name: "gpt-store" },
    { id: 5, name: "opentofu" },
    { id: 6, name: "ollama" },
    { id: 7, name: "microsoft-copilot" },
    { id: 8, name: "ai-agents" },
    { id: 9, name: "analytics-intelligence" },
    { id: 10, name: "design-tools" },
  ];

  // Data for all tags
  const allTags = [
    { id: 1, name: ".net" },
    { id: 2, name: "chromeos" },
    { id: 3, name: "envoy" },
    { id: 4, name: "jenkins" },
    { id: 5, name: "orchestration" },
    { id: 6, name: "spotify" },
    { id: 7, name: ".net-core" },
    { id: 8, name: "chromium" },
    { id: 9, name: "erlang" },
    { id: 10, name: "jest" },
    { id: 11, name: "osint" },
    { id: 12, name: "spring" },
    { id: 13, name: ".net-maui" },
    { id: 14, name: "cicd" },
    { id: 15, name: "erp" },
    { id: 16, name: "jetbrains" },
    { id: 17, name: "overfitting" },
    { id: 18, name: "spring-boot" },
    { id: 19, name: "3d" },
    { id: 20, name: "cilium" },
    { id: 21, name: "ethereum" },
    { id: 22, name: "jetpack-compose" },
    { id: 23, name: "palm" },
    { id: 24, name: "spring-security" },
    { id: 25, name: "circleci" },
    { id: 26, name: "ethical-ai" },
    { id: 27, name: "jfrog" },
    { id: 28, name: "pandas" },
    { id: 29, name: "sql" },
    { id: 30, name: "ab-testing" },
    { id: 31, name: "cisco" },
    { id: 32, name: "ethics" },
    { id: 33, name: "jhipster" },
    { id: 34, name: "passive-income" },
    { id: 35, name: "sqlite" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold tracking-tight">Tags</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Trending Tags Card */}
        <Card className="bg-card text-card-foreground shadow-sm">
          <CardHeader>
            <CardTitle>Trending tags</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {trendingTags.map((tag) => (
                <div key={tag.id} className="flex items-center text-sm">
                  <div className="w-6 text-muted-foreground">{tag.id}</div>
                  <div>{tag.name}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Popular Tags Card */}
        <Card className="bg-card text-card-foreground shadow-sm">
          <CardHeader>
            <CardTitle>Popular tags</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {popularTags.map((tag) => (
                <div key={tag.id} className="flex items-center text-sm">
                  <div className="w-6 text-muted-foreground">{tag.id}</div>
                  <div>{tag.name}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recently Added Tags Card */}
        <Card className="bg-card text-card-foreground shadow-sm">
          <CardHeader>
            <CardTitle>Recently added tags</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {recentlyAddedTags.map((tag) => (
                <div key={tag.id} className="flex items-center text-sm">
                  <div className="w-6 text-muted-foreground">{tag.id}</div>
                  <div>{tag.name}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* All Tags Section */}
      <Card className="bg-card text-card-foreground shadow-sm">
        <CardHeader>
          <CardTitle>All tags</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <Badge
                key={tag.id}
                variant="outline"
                className="bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
              >
                #{tag.name}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
