import React from 'react';
import "../../AMain/Main.css"
import { Layout } from 'antd';
import NavigationBar from '../Navigation/NavigationBar';
import charakaImage from '../../Photos/charaka.jpeg';
import madusaraImage from '../../Photos/madusara.jpeg';
import kavinduImage from '../../Photos/kavindu.jpeg';
import dilanaImage from '../../Photos/dilana.jpg';
import nethmiImage from '../../Photos/nethmi.png';
import Footer from '../Footer/Footer';
import { Content } from 'antd/es/layout/layout';


interface TeamMember {
  name: string;
  role: string;
  photo: string;
  socialMedia: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Nethmi Dharani',
    role: 'ML Engineer(Team Lead)',
    photo: nethmiImage,
    socialMedia: 'https://www.linkedin.com/in/nethmi-j-0987b7223/'
  },
  {
    name: 'Charaka Kusumananda',
    role: 'UI/UX Developer',
    photo: charakaImage,
    socialMedia: 'https://www.linkedin.com/in/charaka-kusumananda-837018234?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
  },
  {
    name: 'Kavindu Mendis',
    role: 'UI/UX Developer',
    photo: kavinduImage,
    socialMedia: 'https://www.linkedin.com/in/kavindu-sandeepa-55420a226/'
  },
  {
    name: 'Pasindu Madusara',
    role: 'Full-stack Developer',
    photo: madusaraImage,
    socialMedia: 'https://www.linkedin.com/in/pasindu-madusara-204451278/e'
  },
  {
    name: 'Dilana Sasanka',
    role: 'Full-stack Developer',
    photo: dilanaImage,
    socialMedia: 'https://www.linkedin.com/in/dilana-sasanka-ba79a723a/'
  },
];

const About: React.FC = () => {
 
  return (
    <Layout style={{ background: "white" }}>
      <NavigationBar />
      <Content style={{ paddingTop: "-20px", background: "white" }}>
        <div className="container mx-auto pt-8 px-40 mt-40">
          <h1 className="text-4xl font-semibold mb-6 title" style={{fontFamily:'Poppins'}}>Who we are</h1>
          <p className="mb-1 paragraph" style={{fontFamily:'Poppins'}}>
            We are students enrolled in a five-year degree program leading to a
            BSc (Hons) in Computer Science, jointly conducted by our institute
            in collaboration with the University of Westminster, United Kingdom.
            Alongside our academic pursuits, we are actively engaged in the
            industry, gaining practical experience and insights into
            cutting-edge technologies. Leveraging our expertise in machine
            learning, we collaborate on projects like 'Genify,' a web tool
            meticulously crafted to harness the power of artificial
            intelligence. Genify utilizes
            advanced machine learning algorithms to transform vague prompts into
            meticulously structured system prompts. With a focus on innovative
            machine learning approaches, we aim to revolutionize how prompts are
            generated, empowering users with precise and tailored outputs.
          </p>
          <div className="about-container">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="member-photo"
                />
                <div className="member-details" style={{fontFamily:'Poppins'}}>
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Content>
      <Footer />
    </Layout>
  );
};

export default About;
