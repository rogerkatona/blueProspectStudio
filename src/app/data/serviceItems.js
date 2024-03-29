const serviceItems = [
    {
        id:0,
        featuredID:0,
        type:"work",
        subtype:"",
        number:"01",
        featured:"true",
        featuredHREF:"https://youtu.be/VEw6ETM-CfM",
        featuredURL:"/ portfolio",
        featuredHeader:"featured video content",
        featuredButtonLabel:"Watch video",
        date:"2023-11-15",
        title: "Interview with Dr. Jennifer Nash",
        description: "Dr. Nash hired us to create video content that she will use in the promotion of her new book. Elevate your interview process with our innovative approach, redefining the way you connect, communicate, and capture talent.",
        src: '/image/featured/01.jpg',
        srcThumbnail: '/image/media-thumbnail-01.jpg',
        isButtonActive:'true',
        buttonText:'see our portfolio',
        buttonHref:'/portfolio',
        list: [
        ],
    },
    {
        id:2,
        featuredID:1,
        type:"work",
        subtype:"",
        number:"02",
        featured:"false",
        featuredHREF:"https://youtu.be/wPHIBgBgwjc",
        featuredURL:"/ portfolio",
        featuredHeader:"featured project",
        featuredButtonLabel:"Watch video",
        date:"2023-11-15",
        title: "Alliance DriveAway (Customer Testimonial)",
        description: "Customer testimonial for Alliance Driveaway Solutions.  We talked with Tim Ronan about his relationship with Alliance and what has made that connection a win-win for both companies.",
        src: '/image/featured/04.jpg',
        srcThumbnail: '/image/featured/04.jpg',
        isButtonActive:'true',
        buttonText:'see our portfolio',
        buttonHref:'/portfolio',
        list: [
        ],
    },
    {
        id:1,
        featuredID:1,
        type:"process",
        subtype:"",
        number:"02",
        featured:"true",
        featuredHREF:"https://youtu.be/VEw6ETM-CfM",
        featuredURL:"/ Our Process",
        featuredHeader:"featured",
        featuredButtonLabel:"Watch video",
        date:"2023-12-01",
        title: "Why Blue Prospect?",
        description: "Our clients love us!  The continued loyalty and enthusiastic referrals from our clients are a testament to the deep-seated affection they hold for our company, showcasing the genuine love and trust they have in our services.",
        src: '/image/featured/03.jpg',
        srcThumbnail: '/image/featured/03.jpg',
        isButtonActive:'false',
        buttonText:'See our process',
        buttonHref:'/process',
        list: [
        ],
    },
    {
        id:4,
        featuredID:1,
        type:"service",
        subtype:"",
        number:"01",
        featured:"false",
        featuredHREF:"https://youtu.be/VEw6ETM-CfM",
        featuredURL:"/ Our Process",
        featuredHeader:"featured",
        featuredButtonLabel:"Watch video",
        date:"2023-12-01",
        title: "Web design and development",
        description: "Unlock the power of visual storytelling with our comprehensive video production services. From concept to delivery, we bring your ideas to life, creating captivating and compelling content that resonates with your audience. ",
        src: '/image/featured/10.jpg',
        srcThumbnail: '/image/featured/10.jpg',
        isButtonActive:'false',
        buttonText:'See our process',
        buttonHref:'/process',
        list: [
            "Utilizing the latest technologies and frameworks to ensure cutting-edge, responsive web designs that adapt seamlessly across all devices and platforms.",
            "Leveraging extensive experience in web development to create intuitive, user-friendly websites that drive engagement and achieve your business goals.",
            "Implementing innovative solutions and best practices in web design and development to enhance site performance, accessibility, and overall user experience.",
        ],
    },
    {
        id:5,
        featuredID:1,
        type:"service",
        subtype:"",
        number:"02",
        featured:"false",
        featuredHREF:"https://youtu.be/VEw6ETM-CfM",
        featuredURL:"/ Our Process",
        featuredHeader:"featured",
        featuredButtonLabel:"Watch video",
        date:"2023-12-01",
        title: "Professional video production",
        description: "For our seamless blend of creative excellence, professional quality, and client-focused collaboration. Elevate your visual content with our expertise, where creativity meets precision to bring your vision to life with unmatched professionalism and flair.",
        src: '/image/featured/12.jpg',
        srcThumbnail: '/image/featured/12.jpg',
        isButtonActive:'false',
        buttonText:'See our process',
        buttonHref:'/process',
        list: [
            "Harnessing the latest in video production technology and equipment to deliver high-quality, cinematic visuals that capture the essence of your brand and message.",
            "Driven by a deep passion for storytelling, we craft compelling narratives that connect with audiences on an emotional level, transforming viewers into engaged customers.",
            "Leveraging innovative techniques and creative direction, we ensure each video project is a unique masterpiece that stands out in today's fast-paced digital landscape, making your message unforgettable.",
        ],
    },
    {
        id:6,
        featuredID:1,
        type:"service",
        subtype:"",
        number:"03",
        featured:"false",
        featuredHREF:"https://youtu.be/VEw6ETM-CfM",
        featuredURL:"/ Our Process",
        featuredHeader:"featured",
        featuredButtonLabel:"Watch video",
        date:"2023-12-01",
        title: "Digital & social media content",
        description: "For our seamless blend of creative excellence, professional quality, and client-focused collaboration. Elevate your visual content with our expertise, where creativity meets precision to bring your vision to life with unmatched professionalism and flair.",
        src: '/image/featured/14.jpg',
        srcThumbnail: '/image/featured/14.jpg',
        isButtonActive:'false',
        buttonText:'See our process',
        buttonHref:'/process',
        list: [
            "Utilizing cutting-edge technology and platforms to create and distribute captivating digital and social media content that resonates with and engages your target audience across multiple channels.",
            "Infusing every piece of content with a passion for storytelling, ensuring that your brand's message is not only heard but felt, creating a memorable and emotional connection with your audience.",
            "Employing innovative strategies and creative approaches to stay ahead of social media trends, ensuring that your content is relevant, impactful, and capable of sparking conversations and building communities around your brand.",
        ],
    },
    {
        id:7,
        featuredID:1,
        type:"process",
        subtype:"",
        number:"01",
        featured:"false",
        featuredHREF:"https://youtu.be/VEw6ETM-CfM",
        featuredURL:"/ Our Process",
        featuredHeader:"featured",
        featuredButtonLabel:"Watch video",
        date:"2023-12-01",
        title: "Clients Love Our Collaboration!",
        description: "For our seamless blend of creative excellence, professional quality, and client-focused collaboration. Elevate your visual content with our expertise, where creativity meets precision to bring your vision to life with unmatched professionalism and flair.",
        src: '/image/featured/15.jpg',
        srcThumbnail: '/image/featured/15.jpg',
        isButtonActive:'false',
        buttonText:'See our process',
        buttonHref:'/process',
        list: [
            "Personalized Attention: At Blue Prospect Studio, clients appreciate the personalized attention and customized solutions we provide, ensuring that each project reflects their unique vision and goals.",
            "Innovative Solutions: Our dedication to innovation means we consistently deliver cutting-edge designs and strategies that not only meet but exceed client expectations, setting them apart in their industry.",
            "Supportive Partnership: Clients value the supportive partnership they experience with us, where open communication and collaboration are at the heart of every project, leading to successful outcomes and lasting relationships.",
        ],
    },
    {
        id:8,
        featuredID:1,
        type:"process",
        subtype:"",
        number:"02",
        featured:"false",
        featuredHREF:"https://youtu.be/VEw6ETM-CfM",
        featuredURL:"/ Our Process",
        featuredHeader:"featured",
        featuredButtonLabel:"Watch video",
        date:"2023-12-01",
        title: "Tailored Creativity",
        description: "Choose Blue Prospect for a creative partnership that values your unique vision, offering tailored design and strategy solutions that perfectly align with your brand's identity and aspirations.",
        src: '/image/featured/16.png',
        srcThumbnail: '/image/featured/16.png',
        isButtonActive:'false',
        buttonText:'See our process',
        buttonHref:'/process',
        list: [
            "Customized Design Approach: Every project at Blue Prospect begins with a deep dive into your unique brand identity, ensuring that our design solutions are not just effective but also perfectly aligned with your vision and goals.",
            "Adaptive Strategy Development: We develop strategies that are as dynamic as your business, adapting to market trends and audience insights to keep you ahead of the curve and ensure your message resonates strongly with your target audience.",
            "Flexible Implementation: Understanding that needs can evolve, we maintain flexibility throughout the project lifecycle, allowing for adjustments and refinements to ensure the final outcome not only meets but surpasses your expectations.",
        ],
    },
    {
        id:9,
        featuredID:1,
        type:"process",
        subtype:"",
        number:"03",
        featured:"false",
        featuredHREF:"https://youtu.be/VEw6ETM-CfM",
        featuredURL:"/ Our Process",
        featuredHeader:"featured",
        featuredButtonLabel:"Watch video",
        date:"2023-12-01",
        title: "Expertise in Innovation",
        description: "For our seamless blend of creative excellence, professional quality, and client-focused collaboration. Elevate your visual content with our expertise, where creativity meets precision to bring your vision to life with unmatched professionalism and flair.",
        src: '/image/featured/17.png',
        srcThumbnail: '/image/featured/17.png',
        isButtonActive:'false',
        buttonText:'See our process',
        buttonHref:'/process',
        list: [
            "AI-Driven Insights: Leveraging artificial intelligence to gather and analyze data, Blue Prospect offers unparalleled insights into consumer behavior and market trends, informing smarter, more effective strategies.",
            "Innovative AI Solutions: Our team harnesses the power of AI technology to create innovative solutions, from personalized user experiences to automated processes, enhancing efficiency and engagement across all digital platforms.",
            "Future-Forward Design: By integrating AI into our design process, we stay at the forefront of digital innovation, ensuring that our clients benefit from cutting-edge features and functionalities that set them apart in a competitive landscape.",
        ],
    },
    {
        id:10,
        featuredID:1,
        type:"process",
        subtype:"",
        number:"04",
        featured:"false",
        featuredHREF:"https://youtu.be/VEw6ETM-CfM",
        featuredURL:"/ Our Process",
        featuredHeader:"featured",
        featuredButtonLabel:"Watch video",
        date:"2023-12-01",
        title: "A Partnership Approach",
        description: "",
        src: '/image/featured/18.png',
        srcThumbnail: '/image/featured/18.png',
        isButtonActive:'false',
        buttonText:'See our process',
        buttonHref:'/process',
        list: [
            "Collaborative Process: At Blue Prospect, we emphasize a partnership approach, involving our clients at every step of the creative process. This collaborative mindset ensures that the final product authentically represents your brand and meets your strategic objectives.",
            "Transparent Communication: We maintain open and transparent communication channels from project inception to completion, providing regular updates and soliciting feedback to ensure alignment and adapt to any changes or new ideas that may arise.",
            "Long-Term Relationship Building: Beyond individual projects, we aim to build long-term relationships with our clients. This means we're not just a service provider; we're a committed partner invested in your ongoing success, ready to support and adapt to your evolving needs.",
        ],
    },
];

export default serviceItems