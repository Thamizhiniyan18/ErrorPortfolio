import { WriteupMetaData } from "@/lib/types";
import React from "react";
import logoSmallTHM_Color from "../../public/assets/logo-small-thm-color.png";
import logoSmallTHM_White from "../../public/assets/logo-small-thm-white.svg";
import logoHTB_small from "../../public/assets/logo-htb-small.svg";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import clsx from "clsx";
import { Separator } from "../ui/separator";
import { SpotlightCard } from "../Spotlight";

type Props = { data: WriteupMetaData };

const WriteupCardSmall = ({ data }: Props) => {
  return (
    <Link
      href={`/writeups/${data.Title}`}
      className="flex justify-center items-center hover:shadow-xl dark:hover:shadow-white/10 rounded-xl"
    >
      <SpotlightCard className="w-full h-[80px] lg:w-[400px] p-0 rounded-xl flex items-center">
        <Card
          className={clsx(
            "w-full h-[80px] lg:w-[400px] p-0 px-4 rounded-xl flex items-center"
          )}
        >
          <CardHeader className="w-[70px] h-[70px] flex justify-center items-center rounded-xl p-0">
            {data.Platform === "HackTheBox" && (
              <Image
                src={logoHTB_small}
                alt={`${data.Platform} Logo`}
                height={200}
                className="block"
              />
            )}
            {data.Platform === "TryHackMe" && (
              <Image
                src={logoSmallTHM_White}
                alt={`${data.Platform} Logo`}
                height={100}
                className="hidden dark:block"
                priority
              />
            )}
            {data.Platform === "TryHackMe" && (
              <Image
                src={logoSmallTHM_Color}
                alt={`${data.Platform} Logo`}
                width={70}
                className="block dark:hidden"
              />
            )}
          </CardHeader>
          <Separator
            orientation="vertical"
            className="h-[60px] mx-4 bg-muted"
          />
          <CardContent className="w-full flex flex-col justify-center items-start p-0">
            <h3
              className={clsx("", {
                "text-[#9FEF00]": data.Platform === "HackTheBox",
                "text-red-600": data.Platform === "TryHackMe",
              })}
            >
              {data.Title}
            </h3>
          </CardContent>
        </Card>
      </SpotlightCard>
    </Link>
  );
};

export default WriteupCardSmall;
