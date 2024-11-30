import React from 'react';
import './index.css'; // CSS for styling

const Categories = () => {
  const categoryOptions = [
    { categoryId: 'speaker', name: 'Speaker', image: 'https://res.cloudinary.com/dagkvnqd9/image/upload/v1729886054/OIP-removebg-preview_dmv38b.png' },
    { categoryId: 'headphones', name: 'Headphones', image: 'https://th.bing.com/th/id/R.1341ea15bdd051f95c556dad81144e53?rik=L6P9hbw93jno7w&riu=http%3a%2f%2fwww.bhphotovideo.com%2fimages%2fimages2500x2500%2fbeats_by_dr_dre_900_00183_01_studio_wireless_over_ear_headphone_1037578.jpg&ehk=Gvcvd4F3e5KImn%2bDtTXuzfLaCL5syVO0QX596b8x35M%3d&risl=&pid=ImgRaw&r=0' }, // Replace with actual image URLs
    //{ categoryId: 'mix products', name: 'Mix Products', image: 'https://cdn.corporatefinanceinstitute.com/assets/product-mix3.jpeg' },
    { categoryId: 'airpods case', name: 'Airpods Case', image: 'https://i5.walmartimages.com/asr/0c73a67a-e7d0-4f44-a13f-10559288ad81.54fb537aa03177d0f47ee6bfca713274.jpeg' },
    { categoryId: 'smart watch', name: 'Smart Watch', image: 'https://i5.walmartimages.com/asr/a5fea207-96d5-4874-95ee-d618b73506d3.075f2d5466eaba28d0fe4107cc5f7e07.jpeg' },
    { categoryId: 'smart watch charge', name: 'Smart Watch Charge', image: 'https://images-na.ssl-images-amazon.com/images/I/51%2BpdhygVuS._SL1188_.jpg' },
    { categoryId: 'memory card & pand', name: 'Memory Card & Pand', image: 'https://5.imimg.com/data5/SELLER/Default/2022/8/ZA/AS/MJ/154922294/1-500x500.jpg' },
    { categoryId: 'power bank', name: 'Power Bank', image: 'https://gamingnation.in/wp-content/uploads/2020/07/BatPower-ProE-2-ES7B-Portable-Charger-1536x1536.jpg' },
    { categoryId: 'mobile stand', name: 'Mobile Stand', image: 'https://images-na.ssl-images-amazon.com/images/I/61If5TV5RAL._SL1500_.jpg' },
    { categoryId: 'computer products', name: 'Computer Products', image: 'https://th.bing.com/th/id/OIP.7q-7DZZhHaBqJjRfzPMi5gHaFE?rs=1&pid=ImgDetMain' },
    { categoryId: 'Mobile Charger', name: 'Mobile Charger', image: 'https://www.androidheadlines.com/wp-content/uploads/2020/09/71cSyHWdGL._SL1500_.jpg' },
    { categoryId: 'car charger', name: 'Car Charger', image: 'https://www.easygetproduct.com/wp-content/uploads/2020/11/8.-ChargePoint-Flex-Electric-Vehicle-Chargers.jpg' },
    { categoryId: 'charging cable', name: 'Charging Cable', image: 'https://i5.walmartimages.com/asr/e046ff56-80ba-4825-aea2-4650d8af84a0.99df981768abf2f5e1f698a5a0bd1e4a.jpeg' },
    { categoryId: 'mobile battery', name: 'Mobile Battery', image: 'https://th.bing.com/th/id/OIP.pIkB52X8hP_kkrTb7CjfvwHaFj?rs=1&pid=ImgDetMain' },
    { categoryId: 'connector pin', name: 'Connector Pin', image: 'https://th.bing.com/th/id/OIP.IeYp5oexiDOHYWZkgp4f6AHaHa?rs=1&pid=ImgDetMain' },
    { categoryId: 'decoration & lighting', name: 'Decoration & Lighting', image: 'https://th.bing.com/th/id/OIP.DDfswyYMS5pmVbRbHSPq9AHaHa?rs=1&pid=ImgDetMaing' },
    { categoryId: 'mobile covers', name: 'Mobile Covers', image: 'https://homafy.com/wp-content/uploads/2022/08/Couple-Glass-Mobile-Cover-Set-With-Name.jpeg' },
    { categoryId: 'mobile back skin', name: 'Mobile Back Skin', image: 'https://www.themobilewraps.com/wp-content/uploads/2023/11/Mobilw-back-skins3.png' },
    { categoryId: 'saloon products', name: 'Saloon Products', image: 'https://th.bing.com/th/id/OIP.JZo0bd8gPHFd_tDDW1H4hQHaHa?rs=1&pid=ImgDetMain' },
  ];

  return (
  <>
  <div className="categories-container">
  <div className="categories-left">
        <h2>Shop By Categories</h2>
        <div className="unique-products">
          
          <p>1000+ Unique Products</p>
        </div>
        {/*<a href="/all-categories" className="all-categories-link">All Categories</a> */}
      </div>
      </div>
    <div className="categories-container">

      <div className="categories-right">
        {categoryOptions.map((category, index) => (
          <div key={index} className="category-card">
            <img src={category.image} alt={category.name} />
            <p>{category.name}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Categories;
