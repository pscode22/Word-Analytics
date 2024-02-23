import Main from './Main';
import Footer from './Footer';
import Header from './Header';
import { useState } from 'react';
import { TStats } from '@/types';
import Textarea from './Textarea';
import Stats from './Stats';

function App() {
  const [stats, setStats] = useState<TStats>({
    numberOfWords: 0,
    numberOfCharacters: 0,
    instagramCharactersLeft: 280,
    facebookCharactersLeft: 2200,
  });

  return (
    <>
      <Header />
      <Main>
        <Textarea setStats={setStats} />
        <Stats stats={stats} />
      </Main>
      <Footer />
    </>
  );
}

export default App;
