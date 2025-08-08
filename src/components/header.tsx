import { Link } from "react-router-dom";
import { Button } from "./ui/button";

import settings from "../../settings.json";
import { MenuIcon, XIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { PopoverClose } from "@radix-ui/react-popover";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-20 h-16 w-full border-b bg-white/80 backdrop-blur-sm lg:h-20">
      <div className="container flex h-full items-center justify-between font-semibold text-zinc-500">
        <div className="hidden h-full w-full items-center justify-center lg:flex">
          {settings.navlinks.map((navlink, i) => {
            return (
              <Button key={i} variant="ghost" asChild className="uppercase">
                <Link to={navlink.href}>{navlink.title}</Link>
              </Button>
            );
          })}
        </div>

        <h2 className="font-corinthia text-4xl lg:hidden select-none text-[#baaa9e]">R e N</h2>

        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              {open ? (
                <XIcon className="size-4" />
              ) : (
                <MenuIcon className="size-4" />
              )}
            </Button>
          </PopoverTrigger>

          <PopoverContent
            className="flex w-[85vw] flex-col gap-3 lg:hidden"
            align="end"
          >
            {settings.navlinks.map((navlink, i) => {
              return (
                <PopoverClose asChild>
                  <Button
                    key={i}
                    variant="ghost"
                    asChild
                    className="w-full bg-zinc-50 uppercase"
                  >
                    <Link to={navlink.href}>{navlink.title}</Link>
                  </Button>
                </PopoverClose>
              );
            })}
          </PopoverContent>
        </Popover>

        {/* <div className="absolute left-0 top-16 z-20 flex w-full flex-col gap-2 border-b bg-white p-4 shadow-sm">
        </div> */}
      </div>
    </header>
  );
}
