import Stats from '../Widgets/Stats';
import Profile from '../Widgets/Profile';
import Invoices from '../Widgets/Invoices';
import Config from '../Widgets/Config';

import Footer from '../Footer';

import "./styles.css";
import Header from '../Header';


function App() {
  return (
    <>
        <main>
          <Header />
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
        </main>
      <Footer />
    </>
  );
}

export default App;
