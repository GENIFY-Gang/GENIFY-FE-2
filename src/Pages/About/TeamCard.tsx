import React from 'react';

interface TeamMember {
  name: string;
  role: string;
  photo: string;
  bio: string;
  socialMedia: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
  onClick: () => void;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, onClick }) => {
  return (
    <div className=" h-auto mx-auto shadow-lg overflow-hidden flex flex-col items-center justify-center hover:bg-white transition-transform transform hover:scale-110">
      <div className="w-32 h-32 rounded-full overflow-hidden mb-2xl">
        <img src={member.photo} alt={member.name} className="w-full h-full object-cover object-center" />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-xl font-bold mb-2">{member.name}</h3>
        <p className="text-lg mb-2">{member.role}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
