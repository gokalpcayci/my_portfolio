"use client";
import React from "react";
import { Button, buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { Icons } from "../icons";

import { defaultVariantsNoDelay } from "app/components/motion.variants";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Projects() {
  const MotionLink = motion(Link);

  return (
    <MotionLink
      title="My Projects"
      href={"/projects"}
      variants={defaultVariantsNoDelay}
      whileHover={{ scale: 1.05 }}
      className="card-border  text-xs gap-3 relative col-span-2 row-span-1 flex items-center justify-center gap-x-2 overflow-hidden rounded-xl bg-primary text-white md:col-span-2 md:col-start-4 md:row-span-1"
    >
      My Projects
      <Icons.login className="h-4 w-4" />
    </MotionLink>
  );
}
