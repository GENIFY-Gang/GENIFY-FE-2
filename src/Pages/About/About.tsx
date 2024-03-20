import React, { useState } from 'react';
import { CloseCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import TeamMemberCard from './TeamCard';
import NavigationBar from '../Navigation/Navigation';
import charakaImage from './charaka.jpeg';
import madusaraImage from './madusara.jpeg';
import kavinduImage from './kavindu.jpeg';
import dilanaImage from './dilana.jpg';
// import './about.css';
import Footer from '../Footer/Footer';

interface TeamMember {
  name: string;
  role: string;
  photo: string;
  bio: string;
  socialMedia: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Nethmi Dharani',
    role: 'Team Lead - ML Specialist',
    photo: '',
    bio: 'Nethmi Jayalath, a proficient machine learning developer, merges data and AI with expertise in statistics, mathematics, and programming. Skilled in Python, R, TensorFlow, and scikit-learn, she specializes in crafting and deploying models to solve complex problems. Dedicated to innovation, Nethmi drives business growth and enhances user experiences through cutting-edge solutions.',
    socialMedia: 'https://www.linkedin.com/in/nethmi-j-0987b7223/'
  },
  {
    name: 'Charaka Kusumananda',
    role: 'Lead FE Developer',
    photo: charakaImage,
    bio: 'Charaka is a talented front-end developer who excels in leveraging modern web technologies to craft intuitive user interfaces. Passionate about his craft, he dedicates his spare time to exploring new frameworks, constantly enhancing his skills and staying abreast of industry advancements.',
    socialMedia: 'https://www.linkedin.com/in/charaka-kusumananda-837018234?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
  },
  {
    name: 'Kavindu Mendis',
    role: 'FE Developer',
    photo: kavinduImage,
    bio: 'Kavindu Mendis, a frontend developer, excels in crafting visually stunning websites with HTML, CSS, and JavaScript. Specializing in dynamic user interfaces, he utilizes React and Vue.js for responsive web applications. Passionate about staying updated, Kavindu thrives in collaborative environments, delivering impactful digital solutions that delight users.',
    socialMedia: 'https://www.linkedin.com/in/kavindu-sandeepa-55420a226/'
  },
  {
    name: 'Pasindu Madusara',
    role: 'BE Developer',
    photo: madusaraImage,
    bio: 'Pasindu Madusara, a full stack developer, excels in crafting seamless digital experiences. With expertise in Java, Spring Boot, Angular, React, and Python, he delivers robust applications. Passionate about innovation, Pasindu stays updated with the latest technologies, pushing web development boundaries.',
    socialMedia: 'https://www.linkedin.com/in/pasindu-madusara-204451278/e'
  },
  {
    name: 'Dilana Mathugama',
    role: 'Lead BE Developer',
    photo: dilanaImage,
    bio: 'Dilana Sasanka, a versatile full stack developer proficient in Java, Angular, React, Python, and Spring Boot, excels in crafting dynamic web applications with expertise in both frontend and backend technologies. Thriving in collaborative environments, they deliver innovative solutions exceeding client expectations.',
    socialMedia: 'https://www.linkedin.com/in/dilana-sasanka-ba79a723a/'
  },
];

const About: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const handleMemberClick = (member: TeamMember) => {
    setSelectedMember(member);
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
  };

  return (
    <>
      
        <div>
          <NavigationBar />
          <div className="mt-44">
            <h2 className="text-3xl font-bold mb-4 mr-20 text-gray-600">Meet the Team</h2>
          <p className="text-lg mb-8">
            At GENIFY, we believe in the power of creativity and innovation. Our mission is to empower writers,
            creators, and thinkers by providing them with a tool that unleashes their imagination.
          </p>
            </div>
          <div className="mt-32">
          <div className="bg-gray-600 rounded-full flex max-w-5xl w-full overflow-y-hidden overflow-x-auto ml-96 h-96 ">
          <div className="flex w-full overflow-x-auto overflow-y-hidden mr-20px mt-2">
          <div className="flex mt-10 ">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex-none w-full max-w-md mr-4">
                  <TeamMemberCard member={member} onClick={() => handleMemberClick(member)} />
                </div>
              ))}
            </div>
    </div>
            
          </div>
          </div>
         
        </div>
  

      {selectedMember && (
        <div className="absolute inset-0 flex justify-center rounded-full items-center bg-black bg-opacity-50">
          <div className="bg-gray-500 p-8 rounded-2xl relative">
            <Button className="absolute top-0 right-0" onClick={handleCloseModal} icon={<CloseCircleOutlined />} />
            <img src={selectedMember.photo} alt={selectedMember.name} className="w-48 h-48 rounded-full object-cover mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-2">{selectedMember.name}</h2>
            <p className="text-lg mb-2">{selectedMember.role}</p>
            <p className="mb-4">{selectedMember.bio}</p>
            <a href={selectedMember.socialMedia} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Connect on LinkedIn</a>
          </div>
        </div>
      )}
      <div><Footer/></div>
      
    </>
  );
};

export default About;
