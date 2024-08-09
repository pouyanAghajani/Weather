import lgsea from '../../assets/image/lgsea.webp';
import mdsea from '../../assets/image/mdsea.webp';
import sea from '../../assets/image/sea.png';
import smsea from '../../assets/image/smsea.webp';
import xlsea from '../../assets/image/xlsea.webp';
import xssea from '../../assets/image/xssea.webp';

const Baner: React.FC = () => {
  return (
    <>
      <img src={sea} alt="Error" className="hidden w-full 2xl:block" />
      <img
        src={xlsea}
        alt="Error"
        className="hidden w-full xl:block 2xl:hidden"
      />
      <img
        src={lgsea}
        alt="Error"
        className="hidden w-full lg:block xl:hidden"
      />
      <img
        src={mdsea}
        alt="Error"
        className="hidden w-full md:block lg:hidden"
      />
      <img
        src={smsea}
        alt="Error"
        className="hidden w-full sm:block md:hidden"
      />
      <img src={xssea} alt="Error" className="block w-full sm:hidden" />
    </>
  );
};
export default Baner;
