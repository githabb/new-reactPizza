import React from 'react';

function Categories({ value }) {
  console.log(value);
  const [activeIndex, setActiveIndex] = React.useState(0);

  const categories = [
    'Усе',
    'М"ясні',
    'Вегетаріанська',
    'Гриль',
    'Гострі',
    'Закриті',
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((value, i) => (
          <li
            key={i}
            onClick={() => setActiveIndex(i)}
            className={activeIndex === i ? 'active' : ''}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
