export default function Header() {

    return(
    <div className="flex items-center justify-between bg-[#181818] py-4">
        <div className="flex items-center w-full max-w-6xl mx-auto">
          <span className="text-blue-300 font-bold text-3xl mr-1">{"<"}</span>
          <span className="text-white font-bold text-3xl mr-1">Codr</span>
          <span className="text-blue-300 font-bold text-3xl mr-1">{"/>"}</span>
        </div>
      </div>

    );
}
