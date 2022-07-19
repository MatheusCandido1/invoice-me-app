import Stats from '../Widgets/Stats';
import Profile from '../Widgets/Profile';
import Invoices from '../Widgets/Invoices';
import Config from '../Widgets/Config';

import "./styles.css";


function App() {

  return (
    <main>
      <section className="w-full flex gap-8">
        <Stats />
        <Profile />
      </section>

      <section className="w-full flex mt-8 gap-8 ">
        <Invoices />
        <Config />
      </section>
    </main>
  );
}

export default App;
