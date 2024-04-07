import { Link } from "react-router-dom";
import {
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
} from "../../assets/img/index";
import { Dots } from "../../assets/icon/index";
const AboutPage = () => {
  return (
    <div className="absolute top-0 left-0 about-background w-full h-full ">
      <div className="flex xs:mt-[288px] mt-[210px] items-center justify-center">
        <div className="flex flex-col  sm:w-[555px] xs:w-[390px] w-[280px]">
          <h className="font-shoebox-right font-normal md:text-5xl sm:text-4xl xs:text-3xl text-2xl mb-5 text-white">
            Время путешествовать
          </h>
          <p className="text-xl/8  font-sans text-white  opacity-60">
            Отправляйтесь в захватывающее приключение по огромным просторам
            нашей страны. Выберите путешествие на автомобиле или доме на колёсах
          </p>
          <Link to="/login">
            <button className=" mt-5 bg-MyOrange1 text-black py-3 px-4 rounded-lg  xs:w-48 xs:h-14 text-center w-44 h-12 hover:opacity-80 transition-all">
              <p className="text-white font-sans font-bold text-base ">Войти</p>
            </button>
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center mt-[350px] sm:mt-[450px] mb-[200px]">
        <div className="flex flex-col sm:flex-row sm:w-[555px] xs:w-[390px] w-[280px]">
          <div className="h-48 w-74 flex flex-wrap justify-between">
            <div className="flex justify-around w-full mt-[-6rem]">
              <img
                src={photo1}
                alt="photo"
                className="w-16 h-16 rounded mt-14 mr-16  -ml-7"
              />
              <img
                src={photo2}
                alt="photo"
                className="w-16 h-16 rounded mr-10 -ml-14"
              />
              <img
                src={photo4}
                alt="photo"
                className="w-14 h-14 rounded mt-5 "
              />
            </div>
            <div className="items-center justify-center flex w-full -mt-12">
              <img src={photo3} alt="photo" className="w-32 h-32 rounded" />
            </div>
            <div className="flex justify-around w-full mb-10 mt-5">
              <img src={photo5} alt="photo" className="w-16 h-16 rounded" />
              <img src={photo6} alt="photo" className="w-16 h-16 rounded" />
            </div>

            <Dots className="w-20 h-8 " />
          </div>
          <div>
            <h className="">
              Выберите рекомендуемый маршрут или создайте свой.
            </h>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;