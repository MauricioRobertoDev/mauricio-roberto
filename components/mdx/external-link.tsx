import { FunctionComponent } from 'react';

const ExternalLink: FunctionComponent<JSX.IntrinsicElements['a']> = ({ href = '', ...props }) => {
    return <a href={href} target="_blank" rel="noopener noreferrer external" {...props} />;
};

export default ExternalLink;
