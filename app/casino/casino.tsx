import {
  Dice1,
  Gem,
  Bomb,
  CircleDot,
  CreditCard,
} from "lucide-react";

const games = [
  { name: "DICE", icon: Dice1 },
  { name: "KENO", icon: Gem },
  { name: "LIMBO", icon: CreditCard },
  { name: "BLACKJACK", icon: CreditCard },
  { name: "PLINKO", icon: CircleDot },
  { name: "MINES", icon: Bomb },
  { name: "HILO", icon: CreditCard },
  { name: "COIN CLIMBER", icon: CircleDot },
  { name: "ROULETTE", icon: CircleDot },
  { name: "PEPE TOWER", icon: CircleDot },
  { name: "WHEEL", icon: CircleDot },
  { name: "COINFLIP", icon: CircleDot },
  { name: "TWENTY ONE", icon: CreditCard },
  { name: "SLIDE", icon: CircleDot },
];

export default function Casino() {
  return (
    <main className="min-h-screen bg-[#020b14] text-white p-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <h1 className="text-4xl font-bold mb-8">Originals</h1>

        {/* Search + Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <input
            placeholder="Search Game"
            className="flex-1 rounded-xl bg-[#071827] px-4 py-3 outline-none border border-[#0d2438]"
          />

          <select className="rounded-xl bg-[#071827] px-4 py-3 border border-[#0d2438]">
            <option>Sort by: Popular</option>
          </select>
        </div>

        <p className="text-slate-400 mb-6">
          Found games: {games.length}
        </p>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-4">
          {games.map((game) => {
            const Icon = game.icon;

            return (
              <div
                key={game.name}
                className="group overflow-hidden rounded-3xl bg-[#071827] cursor-pointer transition hover:-translate-y-1 hover:shadow-2xl"
              >
                {/* Top */}
                <div className="h-40 flex items-center justify-center bg-gradient-to-b from-[#0b2033] to-[#10253c]">
                  <Icon
                    size={72}
                    className="text-cyan-300 transition group-hover:scale-110"
                  />
                </div>

                {/* Bottom */}
                <div className="bg-gradient-to-b from-transparent to-red-500 p-4 text-center">
                  <h3 className="font-extrabold text-2xl leading-tight">
                    {game.name}
                  </h3>

                  <p className="text-xs text-slate-200 mt-1">
                    Winna Originals
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <div className="h-1 w-52 rounded-full bg-cyan-400" />
        </div>

        <p className="text-center text-slate-400 mt-3">
          You viewed: 14 out of 14 Games
        </p>
      </div>
    </main>
  );
}