import Image, { StaticImageData } from "next/image";
import React from "react";

interface VerticleProjectCardProps {
  image: StaticImageData | string;
  title: string;
  description: string;
  link: string;
}

const VerticleProjectCard: React.FC<VerticleProjectCardProps> = ({
  image,
  title,
  description,
  link,
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex shadow-2xl border h-full border-gray-200 gap-6 rounded-lg bg-white hover:scale-[1.02] transition ease-in-out duration-400 overflow-hidden group"
    >
      <div className="w-[45%] h-[30vh] border-r rounded-lg shadow-2xl border-gray-200 overflow-hidden">
        <Image
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-lg font-semibold font-maven-pro text-gray-700 mb-2">{title}</h3>
        <p className="text-gray-600 line-clamp-3 text-sm  font-open-sans">{description}</p>

        <div className="mt-auto flex justify-end">
          <button
            type="button"
            className="bg-gray-900  cursor-pointer text-white relative px-5 py-1 overflow-hidden rounded-full z-20 mt-auto"
          >
            <p className="w-[80%] h-[20px] group-hover:w-full group-hover:h-full group-hover:blur-none transition ease-in-out duration-400 group-hover:duration-500 bg-blue-600 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-xl" />
            <span className="relative text-xs">View Project</span>
          </button>
        </div>
      </div>
    </a>
  );
};

export default VerticleProjectCard;
