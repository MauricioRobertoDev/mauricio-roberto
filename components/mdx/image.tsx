import NextImage, { ImageProps } from 'next/image';

const Img = ({
    children,
    caption,
    ...props
}: {
    children: React.ReactNode;
    caption?: string;
} & ImageProps) => {
    return (
        <figure>
            <div className="">
                <NextImage {...props} className="rounded-lg" />
            </div>
            {caption ? <figcaption className="-mt-5 text-sm italic ">{caption}.</figcaption> : null}
        </figure>
    );
};
export default Img;
