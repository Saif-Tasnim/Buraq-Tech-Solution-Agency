export interface ITeamMember {
  id: number;
  name: string;
  designation: string;
  eoy: string;
  role: string;
  bio: string;
  image: string;
  contact: string;
}

export const TEAM_MEMBER_LIST: ITeamMember[] = [
  {
    id: 1,
    name: "Shohag Mia",
    designation: "Full Stack Developer",
    eoy: "5+",
    role: "Founder & CEO",
    bio: "Hey! I am Shohag, Founder and CEO of Novanex It. Feel free to connect with us",
    image: "https://i.postimg.cc/RZhz9YPB/saif.jpg",
    contact: "shohagmia@gmail.com",
  },
  {
    id: 2,
    name: "Saif Tasnim Chowhdury",
    designation: "Software Engineer",
    eoy: "3+",
    role: "Team Lead",
    bio: "Hey! I am Saif Tasnim, Team Lead of Novanex It. I am here to collbaorate with you.",
    image: "https://i.postimg.cc/RZhz9YPB/saif.jpg",
    contact: "saiftasnim2002@gmail.com",
  },
  {
    id: 3,
    name: "Arafat Hossen",
    designation: "Wordpress Developer",
    eoy: "3+",
    role: "Lead Developer",
    bio: "Hey! I am Arafat, Wordpress Developer of Novanex It. Feel free to connect with us",
    image: "https://i.postimg.cc/RZhz9YPB/saif.jpg",
    contact: "arafathossen@gmail.com",
  },
];
