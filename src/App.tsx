import { useState, useEffect } from 'react';
import axios from 'axios';

interface Hero {
   name: string;
   aka: string;
}

const App = () => {
   const [heroList, setHeroList] = useState([
      { name: 'Peter Parker', aka: 'Spiderman' },
   ] as Hero[]);
   const [isLoading, setLoading] = useState(true);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await axios.get(import.meta.env.VITE_API_URL);
            if (response.data) setHeroList(response.data as Hero[]);
         } catch (error) {
            console.error(error);
         } finally {
            setLoading(false);
         }
      };

      fetchData();
   }, []);

   return (
      <>
         <h1 style={{ textAlign: 'center' }}>Lista de heróis</h1>
         <div
            style={{
               display: 'flex',
               flexDirection: 'column',
               margin: '0 auto',
               maxWidth: '400px',
               fontFamily: 'Arial',
            }}
         >
            {isLoading && (
               <h3
                  style={{
                     display: 'flex',
                     justifyContent: 'space-around',
                     justifyItems: 'center',
                     padding: '7px 0',
                     border: '1px solid #e91',
                  }}
               >
                  Loading...
               </h3>
            )}
            {!isLoading && (
               <>
                  <div
                     style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        justifyItems: 'center',
                        padding: '7px 0',
                        border: '1px solid #e91',
                     }}
                  >
                     <b>Index</b>
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
                              backgroundColor:
                                 index % 2 === 0 ? '#e91' : 'white',
                              border: '1px solid #e91',
                              padding: '7px 0',
                              textAlign: 'center',
                           }}
                        >
                           <span
                              style={{
                                 width: '20%',
                              }}
                           >
                              {index}
                           </span>
                           <span
                              style={{
                                 width: '40%',
                              }}
                           >
                              {hero.name}
                           </span>
                           <span
                              style={{
                                 width: '40%',
                              }}
                           >
                              {hero.aka}
                           </span>
                        </div>
                     ))}
                  </div>
               </>
            )}
         </div>
      </>
   );
};

export default App;
