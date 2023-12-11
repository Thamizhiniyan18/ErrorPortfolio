import { WriteupMetaData } from "@/lib/types";
import React from "react";
import logoLargeHTB_Black from "../../public/assets/logo-large-htb-black.png";
import logoLargeHTB_White from "../../public/assets/logo-large-htb-white.svg";
import logoLargeTHM_Color from "../../public/assets/logo-large-thm-color.webp";
import logoLargeTHM_White from "../../public/assets/logo-large-thm-white.svg";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import clsx from "clsx";
import { SpotlightCard } from "../Spotlight";

type Props = { data: WriteupMetaData };

const WriteupCard = ({ data }: Props) => {
  return (
    <Link
      href={`/writeups/${data.Title}`}
      className="flex justify-center items-center hover:shadow-xl dark:hover:shadow-white/10 rounded-xl"
    >
      <SpotlightCard className="rounded-xl">
        <Card
          className={clsx(
            "w-full h-[300px] lg:w-[400px] lg:h-[400px] p-0 border rounded-xl"
          )}
        >
          <CardHeader className="w-full h-[100px] lg:h-[200px] flex justify-center items-center rounded-t-xl border-b-2">
            {data.Platform === "HackTheBox" && (
              <Image
                src={logoLargeHTB_White}
                alt={`${data.Platform} Logo`}
                height={200}
                className="hidden dark:block"
              />
            )}
            {data.Platform === "HackTheBox" && (
              <Image
                src={logoLargeHTB_Black}
                alt={`${data.Platform} Logo`}
                height={200}
                className="block dark:hidden"
              />
            )}
            {data.Platform === "TryHackMe" && (
              <Image
                src={logoLargeTHM_White}
                alt={`${data.Platform} Logo`}
                height={100}
                className="hidden dark:block h-[80px] lg:[100px]"
                priority
              />
            )}
            {data.Platform === "TryHackMe" && (
              <Image
                src={logoLargeTHM_Color}
                alt={`${data.Platform} Logo`}
                height={100}
                className="block dark:hidden h-[80px] lg:[100px]"
              />
            )}
          </CardHeader>
          <CardContent className="w-full flex flex-col justify-center items-start p-4">
            <h3
              className={clsx("", {
                "text-[#9FEF00]": data.Platform === "HackTheBox",
                "text-red-600": data.Platform === "TryHackMe",
              })}
            >
              {data.Title}
            </h3>
            <p className="TypographySmall">{data.Difficulty}</p>
            <p className="TypographySmall">{data.CreatedOn}</p>
          </CardContent>

          <CardFooter className="w-full flex items-center flex-wrap px-4">
            {data.tags?.map((tag) => (
              <Badge key={tag} className="mr-1" variant="default">
                {tag}
              </Badge>
            ))}
          </CardFooter>
        </Card>
      </SpotlightCard>
    </Link>
  );
};

export default WriteupCard;
