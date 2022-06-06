import * as React from 'react';
import { Activity as ActivityType } from 'use-lanyard';
import { useLanyard } from 'use-lanyard';

interface CustomProps {
  custom?: ActivityType;
}

const Custom: React.FC<CustomProps> = ({ custom }) => {
  return (
    <>
      {custom ? (
        <div className="bg-gradient-to-r w-max from-transparent to-darkblue py-2 px-4 flex flex-row justify-between text-2xl  border-4 m-auto border-gray-600 rounded-full tablet:text-3xl">
          {custom?.emoji?.name}
          {custom?.state}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Custom;
