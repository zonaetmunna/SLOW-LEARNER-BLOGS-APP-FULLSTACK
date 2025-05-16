import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

// This component will handle navigation and dynamic categories
export default function DynamicHeader() {
  // Categories for navigation
  const categories = [
    { id: "discover", name: "Discover", isActive: true },
    { id: "featured", name: "Featured", isActive: false },
    { id: "languages", name: "Languages", isActive: false },
    { id: "web", name: "Web", isActive: false },
    { id: "mobile", name: "Mobile", isActive: false },
    { id: "devops", name: "DevOps & Cloud", isActive: false },
    { id: "ai", name: "AI", isActive: false },
    { id: "games", name: "Games", isActive: false },
    { id: "devtools", name: "DevTools", isActive: false },
    { id: "career", name: "Career", isActive: false },
    { id: "opensource", name: "Open Source", isActive: false },
    { id: "devrel", name: "DevRel", isActive: false },
    { id: "fun", name: "Fun", isActive: false },
  ];

  // Featured squads data
  const featuredSquads = [
    {
      id: "nodejs",
      name: "Node.js developers",
      username: "nodejsdevelopers",
      description:
        "News, updates, and discussions about everything happening in and around the Node.js runtime.",
      logo: "/api/placeholder/80/80",
      members: [
        { avatar: "/api/placeholder/30/30" },
        { avatar: "/api/placeholder/30/30" },
        { avatar: "/api/placeholder/30/30" },
      ],
      memberCount: "30.6K",
      buttonText: "View Squad",
      joined: false,
      bgColor: "from-green-500 to-green-600",
    },
    {
      id: "java",
      name: "Just Java",
      username: "justjava",
      description:
        "All Java. All the time. Newcomers to veterans, all are welcome to post and comment about anything Java related. Love it, hate it - all topics are safe here.",
      logo: "/api/placeholder/80/80",
      members: [
        { avatar: "/api/placeholder/30/30" },
        { avatar: "/api/placeholder/30/30" },
        { avatar: "/api/placeholder/30/30" },
      ],
      memberCount: "6.7K",
      buttonText: "Join Squad",
      joined: false,
      bgColor: "from-blue-500 to-blue-600",
    },
    {
      id: "laravel",
      name: "Laravel Dev",
      username: "laraveldev",
      description:
        "Welcome to Laravel Dev! It's a cozy corner for all things Laravel. Share, learn, and explore the Laravel universe. Upvote or downvote, after reading, it's essential",
      logo: "/api/placeholder/80/80",
      members: [
        { avatar: "/api/placeholder/30/30" },
        { avatar: "/api/placeholder/30/30" },
        { avatar: "/api/placeholder/30/30" },
      ],
      memberCount: "2.3K",
      buttonText: "Join Squad",
      joined: false,
      bgColor: "from-red-500 to-orange-500",
    },
    {
      id: "devops",
      name: "DevOps",
      username: "joindevops",
      description:
        "The official daily.dev DevOps community. Led by thought leaders and DevOps experts. Join the Squad!",
      logo: "/api/placeholder/80/80",
      members: [
        { avatar: "/api/placeholder/30/30" },
        { avatar: "/api/placeholder/30/30" },
        { avatar: "/api/placeholder/30/30" },
      ],
      memberCount: "5.8K",
      buttonText: "View Squad",
      joined: false,
      bgColor: "from-blue-400 to-cyan-400",
    },
    {
      id: "nextus",
      name: "NextJS",
      username: "nextjs",
      description: "An independent Squad for Next.js questions and answers.",
      logo: "/api/placeholder/80/80",
      members: [
        { avatar: "/api/placeholder/30/30" },
        { avatar: "/api/placeholder/30/30" },
      ],
      memberCount: "4.2K",
      buttonText: "View Squad",
      joined: false,
      bgColor: "from-gray-800 to-gray-900",
    },
  ];

  // Language squads data
  const languageSquads = [
    {
      id: "nodejs-lang",
      name: "Node.js developers",
      username: "@nodejsdevelopers",
      description:
        "News, updates, and discussions about everything happening in and around the Node.js runtime.",
      logo: "/api/placeholder/60/60",
      memberCount: "30.6K members",
      buttonText: "View Squad",
      joined: false,
    },
    {
      id: "php-dev",
      name: "PHP Dev",
      username: "@phpdev",
      description:
        "Welcome to PHP Dev, a dedicated space for sharing knowledge about PHP and its ecosystem.",
      logo: "/api/placeholder/60/60",
      memberCount: "17.2K members",
      buttonText: "Join Squad",
      joined: false,
    },
    {
      id: "python",
      name: "Learn Python",
      username: "@lpython",
      description:
        "Welcome to Learn Python Community, created by Sophia Iroegbu, a Python enthusiast.",
      logo: "/api/placeholder/60/60",
      memberCount: "15.3K members",
      buttonText: "Join Squad",
      joined: false,
    },
    {
      id: "rust",
      name: "Rust Developers",
      username: "@rustdevs",
      description:
        "Welcome to the Rust Developers Community, founded by Francesco Ciulla.",
      logo: "/api/placeholder/60/60",
      memberCount: "10.0K members",
      buttonText: "Join Squad",
      joined: false,
    },
    {
      id: "angular",
      name: "Angular",
      username: "@angulardev",
      description: "A place to find, read, and share angular content.",
      logo: "/api/placeholder/60/60",
      memberCount: "8.3K members",
      buttonText: "Join Squad",
      joined: false,
    },
  ];

  const webSquads = [
    // Similar structure to language squads but with web-related content
    // For brevity, I'm just adding a placeholder - you can expand this with real data
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-slate-900 text-white">
      {/* Navigation Header */}
      <header className="border-b border-gray-800 bg-opacity-50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-screen-2xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <nav className="flex space-x-4 overflow-x-auto hide-scrollbar py-2">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/${category.id}`}
                  className={`whitespace-nowrap px-2 py-1 text-sm font-medium ${
                    category.isActive
                      ? "border-b-2 border-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {category.name}
                </Link>
              ))}
            </nav>
            <Button className="bg-transparent hover:bg-white hover:bg-opacity-10 border border-gray-300 rounded-full px-4">
              New Squad
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-screen-2xl mx-auto px-4 py-6">
        {/* Featured Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 5H19V19H5V5Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 12H19"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M12 5V19"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <h2 className="text-2xl font-bold">Featured</h2>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" className="h-8 w-8 p-0 rounded-full">
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button variant="ghost" className="h-8 w-8 p-0 rounded-full">
                <ChevronRight className="h-5 w-5" />
              </Button>
              <Link href="/featured" className="text-sm">
                See all
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {featuredSquads.map((squad) => (
              <FeaturedSquadCard key={squad.id} squad={squad} />
            ))}
          </div>
        </section>

        {/* Languages Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Languages</h2>
            <div className="flex items-center gap-2">
              <Button variant="ghost" className="h-8 w-8 p-0 rounded-full">
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button variant="ghost" className="h-8 w-8 p-0 rounded-full">
                <ChevronRight className="h-5 w-5" />
              </Button>
              <Link href="/languages" className="text-sm">
                See all
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {languageSquads.map((squad) => (
              <LanguageSquadCard key={squad.id} squad={squad} />
            ))}
          </div>
        </section>

        {/* Web Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Web</h2>
            <div className="flex items-center gap-2">
              <Button variant="ghost" className="h-8 w-8 p-0 rounded-full">
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button variant="ghost" className="h-8 w-8 p-0 rounded-full">
                <ChevronRight className="h-5 w-5" />
              </Button>
              <Link href="/web" className="text-sm">
                See all
              </Link>
            </div>
          </div>

          {/* Web squads would go here - similar to the languages section */}
          <div className="h-24 flex items-center justify-center text-gray-400 border border-dashed border-gray-700 rounded-lg">
            Web squads would be displayed here using a similar card layout
          </div>
        </section>
      </main>
    </div>
  );
}

// Card component for featured squads
function FeaturedSquadCard({ squad }) {
  return (
    <div className="bg-slate-800 rounded-xl overflow-hidden flex flex-col h-full border border-slate-700">
      <div className={`h-16 bg-gradient-to-r ${squad.bgColor}`}></div>
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex gap-3 items-center mb-3">
          <Avatar className="h-12 w-12 rounded-full bg-white border-4 border-slate-800 -mt-10">
            <img src={squad.logo} alt={squad.name} />
          </Avatar>
          <div>
            <h3 className="font-semibold">{squad.name}</h3>
            <p className="text-sm text-gray-400">{squad.username}</p>
          </div>
        </div>

        <p className="text-sm text-gray-300 mb-4 flex-grow">
          {squad.description}
        </p>

        <div className="mt-auto">
          <div className="flex items-center justify-between mb-3">
            <div className="flex -space-x-2">
              {squad.members.map((member, idx) => (
                <Avatar
                  key={idx}
                  className="h-6 w-6 rounded-full border border-slate-800"
                >
                  <img src={member.avatar} alt="Member" />
                </Avatar>
              ))}
              <span className="ml-2 text-sm text-gray-400">
                {squad.memberCount}
              </span>
            </div>
          </div>

          <Button
            className={`w-full ${
              squad.buttonText.includes("Join")
                ? "bg-white text-black hover:bg-gray-200"
                : "bg-slate-700 hover:bg-slate-600"
            }`}
          >
            {squad.buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
}

// Card component for language squads
function LanguageSquadCard({ squad }) {
  return (
    <div className="bg-slate-800 rounded-xl p-4 flex flex-col h-full border border-slate-700">
      <div className="flex gap-4 items-center">
        <Avatar className="h-12 w-12 rounded-full bg-white">
          <img src={squad.logo} alt={squad.name} />
        </Avatar>
        <div>
          <h3 className="font-semibold">{squad.name}</h3>
          <p className="text-xs text-gray-400">{squad.memberCount}</p>
        </div>
      </div>

      <Button
        className={`mt-4 ${
          squad.buttonText.includes("Join")
            ? "bg-white text-black hover:bg-gray-200"
            : "bg-slate-700 hover:bg-slate-600"
        }`}
      >
        {squad.buttonText}
      </Button>
    </div>
  );
}

// Add CSS to hide scrollbar but keep functionality
const styles = `
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
`;

// This would typically be included in your global CSS
