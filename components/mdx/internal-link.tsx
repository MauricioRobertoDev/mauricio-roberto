import NextLink from 'next/link';

const InternalLink = ({ href, text }: { href: string; text: string }) => {
    return <NextLink href={href}> {text} </NextLink>;
};

export default InternalLink;
