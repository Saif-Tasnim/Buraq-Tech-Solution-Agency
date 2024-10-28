import { Icon } from "@/app/component/core/Icon";
import { IPortfolioList } from "@/app/static/portfolio";
import Image from "next/image";

interface ProjectShowcaseProps {
  portfolio: IPortfolioList;
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ portfolio }) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-6 p-6 rounded-lg ${
        portfolio.id % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <div className="relative flex-1 group">
        <Image
          src={portfolio.thumbnail}
          alt={portfolio.name}
          width={500}
          height={300}
          className="rounded-md transition duration-300 group-hover:blur-[2px]"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-gray-700 bg-opacity-50 rounded-md w-4/5">
          <Icon.SquareArrowOutUpRight className="w-7 h-7 mr-2 text-white"/>
          <a
            href={portfolio.link}
            target="_blank"
            className="text-white text-lg font-semibold"
          >
            Visit Site
          </a>
        </div>
      </div>
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-lg text-center md:text-left md:text-2xl font-semibold mb-2">
          {portfolio.name}
        </h3>
        <p className="mb-4">{portfolio.description}</p>
        <div className="flex flex-col md:flex-row items-center gap-2 mb-4">
          <p className="text-primary text-sm md:text-base font-semibold">
            {" "}
            Tech Stack _____{" "}
          </p>
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
