import { useEffect, useRef } from 'react';
import { ForumSidebar } from '@/components/ForumSidebar';
import { ForumHeader } from '@/components/ForumHeader';
import { ForumFeed } from '@/components/ForumFeed';
import { ForumProvider, useForum } from '@/hooks/useForum';

const CommunityForum = () => {

  const { darkMode } = useForum();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);


  return (
    <div className="min-h-screen bg-background flex">
      <ForumSidebar />

      <div className="flex-1 flex flex-col">
        <ForumHeader />

        <main className="flex-1 p-6 max-w-4xl mx-auto w-full">
          <ForumFeed />
        </main>
      </div>


    </div>
  );
}

export default function ForumPage() {
  return (
    <ForumProvider>
      <CommunityForum />
    </ForumProvider>
  );
}