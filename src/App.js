import React from 'react';
import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';

function App() {
  return (
    <div class="wrapper">
      <div className="block1">
        <ul className="text2">
          <li className="hello3">TEST INFOdfd</li>
          <li className="hello3">TEST INFOdfd</li>
          <li className="hello3">TEST INFOdf</li>
          <li className="hello3">TEST INFOdfd</li>
          <li className="hello3">TEST INFO3</li>
          <li className="hello3">TEST INFOdd</li>
        </ul>
      </div>
      <Header />
      <div class="content">
        <div class="container">
          <div class="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 class="content__title">Все пиццы</h2>
          <div class="content__items">
            <PizzaBlock title="Мексиканская" price={500} />
            <PizzaBlock title="Pepperoni" price={800} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
