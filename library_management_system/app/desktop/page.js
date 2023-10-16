import Image from 'next/image'

export default function Home(){
  return(
    <div className="bg-gradient-to-r from-[#9bf7f4] to-[#707df7]">
      <div className="grid grid-cols-2 place-items-center h-50 ...">
        <div>
          <Image src="/Unisys_logo.png"
                  width={232.5}
                  height={45}
                  alt="Unisys Logo"
                  className="px-12 pt-5"/>
          <div className="pt-24 pb-10">
            <p className="text-5xl p-4 font-serif">Library</p>
            <p className="text-5xl p-4 font-serif">Management</p>
            <p className="text-5xl p-4 font-serif">System</p>
          </div>
          <div className="grid grid-cols-3 gap-6 place-items-center h-56 ...">
            <button className="bg-[#004138] hover:bg-[#368379] text-white py-3 px-7 rounded-3xl">
              Borrow
            </button>
            <button class="bg-[#004138] hover:bg-[#368379] text-white py-3 px-7 rounded-3xl">
              Return
            </button>
            <button class="bg-[#004138] hover:bg-[#368379] text-white py-3 px-7 rounded-3xl">
              Donate
            </button>
          </div>
        </div>
        <div>
        <Image src="/5f68631d2596dddefd5b23a1_Help (2) (1).png"
                width={700}
                height={700}
                alt="Library Management"
                className="left-0 top-0"/>
        </div>
      </div>
    </div>
  )
}