// // App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import Home from './Home';
// import Register from './components/Register';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route exact path="/" component={Home} />
//         <Route path="/registration" component={Register} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;


import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Image from "./components/Image";
import Numbers from "./components/Numbers";
import Timeline from "./components/Timeline";
import TitleBlock from "./components/TitleBlock";
import Loader from "./components/Loader";
import ProgramCard from "./components/ProgramCard";
import python from "./images/python.png";
import iot from "./images/iot.png";
import android from "./images/android.png";
import industrial_automation from "./images/industrial-automation.png";
import web from "./images/web.png";
import Bubbles from "./components/Bubbles";
import WhySC from "./components/WhySC";
import LocomotiveScroll from 'locomotive-scroll';
import BlogItem from "./components/Blog";
import Foooter from "./components/Foooter";
import Register from "./components/Register";
import { ScrollingCarousel } from '@trendyol-js/react-carousel';
import LogoSlider from "./components/LogoSlider";
import Card from "./components/Card";
import accenture from './images/companies/accenture.png';
import cisco from './images/companies/cisco.png';
import intel from './images/companies/intel.png';
import rocket from './images/rocket.png';
import coinbag from './images/coinbag.png';
import handshake from './images/handshake.png';
import phone from './images/phone.png';
import prasad from './images/prasad.png';
import ciba from './images/ciba.png';
import knowledge from './images/knowlege1.png'
import TestimonialBlock from "./components/TestimonialBlock";
import testimonialImage from './images/testimonial.png';
import ProfileCard from "./ProfileCard";
import Advisors from "./components/Advisors";
import QuestionBox from "./components/QuestionBox";
import BlockImage from "./components/BlockImage";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const Bheading= "Why self learning is important in 2023?";
  const Bcontent ="Welcome to 2023, the era where the only constant is change! Gone are the days when a single degree could carry you through a lifetime career. In today's fast-paced, tech-driven world, if you're not learning, you're falling behind. That's right—your ability to adapt and grow is no longer a luxury; it's a necessity. But let's face it, traditional education systems can't keep up...";
  const BMorecontent ="Welcome to 2023, the era where the only constant is change! Gone are the days when a single degree could carry you through a lifetime career. In today's fast-paced, tech-driven world, if you're not learning, you're falling behind. That's right—your ability to adapt and grow is no longer a luxury; it's a necessity. But let's face it, traditional education systems can't keep up This is more detailed information about the topic. It can be as long as you need it to be, and it will be displayed when the 'Read More' button is clicked.";
  
  const companies = [
    accenture, cisco, intel, accenture, cisco, intel, accenture, cisco, intel, accenture, cisco, intel
  ];
  const mentors = [
    accenture, cisco, intel, accenture, cisco, intel, accenture, cisco, intel, accenture, cisco, intel
  ];

  const why = [
    {
      id: 1,
      image: rocket,
      title: 'SKYROCKET YOUR CAREER',
      description: 'Why settle for less when you can aim for the stars? Get mentored by industry leaders and secure placements at India\'s top companies.'
    },
    {
      id: 2,
      image: coinbag,
      title: 'EARN WHILE YOU LEARN',
      description: 'Forget unpaid internships! Work on projects that not only boost your skills but also your bank balance.'
    },
    {
      id: 3, image: handshake,
      title: 'JOIN THE ELITE CIRCLE',
      description: 'Become a part of an exclusive community where you\'re not just a student; you\'re a future industry leader.'
    },
    {
      id: 4, image: phone,
      title: 'AT YOUR FINGERTIPS',
      description: 'Our mobile-first approach lets you work on projects, interact with the community, and get instant updates, all from the palm of your hand.'
    }
  ]

  const testimonialText = "\"Before joining this program, I had basic coding skills. But the project on machine learning took my skills to another level. I got to work on a real-world data set and even presented my findings to industry experts. The mentors were incredibly supportive, and the resources were top-notch. This project was a turning point in my academic journey.\"";
  const tname="Anjali Mehta";
  const title="Computer Science Student";
  const advice= "Hello Future Leaders! I'm thrilled to be part of the advisory board here. This program is a goldmine for anyone serious about tech and innovation. Don't miss this chance to learn, grow, and upskill. Your future self will thank you.";
  const aname="PRASAD MENON";
  const post="Position Ciba";
  const faq = [
    {
      id:1,
      question: "What projects will I be working on?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      id:2,
      question: "How flexible are the program timings?",
      answer: "Our program is designed to fit your schedule. You can choose to work on projects at your own pace, and we offer 24/7 support to assist you whenever you need it.",
    },
    {
      id:3,
      question: "Do I need any prior experience or qualifications?",
      answer: "Our program is designed to fit your schedule. You can choose to work on projects at your own pace, and we offer 24/7 support to assist you whenever you need it.",
    },
    {
      id:4,
      question: "What projects will I be working on?",
      answer: "Our program is designed to fit your schedule. You can choose to work on projects at your own pace, and we offer 24/7 support to assist you whenever you need it.",
    },
    // Add more objects with questions and answers as needed
  ];
  const blogs = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1524069290683-0457abfe42c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      title: 'The Importance of Lifelong Learning',
      description:
        'In today\'s rapidly changing world, lifelong learning has become more important than ever. It enables individuals to adapt, grow, and thrive in their personal and professional lives. Lifelong learning fosters creativity, critical thinking, and problem-solving skills. It helps individuals stay relevant in their careers and enhances their overall well-being. Discover the benefits of lifelong learning and how you can incorporate it into your life.',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1589104760192-ccab0ce0d90f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1467&q=80',
      title: 'Effective Study Techniques for Students',
      description:
        'Good study habits and techniques can significantly improve students\' learning outcomes. Discover effective study techniques that can help you maximize your study time, enhance your understanding of the material, and boost your academic performance. From time management strategies to active learning methods, explore a range of study techniques that can make a difference in your educational journey.',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1589104760192-ccab0ce0d90f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1467&q=80',
      title: 'Effective Study Techniques for Students',
      description:
        'Good study habits and techniques can significantly improve students\' learning outcomes. Discover effective study techniques that can help you maximize your study time, enhance your understanding of the material, and boost your academic performance. From time management strategies to active learning methods, explore a range of study techniques that can make a difference in your educational journey.',
    },
    // Add more blog objects as needed
  ];

  const COURSES = [
    {
      id: 1,
      image: python,
      title: "Python Development",
      originalPrice: "2500",
      discountedPrice: "1490",
      description:
        "Dive into the world of coding mastery with our Python Development Course. From building applications to automating tasks, you'll grasp Python's versatility. Through hands-on projects, you'll unlock the power of this language in just 30 days. Get ready to code your way to innovation!",
    },
    {
      id: 2,
      image: web,
      title: "Web Development",
      originalPrice: "2000",
      discountedPrice: "1290",
      description:
        "Unleash your creativity and shape the digital landscape with our Web Development Course. Learn to craft responsive, user-friendly websites using HTML, CSS, and JavaScript. With three immersive projects each month, you'll be designing your web success story in just 30 days!",
    },

    {
      id: 3,
      image: android,
      title: "Android Development",
      originalPrice: "2000",
      discountedPrice: "1290",
      description:
        "Join the ranks of app creators with our Android Development Course. Discover the art of building Android applications that captivate users. Through a series of real-world projects, you'll master the intricacies of app design, development, and deployment in just 30 days.",
    },
    {
      id: 4,
      image: iot,
      title: "IOT",
      originalPrice: "2000",
      discountedPrice: "1290",
      description:
        "Immerse yourself in the Internet of Things (IoT) realm and shape the future of connectivity. In our IoT Course, you'll learn to build smart devices that communicate and interact seamlessly. With hands-on projects, you'll navigate the world of sensors, actuators, and data streams, all within 30 days.",
    },
    {
      id: 5,
      image: industrial_automation,
      title: "Industrial Automation",
      originalPrice: "2000",
      discountedPrice: "1290",
      description:
        "Transform industries through automation expertise in just 30 days. Our Industrial Automation Course equips you with the skills to design, program, and manage automated systems. Through practical projects, you'll become a force driving efficiency and innovation in industrial processes."
    },
    // ... (add more course objects as needed)
  ];

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('.App'),
      smooth: true,
      multiplier: 0.5,
      lerp: 0.9  // Adjust this value to change the inertia (higher = more "ease out")
    });

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Clean up the effect on component unmount
    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <div className="App md:max-w-[1920px] md:mx-auto " data-scroll-container>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Hero />

          <div className="md:px-10 px-2 bg-[#F3F3F3]">
            <Numbers />
            <TitleBlock
              title="SUCCESS STORIES"
              subtitle="Companies Where Our Students Shine"
            />
            <LogoSlider images={companies} />

            <TitleBlock
              subtitle="Hear from People Like You"
            />
            <div className=" py-8 flex items-center justify-center">
              <div className=" w-326 ">
                
                <TestimonialBlock testimonial={testimonialText} imageSrc={testimonialImage} tname={tname} title={title}/>
                
              </div>
            </div>
            <TitleBlock
              title="PARTNERED WITH THE BEST"
              subtitle="Where Our Mentors Come From"
            />
            <LogoSlider images={mentors} />

            <TitleBlock
              title="WHY CHOOSE US?"
              subtitle="Unlock Your Full Potential with Us" />

            <div className="container mx-auto py-8">
              <div className="flex flex-wrap justify-center">
                {why.map((item) => (
                  <Card key={item.id} data={item} />
                ))}
              </div>
            </div>
            <TitleBlock
              title="DISCOVER YOUR POTENTIAL"
              subtitle="Stand Out From The Crowd" />
<div className="container mx-auto py-8 ">
      <div className="flex justify-center">
        <ProfileCard
          name="Rahul Gupta"
          degree="BTech Final Year Student"
          photoSrc={testimonialImage}
          
        />
      </div>
    </div>

    <div className="text-center p-10 text-lg">
  Got a <span className="text-blue-500">free </span>profile on Source Catalyst? Then you're already ahead. We make you <span className="text-blue-500">stand out</span>, opening doors to <span className="text-blue-500">growth opportunities</span> you won't find elsewhere. Simply put, being here is a game-changer for your career. Don't miss out.
</div>

    <TitleBlock
              title="EXPERT ADVISORS"
              subtitle="Meet the Innovators Guiding Our Path" />
              <div className="md:m-20">
<Advisors advice={advice} imageSrc={prasad} aname={aname} title={post} logoSrc={ciba}/>
</div>
            <TitleBlock
              title="FAQ CORNER"
              subtitle="Your Questions, Answered" />
 <div className="container mx-auto py-8` mt-10">
      {faq.map((faq, id) => (
        <QuestionBox key={id} question={faq.question} answer={faq.answer} />
      ))}
    </div>
            <TitleBlock 
              title="KNOWLEDGE CENTER"
              subtitle="Read, Learn, and Grow with Us" />
 <div className="container mx-auto py-8">
      <BlockImage
        imageUrl={knowledge}
        heading={Bheading}
        initialParagraph={Bcontent}
        expandedParagraph={BMorecontent}
        />
      </div>
            {/* <div className="p-5">

              <ScrollingCarousel >
                {COURSES.map((course) => (
                  <ProgramCard
                    key={course.id}
                    image={course.image}
                    title={course.title}
                    originalPrice={course.originalPrice}
                    discountedPrice={course.discountedPrice}
                    description={course.description}
                  />
                ))}
              </ScrollingCarousel>
            </div> 
             <WhySC />
            <TitleBlock
              title="Our App"
              subtitle="Your Gateway to Seamless Learning and Professional Growth"
            />
            <Image />

            <TitleBlock title="Timeline" />
            <Timeline />
            <TitleBlock
              title="Internship Listings"
              subtitle="Discover the Best Internships Aligned with Your Skills"
            />
            <Bubbles className="text-4xl" />

            <TitleBlock
              title="Blogs"
              subtitle="Handpicked blogs for the curious minds."
            />
            <div className="md:flex md:flex-row md:justify-center">
              {blogs.map((blog) => (
                <BlogItem
                  className="flex justify-start"
                  key={blog.id}
                  image={blog.image}
                  title={blog.title}
                  description={blog.description}
                />
              ))}
            </div> */}
            {/* <FooterWithLogo/> */}

          </div>
          <Foooter />
        </>

      )}
      
      {/* <Register /> */}
    </div>

  );
}



export default App;


