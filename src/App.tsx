import { useState } from 'react';

interface Hero {
   name: string;
   aka: string;
}

const App = () => {
   const [heroList, setHeroList] = useState([
      {
         name: 'Peter Parker',
         aka: 'spiderman',
      },
      {
         name: 'Peter Parker',
         aka: 'spiderman',
      },
   ] as Hero[]);

   return (
      <>
         <h1 style={{ textAlign: 'center' }}>Lista de heróis</h1>
         <div
            style={{
               display: 'flex',
               flexDirection: 'column',
               margin: '0 auto',
               maxWidth: '300px',
               fontFamily: 'Arial',
            }}
         >
            <div
               style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  justifyItems: 'center',
                  padding: '7px 0',
                  border: '1px solid #e91',
               }}
            >
               <b>Name</b>
               <b>A.K.A.</b>
            </div>
            <div
               style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  flexDirection: 'column',
               }}
            >
               {heroList.map((hero: Hero, index: number) => (
                  <div
                     style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        flexDirection: 'row',
                        backgroundColor: index % 2 === 0 ? '#e91' : 'white',
                        border: '1px solid #e91',
                        padding: '7px 0',
                     }}
                  >
                     <span>{hero.name}</span>
                     <span>{hero.aka}</span>
                  </div>
               ))}
            </div>
         </div>
      </>
   );
};

export default App;
