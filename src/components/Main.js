import React, { useContext, useState } from 'react';
import { MainContext } from '../MainContext';
import { GrNext } from 'react-icons/gr';
import { GrPrevious } from 'react-icons/gr';

const Main = () => {
  const { gifs, isLoading, query, error } = useContext(MainContext);
  const [index, setIndex] = useState(0);

  const number = (currentIndex) => {
    if (currentIndex > gifs.length - 1) {
      return 0;
    }
    if (currentIndex < 0) {
      return gifs.length - 1;
    }
    return currentIndex;
  };

  const nextBtn = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return number(newIndex);
    });
  };
  const prevBtn = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return number(newIndex);
    });
  };

  return (
    <div>
      {error && <h1>ERROR!</h1>}
      {isLoading ? (
        <h1>LOADING...</h1>
      ) : (
        <>
          <main className="gif-main">
            <p>SEARCH RESULTS FOR '{query}'</p>
            <h1 className="tredning">Trending GIFs</h1>
            <div className="underline"></div>
            <div className="gifs">
              <button className="btn2" onClick={prevBtn}>
                <GrPrevious className="icon2" />
              </button>
              <img
                src={gifs[index].images.original.url}
                alt="gifs"
                className="gif-img"
              />
              <button className="btn2" onClick={nextBtn}>
                <GrNext className="icon2" />
              </button>
            </div>
            <h1 className="gif-title">{gifs[index].title}</h1>
          </main>
        </>
      )}
    </div>
  );
};

export default Main;
