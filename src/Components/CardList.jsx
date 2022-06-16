import React from "react";
import { QuoteCard } from "./QuoteCard";

export const CardList = () => {
  return (
    <div className="inline-grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
      <QuoteCard
        bg="from-slate-200"
        txt="text-slate-900"
        quote="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry."
        auth="Someone Important"
      />
      <QuoteCard
        bg="from-blue-200"
        txt="text-blue-900"
        quote="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry."
        auth="Someone Important"
      />
      <QuoteCard
        bg="from-red-200"
        txt="text-red-900"
        quote="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry."
        auth="Someone Important"
      />
      <QuoteCard
        bg="from-yellow-200"
        txt="text-yellow-900"
        quote="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry."
        auth="Someone Important"
      />
      <QuoteCard
        bg="from-pink-200"
        txt="text-pink-900"
        quote="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry."
        auth="Someone Important"
      />
    </div>
  );
};
