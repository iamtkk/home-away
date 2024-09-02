import Image from "next/image";

const ImageContainer = ({
  mainImage,
  name,
}: {
  mainImage: string;
  name: string;
}) => {
  return (
    <section className="h-[300px] md:h-[500px] relative mt-8">
      <Image
        className="object-cover rounded"
        src={mainImage}
        fill
        sizes="100vw"
        alt={name}
        priority
      />
    </section>
  );
};
export default ImageContainer;
