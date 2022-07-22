import { useEffect } from 'react';

import Stats from '../../components/Widgets/Stats';
import Profile from '../../components/Widgets/Profile';
import Invoices from '../../components/Widgets/Invoices';
import Config from '../../components/Widgets/Config';

export default function Home() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  return (
    <section className="w-full flex flex-col mt-6 gap-6 h-full">
      <div className="flex gap-4 flex-col-reverse lg:flex-row">
        <Stats />
        <Profile />
      </div>
      
      <div className="flex gap-6 flex-col lg:flex-row">
        <Invoices />
        <Config />
      </div>
  </section>
  )
}