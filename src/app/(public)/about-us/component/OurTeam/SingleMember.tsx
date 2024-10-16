import React, { FC } from "react";
import { ITeamMember } from "../../static/team";
import Image from "next/image";

interface ISingleMemberProps {
  member: ITeamMember;
}

const SingleMember: FC<ISingleMemberProps> = ({ member }) => {
  const { bio, contact, designation, eoy, image, name, role } = member;

  
  return (
    <div
      className="bg-primary shadow-lg shadow-primary p-4 rounded-md border-e-2 border-e-primary h-400px w-auto"
    >
      <div className="flex justify-center">
        <Image
          src={image}
          alt="image"
          width={260}
          height={150}
          className="rounded object-fill"
        />
      </div>

      <div className="mt-7">
        <h1 className="text-center text-2xl font-semibold mb-6">{name}</h1>
        <div className="flex flex-col gap-3">
          <h2>{role} at Novanex IT</h2>
          <h2>{eoy} Working Experience</h2>
          <h2>{designation} at Industry Level</h2>
          <strong className="text-xs">Email: {contact}</strong>

          <p className="text-justify p-5">
            {" "}
            <span className="italic">{bio}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleMember;
