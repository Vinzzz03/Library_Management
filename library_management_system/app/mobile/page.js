import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-[#9bf7f4] to-[#707df7]">
      <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center h-screen">
        <div className="text-center">
          <Image
            src="/Unisys_logo.png"
            width={232.5}
            height={45}
            alt="Unisys Logo"
            className="px-12 pt-5"
          />
          <Image
            src="/5f68631d2596dddefd5b23a1_Help (2) (1).png"
            width={700}
            height={700}
            alt="Library Management"
            className="mt-10"
          />
          <div className="pt-5">
            <p className="text-4xl sm:text-5xl p-4 font-serif">Library</p>
            <p className="text-4xl sm:text-5xl p-4 font-serif">Management</p>
            <p className="text-4xl sm:text-5xl p-4 font-serif">System</p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-3 gap-2 place-items-center mt-5">
            <button className="bg-[#004138] hover:bg-[#368379] text-white py-3 px-7 rounded-3xl">
              Borrow
            </button>
            <button className="bg-[#004138] hover:bg-[#368379] text-white py-3 px-7 rounded-3xl mt-3 sm:mt-0">
              Return
            </button>
            <button className="bg-[#004138] hover.bg-[#368379] text-white py-3 px-7 rounded-3xl mt-3 sm:mt-0">
              Donate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
