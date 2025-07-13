import Image from "next/image";
import robot_img from '../../public/robot_hi.jpg'

export default function Home() {
  return (
    <div>
      <div className="hero-section flex">
        <div className="p-2 m-2 text-center">
          <Image
            src="/robot_hi.jpg"
            width={400}
            height={400}
            alt="hero-section-image"
          />
          <p className="m-1 font-roboto">Default Quality</p>
        </div>
        <div className="p-2 m-2 text-center">
          <Image
            src={robot_img}
            width={400}
            height={400}
            alt="hero-section-image"
            quality={100}
            priority={true}
            blurDataURL=""
            placeholder="blur"
          />
          <p className="m-1 font-oswald">High Quality</p>
        </div>
      </div>
    </div>
  );
}
