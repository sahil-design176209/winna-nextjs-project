"use client";

const matches = [
  {
    date: "Today, 03:30:00 PM",
    team1: "England",
    team2: "New Zealand",
  },
  {
    date: "Today, 06:30:00 PM",
    team1: "West Indies",
    team2: "Sri Lanka",
  },
  {
    date: "Sunday, 01:00:00 PM",
    team1: "Zimbabwe",
    team2: "Bangladesh",
  },
];

export default function LiveMatchCarousel() {
  return (
    <div className="w-full">
 

      <div className="flex gap-2 overflow-x-auto scrollbar-hide ">
        {matches.map((match, index) => (
          <div
            key={index}
            className="min-w-[120px] rounded-lg bg-body-level-7 p-2 py-1  h-[56px]"
          >
            <p className="text-[10px] font-medium text-typography-gray">
              {match.date}
            </p>

            <div className="text/7" >
              <p className="text-[12px] font-bold leading-4 text-typography-gray">
                {match.team1}
              </p>

              <p className="text-[12px] font-bold leading-4 text-typography-gray">
                {match.team2}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}