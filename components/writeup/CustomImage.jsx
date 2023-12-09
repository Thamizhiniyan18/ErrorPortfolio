import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import Link from "next/link";
import { Button } from "../ui/button";

const CustomImage = async (props) => {
  if (props.src.endsWith(".webm")) return "";

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

  const data = await getImageData(
    `https://raw.githubusercontent.com/Thamizhiniyan18/Writeups/main/${props.src}`
  );

  return (
    <div className="w-full flex justify-center items-center">
      <Dialog>
        <DialogTrigger>
          <Image
            src={`https://raw.githubusercontent.com/Thamizhiniyan18/Writeups/main/${props.src}`}
            alt={`${props.src} writeup related image.`}
            width={data && data.metadata.width}
            height={data && data.metadata.height}
            placeholder="blur"
            blurDataURL={data && data.base64}
          />
        </DialogTrigger>
        <DialogContent className="DialogContent w-3/4 max-w-none bg-transparent border-none flex flex-col justify-center items-center p-4">
          <Image
            src={`https://raw.githubusercontent.com/Thamizhiniyan18/Writeups/main/${props.src}`}
            alt={`${props.src} writeup related image.`}
            width={data && data.metadata.width}
            height={data && data.metadata.height}
            placeholder="blur"
            blurDataURL={data && data.base64}
          />
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Link
                href={`https://raw.githubusercontent.com/Thamizhiniyan18/Writeups/main/${props.src}`}
                target="_blank"
              >
                <Button type="button" variant="secondary">
                  Click to view in browser
                </Button>
              </Link>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CustomImage;
