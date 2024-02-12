import Image from "next/image";
import GridOption from "../components/GridOption";

export default function Home() {
  return (
    <main className="">
      <div className="grid grid-cols-1 grid-flow-row-dense md:grid-cols-4 gap-6 m-6">
        <GridOption
          title="Sweet Gifts For Less"
          image="http://links.papareact.com/1dy"
          className="bg-pink-200 h-full md:h-auto"
        />

        <GridOption
          title="Shop Home"
          image="http://links.papareact.com/szu"
          className="bg-blue-100 col-span-2 row-span-2"
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
      </div>
    </main>
  );
}
