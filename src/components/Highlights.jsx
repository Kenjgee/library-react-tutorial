import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Highlight from './UI/Highlight';
import React from 'react'

const Highlights = () => {
  return (
    <section id="highlights">
      <div class="container">
        <div class="row">
          <h2 class="section__title">
            Why choose <span class="purple">Library</span>
          </h2>
          <div class="highlight__wrapper">
            <Highlight icon={<FontAwesomeIcon icon="bolt" />}
            title="Easy and Quick"
            para="Get access to the book you purchased online instantly." />
            <Highlight icon={<FontAwesomeIcon icon="book-open" />}
            title="10,000+ Books"
            para="Library has a wide range of books from different genres and authors." />
            <Highlight icon={<FontAwesomeIcon icon="tags" />}
            title="Affordable"
            para="Get your favorite books at the best price in the market." />          
            
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Highlights