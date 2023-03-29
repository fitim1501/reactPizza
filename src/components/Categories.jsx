import React from 'react';

function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const categories = ['Все','Мясные','Вегетарианская','Гриль','Острые','Закрытые'];
  const onClickCategories = (ind) => {
    setActiveIndex(ind);
  };
  console.log(activeIndex);
  return (
    <div className="categories">
      <ul>
        {
          categories.map((value, i) =>
            <li onClick={()=> onClickCategories(i)} className={activeIndex === i? "active": ''}>
              {value}
              </li>
          )
        }
      </ul>
    </div>
  );
}

export default Categories;