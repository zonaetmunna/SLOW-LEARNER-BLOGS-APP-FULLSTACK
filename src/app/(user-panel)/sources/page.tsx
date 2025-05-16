// app/sources/page.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusCircle } from "lucide-react";

type Source = {
  id: number;
  name: string;
  handle: string;
  avatar: string;
};

export default function SourcesPage() {
  // Data for trending sources
  const trendingSources: Source[] = [
    { id: 1, name: "Work Chronicles", handle: "@workchronicles", avatar: "WC" },
    { id: 2, name: "WebDev", handle: "@webdev", avatar: "WD" },
    { id: 3, name: "Vue.js/Nuxt.js", handle: "@nuxtandvue", avatar: "VN" },
    { id: 4, name: "Go Developers", handle: "@golangurus", avatar: "GD" },
    { id: 5, name: "JavareVisited", handle: "@javarevisited", avatar: "JR" },
    { id: 6, name: "PHP Dev", handle: "@phpdev", avatar: "PD" },
    { id: 7, name: "Community Picks", handle: "@community", avatar: "CP" },
    { id: 8, name: "Dev World", handle: "@dev_world", avatar: "DW" },
    { id: 9, name: "AI", handle: "@ai", avatar: "AI" },
    {
      id: 10,
      name: "Build With GenAI",
      handle: "@buildwithgenai",
      avatar: "BW",
    },
  ];

  // Data for popular sources
  const popularSources: Source[] = [
    { id: 1, name: "Amigoscode", handle: "@amigoscode", avatar: "A" },
    { id: 2, name: "JavareVisited", handle: "@javarevisited", avatar: "JR" },
    { id: 3, name: "Course Club", handle: "@courseclub", avatar: "CC" },
    { id: 4, name: "Dev Squad", handle: "@devsquad", avatar: "DS" },
    { id: 5, name: "freeCodeCamp", handle: "@freecodecamp", avatar: "FCC" },
    { id: 6, name: "Hacker News", handle: "@hn", avatar: "HN" },
    { id: 7, name: "ByteByteGo", handle: "@bytebytego", avatar: "BBG" },
    { id: 8, name: "OpenSouls", handle: "@opensouls", avatar: "OS" },
    { id: 9, name: "AudreyO.Dev", handle: "@audreyodev", avatar: "AO" },
    { id: 10, name: "All Frontend", handle: "@allfrontend", avatar: "AF" },
  ];

  // Data for recently added sources
  const recentlyAddedSources: Source[] = [
    { id: 1, name: "Kali Linux", handle: "@kali", avatar: "KL" },
    { id: 2, name: "Watch Labs", handle: "@watchlabsvideo", avatar: "W" },
    { id: 3, name: "cozmouz", handle: "@cozmouz", avatar: "C" },
    { id: 4, name: "William Candillon", handle: "@wcandillon", avatar: "WC" },
    { id: 5, name: "Tech With Lucy", handle: "@techwithlucky", avatar: "TL" },
    { id: 6, name: "PolyMars++", handle: "@polymarslive", avatar: "P++" },
    { id: 7, name: "PolyMars", handle: "@polymars", avatar: "PM" },
    { id: 8, name: "Charlotte Fraza", handle: "@charlottefraza", avatar: "CF" },
    {
      id: 9,
      name: "Microsoft Developer",
      handle: "@microsoftdeveloper",
      avatar: "MD",
    },
    { id: 10, name: "Simon Grimm", handle: "@galaxies_dev", avatar: "SG" },
  ];

  // Data for top video sources
  const topVideoSources: Source[] = [
    { id: 1, name: "Fireship", handle: "@fireship", avatar: "🔥" },
    { id: 2, name: "The Coding Gopher", handle: "@codinggopher", avatar: "CG" },
    { id: 3, name: "Web Dev Simplified", handle: "@wds", avatar: "WDS" },
    { id: 4, name: "ByteGrad", handle: "@bytegrad", avatar: "BG" },
    { id: 5, name: "developedbyed", handle: "@developedbyed", avatar: "DBE" },
    { id: 6, name: "YouTube", handle: "@youtube", avatar: "YT" },
    { id: 7, name: "LaurieWired", handle: "@lauriewired", avatar: "LW" },
    { id: 8, name: "Tiff In Tech", handle: "@tiffintech", avatar: "TIT" },
    { id: 9, name: "Awesome", handle: "@awesome-coding", avatar: "AWS" },
    { id: 10, name: "codeHelm", handle: "@codehelm", avatar: "CH" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Sources</h1>
        <Button variant="outline" className="gap-2">
          <PlusCircle className="h-4 w-4" />
          Suggest new source
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Trending Sources Card */}
        <Card className="bg-card text-card-foreground shadow-sm">
          <CardHeader>
            <CardTitle>Trending sources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {trendingSources.map((source) => (
                <div key={source.id} className="flex items-center gap-3">
                  <div className="w-6 text-muted-foreground">{source.id}</div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-700">
                    {source.avatar}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">{source.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {source.handle}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Popular Sources Card */}
        <Card className="bg-card text-card-foreground shadow-sm">
          <CardHeader>
            <CardTitle>Popular sources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {popularSources.map((source) => (
                <div key={source.id} className="flex items-center gap-3">
                  <div className="w-6 text-muted-foreground">{source.id}</div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-700">
                    {source.avatar}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">{source.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {source.handle}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recently Added Sources Card */}
        <Card className="bg-card text-card-foreground shadow-sm">
          <CardHeader>
            <CardTitle>Recently added sources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentlyAddedSources.map((source) => (
                <div key={source.id} className="flex items-center gap-3">
                  <div className="w-6 text-muted-foreground">{source.id}</div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-700">
                    {source.avatar}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">{source.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {source.handle}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Video Sources Card */}
        <Card className="bg-card text-card-foreground shadow-sm">
          <CardHeader>
            <CardTitle>Top video sources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topVideoSources.map((source) => (
                <div key={source.id} className="flex items-center gap-3">
                  <div className="w-6 text-muted-foreground">{source.id}</div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-700">
                    {source.avatar}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">{source.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {source.handle}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
