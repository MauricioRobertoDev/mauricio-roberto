import type { MDXComponents } from 'mdx/types';

import ExternalLink from './external-link';
import Img from './image';
import InternalLink from './internal-link';

const components: MDXComponents = {
    a: ExternalLink,
    InternalLink,
    Img,
};

export default components;
