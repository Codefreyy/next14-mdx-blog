import { compileMDX } from 'next-mdx-remote/rsc'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import Video from '../app/components/Video';
import CodeEditor from '@/app/components/CodeEditor';
import CustomImage from '../app/components/CustomImage';
import { remarkSandpack } from 'remark-sandpack';

type Filetree = {
    "tree": [
        {
            "path": string
        }
    ]
}

export async function getPostByName(fileName: string): Promise<BlogPost | undefined> {
    const res = await fetch(`https://raw.githubusercontent.com/Codefreyy/blog-posts/main/${fileName}`, {
        headers: {
            Accept: 'application/vnd.github+json',
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            'X-Github-Api-Version': '2022-11-28'
        }
    })
    if (!res.ok) return undefined
    const rawMDX = await res.text()
    if (rawMDX === '404: Not Found') return undefined

    const { frontmatter, content } = await compileMDX<{
        title: string, date: string, tags: string[], description: string
    }>({
        source: rawMDX,
        components: {
            Video,
            CustomImage,
            CodeEditor

        },
        options: {
            parseFrontmatter: true,
            mdxOptions: {
                remarkPlugins: [[remarkSandpack, { componentName: 'CodeEditor' }]],
                rehypePlugins: [
                    //@ts-ignore
                    rehypeHighlight,
                    rehypeSlug,
                    [rehypeAutolinkHeadings, {
                        behavior: 'wrap'
                    }]]
            }
        }
    })

    const id = fileName.replace(/\.mdx$/, '')
    const blogPostObj: BlogPost = {
        meta: {
            id, title: frontmatter.title, date: frontmatter.date, tags: frontmatter.tags, description: frontmatter.description
        },
        content
    }

    return blogPostObj
}

export async function getPostMeta(): Promise<Meta[] | undefined> {
    const res = await fetch('https://api.github.com/repos/Codefreyy/blog-posts/git/trees/main?recursive=1', {
        headers: {
            Accept: 'application/vnd.github+json',
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            'X-Github-Api-Version': '2022-11-28'
        }
    })
    if (!res.ok) return undefined

    const repoFiletree: Filetree = await res.json()
    const filesArray = repoFiletree.tree.map(obj => obj.path).filter(path => path.endsWith('.mdx'))
    const posts: Meta[] = []

    for (const file of filesArray) {
        const post = await getPostByName(file)
        if (post) {
            const { meta } = post
            posts.push(meta)
        }
    }


    return posts.sort((a, b) => a.date < b.date ? 1 : -1)
}