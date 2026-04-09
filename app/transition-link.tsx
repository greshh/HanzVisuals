"use client";
import Link, { LinkProps } from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  href: string;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const isPageChange = (href: string) => {
  const current = window.location.pathname;
  const next = new URL(href, window.location.origin).pathname;

  return current !== next;
};

export const TransitionLink: React.FC<TransitionLinkProps> = ({
  children,
  href,
  ...props
}) => {
  const router = useRouter();

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (!isPageChange(href)) {
      router.push(href);
      return;
    }
    
    e.preventDefault();
    const container = document.querySelector("#page-content");

    container?.classList.add("page-transition");

    await sleep(300);
    router.push(href);
    await sleep(300);

    container?.classList.remove("page-transition");
  };

  return (
    <Link {...props} href={href} onClick={handleTransition}>
      {children}
    </Link>
  );
};