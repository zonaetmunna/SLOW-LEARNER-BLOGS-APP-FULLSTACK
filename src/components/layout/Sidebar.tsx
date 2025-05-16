import {
  Bookmark,
  History,
  Link,
  List,
  MessageSquare,
  User,
  Users,
} from "lucide-react";
import CustomLink from "../ui/CustomLink";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-100 text-gray-700  border-r border-gray-200 fixed top-16">
      {/* My Feed */}
      <div className="p-4 border-b border-gray-300">
        <ul>
          <CustomLink
            href="/dashboard"
            className="flex items-center mb-4 hover:bg-gray-200 p-2 rounded-lg transition ease-in-out duration-200"
          >
            <User className="h-6 w-6 mr-4 text-gray-600" />
            <span className="text-gray-800">My feed</span>
          </CustomLink>
          <li className="flex items-center hover:bg-gray-200 p-2 rounded-lg transition ease-in-out duration-200">
            <List className="h-6 w-6 mr-4 text-gray-600" />
            <span>Custom feed</span>
          </li>
          <CustomLink
            href="/dashboard"
            className="flex items-center mb-4 hover:bg-gray-200 p-2 rounded-lg transition ease-in-out duration-200"
          >
            <Users className="h-6 w-6 mr-4 text-gray-600" />
            <span className="text-gray-800">My Blog</span>
          </CustomLink>
        </ul>
      </div>

      {/* Squads */}
      <div className="p-4 border-b border-gray-300">
        <p className="uppercase text-sm font-semibold text-gray-500 mb-3">
          Squads
        </p>
        <ul>
          <li className="flex items-center hover:bg-gray-200 p-2 rounded-lg transition ease-in-out duration-200">
            <Users className="h-6 w-6 mr-4 text-gray-600" />
            <span>Public Squads</span>
          </li>
          <li className="flex items-center hover:bg-gray-200 p-2 rounded-lg transition ease-in-out duration-200">
            <Bookmark className="h-6 w-6 mr-4 text-gray-600" />
            <span>New Squad</span>
          </li>
        </ul>
      </div>

      {/* Discover */}
      <div className="p-4 border-b border-gray-300">
        <p className="uppercase text-sm font-semibold text-gray-500 mb-3">
          Discover
        </p>
        <ul>
          <li className="flex items-center hover:bg-gray-200 p-2 rounded-lg transition ease-in-out duration-200">
            <Link className="h-6 w-6 mr-4 text-gray-600" />
            <span>Explore</span>
          </li>
          <li className="flex items-center hover:bg-gray-200 p-2 rounded-lg transition ease-in-out duration-200">
            <MessageSquare className="h-6 w-6 mr-4 text-gray-600" />
            <span>Discussions</span>
          </li>
          <li className="flex items-center hover:bg-gray-200 p-2 rounded-lg transition ease-in-out duration-200">
            <Bookmark className="h-6 w-6 mr-4 text-gray-600" />
            <span>Tags</span>
          </li>
          <li className="flex items-center hover:bg-gray-200 p-2 rounded-lg transition ease-in-out duration-200">
            <List className="h-6 w-6 mr-4 text-gray-600" />
            <span>Leaderboard</span>
          </li>
        </ul>
      </div>

      {/* Activity */}
      <div className="p-4">
        <p className="uppercase text-sm font-semibold text-gray-500 mb-3">
          Activity
        </p>
        <ul>
          <li className="flex items-center hover:bg-gray-200 p-2 rounded-lg transition ease-in-out duration-200">
            <Link className="h-6 w-6 mr-4 text-gray-600" />
            <span>Submit a link</span>
          </li>
          <li className="flex items-center hover:bg-gray-200 p-2 rounded-lg transition ease-in-out duration-200">
            <Bookmark className="h-6 w-6 mr-4 text-gray-600" />
            <span>Bookmarks</span>
          </li>
          <li className="flex items-center hover:bg-gray-200 p-2 rounded-lg transition ease-in-out duration-200">
            <History className="h-6 w-6 mr-4 text-gray-600" />
            <span>History</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
