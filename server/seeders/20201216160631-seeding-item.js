'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Items', [{
        name: "Tas Wanita",
        img: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//89/MTA-8951000/no_brand_claver-id_tas_wanita_-wt7120-_-_tas_selempang_perempuan_-_tas_cewek_full09_slsml7gf.jpg",
        price: 200000,
        stock: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Jaket",
        img: "https://id-test-11.slatic.net/p/3a18b222c6f2a888bb4da3d3ff830192.jpg",
        price: 100000,
        stock: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Tas Ransel",
        img: "https://ecs7.tokopedia.net/img/cache/700/product-1/2018/12/5/7737087/7737087_fca970bf-eb2a-41d2-bf0c-163c953b8d58_700_700.jpg",
        price: 150000,
        stock: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Selimut",
        img: "https://ecs7.tokopedia.net/img/cache/700/product-1/2020/3/18/8033203/8033203_cff94698-e66d-41c8-8237-25308261a26c_800_800.jpg",
        price: 75000,
        stock: 50,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Kaos hitam",
        img: "https://ecs7.tokopedia.net/img/cache/700/product-1/2018/12/27/2065521/2065521_c2efb578-baf0-4c19-afea-7c39ebb54f03_554_554.jpg",
        price: 50000,
        stock: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Items', null, {});
  }
};