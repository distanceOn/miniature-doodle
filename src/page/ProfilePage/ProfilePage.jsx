import { CgProfile } from "react-icons/cg";
import { Rectangle } from "../../assets/icon/index";
const ProfilePage = (name, lastName, email) => {
  return (
    <div className="absolute top-0 left-0 profile-background  w-full h-[350px] ">
      <div className="flex mt-[250px] items-center justify-center w-full">
        <CgProfile className="w-48 h-48 " />
      </div>
      <div className="flex items-center justify-center mt-2 flex-col">
        <h1 className="font-sans text-3xl  text-center font-medium">
          Максим Кравцов {/* {name} {lastName} */}
        </h1>
        <p className="font-normal font-sans text-sm break-words mt-1">
          почта:maximkravtsov3355@icloud.com
          {/* {email} */}
        </p>
      </div>
      <div className="flex w-full items-center justify-center ">
        <div className=" flex items-center justify-center max-w-64">
          <div className="flex items-center mt-5 justify-between">
            <div className="flex flex-col w-full mx-3">
              <p className="font-sans text-[#000000]   text-center text-2xl">
                5
              </p>
              <p className="font-sans  text-[#6C6C6C]  text-center text-base	">
                Уровень
              </p>
            </div>
            <Rectangle w="4" h="80" />
            <div className="flex flex-col w-full mx-3">
              <p className="font-sans  text-[#000000]  text-center text-2xl">
                12
              </p>
              <p className="font-sans  text-[#6C6C6C]  text-center text-base	">
                Призы
              </p>
            </div>
            <Rectangle w="4" />
            <div className="flex w-full flex-col  mx-3">
              <p className="font-sans  text-[#000000]  text-center text-2xl">
                82 км
              </p>
              <p className="font-sans  text-[#6C6C6C] text-center text-base	">
                Растояния
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full mt-14">
        <button className=" bg-MyOrange1 text-black py-3 px-4 rounded-lg  xs:w-48 xs:h-14 text-center w-44 h-12 hover:opacity-80 transition-all">
          <p className="text-white font-sans font-bold text-base ">Выйти </p>
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
