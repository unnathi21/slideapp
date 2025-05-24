import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const teams = [
  {
    name: "IPL 2025",
    image:"https://tse4.mm.bing.net/th?id=OIP.olBv-LTr3Da0o_nH5z-_RAHaEK&pid=Api&P=0&h=180",
    tagline: "Where Talent Meets Oppurtunity"
  },
  {
    name: "Chennai Super Kings",
    image:"https://fantasykhiladi.com/wp-content/uploads/2024/03/Chennai-Super-Kings-2024.webp",
    tagline: "Whistle Podu! 🟡"
  },
  {
    name: "Mumbai Indians",
    image: "https://tse1.mm.bing.net/th?id=OIP.2MMw9GbVNzMv1zQlWY2cagHaEK&pid=Api&P=0&h=180",
    tagline: "Duniya Hila Denge! 🔵"
  },
  {
    name: "Kolkata Knight Riders",
    image: "https://i.ytimg.com/vi/mG-psdD5Usg/maxresdefault.jpg",
    tagline: "Korbo Lorbo Jeetbo! 🟣"
  },
  {
    name: "Rajasthan Royals",
    image: "https://tse3.mm.bing.net/th?id=OIP.xr_Uj1W1xTRWkCRlbcNVSwHaEK&pid=Api&P=0&h=180",
    tagline: "Halla Bol! 💗"
  },
  {
    name: "Delhi Capitals",
    image: "https://tse2.mm.bing.net/th?id=OIP.PVTp3I1IcC-750DrrPn4wQHaDi&pid=Api&P=0&h=180",
    tagline: "This is New Delhi! 🔵🔴"
  },
  {
    name: "Sunrisers Hyderabad",
    image: "https://tse4.mm.bing.net/th?id=OIP.xhU-wOBe_tIXoAwGGe3WRAHaEK&pid=Api&P=0&h=180",
    tagline: "Orange Army! 🟠"
  },
  {
    name: "Punjab Kings",
    image: "https://tse1.mm.bing.net/th?id=OIP.vnHNYE4b2VSkRyQImvXjUQHaDi&pid=Api&P=0&h=180",
    tagline: "Shers on the Prowl! 🔴"
  },
  {
    name: "Gujarat Titans",
    image: "https://tse3.mm.bing.net/th?id=OIP.a5ecb8fZmupYGYSo1TzIhAHaD3&pid=Api&P=0&h=180",
    tagline: "Aava De! 💪"
  },
  {
    name: "Lucknow Super Giants",
    image: "https://tse4.mm.bing.net/th?id=OIP.4NHKSUYkbrB33PdnJnzF2wHaEK&pid=Api&P=0&h=180",
    tagline: "Ab Apni Baari Hai! 💙🧡"
  },
  {
    name: "Royal Challengers Bangalore",
    image: "https://tse2.mm.bing.net/th?id=OIP.BWHDyqL9EBMP3hlobDhUHgHaEK&pid=Api&P=0&h=180",
    tagline: "Ee Sala Cup Namde! 🔴"
  },
];

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500
  };

  return (
      <div style={{ width: "50%", margin: "50px auto" }}>
        <h1 style={{ textAlign: "center", marginBottom: "30px" }}>🏏 IPL Team Slides</h1>
        <Slider {...settings}>
          {teams.map((team, index) => (
              <div key={index} style={{ textAlign: "center" }}>
                <img
                    src={team.image}
                    alt={team.name}
                    style={{ height: "400px", objectFit: "contain", marginBottom: "20px" }}
                />
                <h2>{team.name}</h2>
                <p style={{ fontStyle: "italic", color: "#555" }}>{team.tagline}</p>
              </div>
          ))}
        </Slider>
      </div>
  );
}

export default App;