import { IPortfolioList } from '@/app/static/portfolio';
import Image from 'next/image';

interface ProjectShowcaseProps {
  portfolio: IPortfolioList; 
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ portfolio }) => {
  return (
    <div className="flex flex-col md:flex-row items-center p-6 rounded-lg">
      <div className="flex-1">
        <Image
          src={portfolio.thumbnail}
          alt={portfolio.name}
          width={500}
          height={300}
          className="rounded-md"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-semibold mb-2">
          {portfolio.name}
        </h3>
        <p className="mb-4">{portfolio.description}</p>
        <div className="flex items-center gap-2 mb-4">
          <p className='text-primary text-base font-semibold'> Tech Stack _____ </p>
          {portfolio.tech.map((tech) => (
            <span key={tech.id} className="text-sm px-2 py-1 rounded">
              <Image
                src={tech.techThumbs}
                alt={tech.techName}
                width={20}
                height={20}
                className="inline-block mr-1"
              />
              {tech.techName}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
