import React from 'react';

import MenuItems from './MenuItems';
import ReviewItems from './ReviewItems';

export default function RestaurantDetail({ restaurant }) {
  const {
    name, address, menuItems, reviews,
  } = restaurant;

  return (
    <>
      <div>
        <h2>{name}</h2>
        <p>
          주소:
          {' '}
          {address}
        </p>
        <h3>메뉴</h3>
        <MenuItems menuItems={menuItems} />
      </div>
      <div>
        <h3>리뷰 작성</h3>
      </div>
      <div>
        <h3>리뷰 목록</h3>
        <ReviewItems reviewItems={reviews} />
      </div>
    </>
  );
}
