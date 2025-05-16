// app/leaderboard/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type UserRank = {
  id: number;
  name: string;
  handle: string;
  score: string;
  badge: string;
  avatar: string;
};

export default function LeaderboardPage() {
  // Data for highest reputation
  const highestReputation: UserRank[] = [
    {
      id: 1,
      name: "Ido Shamun",
      handle: "@idoshamun",
      score: "132.6K",
      badge: "🏆",
      avatar: "IS",
    },
    {
      id: 2,
      name: "Nimrod Kramer",
      handle: "@kramer",
      score: "105.4K",
      badge: "🥈",
      avatar: "NK",
    },
    {
      id: 3,
      name: "Randy",
      handle: "@randy",
      score: "54.7K",
      badge: "🥉",
      avatar: "R",
    },
    {
      id: 4,
      name: "Bobby Iliev",
      handle: "@bobbyiliev",
      score: "53K",
      badge: "",
      avatar: "BI",
    },
    {
      id: 5,
      name: "Ole-Martin",
      handle: "@ombratteng",
      score: "50.4K",
      badge: "",
      avatar: "OM",
    },
    {
      id: 6,
      name: "Denis Bolkovskis",
      handle: "@denisb",
      score: "48.1K",
      badge: "",
      avatar: "DB",
    },
    {
      id: 7,
      name: "Chris Bongers",
      handle: "@dailydevtips",
      score: "40.0K",
      badge: "",
      avatar: "CB",
    },
    {
      id: 8,
      name: "Anja Petry",
      handle: "@anjapcodes",
      score: "39.4K",
      badge: "",
      avatar: "AP",
    },
    {
      id: 9,
      name: "0rcDev",
      handle: "@orcdev",
      score: "31.7K",
      badge: "",
      avatar: "OD",
    },
    {
      id: 10,
      name: "Tessa van der Heijden",
      handle: "@tvdheijden",
      score: "27.3K",
      badge: "",
      avatar: "TH",
    },
  ];

  // Data for longest streak
  const longestStreak: UserRank[] = [
    {
      id: 1,
      name: "Ole-Martin",
      handle: "@ombratteng",
      score: "849",
      badge: "🏆",
      avatar: "OM",
    },
    {
      id: 2,
      name: "Do Hoang Dinh Tien",
      handle: "@tiendio152",
      score: "793",
      badge: "🥈",
      avatar: "DT",
    },
    {
      id: 3,
      name: "Dan",
      handle: "@dan_mba",
      score: "791",
      badge: "🥉",
      avatar: "D",
    },
    {
      id: 4,
      name: "Tam",
      handle: "@amtnd",
      score: "740",
      badge: "",
      avatar: "T",
    },
    {
      id: 5,
      name: "Ido Shamun",
      handle: "@idoshamun",
      score: "687",
      badge: "",
      avatar: "IS",
    },
    {
      id: 6,
      name: "Narciso Caldas",
      handle: "@narcaldas",
      score: "621",
      badge: "",
      avatar: "N",
    },
    {
      id: 7,
      name: "Donald Nwokoro",
      handle: "@donguillotine",
      score: "617",
      badge: "",
      avatar: "DN",
    },
    {
      id: 8,
      name: "mihai",
      handle: "@mihai",
      score: "587",
      badge: "",
      avatar: "M",
    },
    {
      id: 9,
      name: "Hiroki Yogi",
      handle: "@yogi",
      score: "547",
      badge: "",
      avatar: "H",
    },
    {
      id: 10,
      name: "Md Anisul Haque",
      handle: "@mdanisulh",
      score: "510",
      badge: "",
      avatar: "MA",
    },
  ];

  // Data for highest post views
  const highestPostViews: UserRank[] = [
    {
      id: 1,
      name: "Anja Petry",
      handle: "@anjapcodes",
      score: "1M",
      badge: "🏆",
      avatar: "AP",
    },
    {
      id: 2,
      name: "Bobby Iliev",
      handle: "@bobbyiliev",
      score: "1M",
      badge: "🥈",
      avatar: "BI",
    },
    {
      id: 3,
      name: "Mouad Dadda",
      handle: "@mouad_dadda",
      score: "481.9K",
      badge: "🥉",
      avatar: "MD",
    },
    {
      id: 4,
      name: "Roberto Umbelino",
      handle: "@robertoumbelino",
      score: "471K",
      badge: "",
      avatar: "RU",
    },
    {
      id: 5,
      name: "Anmol Baranwal",
      handle: "@anmolbaranwal",
      score: "397.4K",
      badge: "",
      avatar: "AB",
    },
    {
      id: 6,
      name: "Denis Bolkovskis",
      handle: "@denisb",
      score: "375.8K",
      badge: "",
      avatar: "DB",
    },
    {
      id: 7,
      name: "raqib nur",
      handle: "@raqibnur",
      score: "247.8K",
      badge: "",
      avatar: "RN",
    },
    {
      id: 8,
      name: "Chris Bongers",
      handle: "@dailydevtips",
      score: "228.7K",
      badge: "",
      avatar: "CB",
    },
    {
      id: 9,
      name: "Giandomenico Di Salvatore",
      handle: "@gds87",
      score: "208.1K",
      badge: "",
      avatar: "G",
    },
    {
      id: 10,
      name: "Nimrod Kramer",
      handle: "@kramer",
      score: "193.5K",
      badge: "",
      avatar: "NK",
    },
  ];

  // Data for most upvoted
  const mostUpvoted: UserRank[] = [
    {
      id: 1,
      name: "Bobby Iliev",
      handle: "@bobbyiliev",
      score: "77.9K",
      badge: "🏆",
      avatar: "BI",
    },
    {
      id: 2,
      name: "Anja Petry",
      handle: "@anjapcodes",
      score: "47.9K",
      badge: "🥈",
      avatar: "AP",
    },
    {
      id: 3,
      name: "Mouad Dadda",
      handle: "@mouad_dadda",
      score: "38.8K",
      badge: "🥉",
      avatar: "MD",
    },
  ];

  // Data for most referrals
  const mostReferrals: UserRank[] = [
    {
      id: 1,
      name: "Daphna Giniger",
      handle: "@daphnaorna667",
      score: "505",
      badge: "🏆",
      avatar: "DG",
    },
    {
      id: 2,
      name: "Kunal Kushwaha",
      handle: "@kunal_kushwaha",
      score: "462",
      badge: "🥈",
      avatar: "K",
    },
    {
      id: 3,
      name: "Francesco Ciulla",
      handle: "@francescociulla",
      score: "322",
      badge: "🥉",
      avatar: "FC",
    },
  ];

  // Data for most reading days
  const mostReadingDays: UserRank[] = [
    {
      id: 1,
      name: "Ido Shamun",
      handle: "@idoshamun",
      score: "2.1K",
      badge: "🏆",
      avatar: "IS",
    },
    {
      id: 2,
      name: "Alain Paumen",
      handle: "@apaumen",
      score: "2.0K",
      badge: "🥈",
      avatar: "AP",
    },
    {
      id: 3,
      name: "Yeniv Mualem",
      handle: "@ymualem",
      score: "1.8K",
      badge: "🥉",
      avatar: "y",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold tracking-tight">Leaderboard</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Highest Reputation Card */}
        <Card className="bg-slate-950 text-card-foreground shadow-md rounded-lg">
          <CardHeader>
            <CardTitle>Highest reputation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {highestReputation.map((user) => (
                <div key={user.id} className="flex items-center gap-3">
                  <div className="w-16 text-muted-foreground text-sm">
                    {user.score}
                  </div>
                  <div className="w-6 text-muted-foreground">{user.badge}</div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-700 overflow-hidden">
                    {user.avatar}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">{user.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {user.handle}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Longest Streak Card */}
        <Card className="bg-slate-950 text-card-foreground shadow-md    rounded-lg">
          <CardHeader>
            <CardTitle>Longest streak</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {longestStreak.map((user) => (
                <div key={user.id} className="flex items-center gap-3">
                  <div className="w-16 text-muted-foreground text-sm">
                    {user.score}
                  </div>
                  <div className="w-6 text-muted-foreground">{user.badge}</div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-700 overflow-hidden">
                    {user.avatar}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">{user.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {user.handle}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Highest Post Views Card */}
        <Card className="bg-slate-950 text-card-foreground shadow-md rounded-lg">
          <CardHeader>
            <CardTitle>Highest post views</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {highestPostViews.map((user) => (
                <div key={user.id} className="flex items-center gap-3">
                  <div className="w-16 text-muted-foreground text-sm">
                    {user.score}
                  </div>
                  <div className="w-6 text-muted-foreground">{user.badge}</div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-700 overflow-hidden">
                    {user.avatar}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">{user.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {user.handle}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Most Upvoted Card */}
        <Card className="bg-slate-950 text-card-foreground shadow-md rounded-lg">
          <CardHeader>
            <CardTitle>Most upvoted</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mostUpvoted.map((user) => (
                <div key={user.id} className="flex items-center gap-3">
                  <div className="w-16 text-muted-foreground text-sm">
                    {user.score}
                  </div>
                  <div className="w-6 text-muted-foreground">{user.badge}</div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-700 overflow-hidden">
                    {user.avatar}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">{user.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {user.handle}
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
