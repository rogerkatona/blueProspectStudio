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
        src: '/image/media-thumbnail-02.jpg',
        srcThumbnail: '/image/media-thumbnail-02.jpg',
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
        title: "Creative Conceptualization",
        description: "Unlock the power of visual storytelling with our comprehensive video production services. From concept to delivery, we bring your ideas to life, creating captivating and compelling content that resonates with your audience. ",
        src: '/image/bg-banner-07.jpg',
        srcThumbnail: '/image/bg-banner-07.jpg',
        isButtonActive:'false',
        buttonText:'See our process',
        buttonHref:'/process',
        list: [
            "Unleash the power of innovative ideas and creative concepts tailored to your brand or message.",
            "Develop compelling storyboards and scripts that resonate with your target audience.",
            "Transform visions into visually stunning narratives that leave a lasting impression.",
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
        title: "Professional Filming and Production",
        description: "For our seamless blend of creative excellence, professional quality, and client-focused collaboration. Elevate your visual content with our expertise, where creativity meets precision to bring your vision to life with unmatched professionalism and flair.",
        src: '/image/bg-banner-04.jpg',
        srcThumbnail: '/image/bg-banner-04.jpg',
        isButtonActive:'false',
        buttonText:'See our process',
        buttonHref:'/process',
        list: [
            "Utilize cutting-edge equipment and industry-leading techniques for high-quality video production.",
            "Capture crisp, cinematic visuals and immersive audio to enhance the overall viewing experience.",
            "Ensure seamless coordination during on-location shoots or studio sessions for a polished final product.",
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
        title: "Post-Production Excellence",
        description: "For our seamless blend of creative excellence, professional quality, and client-focused collaboration. Elevate your visual content with our expertise, where creativity meets precision to bring your vision to life with unmatched professionalism and flair.",
        src: '/image/bg-banner-05.jpg',
        srcThumbnail: '/image/bg-banner-05.jpg',
        isButtonActive:'false',
        buttonText:'See our process',
        buttonHref:'/process',
        list: [
            "Employ skilled video editors to refine and enhance raw footage into a polished and cohesive story.",
            "Add impactful graphics, animations, and special effects to elevate the visual appeal.",
            "Deliver the final product in various formats, optimized for different platforms and viewing experiences.",
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
        title: "Pre-Production",
        description: "For our seamless blend of creative excellence, professional quality, and client-focused collaboration. Elevate your visual content with our expertise, where creativity meets precision to bring your vision to life with unmatched professionalism and flair.",
        src: '/image/bg-banner-08.jpg',
        srcThumbnail: '/image/bg-banner-08.jpg',
        isButtonActive:'false',
        buttonText:'See our process',
        buttonHref:'/process',
        list: [
            "Concept Development: Define the purpose, target audience, and key message of the video. Develop a creative concept and outline the storyline.",
            "Scriptwriting: Write a script that outlines the dialogue, narration, and visual elements of the video.",
            "Storyboarding: Create a visual representation of the video's scenes, helping to plan the shot sequence and visualize the final product.",
            "Casting and Planning: Select talent (if needed), plan locations, and create a production schedule. Secure any necessary permits or permissions.",
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
        title: "Production",
        description: "For our seamless blend of creative excellence, professional quality, and client-focused collaboration. Elevate your visual content with our expertise, where creativity meets precision to bring your vision to life with unmatched professionalism and flair.",
        src: '/image/bg-banner-10.jpg',
        srcThumbnail: '/image/bg-banner-10.jpg',
        isButtonActive:'false',
        buttonText:'See our process',
        buttonHref:'/process',
        list: [
            "Filming: Capture video footage based on the script and storyboard. This involves setting up cameras, lighting, and sound equipment.",
            "Directing: Guide actors and crew to ensure the scenes are shot according to the vision outlined in the script and storyboard.",
            "Gathering B-Roll: In addition to the main footage, capture supplementary shots (B-Roll) that enhance the storytelling.",
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
        title: "Post-Production",
        description: "For our seamless blend of creative excellence, professional quality, and client-focused collaboration. Elevate your visual content with our expertise, where creativity meets precision to bring your vision to life with unmatched professionalism and flair.",
        src: '/image/bg-banner-09.jpg',
        srcThumbnail: '/image/bg-banner-09.jpg',
        isButtonActive:'false',
        buttonText:'See our process',
        buttonHref:'/process',
        list: [
            "Video Editing: Piece together the captured footage, trim unnecessary parts, and arrange scenes to create a cohesive narrative.",
            "Sound Editing: Enhance and adjust audio elements, including adding music, sound effects, and voiceovers.",
            "Color Grading: Adjust the colors and tones of the video to achieve a consistent and polished look.",
            "Graphics and Animation: Add any necessary graphics, text overlays, or animations to enhance the visual appeal.",
            "Review and Revisions: Collaborate with stakeholders for feedback and make necessary revisions to the video.",
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
        title: "Finalization",
        description: "",
        src: '/image/bg-banner-07.jpg',
        srcThumbnail: '/image/bg-banner-07.jpg',
        isButtonActive:'false',
        buttonText:'See our process',
        buttonHref:'/process',
        list: [
            "Rendering: Export the final edited video in the desired format and resolution.",
            "Distribution: Decide on the platforms where the video will be published or distributed, such as YouTube, social media, or a company website.",
        ],
    },
    {
        id:11,
        featuredID:1,
        type:"process",
        subtype:"",
        number:"05",
        featured:"false",
        featuredHREF:"https://youtu.be/VEw6ETM-CfM",
        featuredURL:"/ Our Process",
        featuredHeader:"featured",
        featuredButtonLabel:"Watch video",
        date:"2023-12-01",
        title: "Delivery",
        description: "",
        src: '/image/bg-banner-11.jpg',
        srcThumbnail: '/image/bg-banner-11.jpg',
        isButtonActive:'false',
        buttonText:'See our process',
        buttonHref:'/process',
        list: [
            "Distribution: Upload the final video to the chosen platforms or deliver it to the client or stakeholders.",
            "Promotion: Implement a strategy to promote the video and maximize its reach.",
        ],
    },
    {
        id:12,
        featuredID:0,
        type:"about",
        subtype:"",
        number:"01",
        featured:"false",
        featuredHREF:"https://youtu.be/VEw6ETM-CfM",
        featuredURL:"/ Our Process",
        featuredHeader:"featured",
        featuredButtonLabel:"Watch video",
        date:"2023-12-01",
        title: "Our story",
        description: "Founded in 2014, Blue Prospect Studio emerged from a shared passion for storytelling and a desire to redefine the standards of video production. Our journey has been driven by a relentless pursuit of creativity and a commitment to delivering exceptional visual experiences.",
        src: '/image/bg-banner-04.jpg',
        srcThumbnail: '/image/bg-banner-04.jpg',
        isButtonActive:'false',
        buttonText:'See our process',
        buttonHref:'/process',
        list: [
        ],
    },
    {
        id:13,
        featuredID:1,
        type:"about",
        subtype:"",
        number:"02",
        featured:"false",
        featuredHREF:"https://youtu.be/VEw6ETM-CfM",
        featuredURL:"/ Our Process",
        featuredHeader:"featured",
        featuredButtonLabel:"Watch video",
        date:"2023-12-01",
        title: "Our approach",
        description: "At Blue Prospect, we believe in a collaborative and innovative approach to video production. Our team seamlessly integrates cutting-edge technology with creative flair, ensuring each project is a unique masterpiece. We collaborate closely with our clients, turning ideas into visual narratives that leave a lasting impact.",
        src: '/image/bg-banner-05.jpg',
        srcThumbnail: '/image/bg-banner-05.jpg',
        isButtonActive:'false',
        buttonText:'See our process',
        buttonHref:'/process',
        list: [
        ],
    },
    {
        id:14,
        featuredID:0,
        type:"about",
        subtype:"",
        number:"03",
        featured:"false",
        featuredHREF:"https://youtu.be/VEw6ETM-CfM",
        featuredURL:"/ Our Process",
        featuredHeader:"featured",
        featuredButtonLabel:"Watch video",
        date:"2023-12-01",
        title: "Our team",
        description: "Meet the talented individuals who breathe life into our projects. Our team of experienced directors, cinematographers, editors, and creatives brings a diverse set of skills and perspectives to every production. Together, we form a dynamic force committed to pushing the boundaries of visual storytelling.",
        src: '/image/bg-banner-06.jpg',
        srcThumbnail: '/image/bg-banner-06.jpg',
        isButtonActive:'false',
        buttonText:'See our process',
        buttonHref:'/process',
        list: [
        ],
    },
];

export default serviceItems