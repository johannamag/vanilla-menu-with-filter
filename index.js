const menu = [
  {
    id: 1,
    title: "Menu Item One",
    price: 15,
    img: "./media/menu1pexels-na-urchin-2377173.jpg",
    desc:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
  },
  {
    id: 2,
    title: "Menu Item Two",
    price: 12,
    img: "./media/menu2pexels-susanne-jutzeler-1132558.jpg",
    desc:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
  },
  {
    id: 3,
    title: "Menu Item Three",
    price: 27,
    img: "./media/menu3pexels-brigitte-tohm-239581.jpg",
    desc:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
  },
  {
    id: 4,
    title: "Menu Item Four",
    price: 22,
    img: "./media/menu4pexels-suzy-hazelwood-1126359.jpg",
    desc:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
  },
  {
    id: 5,
    title: "Menu Item Five",
    price: 19,
    img: "./media/menu5pexels-ella-olsson-1640772.jpg",
    desc:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
  },
  {
    id: 6,
    title: "Menu Item Six",
    price: 56,
    img: "./media/menu6pexels-eneida-nieves-905847.jpg",
    desc:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
  },
  {
    id: 7,
    title: "Menu Item Seven",
    price: 83,
    img: "./media/menu7pexels-malidate-van-769289.jpg",
    desc:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
  },
  {
    id: 8,
    title: "Menu Item Eight",
    price: 17,
    img: "./media/menu8pexels-lisa-fotios-1279330.jpg",
    desc:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
  },
  {
    id: 9,
    title: "Menu Item Nine",
    price: 19,
    img: "./media/menu9pexels-foodie-factor-566566.jpg",
    desc:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
  },
  {
    id: 10,
    title: "Menu Item Ten",
    price: 32,
    img: "./media/menu10pexels-cheryl-wee-2262182.jpg",
    desc:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
  },
];

const center = document.querySelector(".section-center");

window.addEventListener("DOMContentLoaded", function () {
  let displayItem = menu.map(function (item) {
    return `<article class="menu-item">
          <img
            class="photo"
            src=${item.img}
            alt=${item.title}
          />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">€${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayItem = displayItem.join("");
  center.innerHTML = displayItem;
});
