import Image from "next/image";
import React, { FC } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Icon } from "@/app/component/core/Icon";
import img from "@/app/assets/profile.webp";

interface ISingleCommentProps {
  description: string;
  name: string;
  designation: string;
}

const SingleComment: FC<ISingleCommentProps> = ({
  description,
  name,
  designation,
}) => {
  return (
    <div className="relative border bg-cyan-600 rounded-lg p-3">
      <Rating style={{ maxWidth: 100 }} value={5} readOnly />

      <div className="py-12 px-6">
        <p className="ml-32">
          <Icon.Quote className="w-10 h-10" />
        </p>
        <p className="py-3">{description}</p>
      </div>

      <div className="flex items-center gap-4 ml-5 absolute bottom-2">
        <Image
          src={img.src}
          alt="Image"
          width={100}
          height={100}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h1 className="font-medium mb-1 text-gray-100">{name}</h1>
          <p className="ml-3 text-xs"> ______ {designation}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleComment;
