"use client";

import Head from "next/head";
import Image from "next/image";
import "./style.css";
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

export default function Home() {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      url: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1631048499052-e6d9f305d2c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const amenities = [
    {
      id: 1,
      icon: (
        <Image
          src="/bed.png"
          alt="Queen Size Bed"
          className="w-16 h-16 mx-auto hover:scale-110 transition-transform duration-300 img-shadow"
        />
      ),
      title: "Queen Size Bed",
      description: "Comfortable sleeping arrangements",
    },
    {
      id: 2,
      icon: (
        <Image
          src="/boiling.png"
          alt="Hot and Cold Water"
          className="w-16 h-16 mx-auto hover:scale-110 transition-transform duration-300 img-shadow"
        />
      ),
      title: "Hot & Cold Water",
      description: "24/7 water supply",
    },
    {
      id: 3,
      icon: (
        <Image
          src="/renewable-energy.png"
          alt="Power Backup"
          className="w-16 h-16 mx-auto hover:scale-110 transition-transform duration-300 img-shadow"
        />
      ),
      title: "Power Backup",
      description: "Uninterrupted power supply",
    },
    {
      id: 4,
      icon: (
        <Image
          src="/cutlery.png"
          alt="Paid Food Service"
          className="w-16 h-16 mx-auto hover:scale-110 transition-transform duration-300 img-shadow"
        />
      ),
      title: "Paid Food Service",
      description: "Delicious meals available",
    },
  ];

  return (
    <>
      <Head>
        <title>Shree Padam Prabhu Portal</title>
      </Head>

      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">श्री पद्म प्रभु</h1>
          <ul className="hidden md:flex gap-6 text-text">
            <li>
              <a
                href="#"
                className="hover:text-primary transition-colors duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-primary transition-colors duration-200"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-primary transition-colors duration-200"
              >
                Darshan
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-primary transition-colors duration-200"
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-primary transition-colors duration-200"
              >
                Teachings
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 bg-[url('/Her.jpg')] bg-cover bg-center text-white">
        <div className="bg-black/50 p-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Shree Padam Prabhu Ashray
          </h2>
          <p className="text-lg mb-6">
            A community dedicated to devotion, peace, and Jain teachings
          </p>
          <div className="flex justify-center items-center space-x-4 mb-6">
            <span className="relative font-semibold text-white">
              <span className="original-price text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                ₹1599
              </span>
            </span>
            <span className="discounted-price font-bold text-accent text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              ₹499
            </span>
          </div>
          <button className="bg-accent text-white px-6 py-3 rounded-full hover:scale-105 transition-transform duration-200">
            Learn More
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6  mx-auto bg-background">
        <h3 className="text-3xl font-semibold text-center text-primary mb-8 animate-heading">
          About Shree Padam Prabhu
        </h3>
        <p className="text-text text-center leading-7 animate-paragraph">
          Shree Padmaprabha, the sixth Tirthankara in Jainism, was born in
          Kausambi to King Shridhar and Queen Susimadevi. His name means bright
          as a red lotus, symbolizing purity and spiritual enlightenment. He
          renounced worldly life, attained omniscience under a banyan tree, and
          achieved moksha at Sammed Shikhar. Wikipedia In 1944, a red stone idol
          of Padmaprabha was discovered in Padampura, Rajasthan, leading to the
          establishment of a significant Jain temple. The Padampura temple,
          known for its miraculous events, features a 27-foot statue of
          Padmaprabha and attracts numerous devotees annually.
        </p>
      </section>

      {/* Rooms Pictures Section */}
      <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
        <h3 className="text-3xl font-semibold text-center text-primary mb-8">
          Rooms
        </h3>
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        ></div>
        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>

      {/* Amenities Section */}
      <div className="my-25 heading space-y-4 bg-background">
        <div className="text-center max-w-lg mx-auto space-y-2">
          <h3 className="text-3xl font-semibold text-center text-primary mb-8">
            Amenities
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {amenities.map(({ id, icon, title, description }) => (
            <div
              key={id}
              data-aos="fade-up"
              className="p-4 text-center space-y-6"
            >
              {icon}
              <div className="space-y-2">
                <h1 className="text-2xl font-bold text-primary">{title}</h1>
                <p className="text-dark">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Room Availability Section */}
      <section className="bg-gray-100 py-4 px-1 sm:px-4 lg:px-10">
        <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto my-8">
          {/* Image Section */}
          <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
            <Image
              src="/family.png" // Ensure this image exists in your public/images directory
              alt="Room"
              className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-gray-200"
            />
          </div>

          {/* Text Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Spacious Family Room
            </h3>
            <p className="text-gray-600 mb-4">
              This room comfortably accommodates 2 adults and 2 children,
              offering a serene environment perfect for family stays.
            </p>
            <p className="text-lg text-green-600 font-semibold">
              Special Offer: ₹499{" "}
              <span className="line-through text-red-500 ml-2">₹1599</span>
            </p>
          </div>
        </div>
      </section>

      {/* <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            Available Rooms
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Standard Room",
                price: "₹500 / night",
                features: ["2 Guests", "Attached Bathroom", "Hot Water"],
              },
              {
                name: "Deluxe Room",
                price: "₹1000 / night",
                features: ["4 Guests", "AC", "Balcony View"],
              },
              {
                name: "Family Suite",
                price: "₹1500 / night",
                features: ["6 Guests", "Living Area", "Mini Kitchen"],
              },
            ].map((room, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-semibold text-gray-700">
                  {room.name}
                </h3>
                <p className="text-blue-600 font-bold">{room.price}</p>
                <ul className="mt-4 text-sm text-gray-600 space-y-1">
                  {room.features.map((feature, index) => (
                    <li key={index}>• {feature}</li>
                  ))}
                </ul>
                <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Booking Process Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">
            How to Book a Room
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "1. Explore Rooms",
                description:
                  "Browse our selection of available rooms to find the perfect fit for your stay.",
              },
              {
                title: "2. Contact Us",
                description:
                  "Reach out via phone, email, or our contact form to inquire about availability.",
              },
              {
                title: "3. Confirm Booking",
                description:
                  "Finalize your reservation with our team and receive confirmation details.",
              },
            ].map((step, idx) => (
              <div key={idx} className="bg-gray-100 rounded-lg p-6 shadow-sm">
                <h4 className="text-xl font-semibold text-blue-600">
                  {step.title}
                </h4>
                <p className="mt-2 text-gray-700">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-20">
        <div className="max-w-8xl mx-auto bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Contact Us to Book Your Stay
          </h2>
          <div className="flex flex-wrap justify-center gap-20">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/YourPage"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-blue-600 hover:text-blue-800 text-3xl transition-transform transform hover:scale-110"
            >
              <Image
                src="/facebook.png"
                alt="Facebook"
                className="w-12 h-12 mb-2"
              />
              <span className="text-gray-700 text-blue-600 hover:text-blue-800 text-2xl transition-transform transform hover:scale-110">
                Facebook
              </span>
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/YourProfile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-blue-600 hover:text-blue-800 text-3xl transition-transform transform hover:scale-110"
            >
              <Image
                src="/social.png"
                alt="Instagram"
                className="w-12 h-12 mb-2"
              />
              <span className="text-gray-700 text-blue-600 hover:text-blue-800 text-2xl transition-transform transform hover:scale-110">
                Instagram
              </span>
            </a>
            {/* Phone */}
            <a
              href="tel:+1234567890"
              className="flex flex-col items-center text-blue-600 hover:text-blue-800 text-3xl transition-transform transform hover:scale-110"
            >
              <Image
                src="/phone-call.png"
                alt="Phone"
                className="w-12 h-12 mb-2"
              />
              <span className="text-gray-700 text-blue-600 hover:text-blue-800 text-xl transition-transform transform hover:scale-110">
                +1 234 567 890
              </span>
            </a>
            {/* Email */}
            <a
              href="mailto:info@example.com"
              className="flex flex-col items-center text-blue-600 hover:text-blue-800 text-3xl transition-transform transform hover:scale-110"
            >
              <Image src="/mail.png" alt="Email" className="w-12 h-12 mb-2" />
              <span className="text-gray-700 text-blue-600 hover:text-blue-800 text-2xl transition-transform transform hover:scale-110">
                info@example.com
              </span>
            </a>
            {/* Location */}
            <a
              href="https://www.google.com/maps/place/Your+Location"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-blue-600 hover:text-blue-800 text-3xl transition-transform transform hover:scale-110"
            >
              <Image
                src="/location.png"
                alt="Location"
                className="w-12 h-12 mb-2"
              />
              <span className="text-gray-700 text-blue-600 hover:text-blue-800 text-xl transition-transform transform hover:scale-110">
                123 Main St, City
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Darshan Section */}
      <section className="py-16 px-6 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-semibold text-center text-primary mb-8">
            Live Darshan
          </h3>
          <div className="aspect-w-16 aspect-h-9 bg-gray-300 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="Live Darshan"
              frameBorder="0"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 px-6 bg-background">
        <h3 className="text-3xl font-semibold text-center text-primary mb-8">
          Upcoming Events
        </h3>
        <div className="flex pt-8 items-center justify-center">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <Image
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-1 group-hover:scale-125"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxjthUzVAXxSbk-z8cVi5-raGZOIqz29TvnQ&s"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-2">
                <h1 className="text-lg heading font-bold text-white">
                  Mahavir jayanti
                </h1>
                {/* <h3 className="font-dmserif text-md heading font-bold text-white"></h3> */}
                <p className="mb-3 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  📅 April 21, 2025 <br />
                  📍Main Temple Mysore
                </p>
              </div>
            </div>
            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <Image
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-1 group-hover:scale-125"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzrFFP2KR3skMFUS0U_Iho7U33y5T1hsoybg&s"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-2">
                <h1 className="font-dmserif text-lg heading font-bold text-white">
                  Annual Pooja
                </h1>
                <p className="mb-3 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  📅 July 10, 2025
                  <br />
                  📍Hall A near ITP
                </p>
              </div>
            </div>
            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <Image
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-1 group-hover:scale-125"
                  src="https://agamdhara.com/wp-content/uploads/2017/09/jainpuja.jpg"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-2">
                <h1 className="font-dmserif text-lg heading font-bold text-white">
                  Spiritual Retreat
                </h1>
                <p className="mb-3 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  📅 Sep 15–20, 2025 <br />
                  📍Jain Retreat Center
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <div className="p-5 md:p-10">
        <h3 className="text-3xl font-semibold text-center text-primary mb-8">
          Gallery
        </h3>
        <div className="columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
          <Image
            src="https://images.unsplash.com/photo-1650119499755-93387331958a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <Image
            src="https://plus.unsplash.com/premium_photo-1697729725856-05c3e7aeec30?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <Image
            src="https://images.unsplash.com/photo-1683982509071-efff7892196a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <Image
            src="https://images.unsplash.com/photo-1633135612391-13c8a576b836?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <Image
            src="https://images.unsplash.com/photo-1590998743997-368c04b78aa4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <Image
            src="https://plus.unsplash.com/premium_photo-1697730461946-f1a3a5a8a113?q=80&w=2137&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <Image
            src="https://images.unsplash.com/photo-1700985959056-a893bd864c0e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
            alt=""
          />
          <Image
            src="https://images.unsplash.com/photo-1645021399872-94a83c4481b2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          {/* <img
            src="https://images.unsplash.com/photo-1656354438268-0adb203b41a4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          /> */}
          <Image
            src="https://images.unsplash.com/photo-1650854031787-abf1bd3e7c8d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <Image
            src="https://images.unsplash.com/photo-1667849357566-0d7928bd9e5d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <Image
            src="https://images.unsplash.com/photo-1585082830087-9af07ae93b15?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <Image
            src="https://images.unsplash.com/photo-1651588377954-3af843c3101c?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <Image
            src="https://images.unsplash.com/photo-1591633382222-4ce4caa53463?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <Image
            src="https://images.unsplash.com/photo-1629011883648-ebcd903df798?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>

      {/* Teachings Section */}
      <section className="py-16 px-6 bg-secondary">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-semibold text-primary mb-8">
            Teachings of Shree Padam Prabhu
          </h3>
          <p className="text-gray-700 leading-7">
            The essence of Jain philosophy lies in non-violence, truth,
            asceticism, and self-realization. Shree Padam Prabhu’s teachings
            inspire inner purity and a path of spiritual awakening through
            compassion, restraint, and mindfulness.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-2">श्री पद्म प्रभु</h4>
            <p className="text-gray-300 text-sm">
              A digital space to connect, learn, and grow spiritually within the
              Jain community.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-2">Quick Links</h4>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Darshan</a>
              </li>
              <li>
                <a href="#">Teachings</a>
              </li>
              <li>
                <a href="#">Gallery</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-2">Contact</h4>
            <p className="text-gray-300 text-sm">
              📍 Jain Temple Road, Odisha, India
            </p>
            <p className="text-gray-300 text-sm">📧 contact@padamprabhu.org</p>
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm mt-8">
          © {new Date().getFullYear()} Shree Padam Prabhu Jain Community. All
          rights reserved.
          <p>Made with devotion 💛</p>
        </div>
      </footer>
    </>
  );
}
