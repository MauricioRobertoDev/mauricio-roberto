import { defineDocumentType, makeSource } from '@contentlayer/source-files';
import GithubSlugger from 'github-slugger';
import { readingTime } from 'reading-time-estimator';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

const Project = defineDocumentType(() => ({
    name: 'Project',
    filePathPattern: 'projects/**/*.mdx',
    contentType: 'mdx',
    fields: {
        title: {
            type: 'string',
            required: true,
        },
        publishedAt: {
            type: 'date',
            required: true,
        },
        updatedAt: {
            type: 'date',
            required: true,
        },
        description: {
            type: 'string',
            required: true,
        },
        isPublished: {
            type: 'boolean',
            default: true,
        },
        tags: {
            type: 'list',
            of: { type: 'string' },
        },
        github: {
            type: 'string',
            required: false,
        },
        preview: {
            type: 'string',
            required: false,
        },
        image: {
            type: 'string',
            required: false,
        },
        featured: {
            type: 'boolean',
            default: false,
        },
        role: {
            type: 'string',
            required: true,
        },
        year: {
            type: 'string',
            required: true,
        },
    },
    computedFields: {
        url: {
            type: 'string',
            resolve: (doc) => `${doc._raw.flattenedPath.replace('projects/', 'projetos/')}`,
        },
        readingTime: {
            type: 'json',
            resolve: (doc) => readingTime(doc.body.raw, 100, 'pt-br'),
        },
        toc: {
            type: 'json',
            resolve: async (doc) => {
                const regulrExp = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
                const slugger = new GithubSlugger();
                const headings = Array.from(doc.body.raw.matchAll(regulrExp)).map(({ groups }) => {
                    const flag = groups?.flag;
                    const content = groups?.content;

                    return {
                        level: flag?.length == 1 ? 'one' : flag?.length == 2 ? 'two' : 'three',
                        text: content,
                        slug: content ? slugger.slug(content) : undefined,
                    };
                });

                return headings;
            },
        },
    },
}));

/** @type {import('rehype-pretty-code').Options} */
const options = {
    // See Options section below.
    theme: 'material-theme-palenight',
    defaultLang: 'plaintext',
    keepBackground: false,
};

export default makeSource({
    contentDirPath: 'content',
    documentTypes: [Project],
    mdx: {
        // remarkPlugins: [[remarkCodeHike, { theme: 'material-palenight' }]],
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
            [rehypePrettyCode, options],
            rehypeSlug,
            [rehypeAutolinkHeadings, { behavior: 'prepend' }],
        ],
    },
});
