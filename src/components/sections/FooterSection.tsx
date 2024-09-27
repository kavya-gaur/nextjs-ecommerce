import React from "react";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { Input } from "@/components/ui/input";

function FooterSection() {
  const links = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Shop",
      link: "/shop",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Contact",
      link: "/contact",
    },
  ];

  const help = [
    {
      title: "Payment Options",
      link: "/",
    },
    {
      title: "Returns",
      link: "/",
    },
    {
      title: "Privacy Policies",
      link: "/",
    },
  ];

  return (
    <section className="pb-16">
      
    </section>
  );
}

export default FooterSection;
