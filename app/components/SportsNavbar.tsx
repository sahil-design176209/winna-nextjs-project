import React from "react";
import { useState } from "react";
import {
  Home,
  Tv,
  Star,
  FileText,
  Search,
  Flame,
  ChevronDown,
} from "lucide-react";
import { NavIcons, ThemeIcons } from "./SvgIcons";
import SportsNavDropdown from "./Sportsnavdropdown";

// Types for navigation items
interface SportItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  hasBadge?: boolean;
  isCustomText?: boolean;
  text?: string;
  hasSubBadge?: boolean; // For the icons with the mini sub-boxes attached below
}

export default function SportsNavbar() {
  const [isSportsMenuOpen, setIsSportsMenuOpen] = useState(false);
  const sportsItems: SportItem[] = [
    { id: "wc26", label: "WC 26", isCustomText: true, text: "WC 26" },
    { id: "soccer", icon: <SoccerIcon />, label: "Soccer", hasBadge: true },
    { id: "tennis", icon: <TennisIcon />, label: "Tennis", hasBadge: true },
    {
      id: "basketball",
      icon: <BasketballIcon />,
      label: "Basketball",
      hasBadge: true,
    },
    { id: "cricket", icon: <CricketIcon />, label: "Cricket", hasBadge: true },
    { id: "pingpong", icon: <PingPongIcon />, label: "Table Tennis" },
    { id: "dota", icon: <DotaIcon />, label: "Dota 2" },
    { id: "mma", label: "MMA", isCustomText: true, text: "MMA" },
    {
      id: "soccer-sub",
      icon: <SoccerIcon />,
      label: "Soccer Sub",
      hasBadge: true,
      hasSubBadge: true,
    },
    { id: "hockey", icon: <HockeyIcon />, label: "Ice Hockey", hasBadge: true },
    { id: "valorant", icon: <ValorantIcon />, label: "Valorant" },
    { id: "chess", icon: <ChessIcon />, label: "Chess" },
    { id: "racing", icon: <RacingIcon />, label: "Motorsports" },
    {
      id: "horse",
      icon: <HorseIcon />,
      label: "Horse Racing",
      hasSubBadge: true,
    },
    { id: "volleyball", icon: <VolleyballIcon />, label: "Volleyball" },
    { id: "lol", label: "LoL", isCustomText: true, text: "L" },
    { id: "volta", label: "Volta", icon: <VoltaIcon /> },
    { id: "penalty", label: "Penalty", icon: <PenaltyIcon /> },
  ];

  return (
    <div className="layout-container   px-4 h-14 flex items-center justify-between select-none font-sans">
      {/* Left Row Scroll Container */}
      <div className="flex items-center space-x-4 flex-1 mr-4 py-2">
        {/* Core Control Elements */}
        <div className="flex items-center space-x-5 text-gray-400 shrink-0">
          <button className="hover:text-white transition-colors">
            <NavIcons.HomeIcon />
          </button>

          <button className="hover:text-white transition-colors">
            <NavIcons.LiveIcon />
          </button>

          <button className="hover:text-white transition-colors">
            <NavIcons.StarIcon />
          </button>

          <button className="hover:text-white transition-colors">
            <NavIcons.BetdIcon />
          </button>
        </div>

        {/* Vertical Divider Line */}
        <div className="h-6 w-[1px] bg-body-level-5 shrink-0" />

        <button className="hover:text-white transition-colors">
          <svg
            viewBox="0 0 32 32"
            width={32}
            height={32}
            fill="#99a1af"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m11.897 18.864 1.24 1.24.035-.037a2.63 2.63 0 0 1 3.035-.492l.22.109a.88.88 0 0 0 1.01-.164l7.783-7.783a3.505 3.505 0 1 0-4.957-4.957l-7.783 7.782a.88.88 0 0 0-.164 1.012l.11.219a2.63 2.63 0 0 1-.493 3.035zm-.62.62L9.801 20.96a2.46 2.46 0 0 1-2.52.594.71.71 0 0 0-.725.172l-.547.546a.876.876 0 0 0 0 1.24l2.48 2.479a.876.876 0 0 0 1.239 0l.546-.547a.71.71 0 0 0 .172-.726 2.46 2.46 0 0 1 .594-2.519l1.476-1.476zm-3.806-8.977a3.067 3.067 0 1 1 0-6.135 3.067 3.067 0 0 1 0 6.135m0-.876a2.191 2.191 0 1 0 0-4.382 2.191 2.191 0 0 0 0 4.382M26.46 5.54a5.26 5.26 0 0 1 0 7.436l-7.783 7.782c-.8.8-2.023.999-3.035.493l-.219-.11a.88.88 0 0 0-1.011.165l-2.132 2.132a.71.71 0 0 0-.172.725c.295.885.065 1.86-.594 2.52l-.547.546a2.63 2.63 0 0 1-3.718 0L4.77 24.75a2.63 2.63 0 0 1 0-3.718l.547-.547a2.46 2.46 0 0 1 2.519-.594.71.71 0 0 0 .725-.172l2.133-2.132a.88.88 0 0 0 .164-1.011l-.11-.22a2.63 2.63 0 0 1 .493-3.034l7.782-7.783a5.26 5.26 0 0 1 7.437 0" />
          </svg>
        </button>
        <button className="hover:text-white transition-colors">
          <svg
            viewBox="0 0 32 32"
            width={32}
            height={32}
            fill="#99a1af"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m21.89 15.303 2.04-2.042-2.04-2.04-2.041 2.04zm.63.63 1.41 1.41a7.4 7.4 0 0 0 1.472-2.61l-.842-.842zm3.209-4.47c-.136-1.099-.53-2.117-1.175-2.907l-2.035 2.035 2.041 2.041zm.046 1.214-.585.585.465.465q.097-.526.12-1.05m-4.515 3.255-2.04-2.041-2.042 2.041 2.041 2.041zm.63.63-2.041 2.04.865.866a7.55 7.55 0 0 0 2.587-1.495zm-4.504 3.244 1.204-1.203-2.041-2.041-2.036 2.035c.795.66 1.796 1.064 2.873 1.21m1.203.056a7.5 7.5 0 0 0 1.13-.13l-.5-.5zm-1.411-9.271 2.041 2.041 2.041-2.041-2.04-2.041zm-.63-.63 2.042-2.04-.842-.842a7.4 7.4 0 0 0-2.61 1.472zm4.469-3.209L19.849 7.92l2.04 2.041 2.035-2.034c-.79-.646-1.808-1.04-2.907-1.175m-1.213-.046q-.524.023-1.05.119l.465.466zm-3.255 4.514-2.042 2.041 2.042 2.042 2.04-2.042zm-.63-.63-1.411-1.41a7.55 7.55 0 0 0-1.495 2.587l.865.865zm-3.245 4.504c.146 1.077.55 2.078 1.21 2.874l2.035-2.036-2.041-2.041zm-.056-1.202.63-.63-.499-.5a7.5 7.5 0 0 0-.13 1.13m-1.076 3.658c-1.207 3.288-2.18 5.383-2.963 6.345l-.06.067-1.89 1.889 1.922-1.92c.51-.46 1.416-.959 2.698-1.532a46 46 0 0 1 1.83-.766 77 77 0 0 1 1.84-.7 6.8 6.8 0 0 1-1.995-1.377 6.8 6.8 0 0 1-1.382-2.006m-.709-3.345a9.36 9.36 0 0 1 2.72-6.609c3.346-3.345 9.034-3.555 11.96-.63 2.927 2.927 2.717 8.615-.629 11.96a9.36 9.36 0 0 1-6.608 2.721l-.04.014-.383.128a92 92 0 0 0-4.118 1.5c-.643.254-1.233.5-1.759.735-1.117.5-1.905.934-2.199 1.197L7.259 27.74a.89.89 0 0 1-1.259 0l-1.259-1.26a.89.89 0 0 1 0-1.259l2.484-2.483c.797-1.01 2.024-3.882 3.598-8.504zM6.456 9.242a3.85 3.85 0 0 1 1.029-1.844 3.85 3.85 0 0 1 1.737-1.002 2.23 2.23 0 0 0-1.528-1.43 3.85 3.85 0 0 1-.989 1.686 3.85 3.85 0 0 1-1.748 1.005 2.23 2.23 0 0 0 1.499 1.585m.897.087a2.23 2.23 0 0 0 1.982-2.04 2.96 2.96 0 0 0-1.22.739 2.96 2.96 0 0 0-.762 1.3m-2.431-2.59a2.97 2.97 0 0 0 1.854-1.823 2.23 2.23 0 0 0-1.854 1.823m2.194 3.492a3.116 3.116 0 1 1 0-6.231 3.116 3.116 0 0 1 0 6.231" />
          </svg>
        </button>

        <button className="hover:text-white transition-colors">
          <svg
            data-editor-id="navbarIcon"
            data-cy="sport-basketball"
            width={32}
            height={32}
            fill="#99a1af"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            className="sc-xgfwjj-1 hiaOyi"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.81747 14.5375C5.74947 15.0152 5.71429 15.5035 5.71429 16C5.71429 18.7226 6.77212 21.1982 8.4992 23.0381C9.76418 18.2491 12.8191 14.1388 16.947 11.4075C16.505 10.963 16.0422 10.5416 15.5601 10.145C14.5449 10.7299 13.4025 11.1111 12.1918 11.2384C11.9035 11.2687 11.6127 11.2845 11.3201 11.2856C9.08279 11.5238 7.08484 12.7245 5.81747 14.5375ZM6.24269 12.7368C7.79362 11.2657 9.87392 10.3931 12.1107 10.385C13.0758 10.2825 13.9927 10.0004 14.8243 9.57045C13.5309 8.61229 12.1135 7.82664 10.5963 7.2464C8.56994 8.49996 7.01132 10.4375 6.24269 12.7368ZM18.2824 5.96841C17.5483 5.80209 16.7844 5.71429 16 5.71429C14.4131 5.71429 12.9102 6.07364 11.5681 6.71542C13.0198 7.33693 14.3771 8.14001 15.6196 9.0968C16.7609 8.3209 17.6886 7.24394 18.2824 5.96841ZM19.1205 6.19615C18.5 7.5914 17.5231 8.78011 16.3133 9.65697C16.791 10.0612 17.2498 10.489 17.6886 10.9387C19.3646 9.92716 21.2009 9.13632 23.1533 8.60907C22.0266 7.51835 20.6512 6.68295 19.1205 6.19615ZM15.5043 26.274C16.0451 25.2469 16.4286 22.9117 16.4286 20.2857V19.3441C16.454 17.146 17.4524 15.1817 19.0134 13.8621C18.559 13.223 18.0694 12.614 17.5471 12.0389C13.3913 14.744 10.352 18.8957 9.21044 23.7266C10.9062 25.2179 13.0969 26.1598 15.5043 26.274ZM16.442 26.2764C18.8459 26.1748 21.0363 25.248 22.7374 23.7722C22.368 20.3933 21.2296 17.2483 19.4979 14.5758C18.1425 15.7544 17.2857 17.4914 17.2857 19.4286V20.2857C17.2857 22.7513 16.9665 24.9733 16.442 26.2764ZM25.9545 13.4009C25.2463 13.1376 24.4906 13 23.7143 13C22.4098 13 21.196 13.3886 20.1824 14.0562C21.8937 16.6798 23.0533 19.7407 23.509 23.0294C25.2312 21.1904 26.2857 18.7183 26.2857 16C26.2857 15.1021 26.1707 14.2311 25.9545 13.4009ZM25.638 12.3996C25.214 11.2651 24.5954 10.2255 23.8228 9.32143C21.8423 9.80926 19.981 10.5778 18.2871 11.5796C18.7881 12.1401 19.2596 12.7305 19.6995 13.3479C20.8506 12.5863 22.2307 12.1429 23.7143 12.1429C24.3724 12.1429 25.018 12.2303 25.638 12.3996ZM16 28C9.37258 28 4 22.6274 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16C28 22.6274 22.6274 28 16 28Z"
            />
          </svg>
        </button>
        <button className="hover:text-white transition-colors">
          <svg
            className="sc-xgfwjj-1 hiaOyi "
            viewBox="0 0 32 32"
            width={32}
            height={32}
            fill="#99a1af"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11.04 21.3793C12.368 22.0323 13.8288 22.393 15.3425 22.4261L17.8734 19.5272C17.9026 17.8165 17.5076 16.1267 16.7246 14.6139L11.7195 13.4485C10.675 14.4949 9.86495 15.7551 9.35078 17.1439L11.04 21.3793ZM10.7764 22.204L9.08458 23.6141C10.9111 25.274 13.3374 26.2857 16 26.2857C16.511 26.2857 17.0133 26.2485 17.5043 26.1765L15.3359 23.2833C13.7356 23.25 12.1884 22.8783 10.7764 22.204ZM5.7343 16.6469H8.62297C9.20019 15.1755 10.086 13.8441 11.2164 12.7406V9.62205C10.2129 9.37945 9.1786 9.29054 8.14698 9.35692C6.6294 11.1491 5.71429 13.4677 5.71429 16C5.71429 16.2173 5.72102 16.433 5.7343 16.6469ZM22.9116 19.3483C23.8049 18.4384 24.5225 17.3714 25.0254 16.2017L23.6597 11.542C22.5016 10.9523 21.2395 10.587 19.9272 10.4698L17.6048 14.4567C18.3 15.8824 18.6825 17.4437 18.7275 19.033L22.9116 19.3483ZM23.4088 20.0636V23.1348C25.0358 21.4457 26.0906 19.2017 26.2613 16.7145L25.7741 16.6293C25.2096 17.9111 24.4065 19.0765 23.4088 20.0636ZM23.9985 9.53268C22.4866 7.66509 20.3338 6.33759 17.8747 5.88473C17.5281 6.28981 17.2149 6.71981 16.9371 7.17124L19.7454 9.596C21.1338 9.68779 22.4749 10.0354 23.7142 10.6149L23.9985 9.53268ZM16.0845 6.92604C16.3235 6.51838 16.5885 6.12608 16.8785 5.75128C16.5889 5.72678 16.2959 5.71429 16 5.71429C13.2876 5.71429 10.8204 6.76421 8.98261 8.47983C9.78915 8.49238 10.5923 8.59246 11.3784 8.77945C11.4114 8.75319 11.4487 8.73155 11.4894 8.71569L16.0845 6.92604ZM16 28C9.37258 28 4 22.6274 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16C28 22.6274 22.6274 28 16 28Z" />
          </svg>
        </button>
        <button className="hover:text-white transition-colors">
          <svg
            viewBox="0 0 32 32"
            width={32}
            height={32}
            fill="#99a1af"
            xmlns="http://www.w3.org/2000/svg"
            className="size-6 "
          >
            <path d="m12.655 23.679 5.917-2.536q2.217-.858 3.428-.857c.533 0 1.313.237 1.714.857s.26 1.195-.857 1.714q-.387.183-3.428 0-7.432 3.455-10.261 4.286l-.08.023a6 6 0 0 1-.681.335c-.794.332-1.683.507-2.695.507a.857.857 0 0 1 0-1.714c.787 0 1.452-.131 2.033-.374.757-.317 1.042-.55 2.102-1.583a7 7 0 0 1 .434-.396c.786-.786 1.316-1.737 2.42-4.127l.152-.326c2.019-4.35 3.517-6.081 6.58-6.051.622.004 1.433.266 2.893.845 2.304.913 2.119.843 2.333.873-.062-.01.038-.04.17-.097.22-.096.484-.239.737-.4.2-.126.382-.257.525-.376-.1-.037-.102-.039-.189-.078-1.985-.984-3.558-2.032-3.877-3.122-.15-.577-.58-.988-1.035-1.087a3 3 0 0 0-.385-.021l-.665.005c-.577 0-1.005-.032-1.418-.13-.722-.175-1.28-.55-1.584-1.187l-.037-.09c-.03-.086-.011-.017-.075-.261-.497.096-1.227.324-1.969.61l.134.04c.176.053.32.108.448.177.325.176.558.418.558.87 0 .692-2.308 2.93-3.746 4.095-.015.011-.015.011-.03.025-.034.028-.496.442-.691.603a8.3 8.3 0 0 1-1.23.848c-1.19.671-2.656 1.115-4.512 1.283a.857.857 0 0 1-.153-1.708c1.618-.146 2.849-.519 3.823-1.068a6.6 6.6 0 0 0 .98-.676c.161-.134.617-.543.682-.597l.052-.043c.35-.283 1.206-1.064 1.922-1.757a33 33 0 0 0 .606-.603l-.018-.004-.027-.005a13 13 0 0 1-.928-.219 2.5 2.5 0 0 1-.433-.16c-.343-.171-.582-.398-.582-.871 0-.98 3.216-2.295 5.014-2.562 1.023-.155 1.517.37 1.744 1.235l.036.138c.062.092.185.164.417.22.25.06.563.083 1.016.082.094 0 .55-.005.673-.004.28 0 .487.013.71.053 1.116.242 2.047 1.132 2.355 2.311.107.364 1.588 1.35 2.95 2.027.02.01.013.006.148.056.222.081.367.146.532.254.447.296.708.764.689 1.387-.068 1.065-2.536 2.628-3.55 2.508-.296-.043-.672-.164-1.238-.38-.317-.12-1.643-.652-1.513-.6-1.214-.482-1.961-.723-2.277-.725-2.124-.02-3.264 1.296-5.01 5.06l-.15.323c-.667 1.441-1.143 2.404-1.603 3.145M14.31 9.743l.019-.024zm12.041 4.64.007.006.003.003zm-.03-.323.01-.012.005-.006z" />
          </svg>
        </button>
        <button className="hover:text-white transition-colors">
          <svg
            viewBox="0 0 32 32"
            width={32}
            height={32}
            fill="#99a1af"
            xmlns="http://www.w3.org/2000/svg"
            className="size-6"
          >
            <path d="M4.005 23.474c.274-2.66 1.24-4.527 3.34-7.004l-.687-.001c-1.471-.006-2.534-1.2-1.56-2.348.879-1 2.141-1.716 4.012-2.449.297-.116.6-.23.992-.373l.63-.23-.034-.017-.173-.085-.05-.024c-.473-.229-.659-.33-.868-.513-.573-.501-.596-1.324.11-1.795 1.67-1.13 3.516-1.684 5.72-1.919l.172-.018.486-.055c1.89-.217 3.002-.258 4.326-.033.299-.498.66-1.122.66-1.122.337-.552.62-.926.97-1.224l.156-.108c.666-.358 1.3-.065 1.636.518.156.27.252.578.349 1.02.025.115.099.473.099.475q.042.199.06.247c.076.284.618 2.47.899 3.579.1.269.308.78.642 1.585.186.45.946 2.274 1.079 2.593l.04.098c1.41 3.393 1.826 4.446 1.826 4.859l.002.243c.001.551-.038 1.014-.169 1.494-.187.691-.539 1.265-1.105 1.654-1.332.917-3.629.25-4.727-1.043a3.6 3.6 0 0 1-.392-.598 10 10 0 0 1-.375-.785c-.058-.134-.047-.106-.15-.352-1.117-.666-1.923-1.21-2.627-1.825-.256.746-.333 1.706-.236 2.732.126.249.262.511.453.876a72 72 0 0 1 .78 1.508c.77 1.544 1.223 2.72 1.436 3.924a.887.887 0 1 1-1.747.31c-.177-1.001-.575-2.037-1.277-3.44a71 71 0 0 0-.764-1.48c-.232-.443-.385-.74-.54-1.046a.9.9 0 0 1-.088-.3c-.221-1.993.074-3.861 1.081-5.094a.887.887 0 0 1 1.34-.04c.837.911 1.733 1.549 3.345 2.497a.9.9 0 0 1 .37.424c.22.53.183.441.252.6.114.264.214.475.306.646.076.14.143.243.191.302.562.661 1.892 1.047 2.363.723.18-.124.313-.34.4-.657.079-.295.107-.618.105-1.024l-.002-.243c0 .077 0 .072-.002.066a6 6 0 0 0-.096-.287 33 33 0 0 0-.386-1.013c-.288-.73-.67-1.664-1.205-2.95l-.04-.098c-.132-.317-.893-2.142-1.08-2.595a59 59 0 0 1-.684-1.692l-.027-.09c-.279-1.1-.835-3.34-.887-3.546a3 3 0 0 1-.1-.395l-.008-.04c-.17.293-.722 1.237-.951 1.588a.89.89 0 0 1-.932.381c-1.387-.303-2.369-.29-4.367-.06l-.493.056-.179.02c-1.513.16-2.807.484-3.967 1.068l1.608.804a.887.887 0 0 1 .018 1.578c-.411.217-.897.418-1.644.694-.2.075-.935.342-.929.34-.38.139-.671.248-.954.359-1.166.457-2.04.895-2.675 1.372h.651l1.59-.001c.772 0 1.175.92.65 1.488-2.785 3.018-3.929 4.805-4.204 7.473a.887.887 0 1 1-1.764-.182M20.829 12.92a.887.887 0 1 1 0-1.774.887.887 0 0 1 0 1.773" />
          </svg>
        </button>
        <button className="hover:text-white transition-colors">
          <svg
            width={30}
            height={30}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x={6}
              y={10}
              width={20}
              height={16}
              rx={2}
              stroke="#99a1af"
              strokeWidth={2}
            />
            <path
              d="M11 10L16 5L21 10"
              stroke="#99a1af"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 18L15 21L20 15"
              stroke="#99a1af"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button className="hover:text-white transition-colors">
          <svg
            width={30}
            height={30}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx={11} cy={9} r={3} fill="#99a1af" />
            <path
              d="M11 12V18"
              stroke="#99a1af"
              strokeWidth={2}
              strokeLinecap="round"
            />
            <path
              d="M11 14L7 17"
              stroke="#99a1af"
              strokeWidth={2}
              strokeLinecap="round"
            />
            <path
              d="M11 14L16 16"
              stroke="#99a1af"
              strokeWidth={2}
              strokeLinecap="round"
            />
            <path
              d="M11 18L8 24"
              stroke="#99a1af"
              strokeWidth={2}
              strokeLinecap="round"
            />
            <path
              d="M11 18L15 24"
              stroke="#99a1af"
              strokeWidth={2}
              strokeLinecap="round"
            />
            <circle cx={22} cy={12} r="2.5" fill="#99a1af" opacity="0.7" />
            <path
              d="M22 14.5V19"
              stroke="#99a1af"
              strokeWidth={2}
              strokeLinecap="round"
              opacity="0.7"
            />
            <path
              d="M22 16L19 18"
              stroke="#99a1af"
              strokeWidth={2}
              strokeLinecap="round"
              opacity="0.7"
            />
            <path
              d="M22 16L25 18"
              stroke="#99a1af"
              strokeWidth={2}
              strokeLinecap="round"
              opacity="0.7"
            />
          </svg>
        </button>

        {/* Sports Map Loop */}
        <div className="flex items-center space-x-[18px] relative ">
          {/* Dropdown Chevron arrow for extra items */}
          <button
            className="text-white  "
            onClick={() => setIsSportsMenuOpen(!isSportsMenuOpen)}
          >
            <ThemeIcons.ChevronDownIcon />
          </button>
          {isSportsMenuOpen && (
            <div className="absolute left-1/2 -translate-x-1/2 top-[40px] mt-2 w-[1260px] max-w-[1260px] z-[9999] rounded-xl bg-body-level-3 border border-body-level-3 shadow-2xl p-[24px] text-sm text-typography-secondary">
              <SportsNavDropdown />
            </div>
          )}
        </div>
      </div>

      {/* Global Right Action Element */}
      <div className="flex items-center text-gray-400 shrink-0 pl-2">
        <button className="p-1 hover:text-white transition-colors">
          <Search className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

/* Custom Minimal Inline Sports SVGs matching layout shapes */
const SoccerIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-5 h-5"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
  </svg>
);

const TennisIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="w-5 h-5"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M6 12c0-3.314 2.686-6 6-6M12 18c3.314 0 6-2.686 6-6" />
  </svg>
);

const BasketballIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="w-5 h-5"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10M12 2a15.3 15.3 0 0 0-4 10 15.3 15.3 0 0 0 4 10M2 12h20" />
  </svg>
);

const CricketIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-5 h-5 transform rotate-45"
  >
    <path d="M11 2h2v14h-2zM9 16h6v4H9zM12 20v2" />
  </svg>
);

const PingPongIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-5 h-5"
  >
    <circle cx="10" cy="10" r="6" />
    <path d="M14 14l6 6M17 11a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
  </svg>
);

const DotaIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M2 2v20l3-3h14l3 3V2H2zm3 3h4v4H5V5zm10 10H9V9h6v6zm4 4h-4v-4h4v4z" />
  </svg>
);

const HockeyIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-5 h-5"
  >
    <path d="M6 4v12a4 4 0 0 0 4 4h4" strokeLinecap="round" />
    <circle cx="16" cy="18" r="2" fill="currentColor" />
  </svg>
);

const ValorantIcon = () => (
  <svg viewBox="0 0 100 100" fill="currentColor" className="w-[32px] h-[32px]">
    <path d="M10 20 L45 20 L30 80 Z" />
    <path d="M90 20 L55 20 L70 80 Z" opacity="0.7" />
  </svg>
);

const ChessIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-5 h-5"
  >
    <path d="M19 21H5M7 14h10M17 14l-2-6h-1V5h1V3H9v2h1v3H9l-2 6M12 11h.01" />
  </svg>
);

const RacingIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-5 h-5"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
  </svg>
);

const HorseIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-5 h-5"
  >
    <path d="M4 21c2-3 4-4 7-4h2c3 0 5 1 7 4M12 3c-2 0-4 2-4 5v3c0 2 1 4 4 4s4-2 4-4V8c0-3-2-5-4-5z" />
  </svg>
);

const VolleyballIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="w-5 h-5"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2c0 5.523-4.477 10-10 10M22 12c-5.523 0-10 4.477-10 10M12 22C12 16.477 16.477 12 22 12M2 12c5.523 0 10-4.477 10-10" />
  </svg>
);

const VoltaIcon = () => (
  <span className="text-[7px] font-black italic tracking-tighter scale-90">
    VOLTA
  </span>
);

const PenaltyIcon = () => (
  <span className="text-[6px] font-black tracking-tight uppercase">
    Penalty
  </span>
);
