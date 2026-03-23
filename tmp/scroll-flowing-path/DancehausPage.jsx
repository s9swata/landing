import React from 'react';
import SquiggleAnimation from './SquiggleAnimation';
import './DancehausPage.css';

const DancehausPage = () => {
  return (
    <div className="dancehaus-page">
      <header>
        <h1>Dancehaus</h1>
      </header>

      <section>
        <figure className="pos1">
          <img src="photo1.jpg" alt="Dance photo 1" />
        </figure>

        <figure className="pos2">
          <img src="photo2.jpg" alt="Dance photo 2" />
        </figure>

        <figure className="pos3">
          <img src="photo3.jpg" alt="Dance photo 3" />
        </figure>

        <figure className="pos4">
          <img src="photo4.jpg" alt="Dance photo 4" />
        </figure>

        <figure className="pos5">
          <img src="photo5.jpg" alt="Dance photo 5" />
        </figure>
      </section>

      <footer>
        <nav>
          <a href="#">About</a>
          <a href="#">Join</a>
          <a href="#">Contact</a>
        </nav>

        <nav>
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
          <a href="#">TikTok</a>
        </nav>
      </footer>

      <SquiggleAnimation />
    </div>
  );
};

export default DancehausPage;
