import { useRouter } from "next/router";
import PropTypes from "prop-types";
import Link from "next/link";
import React, { Children, ComponentPropsWithoutRef, ReactElement } from "react";

type LinkProps = ComponentPropsWithoutRef<typeof Link>;

interface Props extends LinkProps {
  activeClassName: string;
}

const SmartLink = ({ children, activeClassName, ...props }: Props) => {
  const { asPath } = useRouter();
  const child = Children.only(children) as ReactElement;
  const childClassName = child.props.className || "";

  // pages/index.js will be matched via props.href
  // pages/about.js will be matched via props.href
  // pages/[slug].js will be matched via props.as
  const className =
    asPath === props.href || asPath === props.as
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName;

  return (
    <Link {...props}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  );
};

export default SmartLink;
