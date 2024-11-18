import React from "react";
import {
  ChevronDown,
  Heart,
  Search,
  ShoppingBasket,
  UserRound,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  return (
    <nav className="w-full h-fit font-poppins mb-10">
      <div className="bg-[#001F54] w-full h-24 flex items-center justify-center">
        <h5 className="text-white font-bold text-xs">
          GET YOUR STYLE WITH JINISO! DISKON UP TO 70% + DISKON 20RB!
        </h5>
      </div>
      <div className="p-8 xl:px-24 flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <div className="bg-purple-900 rounded-full size-8" />
          <div className="w-1/3 flex justify-end gap-[2em]">
            <Heart className="hover:text-purple-900 hover:scale-[0.98] animate-ease cursor-pointer" />
            <ShoppingBasket className="hover:text-purple-900 hover:scale-[0.98] animate-ease cursor-pointer" />
            <UserRound className="hover:text-purple-900 hover:scale-[0.98] animate-ease cursor-pointer" />
          </div>
        </div>
        <div className="flex justify-between gap-6">
          <div className="flex gap-8 text-sm text-[#1E1E1E] font-medium">
            <DropdownMenu>
              <DropdownMenuTrigger className="relative flex gap-2 items-center min-w-fit focus:outline-none">
                <p>Shop By Categories</p>
                <ChevronDown className="size-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Categories</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <a href="/category?c=women" className="w-full h-full">
                    <p>Jiniso Women</p>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="/category?c=men" className="w-full h-full">
                    <p>Jiniso Men</p>
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <button className="min-w-fit">Best Seller</button>
            <button className="min-w-fit">Sale</button>
            <button className="min-w-fit">Jiniso Joyful</button>
          </div>
          <div className="h-12 border max-w-[50%] w-full border-slate-400 bg-slate-300 pl-4 flex justify-between items-center p-4">
            <input
              type="text"
              className="font-medium text-sm placeholder:text-slate-500 text-black w-full bg-transparent outline-none"
              placeholder="Search..."
            />
            <Search className="size-6" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
