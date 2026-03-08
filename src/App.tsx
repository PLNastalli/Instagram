/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Sidebar from "./components/Sidebar";
import MobileNav from "./components/MobileNav";
import TopNav from "./components/TopNav";
import ProfileHeader from "./components/ProfileHeader";
import Highlights from "./components/Highlights";
import PostGrid from "./components/PostGrid";
import HomeFeed from "./components/HomeFeed";
import Search from "./components/Search";
import Explore from "./components/Explore";
import Messages from "./components/Messages";
import Notifications from "./components/Notifications";
import Create from "./components/Create";

export default function App() {
  const [activeTab, setActiveTab] = useState("profile");

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <>
            <ProfileHeader />
            <Highlights />
            <PostGrid />
          </>
        );
      case "home":
        return <HomeFeed />;
      case "search":
        return <Search />;
      case "explore":
        return <Explore />;
      case "messages":
        return <Messages />;
      case "notifications":
        return <Notifications />;
      case "create":
        return <Create />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-black min-h-screen font-sans text-white">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <TopNav />

      {/* Main Content Area */}
      <main className="md:ml-64 pt-14 md:pt-8 pb-16 md:pb-8 px-0 md:px-8 max-w-5xl mx-auto">
        {renderContent()}
      </main>

      <MobileNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
