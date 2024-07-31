import logo from "../assets/cotsche_vector.svg";
import { navigation } from "../constants";

const Header = () => {
  return (
    <div className="fixed top-0 z-50 backgrop-blur-sm border-b border-n-6 lg: bg-n-8/90 lg:backgrop-blur-sm">
      <div className="flex items-center px-1 lg:px-1.5 xl:px-2 max-lg:py-0.8">
        <a className="block w-[20rem] xl:mr-8" href="#hero">
          <img src={logo} width={200} />
        </a>

        <nav className="hidden fixed top-5[rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg: bg-transparent">
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a key={item.id} href={item.url}>
                {item.title}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
