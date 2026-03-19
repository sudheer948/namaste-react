export const generateMockMenu = (resId) => {
  return {
    restaurantId: resId,
    name: "Restaurant " + resId,
    categories: [
      {
        title: "Recommended",
        items: [
          {
            id: resId + "-1",
            name: "Special Dish " + resId,
            price: 200,
          },
          {
            id: resId + "-2",
            name: "Popular Item " + resId,
            price: 150,
          },
        ],
      },
      {
        title: "Main Course",
        items: [
          {
            id: resId + "-3",
            name: "Main Dish " + resId,
            price: 300,
          },
        ],
      },
    ],
  };
};