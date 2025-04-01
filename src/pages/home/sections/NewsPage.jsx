import React from "react";

const NewsPage = () => {
  // Sample news data
  const newsArticles = [
    {
      id: 1,
      title: "Grand Opening of Our New Luxury Spa",
      image:
        "https://drifttravel.com/wp-content/uploads/2023/01/TravMedia_USA_medium-sized_1547242_Relaxation_Area.jpg",
      date: "December 5, 2024",
      description:
        "Experience ultimate relaxation in our newly opened luxury spa. Exclusive treatments and serene settings await you.",
    },
    {
      id: 2,
      title: "Awarded Best Hotel in Ghana 2024",
      image:
        "https://www.theworldluxuryawards.com/wp-content/uploads/2021/10/HotelPackage-1-scaled.jpg",
      date: "November 15, 2024",
      description:
        "We are thrilled to announce that our hotel has been awarded the prestigious title of Best Hotel in Ghana 2024!",
    },
    {
      id: 3,
      title: "Cultural Evening: Ghanaian Heritage Night",
      image:
        "https://www.aziza.com.ng/read/wp-content/uploads/2023/04/cultural-heritage-ghana.jpg",
      date: "October 20, 2024",
      description:
        "Join us for a celebration of Ghanaian culture with traditional music, food, and dance at our Heritage Night.",
    },
    {
      id: 4,
      title: "Seasonal Discounts Now Available!",
      image:
        "https://media.licdn.com/dms/image/D4D12AQFr6bGdNUW-Eg/article-cover_image-shrink_720_1280/0/1690971697152?e=2147483647&v=beta&t=kiomzfxQZMnPjdrTsN7_9d1_eSCvMPFA9UH7pDnjkvA",
      date: "September 10, 2024",
      description:
        "Take advantage of our seasonal offers and enjoy a luxury stay at an unbeatable price. Book now to save more!",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-[#01AEF2] to-indigo-600 text-white py-10 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Hotel News & Updates
          </h1>
          <p className="text-lg md:text-xl">
            Stay updated with the latest happenings and exclusive offers from
            our hotel.
          </p>
        </div>
      </header>

      {/* News Section */}
      <main className="max-w-7xl mx-auto py-12 px-6">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {newsArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  {article.title}
                </h2>
                <p className="text-gray-600 mb-6">{article.description}</p>
                <button className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-all">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} TAP Hotel. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default NewsPage;
