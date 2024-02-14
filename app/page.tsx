import Image from "next/image";
import GridOption from "../components/GridOption";
import pex from "../public/pex.webp";
import wardbord from "../public/wordbode.jpg";
import any from "../public/any.webp";
import fd from "../public/fd.jpg";
export default function Home() {
  return (
    <main className="flex-1">
      <div className="grid grid-cols-1 grid-flow-row-dense md:grid-cols-4 gap-6 m-6">
        <GridOption
          title="Sweet Gifts For Less"
          image={pex}
          className="bg-pink-200 h-full md:h-32"
        />
        <GridOption
          title="Shop Wardrobe"
          image={wardbord}
          className="bg-blue-100 col-span-2 row-span-2"
        />
        <GridOption
          title="Shop Home"
          image="http://links.papareact.com/szu"
          className="bg-pink-200 row-span-2"
        />
        <GridOption
          title="Shop Electronics"
          image="http://links.papareact.com/n7r"
          className="bg-yellow-100 h-64"
        />
        <GridOption
          title="Shop toys"
          image="http://links.papareact.com/pj2"
          className="bg-green-100 h-60 col-span-2"
        />

        <GridOption
          title="Shop toys"
          image={any}
          className="bg-red-100 col-span-2 row-span-2"
        />

        <GridOption
          title="Shop Gadgets"
          image="http://links.papareact.com/gs1"
          className="bg-orange-100 h-64"
        />
        <GridOption
          title="Shop Beauty"
          image="http://links.papareact.com/4y0"
          className="bg-blue-100 h-64"
        />
        <GridOption
          title="Shop Sports"
          image="http://links.papareact.com/sq2"
          className="bg-blue-100 h-64"
        />
        <GridOption
          title="Enjoy Free Shiping"
          image="http://links.papareact.com/9fh"
          className="bg-rose-100 h-64"
        />
        <GridOption
          title="Flash Deals"
          image={fd}
          className="bg-orange-200 h-64 col-span-2"
        />
      </div>
    </main>
  );
}
