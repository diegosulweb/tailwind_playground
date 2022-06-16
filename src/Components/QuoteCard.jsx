import React from "react";

export const QuoteCard = (props) => {
  return (
    <div
      className={`flex flex-col content-between  bg-gradient-to-b ${props.bg} ${props.txt} box-border h-48 p-4 m-3 rounded-lg`}
    >
      <div className="flex items-center justify-center basis-2/3 quote">
        <p className="text-center font-indieflower text-lg">{props.quote}</p>
      </div>
      <div className="flex items-end justify-end basis-1/3 align-baseline author">
        <p className="font-valera text-xs">{props.auth}</p>
      </div>
    </div>
  );
};
