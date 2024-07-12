import { Card } from "flowbite-react";
export const HomeproductCard = () => {
  return (
    <>
      <div className="absolute largelaptops:top-[70vw] text-xl left-[1%] h-1/3 flex place-content-between midmobile:top-[140vh]">
        FlashSale
      </div>

      <div>
        <button
          type="button"
          className="text-white bg-orange-500  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 absolute right-[2vw] top-[150vh] midmobile:translate-y-[-10vh] h-[4vh]"
        >
          <svg
            className="w-3.5 h-3.5 me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 21"
          >
            <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z ]" />
          </svg>
          Buy now
        </button>
      </div>

      {/* First */}
      <Card
        className=" relative left-2 midmobile:top-[72vh] midmobile:w-[46vw] midmobile:h-[25vh] largelaptops:h-[32px] largelaptops:w-[20vw] largelaptops:top-[41vh]"
        imgSrc="https://static-01.daraz.com.np/p/abb97310e8cd81c2db73505bb3c56ceb.jpg"
      >
        <a href="#">
          <h6 className="largelaptops:text-[15px] font-semibold tracking-tight text-gray-900 dark:text-white midmobile:text-[13px] midmobile:text-center midmobile:translate-y-2">
            Fantech Gaming Mouse
          </h6>
        </a>


        <div className="flex items-center justify-between"></div>
        <div className="flex items-center justify-between w-[17vw]">
          <span className="largelaptops:text-2xl text-center font-bold text-gray-900 dark:text-white animate-glow largelaptops:mt-[-30px] midmobile:mt-[-10px] midmobile:text-[4vw]">
             Rs153
          </span>
          <a
            href="#"
            className="rounded-lg bg-orange-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800 mt-[-20px] midmobile:h-[4vh] largelaptops:h-[6vh] largelaptops:ml-0 midmobile:translate-x-10"
          >
            Add to cart
          </a>
        </div>

        {/* 2nd */}
      </Card>
      <Card
        className="relative left-2 midmobile:translate-x-[47vw] midmobile:top-[72vh] midmobile:w-[48vw] midmobile:h-[25vh] midmobile:translate-x-[45vw largelaptops:h-[32px] largelaptops:w-[20vw] midmobile:translate-y-[-25vh] largelaptops:translate-x-[25vw] largelaptops:translate-y-[-36vh]"
        imgSrc="https://np-live-21.slatic.net/kf/Sd0e16b67e97448599d7c169057ac89546.jpg"
      >
              <a href="#">
          <h6 className="largelaptops:text-[15px] font-semibold tracking-tight text-gray-900 dark:text-white midmobile:text-[13px] midmobile:translate-y-0">
            Ladies Diamond Watch
          </h6>
        </a>
        <div className="flex items-center"></div>
        <div className="flex items-center justify-between w-[17vw]">
          <span className="largelaptops:text-2xl text-center font-bold text-gray-900 dark:text-white animate-glow mt-[-30px] midmobile:text-[4vw]">
            Rs333
          </span>
          <a
            href="#"
            className="rounded-lg bg-orange-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800 mt-[-20px] largelaptops:h-[6vh] largelaptops:ml-0 midmobile:translate-x-10 midmobile:h-[4vh]"
          >
            Add to cart
          </a>
        </div>
      </Card>

      {/* 3rd */}
      <Card
        className="relative midmobile:top-[56vh] midmobile:w-[46vw] midmobile:translate-x-2 midmobile:h-[25vh] largelaptops:h-[20px] largelaptops:w-[19vw] largelaptops:top-[31vh] largelaptops:left-[50vw] "
        imgSrc="https://np-live-21.slatic.net/kf/S4be5e6db8b2a485eb081e5e89508a609X.jpg"
      >
        <a href="#">
          <h6 className="largelaptops:text-[15px] font-semibold tracking-tight text-gray-900 dark:text-white largelaptops:translate-y-[23px] midmobile:text-[13px] midmobile:translate-y-2">
            Women V-Neck Short
          </h6>
        </a>
        <div className="flex items-center"></div>
        <div className="flex items-center justify-between w-[17vw]">
          <span className="largelaptops:text-2xl text-center font-bold text-gray-900 dark:text-white animate-glow largelaptops:tranlsate-y-[15px] midmobile:text-[4vw]">
            Rs1113
          </span>
          <a
            href="#"
            className="rounded-lg bg-orange-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800 largepatops:translate-y-[4vh] largelaptops:h-[6vh] largelaptops:ml-0 midmobile:translate-x-10 midmobile:h-[4vh]"
          >
            Add to cart
          </a>
        </div>
      </Card>

      {/* 4th */}
      <Card
        className="relative midmobile:top-[31vh] midmobile:w-[46vw] midmobile:h-[25vh] largelaptops:h-[32px] largelaptops:w-[20.2vw] largelaptops:top-[26.5vh] largelaptops:left-[75vw] midmobile:left-[51vw]"
        imgSrc="https://static-01.daraz.com.np/p/153ff015490b0c78e34227aa219daccd.jpg_400x400q75-product.jpg_.webp"
      >
        <a href="#">
          <h6 className="largelaptops:text-[15px] font-semibold tracking-tight text-gray-900 dark:text-white largelaptops:translate-y-[23px] midmobile:text-[13px] midmobile:translate-y-2 midmobile:text-center ">
            Water Bottle's
          </h6>
        </a>
        <div className="flex items-center"></div>
        <div className="flex items-center justify-between w-[17vw]">
          <span className="largelaptops:text-2xl text-center font-bold text-gray-900 dark:text-white animate-glow largelaptops:tranlsate-y-[15px] midmobile:text-[4vw]">
            Rs463
          </span>
          <a
            href="#"
            className="rounded-lg bg-orange-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800 largepatops:translate-y-[4vh] largelaptops:h-[6vh] largelaptops:ml-0 midmobile:translate-x-10 midmobile:h-[4vh]"
          >
            Add to cart
          </a>
        </div>
      </Card>
    </>
  );
};
