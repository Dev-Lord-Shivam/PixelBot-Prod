import Blog from '/Blog.png'
import Youtube from '/youtube.png'
import insta from '/instagram.png'
import Plagiarism from '/Plagiarism.png'
import ProgrammGenerator from '/ProgrammGenerator.png'
import Summarize from '/Summarize.png'

export const userInput = [
    {
        name: 'Blog Content',
        desc: 'An AI Model to write blog post.',
        category: 'blog',
        icon: Blog,
        slug: 'blogging',
        aiPrompt: 'Generate Blog Content based on topic and outline in rich text editor format',
        form: [
            {
                label: 'Enter your blog topic',
                field: 'input',
                name: 'topic',
                placeholder: 'eg: Elon Must NuraLink',
                required:true
            },
            {
                label: 'Enter blog Outline here',
                field: 'textarea',
                name: 'outline',
                placeholder: 'eg: Nuralink, a microtechnology that can transform you into a superhero but can also steal your memory.'
            }
        ]
    },
    {

        name: 'Youtube Description',
        desc: 'An AI tool to Generate Youtube description.',
        category: 'Youtube Tool',
        icon: Youtube,
        slug: 'youtube-description',
        aiPrompt: 'Generate Youtube description with emoji under 4-5 lines based on topic and outline in rich text editor format',
        form: [
            {
                label: 'Enter your video topic/title',
                field: 'input',
                name: 'topic',
                placeholder: 'eg: Unboxing Macbook M4 Pro',
                required:true
            },
            {
                label: 'Enter youtube Outline here',
                field: 'textarea',
                name: 'outline',
                placeholder: 'eg: First look at apple Latest Macbook M4 pro',
            }
        ]
    },

    {
        name: 'Rewrite Article (Plagiarism Free)',
        desc: 'AI Tool to detect plagiarism and also make it plagiarism free.',
        icon: Plagiarism,
        category: 'Rewriting Tool',
        slug: 'plagiarism',
        aiPrompt: 'Rewrite give article without any Plagiarism in rich text editor format',
        form: [
            {
                label: '🤖 Provide your Article/Blogpost or any other content to rewrite.',
                field: 'textarea',
                name: 'article',
                placeholder: 'Paste you Ariticle here...',
                required:true
            }
        ]
    },
    {
        name: 'Code Generator',
        desc: 'AI Model to generate programm in any language',
        icon: ProgrammGenerator,
        category: 'Coding',
        slug: 'code-generator',
        aiPrompt: 'Depends on user codeDescription write a code and give output in rich text editor format in code block ',
        form: [
            {
                label: 'Enter description of code you want along with Programming Lang',
                field: 'textarea',
                name: 'codeDesscripton',
                required:true,
                placeholder: 'eg: Write program to generate 4 digit OTP in javascript',
            },
           
        ]
    },
    {
        name: 'Summarizer',
        desc: 'AI Model to Summarize documents',
        icon: Summarize,
        category: 'Coding',
        slug: 'summarizer',
        aiPrompt: 'Summarize the given text in bullet points',
        form: [
            {
                label: 'Enter your text here',
                field: 'textarea',
                name: 'codeDesscripton',
                required:true,
                placeholder: 'Paste you Ariticle here...'
            },
           
        ]
    },
    {
        name: 'Translator',
        desc: 'AI-Model to Translate in any language',
        icon:'https://cdn-icons-png.flaticon.com/128/679/679922.png',
        category: 'translator',
        slug: 'product-description',
        aiPrompt: 'Depends on user productName and description generate small description for product for e-commer business give output  in rich text editor format  ',
        form: [
            {
                label: 'Product Name',
                field: 'input',
                name: 'productName',
                required:true
            },
            {
                label: 'Product Details',
                field: 'textarea',
                name: 'outline',
                required:true
            },
           
        ]
    },
    {
        name: 'Insta Caption Generator',
        desc: 'An AI tool that serves you as Personal Insagram Caption generator',
        icon: insta,
        category: 'instagram',
        slug: 'insta-caption',
        aiPrompt: 'Generate Instagram caption depends on a given discription of post and give output in  in rich text editor format',
        form: [
            {
                label: 'Enter and describe your post',
                field: 'textarea',
                name: 'discription',
                required:true,
                placeholder: 'eg: An Adventurous batcholer party trip to Spain with my best friends',
            },
           
        ]
    },
    {
        name: 'Paraphrasing Tool',
        desc: 'An AI tool to Improve Fluency',
        icon:  Plagiarism,
        category: 'Paraphrasing',
        slug: 'paraphrasing',
        aiPrompt: 'Depends on user description formalise the message and make it professional give output  in rich text editor format',
        form: [
            {
                label: 'Enter and describe your post',
                field: 'textarea',
                name: 'keywords',
                required:true,
                placeholder: 'Paste you Ariticle here...',
            },
           
        ]
    },
        // {
    //     name: 'Blog Topic Ideas',
    //     desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
    //     category: 'Blog',
    //     icon: 'https://cdn-icons-png.flaticon.com/128/11497/11497847.png',
    //     slug: 'blog-topic-idea',
    //     aiPrompt: 'Generate top 5 Blog Topic Ideas in bullet point only, (no Description) based on niche in rich text editor format',
    //     form: [
    //         {
    //             label: 'Enter your Niche',
    //             field: 'input',
    //             name: 'niche',
    //             required:true
    //         },
    //     ]
    // },
    // {
    //     name: 'Youtube SEO Title',
    //     desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
    //     category: 'Youtube Tools',
    //     icon: 'https://cdn-icons-png.flaticon.com/128/402/402075.png',
    //     slug: 'youtube-seo-title',
    //     aiPrompt: 'Give me Best SEO optimized high ranked 5 title ideas bullet wise only bases on keywords and outline and give me result in HTML tags format',
    //     form: [
    //         {
    //             label: 'Enter your youtube video topic keyowords',
    //             field: 'input',
    //             name: 'keywords',
    //             required:true
    //         },
    //         {
    //             label: 'Enter youtube description Outline here',
    //             field: 'textarea',
    //             name: 'outline'
    //         }
    //     ]

    // },
    // {
    //     name: 'Youtube Tags',
    //     desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
    //     category: 'Youtube Tool',
    //     icon: 'https://cdn-icons-png.flaticon.com/128/4674/4674918.png',
    //     slug: 'youtube-tag',

    //     aiPrompt: 'Generate 10 Youtube tags in bullet point based on title and outline in rich text editor format',

    //     form: [
    //         {
    //             label: 'Enter your youtube title',
    //             field: 'input',
    //             name: 'title',
    //             required:true
    //         },
    //         {
    //             label: 'Enter youtube video Outline here (Optional)',
    //             field: 'textarea',
    //             name: 'outline'
    //         }
    //     ]
    // },
    // {
    //     name: 'Text Improver',
    //     desc: 'This handy tool refines your writing, eliminating errors and redundancies for a clear, readable result. It also offers a comprehensive tone analysis and suggests better word choices.',
    //     icon: 'https://cdn-icons-png.flaticon.com/128/1686/1686815.png',
    //     category: 'Writing Assistant',
    //     slug: 'text-improver',
    //     aiPrompt: 'Given textToImprove, Rewrite text without any grammar mistake and professionally in rich text editor format',
    //     form: [
    //         {
    //             label: 'Enter text that you want to re-write or improve',
    //             field: 'textarea',
    //             name: 'textToImprove'
    //         }
    //     ]
    // },
    // {
    //     name: 'Add Emojis to Text',
    //     desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
    //     icon: 'https://cdn-icons-png.flaticon.com/128/2584/2584606.png',
    //     category: 'blog',
    //     slug: 'add-emoji-to-text',
    //     aiPrompt: 'Add Emoji to outline text depends on outline and rewrite it in rich text editor format',
    //     form: [
    //         {
    //             label: 'Enter your text to add emojis',
    //             field: 'textarea',
    //             name: 'outline',
    //             required:true
    //         }
    //     ]
    // },
    // {
    //     name: 'Instagram Post Generator',
    //     desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
    //     icon: 'https://cdn-icons-png.flaticon.com/128/15713/15713420.png',
    //     category: 'blog',
       
    //     slug: 'instagram-post-generator',
    //     aiPrompt: 'Generate 3 Instagram post depends on a given keywords and give output in  in rich text editor format',
    //     form: [
    //         {
    //             label: 'Enter Keywords for your post',
    //             field: 'input',
    //             name: 'keywords',
    //             required:true
    //         },
           
    //     ]
    // },
    // {
    //     name: 'Instagram Hash Tag Generator',
    //     desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
    //     icon: 'https://cdn-icons-png.flaticon.com/128/7045/7045432.png',
    //     category: 'blog',
       
    //     slug: 'instagram-hash-tag-generator',
    //     aiPrompt: 'Generate 15 Instagram hash tag depends on a given keywords and give output in  in rich text editor format',
    //     form: [
    //         {
    //             label: 'Enter Keywords for your instagram hastag',
    //             field: 'input',
    //             name: 'keywords',
    //             required:true
    //         },
           
    //     ]
    // },
    // {
    //     name: 'Instagram Post/Reel Idea',
    //     desc: 'An AI tool that generate New and trending instagram idea depends on your niche',
    //     icon: 'https://cdn-icons-png.flaticon.com/128/1029/1029183.png',
    //     category: 'instagram',
       
    //     slug: 'instagram-post-idea-generator',
    //     aiPrompt: 'Generate 5-10 Instagram idea depends on niche with latest trend and give output in  in rich text editor format',
    //     form: [
    //         {
    //             label: 'Enter Keywords / Niche for your instagram idea',
    //             field: 'input',
    //             name: 'keywords',
    //             required:true
    //         },
           
    //     ]
    // },
    // {
    //     name: 'English Grammer Check',
    //     desc: 'AI Model to Correct your english grammer by providing the text',
    //     icon:'https://cdn-icons-png.flaticon.com/128/12596/12596700.png',
    //     category: 'english',
       
    //     slug: 'english-grammer-checker',
    //     aiPrompt: 'Rewrite the inputText by correcting the grammer and give output in  in rich text editor format',
    //     form: [
    //         {
    //             label: 'Enter text to correct the grammer',
    //             field: 'input',
    //             name: 'inputText',
    //             required:true
    //         },
           
    //     ]
    // },
    // {
    //     name: 'Code Bug Detector',
    //     desc: 'This tool analyzes your input, like error messages and code snippets, to pinpoint and fix bugs, offering detailed solutions and alternatives in a straightforward, user-friendly way.',
    //     icon:'https://cdn-icons-png.flaticon.com/128/4426/4426267.png',
    //     category: 'code-bug-detector',
       
    //     slug: 'code-bug-detector',
    //     aiPrompt: 'Depends on user codeInput find bug in code and give solution and give output in  in rich text editor format in code block ',
    //     form: [
    //         {
    //             label: 'Enter code which you want to test bug',
    //             field: 'textarea',
    //             name: 'codeInput',
    //             required:true
    //         },
           
    //     ]
    // },
    // {
    //     name: 'Tagline Generator',
    //     desc: 'Struggling to find the perfect tagline for your brand? Let our AI-tool assist you in creating a tagline that stands out.',
    //     icon:'https://cdn-icons-png.flaticon.com/128/2178/2178616.png',
    //     category: 'Marketting',
       
    //     slug: 'tagline-generator',
    //     aiPrompt: 'Depends on user productName and outline generate catchy 5-10 tagline for the business product and give output  in rich text editor format ',
    //     form: [
    //         {
    //             label: 'Product/Brand Name',
    //             field: 'input',
    //             name: 'productName',
    //             required:true
    //         },
    //         {
    //             label: 'What you are selling / Marketting',
    //             field: 'textarea',
    //             name: 'outline',
    //             required:true
    //         },
           
    //     ]
    // },
    // {
    //     name:'Blog Title',
    //     desc:'An AI tool that generate blog title depends on yout blog information',
    //     category:'Blog',
    //     icon:'https://cdn-icons-png.flaticon.com/128/4186/4186534.png',
    //     aiPrompt:'Give me 5 blog topic idea in bullet wise only based on give niche & outline and give me result in Rich text editor format',
    //     slug:'generate-blog-title',
    //     form:[
    //         {
    //             label:'Enter your blog niche',
    //             field:'input',
    //             name:'niche',
    //             required:true
    //         },
    //         {
    //             label:'Enter blog outline',
    //             field:'textarea',
    //             name:'outline',
                
    //         }
    //     ]
    // },


]
