import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import Link from "next/link";
import "/src/styles/highlight-js/atom-one-dark.css";

function customLink(props) {
  const { href } = props;

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

function CustomImage(props) {
  return <Image alt={props.alt} {...props} />;
}

const components = {
  Image: CustomImage,
  a: customLink,
};

export function Mdx({ code }) {
  const Component = useMDXComponent(code);
  return (
    <>
      <Component components={{ ...components }} />
    </>
  );
}
