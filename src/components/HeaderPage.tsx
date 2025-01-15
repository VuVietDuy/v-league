import primaryBackground from "../assets/primary-bg.svg";
import primaryGraphic from "../assets/primary-graphic.svg";

export default function HeaderPage({ title, className, ...props }: any) {
  return (
    <header {...props} className={`relative mb-6 md:mb-8 ${className}`}>
      <div className="relative h-[120px] md:h-[195px] w-full overflow-hidden">
        <img
          className="absolute top-0 bottom-0 left-0 right-0 w-full h-full object-cover"
          src={primaryBackground}
        />
        <img
          className="absolute top-0 bottom-0 left-0 right-0 w-full h-full object-cover"
          src={primaryGraphic}
        />
      </div>
      <h1 className="absolute top-0 left-0 right-0 bottom-0 flex items-center">
        <span className="container m-auto text-xl md:text-6xl text-white font-semibold ">
          {title}
        </span>
      </h1>
    </header>
  );
}
