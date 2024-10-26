import { Button } from "@/app/component/core/Button";
import Image from "next/image";
import Link from "next/link";

interface ISingleServiceProps {
  image: string;
  title: string;
  description: string;
  href: string;
}

const SingleServices: React.FC<ISingleServiceProps> = ({
  image,
  title,
  description,
  href,
}) => {
  return (
    <Link
      href={href}
      className="border bg-gray-50 p-7 rounded-xl relative hover:bg-primary transition-all duration-500 hover:scale-105">
      <div className="w-full h-1/2 mx-auto">
        <Image
          src={image}
          alt={title}
          width={900}
          height={900}
          className="h-full w-auto rounded-xl"
        />
      </div>

      <div className="my-7">
        <h1 className="text-center text-2xl font-semibold whitespace-nowrap">
          {title}
        </h1>
        <p className="my-5 text-justify">{description}</p>
      </div>
      <div className="absolute bottom-3 ml-16">
        <Button href={href} variant="primary">
          Learn More
        </Button>
      </div>
    </Link>
  );
};

export default SingleServices;
