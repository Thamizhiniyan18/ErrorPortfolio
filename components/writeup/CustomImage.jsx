import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const CustomImage = async (props) => {
  const getImageData = async (imageUrl) => {
    try {
      const res = await fetch(imageUrl);

      if (!res.ok) {
        throw new Error(
          `Failed to fetch image: ${res.status} ${res.statusText}`
        );
      }

      const buffer = await res.arrayBuffer();

      const plaiceholderData = await getPlaiceholder(Buffer.from(buffer));

      return plaiceholderData;
    } catch (e) {
      if (e instanceof Error) console.log(e.stack);
    }
  };

  const { base64, metadata } = await getImageData(
    `https://raw.githubusercontent.com/Thamizhiniyan18/Writeups/main/${props.src}`
  );

  return (
    <div className="w-full flex justify-center items-center">
      <Dialog>
        <DialogTrigger>
          <Image
            src={`https://raw.githubusercontent.com/Thamizhiniyan18/Writeups/main/${props.src}`}
            alt={`${props.src} writeup related image.`}
            width={metadata.width}
            height={metadata.height}
            placeholder="blur"
            blurDataURL={base64}
          />
        </DialogTrigger>
        <DialogContent className="DialogContent w-full max-w-none flex justify-center items-center p-4">
          <Image
            src={`https://raw.githubusercontent.com/Thamizhiniyan18/Writeups/main/${props.src}`}
            alt={`${props.src} writeup related image.`}
            width={metadata.width}
            height={metadata.height}
            placeholder="blur"
            blurDataURL={base64}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CustomImage;
