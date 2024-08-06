import { NavLink } from 'react-router-dom';
import WhiteButton from '../../../Components/Buttons/WhiteButton';
import TriangleDiv from '../../../Components/TriangleDiv';
import MovieCard from '../../Cards/MovieCard/MovieCard';
import ScriptUploadFile from '../../Scripts/ScriptUploadFile';
import addBag from '../../../assets/addBag.svg';
import coin from '../../../assets/coin.svg';
import { useState } from 'react';
const BagPopup = () => {
  // const MovieCardArray = [
  //   'movie',
  //   'movie',
  //   'movie',
  // ]; // replace data later
  const [showScriptUpload, setScriptUpload] = useState(false);

  const handleShowScriptUpload = () => {
    setScriptUpload(!showScriptUpload);
  };
  return (
    <article className='bag'>
      <section className='bag__top'>
        <h1 className='bag__top-title'>Your bag</h1>

        <div className='bag__top-points'>
          <h2 className=''>1098</h2>
          <img src={coin} alt={coin} />
          <WhiteButton
            text='Buy more'
            type='button'
            className='button--buy-more flex items-center justify-center'
          />
        </div>
      </section>

      <section className='bag__scripts'>
        <div className='bag__scripts-top'>
          <h1 className='bag__scripts-title'>Your scripts</h1>
          <button className='' onClick={handleShowScriptUpload}>
            <img src={addBag} alt={addBag} />
          </button>
        </div>

        <div className='bag__scripts-movies'>
          <NavLink to={'/script'}>
            <MovieCard title='Movie' description='A New Life' />
          </NavLink>

          <MovieCard title='Movie' description='A New Life' />

          <MovieCard title='Movie' description='A New Life' />
        </div>
      </section>

      <section className='bag__bottom'>
        <h1 className='bag__bottom-title'>Your Bookmarked scripts</h1>

        <p className='bag__bottom-description'>
          You don’t have any scripts bookmarked yet, go to the board on the
          Scriptwriter Building to read some.
        </p>
      </section>

      <TriangleDiv></TriangleDiv>

      {showScriptUpload && <ScriptUploadFile />}
    </article>
  );
};

export default BagPopup;
