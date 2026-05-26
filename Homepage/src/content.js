(function () {
  const languages = [
    { code: "ko", label: "KO", name: "한국어", htmlLang: "ko", ogLocale: "ko_KR" },
    { code: "en", label: "EN", name: "English", htmlLang: "en", ogLocale: "en_US" },
    { code: "ja", label: "JA", name: "日本語", htmlLang: "ja", ogLocale: "ja_JP" },
    { code: "zh", label: "ZH", name: "中文", htmlLang: "zh-CN", ogLocale: "zh_CN" }
  ];

  const locales = {
    ko: {
      meta: {
        title: "AI Game Dev Arena | AI-Native Game Development Festival",
        description: "AI Game Dev Arena는 AI 도구를 활용해 제한 시간 안에 플레이 가능한 게임을 만드는 라이브 게임 개발 아레나입니다. 파트너, 참가자, AI 솔루션사, 게임사, VC, 퍼블리셔를 연결합니다.",
        keywords: "AI Game Dev Arena, AI 게임잼, AI game jam, AI game development, playable prototype, 인디게임, 게임 개발 행사, 게임 페스티벌, AI-native developer",
        ogDescription: "From Player to Developer. 파트너, 제작자, 플레이 가능한 프로토타입을 연결하는 AI-native 게임 개발 아레나.",
        twitterDescription: "AI와 함께 제한 시간 안에 플레이 가능한 게임을 만드는 라이브 개발 아레나."
      },
      schema: {
        organizationDescription: "AI Game Dev Arena는 AI-native 게임 제작자, AI 솔루션 파트너, 게임사, 퍼블리셔, VC, 크리에이터, 미디어를 플레이 가능한 게임 프로토타입으로 연결합니다.",
        eventDescription: "AI 도구를 활용해 제한 시간 안에 플레이 가능한 게임 프로토타입을 만드는 라이브 AI-native 게임 개발 챌린지입니다.",
        faq: [
          {
            name: "AI Game Dev Arena는 무엇인가요?",
            text: "AI 도구를 활용해 제한 시간 안에 플레이 가능한 게임 프로토타입을 만드는 라이브 게임 개발 챌린지입니다."
          },
          {
            name: "참가자 모집 페이지와 파트너 소개 페이지가 따로 필요한가요?",
            text: "초기 홈페이지는 공통 코어 콘텐츠를 유지하고, 단계별로 CTA와 상단 메시지를 바꾸는 구조로 설계됩니다. 파트너 미팅과 참가자 모집 모두 같은 페이지에서 확장할 수 있습니다."
          },
          {
            name: "파트너는 어떤 가치를 얻을 수 있나요?",
            text: "AI 솔루션사는 실제 개발자 사용 인사이트를 얻고, 게임사와 퍼블리셔는 AI-native 개발자와 초기 프로토타입을 발견할 수 있습니다."
          }
        ]
      },
      ui: {
        skipLink: "본문으로 이동",
        navLabel: "주요 메뉴",
        navToggleLabel: "메뉴 열기",
        languageLabel: "언어 선택",
        tickerLabel: "프로젝트 키워드",
        videoClose: "영상 닫기",
        videoTitle: "Play Video",
        watchPlayVideo: "플레이 영상 보기",
        watchReference: "영상 보기",
        videoButtonAria: "{title} 플레이 영상 보기",
        videoImageAlt: "{title} 플레이 영상 클립",
        videoFrameTitle: "{title} 플레이 영상",
        tagDelimiter: " / "
      },
      brand: {
        small: "From Player to Developer"
      },
      nav: [
        { label: "소개", href: "#about" },
        { label: "Season 0", href: "#proof" },
        { label: "쇼케이스", href: "#showcase" },
        { label: "파트너", href: "#partner" },
        { label: "참가자", href: "#participants" },
        { label: "문의", href: "#contact" }
      ],
      hero: {
        eyebrow: "AI-NATIVE GAME DEVELOPMENT FESTIVAL",
        title: "AI Game Dev Arena",
        lead: "From Player to Developer",
        copy: "AI 도구를 활용해 제한 시간 안에 플레이 가능한 게임을 만드는 라이브 개발 아레나. 파트너에게는 실제 제작 유즈케이스를, 참가자에게는 새로운 포트폴리오 무대를 만듭니다.",
        partnerCta: "파트너 문의",
        participantCta: "참가 관심 등록",
        actionsLabel: "주요 행동",
        factsLabel: "Season 0 핵심 지표",
        facts: [
          { value: "5.5h", label: "Live build sprint" },
          { value: "5", label: "Playable prototypes" },
          { value: "Season 0", label: "Proof of format" }
        ]
      },
      ticker: ["AI GAME JAM", "AI BUILD PIPELINE", "PLAYABLE PROTOTYPES", "CREATOR NETWORK", "TOOL PARTNERS", "SHOWCASE"],
      about: {
        eyebrow: "WHAT THIS IS",
        title: "게임잼을 넘어, AI 시대의 제작 방식을 보여주는 무대.",
        body: [
          "AI Game Dev Arena는 개발자, 디자이너, 기획자, 학생, 인디 창작자가 AI 툴을 활용해 짧은 시간 안에 플레이 가능한 게임을 제작하는 라이브 챌린지입니다.",
          "파트너에게는 실제 개발 현장의 툴 사용 인사이트를, 참가자에게는 커리어와 포트폴리오가 되는 쇼케이스 경험을 제공합니다."
        ]
      },
      proof: {
        eyebrow: "SEASON 0 PROOF",
        title: "Season 0가 다음 아레나의 출발점입니다.",
        body: "2026년 5월 1일, 참가자들은 제한 시간 안에 플레이 가능한 게임을 만들었고 그 과정과 결과는 영상과 쇼케이스로 남았습니다."
      },
      showcase: {
        eyebrow: "WINNING PROTOTYPES",
        title: "5시간 안에 나온 플레이 가능한 게임들.",
        body: "짧은 제작 시간 안에서도 게임으로 작동하는 아이디어가 나올 수 있다는 것을 실제 결과물로 보여줍니다."
      },
      program: {
        eyebrow: "PROGRAM FORMAT",
        title: "사전 온보딩부터 쇼케이스까지 하나의 제작 루프.",
        body: "참가자는 AI 도구를 실제 제작에 적용하고, 파트너는 그 과정과 결과를 현장에서 확인할 수 있습니다."
      },
      partnerSection: {
        eyebrow: "FOR PARTNERS",
        title: "브랜드 노출과 실제 제작 경험을 함께 만듭니다.",
        body: "AI 솔루션사, 게임사, 퍼블리셔, VC, 교육기관, 미디어 파트너가 개발자와 자연스럽게 만나는 접점을 설계합니다."
      },
      participantSection: {
        eyebrow: "FOR PARTICIPANTS",
        title: "AI와 함께 게임을 끝까지 만들어볼 사람을 기다립니다.",
        body: "개발자, 디자이너, 아티스트, 기획자, 학생, 인디 창작자 모두에게 열리는 AI-native 제작 실험장입니다. 다음 시즌 정보가 확정되면 가장 먼저 안내합니다.",
        cta: "참가 관심 등록",
        imageAlt: "Season 0 현장의 개발 및 쇼케이스 장면",
        mailSubject: "AI Game Dev Arena 참가 관심 등록"
      },
      mediaSection: {
        eyebrow: "MEDIA & COMMUNITY",
        title: "Season 0를 함께 본 사람들.",
        body: "개발자 커뮤니티와 게임 미디어 채널을 통해 Season 0의 현장과 결과물이 소개되었습니다."
      },
      faqSection: {
        eyebrow: "FAQ",
        title: "자주 묻는 질문."
      },
      closing: {
        eyebrow: "NEXT SEASON",
        title: "파트너 미팅과 참가 관심 등록을 열어둡니다.",
        body: "AI Game Dev Arena의 다음 시즌을 함께 만들 파트너, 스폰서, 멘토, 심사위원, 미디어 파트너, 참가자를 찾고 있습니다.",
        partnerCta: "파트너 자료 요청",
        participantCta: "참가 관심 등록",
        partnerSubject: "AI Game Dev Arena 파트너십 문의",
        participantSubject: "AI Game Dev Arena 참가 관심 등록"
      },
      footer: {
        small: "AI-native game development arena",
        tagline: "AI와 함께 만드는 새로운 게임 개발 아레나.",
        links: [
          { label: "문의", href: "mailto:aigamedevarena@gmail.com" },
          { label: "파트너", href: "#partner" },
          { label: "참가자", href: "#participants" }
        ]
      },
      stats: [
        { value: "5.5h", label: "AI-assisted live build sprint" },
        { value: "5", label: "winning playable prototypes" },
        { value: "Open", label: "engine-flexible build format" },
        { value: "Media", label: "creator and journalist coverage" }
      ],
      gallery: [
        { src: "./assets/images/pic05.webp", alt: "AI Game Dev Arena Season 0 현장에서 참가자들이 개발 중인 모습" },
        { src: "./assets/images/pic02.webp", alt: "참가자가 완성한 게임을 현장에서 플레이테스트하는 모습" },
        { src: "./assets/images/pic03.webp", alt: "심사와 쇼케이스를 위해 참가자들이 모여 있는 모습" },
        { src: "./assets/images/pic06.webp", alt: "노트북과 게임 개발 화면이 놓인 개발 현장" },
        { src: "./assets/images/pic07.webp", alt: "AI 게임 개발 챌린지에 집중하고 있는 참가자들" }
      ],
      games: [
        { rank: "1st", title: "농작물을 지켜라", clip: "./assets/clips/game-1.webp", videoId: "Oo83e0IOP1k", summary: "농작물을 방해 요소로부터 지키는 액션 디펜스 프로토타입.", tags: ["Defense", "Live build", "AI-assisted"] },
        { rank: "2nd", title: "보리와 곰농부", clip: "./assets/clips/game-2.webp", videoId: "U2c7nsVord8", summary: "곰농부 세계관을 기반으로 한 수확형 미션 게임.", tags: ["Mission", "Farm", "Character"] },
        { rank: "3rd", title: "Farm Cafe", clip: "./assets/clips/game-3.webp", videoId: "cWqvbGeCfvk", summary: "재료 선택과 주문 처리를 중심으로 한 카페 운영 프로토타입.", tags: ["Management", "2D", "Casual"] },
        { rank: "4th", title: "우당탕탕 산지직송", clip: "./assets/clips/game-4.webp", videoId: "PUunl4T7IxM", summary: "산지에서 목표량을 달성하는 배송/수집형 게임.", tags: ["Delivery", "Stage", "Arcade"] },
        { rank: "5th", title: "헤이버니", clip: "./assets/clips/game-5.webp", videoId: "6oGbuu8b5n8", summary: "동화적 비주얼과 캐릭터 중심의 인터랙티브 프로토타입.", tags: ["Story", "Character", "AI art"] }
      ],
      steps: [
        { title: "Pre-onboarding", text: "AI 도구, 제작 환경, 제출 형식을 사전에 안내합니다." },
        { title: "AI production sprint", text: "코딩, 아트, 사운드, 기획을 돕는 AI 도구를 게임 제작 흐름에 연결합니다." },
        { title: "Live game build", text: "제한 시간 안에 기획, 구현, 아트, 사운드, 빌드를 완성합니다." },
        { title: "Playtest & jury review", text: "플레이 가능한 결과물을 기준으로 심사와 피드백을 진행합니다." },
        { title: "Showcase & report", text: "수상작, 사용 툴, 개발자 피드백, 파트너 인사이트를 콘텐츠와 리포트로 정리합니다." }
      ],
      partners: [
        { title: "AI Solution Partner", text: "툴 노출을 넘어 실제 개발자 사용 맥락, 온보딩 반응, 막힌 지점, 개선 요청을 수집합니다." },
        { title: "Game Company / Publisher", text: "AI-native 제작자와 초기 프로토타입을 발굴하고, 쇼케이스와 네트워킹으로 연결합니다." },
        { title: "Creator / Media Partner", text: "게임 개발 커뮤니티가 이해하는 언어로 사전 튜토리얼, 리뷰, 현장 콘텐츠를 만듭니다." },
        { title: "Education Partner", text: "AI 시대의 게임 개발 교육 모델과 커리큘럼 실험을 실제 제작 결과로 검증합니다." },
        { title: "Venue Partner", text: "PC방, e스포츠 공간, 컨퍼런스 베뉴가 개발과 쇼케이스가 동시에 일어나는 무대가 됩니다." },
        { title: "VC / Ecosystem Partner", text: "완성작 이전의 팀 역량, 제작 속도, 문제 해결 방식을 가까이서 볼 수 있습니다." }
      ],
      participants: [
        "개발자, 디자이너, 아티스트, 기획자, 학생, 인디 창작자 대상",
        "AI 도구 활용 경험이 있거나 빠르게 실험해보고 싶은 창작자 우대",
        "개인 또는 팀 참가 구조는 다음 시즌 포맷 확정 후 안내",
        "수상작은 홈페이지 쇼케이스와 파트너 미팅 자료에 노출"
      ],
      media: [
        { label: "고라니TV", title: "AI vs 인간 게임 개발 챌린지", text: "Season 0의 진행 과정과 결과를 담은 개발 콘텐츠.", href: "https://youtu.be/IIA4xy-rt7k" },
        { label: "골드메탈", title: "5시간 게임잼에서 만든 작품 소개", text: "짧은 시간 안에 완성된 게임들을 직접 소개한 영상.", href: "https://www.youtube.com/watch?v=NFfOzqcTeAo" },
        { label: "GGG", title: "가짜게임개발자 후기", text: "게임 미디어 채널에서 다룬 Season 0 후기.", href: "https://youtu.be/qFahj_e2vjg" }
      ],
      faq: [
        { q: "다음 시즌은 언제 열리나요?", a: "일정과 장소가 확정되면 참가 안내를 공개할 예정입니다." },
        { q: "누가 참가할 수 있나요?", a: "게임을 만들고 싶은 개발자, 디자이너, 아티스트, 기획자, 학생, 인디 창작자를 대상으로 준비하고 있습니다." },
        { q: "어떤 결과물을 만들게 되나요?", a: "제한 시간 안에 플레이 가능한 게임 프로토타입을 만드는 것을 목표로 합니다." },
        { q: "파트너 문의는 어떻게 하나요?", a: "파트너십, 후원, 멘토, 미디어 협업은 메일로 문의할 수 있습니다." }
      ]
    },
    en: {
      meta: {
        title: "AI Game Dev Arena | AI-Native Game Development Festival",
        description: "AI Game Dev Arena is a live game development arena where makers use AI tools to build playable games within a limited time. It connects partners, participants, AI solution companies, game studios, VCs, and publishers.",
        keywords: "AI Game Dev Arena, AI game jam, AI game development, playable prototype, indie game, game development event, game festival, AI-native developer",
        ogDescription: "From Player to Developer. A live AI-native game development arena for partners, makers, and playable prototypes.",
        twitterDescription: "A live development arena where makers build playable games with AI within a limited time."
      },
      schema: {
        organizationDescription: "AI Game Dev Arena connects AI-native game makers, AI solution partners, game companies, publishers, VCs, creators, and media through playable game prototypes.",
        eventDescription: "A live AI-native game development challenge where makers use AI tools to build playable game prototypes within a limited time.",
        faq: [
          { name: "What is AI Game Dev Arena?", text: "It is a live game development challenge where makers use AI tools to build playable game prototypes within a limited time." },
          { name: "Do partner and participant pages need to be separate?", text: "The homepage keeps a shared core and changes CTA emphasis by phase, so partner meetings and participant recruitment can both expand from the same page." },
          { name: "What value do partners get?", text: "AI solution partners gain real usage insight, while game companies and publishers can discover AI-native makers and early prototypes." }
        ]
      },
      ui: {
        skipLink: "Skip to content",
        navLabel: "Main navigation",
        navToggleLabel: "Open menu",
        languageLabel: "Select language",
        tickerLabel: "Project keywords",
        videoClose: "Close video",
        videoTitle: "Play Video",
        watchPlayVideo: "Watch play video",
        watchReference: "Watch reference",
        videoButtonAria: "Watch {title} play video",
        videoImageAlt: "{title} gameplay clip",
        videoFrameTitle: "{title} play video",
        tagDelimiter: " / "
      },
      brand: {
        small: "From Player to Developer"
      },
      nav: [
        { label: "About", href: "#about" },
        { label: "Season 0", href: "#proof" },
        { label: "Showcase", href: "#showcase" },
        { label: "Partners", href: "#partner" },
        { label: "Participants", href: "#participants" },
        { label: "Contact", href: "#contact" }
      ],
      hero: {
        eyebrow: "AI-NATIVE GAME DEVELOPMENT FESTIVAL",
        title: "AI Game Dev Arena",
        lead: "From Player to Developer",
        copy: "A live development arena where makers use AI tools to build playable games within a limited time. Partners get real production use cases, and participants get a new stage for their portfolios.",
        partnerCta: "Partner with us",
        participantCta: "Join waitlist",
        actionsLabel: "Primary actions",
        factsLabel: "Season 0 key numbers",
        facts: [
          { value: "5.5h", label: "Live build sprint" },
          { value: "5", label: "Playable prototypes" },
          { value: "Season 0", label: "Proof of format" }
        ]
      },
      ticker: ["AI GAME JAM", "AI BUILD PIPELINE", "PLAYABLE PROTOTYPES", "CREATOR NETWORK", "TOOL PARTNERS", "SHOWCASE"],
      about: {
        eyebrow: "WHAT THIS IS",
        title: "More than a game jam: a stage for how games are made in the AI era.",
        body: [
          "AI Game Dev Arena is a live challenge where developers, designers, planners, students, and indie creators use AI tools to build playable games in a short sprint.",
          "Partners see real tool usage in production, while participants gain a showcase experience that can become portfolio and career material."
        ]
      },
      proof: {
        eyebrow: "SEASON 0 PROOF",
        title: "Season 0 is the starting point for the next arena.",
        body: "On May 1, 2026, participants built playable games within a limited time, and the process and results were captured through videos and showcases."
      },
      showcase: {
        eyebrow: "WINNING PROTOTYPES",
        title: "Playable games made in roughly five hours.",
        body: "The winners show that game ideas can become working experiences even inside a short production window."
      },
      program: {
        eyebrow: "PROGRAM FORMAT",
        title: "One production loop from onboarding to showcase.",
        body: "Participants apply AI tools directly to game creation, and partners can observe both the process and the results on site."
      },
      partnerSection: {
        eyebrow: "FOR PARTNERS",
        title: "Brand presence meets real production experience.",
        body: "AI solution companies, game studios, publishers, VCs, education groups, and media partners meet developers through a natural production context."
      },
      participantSection: {
        eyebrow: "FOR PARTICIPANTS",
        title: "For makers who want to finish a game with AI.",
        body: "The arena is open to developers, designers, artists, planners, students, and indie creators. We will share the next season details as soon as they are confirmed.",
        cta: "Join participant waitlist",
        imageAlt: "Development and showcase scene from Season 0",
        mailSubject: "AI Game Dev Arena participant waitlist"
      },
      mediaSection: {
        eyebrow: "MEDIA & COMMUNITY",
        title: "People who followed Season 0.",
        body: "Developer communities and game media channels introduced the Season 0 site, process, and playable results."
      },
      faqSection: {
        eyebrow: "FAQ",
        title: "Frequently asked questions."
      },
      closing: {
        eyebrow: "NEXT SEASON",
        title: "Partner meetings and participant interest are open.",
        body: "We are looking for partners, sponsors, mentors, judges, media partners, and participants to build the next season of AI Game Dev Arena.",
        partnerCta: "Request partnership deck",
        participantCta: "Join waitlist",
        partnerSubject: "AI Game Dev Arena partnership inquiry",
        participantSubject: "AI Game Dev Arena participant waitlist"
      },
      footer: {
        small: "AI-native game development arena",
        tagline: "A new game development arena built with AI.",
        links: [
          { label: "Contact", href: "mailto:aigamedevarena@gmail.com" },
          { label: "Partners", href: "#partner" },
          { label: "Participants", href: "#participants" }
        ]
      },
      stats: [
        { value: "5.5h", label: "AI-assisted live build sprint" },
        { value: "5", label: "winning playable prototypes" },
        { value: "Open", label: "engine-flexible build format" },
        { value: "Media", label: "creator and journalist coverage" }
      ],
      gallery: [
        { src: "./assets/images/pic05.webp", alt: "Participants developing at AI Game Dev Arena Season 0" },
        { src: "./assets/images/pic02.webp", alt: "A participant playtesting a finished game on site" },
        { src: "./assets/images/pic03.webp", alt: "Participants gathered for jury review and showcase" },
        { src: "./assets/images/pic06.webp", alt: "A development desk with laptops and game creation screens" },
        { src: "./assets/images/pic07.webp", alt: "Participants focused on an AI game development challenge" }
      ],
      games: [
        { rank: "1st", title: "Protect the Crops", clip: "./assets/clips/game-1.webp", videoId: "Oo83e0IOP1k", summary: "An action defense prototype about protecting crops from disruptive threats.", tags: ["Defense", "Live build", "AI-assisted"] },
        { rank: "2nd", title: "Bori and the Bear Farmer", clip: "./assets/clips/game-2.webp", videoId: "U2c7nsVord8", summary: "A harvest mission game built around the Bear Farmer world.", tags: ["Mission", "Farm", "Character"] },
        { rank: "3rd", title: "Farm Cafe", clip: "./assets/clips/game-3.webp", videoId: "cWqvbGeCfvk", summary: "A cafe management prototype focused on ingredient choices and order handling.", tags: ["Management", "2D", "Casual"] },
        { rank: "4th", title: "Farm-to-Mountain Dash", clip: "./assets/clips/game-4.webp", videoId: "PUunl4T7IxM", summary: "A delivery and collection game about reaching target volumes in a mountain stage.", tags: ["Delivery", "Stage", "Arcade"] },
        { rank: "5th", title: "Hay Bunny", clip: "./assets/clips/game-5.webp", videoId: "6oGbuu8b5n8", summary: "An interactive prototype centered on storybook visuals and character play.", tags: ["Story", "Character", "AI art"] }
      ],
      steps: [
        { title: "Pre-onboarding", text: "AI tools, production setup, and submission format are shared before the event." },
        { title: "AI production sprint", text: "AI tools for code, art, sound, and planning are connected to the game-making process." },
        { title: "Live game build", text: "Teams complete concept, implementation, art, sound, and build within a limited time." },
        { title: "Playtest & jury review", text: "Jury feedback is based on playable results." },
        { title: "Showcase & report", text: "Winning works, tool usage, developer feedback, and partner insights are organized into content and reports." }
      ],
      partners: [
        { title: "AI Solution Partner", text: "Collect real developer context, onboarding reactions, blockers, and improvement requests beyond simple tool exposure." },
        { title: "Game Company / Publisher", text: "Discover AI-native makers and early prototypes through showcase and networking." },
        { title: "Creator / Media Partner", text: "Create tutorials, reviews, and field content in the language game development communities understand." },
        { title: "Education Partner", text: "Test AI-era game development education and curriculum models through real production outcomes." },
        { title: "Venue Partner", text: "PC cafes, esports spaces, and conference venues become stages where development and showcase happen together." },
        { title: "VC / Ecosystem Partner", text: "Observe team capability, production speed, and problem-solving before a product is fully complete." }
      ],
      participants: [
        "Open to developers, designers, artists, planners, students, and indie creators",
        "Good fit for creators with AI tool experience or strong willingness to experiment",
        "Individual and team formats will be announced after the next season format is confirmed",
        "Winning works will appear in the homepage showcase and partner meeting materials"
      ],
      media: [
        { label: "GoraniTV", title: "AI vs Human Game Development Challenge", text: "Development content covering the process and results of Season 0.", href: "https://youtu.be/IIA4xy-rt7k" },
        { label: "GoldMetal", title: "Games made in a five-hour game jam", text: "A video introducing playable games completed within a short sprint.", href: "https://www.youtube.com/watch?v=NFfOzqcTeAo" },
        { label: "GGG", title: "Fake Game Developer Review", text: "A Season 0 review from a game media channel.", href: "https://youtu.be/qFahj_e2vjg" }
      ],
      faq: [
        { q: "When will the next season take place?", a: "We will publish participant details once the schedule and venue are confirmed." },
        { q: "Who can participate?", a: "We are preparing for developers, designers, artists, planners, students, and indie creators who want to make games." },
        { q: "What will participants make?", a: "The goal is to build a playable game prototype within a limited time." },
        { q: "How can partners get in touch?", a: "Partnership, sponsorship, mentor, jury, and media collaboration inquiries are open by email." }
      ]
    },
    ja: {
      meta: {
        title: "AI Game Dev Arena | AIネイティブ・ゲーム開発フェスティバル",
        description: "AI Game Dev Arenaは、AIツールを活用して制限時間内に遊べるゲームを作るライブ型ゲーム開発アリーナです。パートナー、参加者、AIソリューション企業、ゲーム会社、VC、パブリッシャーをつなぎます。",
        keywords: "AI Game Dev Arena, AIゲームジャム, AI game jam, AI game development, playable prototype, インディーゲーム, ゲーム開発イベント, ゲームフェスティバル, AI-native developer",
        ogDescription: "From Player to Developer. パートナー、制作者、遊べるプロトタイプをつなぐAIネイティブなゲーム開発アリーナ。",
        twitterDescription: "AIとともに制限時間内で遊べるゲームを作るライブ開発アリーナ。"
      },
      schema: {
        organizationDescription: "AI Game Dev Arenaは、AIネイティブなゲーム制作者、AIソリューションパートナー、ゲーム会社、パブリッシャー、VC、クリエイター、メディアを、遊べるゲームプロトタイプを通じてつなぎます。",
        eventDescription: "AIツールを活用して制限時間内に遊べるゲームプロトタイプを作る、ライブ型のAIネイティブゲーム開発チャレンジです。",
        faq: [
          { name: "AI Game Dev Arenaとは何ですか？", text: "AIツールを活用して制限時間内に遊べるゲームプロトタイプを作るライブ型ゲーム開発チャレンジです。" },
          { name: "参加者募集ページとパートナー紹介ページは別に必要ですか？", text: "初期ホームページでは共通コアを維持し、フェーズごとにCTAとトップメッセージを切り替える設計です。パートナーミーティングと参加者募集の両方に展開できます。" },
          { name: "パートナーにはどんな価値がありますか？", text: "AIソリューション企業は実際の開発者利用インサイトを得られ、ゲーム会社やパブリッシャーはAIネイティブな制作者と初期プロトタイプを発見できます。" }
        ]
      },
      ui: {
        skipLink: "本文へ移動",
        navLabel: "メインナビゲーション",
        navToggleLabel: "メニューを開く",
        languageLabel: "言語を選択",
        tickerLabel: "プロジェクトキーワード",
        videoClose: "動画を閉じる",
        videoTitle: "Play Video",
        watchPlayVideo: "プレイ動画を見る",
        watchReference: "動画を見る",
        videoButtonAria: "{title}のプレイ動画を見る",
        videoImageAlt: "{title}のプレイ動画クリップ",
        videoFrameTitle: "{title} プレイ動画",
        tagDelimiter: " / "
      },
      brand: {
        small: "From Player to Developer"
      },
      nav: [
        { label: "概要", href: "#about" },
        { label: "Season 0", href: "#proof" },
        { label: "ショーケース", href: "#showcase" },
        { label: "パートナー", href: "#partner" },
        { label: "参加者", href: "#participants" },
        { label: "お問い合わせ", href: "#contact" }
      ],
      hero: {
        eyebrow: "AI-NATIVE GAME DEVELOPMENT FESTIVAL",
        title: "AI Game Dev Arena",
        lead: "From Player to Developer",
        copy: "AIツールを活用して、制限時間内に遊べるゲームを作るライブ開発アリーナ。パートナーには実際の制作ユースケースを、参加者には新しいポートフォリオの舞台を提供します。",
        partnerCta: "パートナー相談",
        participantCta: "参加希望登録",
        actionsLabel: "主なアクション",
        factsLabel: "Season 0の主要指標",
        facts: [
          { value: "5.5h", label: "Live build sprint" },
          { value: "5", label: "Playable prototypes" },
          { value: "Season 0", label: "Proof of format" }
        ]
      },
      ticker: ["AI GAME JAM", "AI BUILD PIPELINE", "PLAYABLE PROTOTYPES", "CREATOR NETWORK", "TOOL PARTNERS", "SHOWCASE"],
      about: {
        eyebrow: "WHAT THIS IS",
        title: "ゲームジャムを超えて、AI時代の制作方法を見せる舞台。",
        body: [
          "AI Game Dev Arenaは、開発者、デザイナー、プランナー、学生、インディークリエイターがAIツールを活用し、短時間で遊べるゲームを作るライブチャレンジです。",
          "パートナーには実際の開発現場でのツール利用インサイトを、参加者にはキャリアとポートフォリオにつながるショーケース体験を提供します。"
        ]
      },
      proof: {
        eyebrow: "SEASON 0 PROOF",
        title: "Season 0が次のアリーナの出発点です。",
        body: "2026年5月1日、参加者は制限時間内に遊べるゲームを作り、その過程と成果は動画とショーケースとして残りました。"
      },
      showcase: {
        eyebrow: "WINNING PROTOTYPES",
        title: "約5時間で生まれた遊べるゲーム。",
        body: "短い制作時間でも、ゲームとして機能するアイデアが生まれることを実際の成果で示しています。"
      },
      program: {
        eyebrow: "PROGRAM FORMAT",
        title: "事前オンボーディングからショーケースまで、ひとつの制作ループ。",
        body: "参加者はAIツールを実制作に適用し、パートナーはその過程と結果を現場で確認できます。"
      },
      partnerSection: {
        eyebrow: "FOR PARTNERS",
        title: "ブランド露出と実際の制作体験を同時に作ります。",
        body: "AIソリューション企業、ゲーム会社、パブリッシャー、VC、教育機関、メディアパートナーが、開発者と自然につながる接点を設計します。"
      },
      participantSection: {
        eyebrow: "FOR PARTICIPANTS",
        title: "AIと一緒にゲームを最後まで作ってみたい人へ。",
        body: "開発者、デザイナー、アーティスト、プランナー、学生、インディークリエイターに開かれたAIネイティブな制作実験の場です。次シーズンの情報が確定次第、最初にお知らせします。",
        cta: "参加希望登録",
        imageAlt: "Season 0の開発とショーケースの様子",
        mailSubject: "AI Game Dev Arena 参加希望登録"
      },
      mediaSection: {
        eyebrow: "MEDIA & COMMUNITY",
        title: "Season 0を見届けた人たち。",
        body: "開発者コミュニティとゲームメディアチャンネルを通じて、Season 0の現場と成果が紹介されました。"
      },
      faqSection: {
        eyebrow: "FAQ",
        title: "よくある質問。"
      },
      closing: {
        eyebrow: "NEXT SEASON",
        title: "パートナーミーティングと参加希望登録を受け付けています。",
        body: "AI Game Dev Arenaの次シーズンを一緒に作るパートナー、スポンサー、メンター、審査員、メディアパートナー、参加者を募集しています。",
        partnerCta: "パートナー資料を依頼",
        participantCta: "参加希望登録",
        partnerSubject: "AI Game Dev Arena パートナーシップ問い合わせ",
        participantSubject: "AI Game Dev Arena 参加希望登録"
      },
      footer: {
        small: "AI-native game development arena",
        tagline: "AIとともに作る、新しいゲーム開発アリーナ。",
        links: [
          { label: "お問い合わせ", href: "mailto:aigamedevarena@gmail.com" },
          { label: "パートナー", href: "#partner" },
          { label: "参加者", href: "#participants" }
        ]
      },
      stats: [
        { value: "5.5h", label: "AI支援ライブ制作スプリント" },
        { value: "5", label: "受賞プレイアブルプロトタイプ" },
        { value: "Open", label: "エンジンに縛られない制作フォーマット" },
        { value: "Media", label: "クリエイター・記者による紹介" }
      ],
      gallery: [
        { src: "./assets/images/pic05.webp", alt: "AI Game Dev Arena Season 0で参加者が開発している様子" },
        { src: "./assets/images/pic02.webp", alt: "完成したゲームを現場でプレイテストする参加者" },
        { src: "./assets/images/pic03.webp", alt: "審査とショーケースのために集まった参加者" },
        { src: "./assets/images/pic06.webp", alt: "ノートPCとゲーム開発画面が並ぶ開発現場" },
        { src: "./assets/images/pic07.webp", alt: "AIゲーム開発チャレンジに集中する参加者たち" }
      ],
      games: [
        { rank: "1st", title: "作物を守れ", clip: "./assets/clips/game-1.webp", videoId: "Oo83e0IOP1k", summary: "作物を妨害要素から守るアクションディフェンスプロトタイプ。", tags: ["Defense", "Live build", "AI-assisted"] },
        { rank: "2nd", title: "ボリとクマ農夫", clip: "./assets/clips/game-2.webp", videoId: "U2c7nsVord8", summary: "クマ農夫の世界観をもとにした収穫型ミッションゲーム。", tags: ["Mission", "Farm", "Character"] },
        { rank: "3rd", title: "Farm Cafe", clip: "./assets/clips/game-3.webp", videoId: "cWqvbGeCfvk", summary: "食材選択と注文処理を中心にしたカフェ運営プロトタイプ。", tags: ["Management", "2D", "Casual"] },
        { rank: "4th", title: "ドタバタ産地直送", clip: "./assets/clips/game-4.webp", videoId: "PUunl4T7IxM", summary: "山地ステージで目標量を達成する配送・収集型ゲーム。", tags: ["Delivery", "Stage", "Arcade"] },
        { rank: "5th", title: "ヘイバニー", clip: "./assets/clips/game-5.webp", videoId: "6oGbuu8b5n8", summary: "童話的なビジュアルとキャラクター体験を中心にしたインタラクティブプロトタイプ。", tags: ["Story", "Character", "AI art"] }
      ],
      steps: [
        { title: "Pre-onboarding", text: "AIツール、制作環境、提出形式を事前に案内します。" },
        { title: "AI production sprint", text: "コード、アート、サウンド、企画を支援するAIツールをゲーム制作の流れに接続します。" },
        { title: "Live game build", text: "制限時間内に企画、実装、アート、サウンド、ビルドを完成させます。" },
        { title: "Playtest & jury review", text: "遊べる成果物を基準に審査とフィードバックを行います。" },
        { title: "Showcase & report", text: "受賞作、使用ツール、開発者フィードバック、パートナーインサイトをコンテンツとレポートに整理します。" }
      ],
      partners: [
        { title: "AI Solution Partner", text: "単なるツール露出ではなく、実際の開発者利用文脈、オンボーディング反応、つまずき、改善要望を収集します。" },
        { title: "Game Company / Publisher", text: "AIネイティブな制作者と初期プロトタイプを発掘し、ショーケースとネットワーキングにつなげます。" },
        { title: "Creator / Media Partner", text: "ゲーム開発コミュニティが理解する言葉で、事前チュートリアル、レビュー、現場コンテンツを作ります。" },
        { title: "Education Partner", text: "AI時代のゲーム開発教育モデルとカリキュラム実験を、実際の制作成果で検証します。" },
        { title: "Venue Partner", text: "PCカフェ、eスポーツ空間、カンファレンス会場が、開発とショーケースが同時に起きる舞台になります。" },
        { title: "VC / Ecosystem Partner", text: "完成作以前のチーム力、制作速度、問題解決の進め方を近くで見ることができます。" }
      ],
      participants: [
        "開発者、デザイナー、アーティスト、プランナー、学生、インディークリエイター向け",
        "AIツール経験がある、またはすばやく実験してみたい制作者に適しています",
        "個人・チーム参加の形式は次シーズンのフォーマット確定後に案内します",
        "受賞作はホームページのショーケースとパートナーミーティング資料に掲載されます"
      ],
      media: [
        { label: "GoraniTV", title: "AI vs 人間 ゲーム開発チャレンジ", text: "Season 0の進行過程と成果を紹介した開発コンテンツ。", href: "https://youtu.be/IIA4xy-rt7k" },
        { label: "GoldMetal", title: "5時間ゲームジャムで作られた作品紹介", text: "短時間で完成したゲームを直接紹介した動画。", href: "https://www.youtube.com/watch?v=NFfOzqcTeAo" },
        { label: "GGG", title: "Fake Game Developerレビュー", text: "ゲームメディアチャンネルによるSeason 0レビュー。", href: "https://youtu.be/qFahj_e2vjg" }
      ],
      faq: [
        { q: "次のシーズンはいつ開催されますか？", a: "日程と会場が確定次第、参加案内を公開する予定です。" },
        { q: "誰が参加できますか？", a: "ゲームを作りたい開発者、デザイナー、アーティスト、プランナー、学生、インディークリエイターを対象に準備しています。" },
        { q: "どんな成果物を作りますか？", a: "制限時間内に遊べるゲームプロトタイプを作ることを目標にします。" },
        { q: "パートナー問い合わせはどうすればよいですか？", a: "パートナーシップ、スポンサー、メンター、メディア協業はメールでお問い合わせいただけます。" }
      ]
    },
    zh: {
      meta: {
        title: "AI Game Dev Arena | AI 原生游戏开发节",
        description: "AI Game Dev Arena 是一个现场游戏开发竞技场，创作者在限定时间内使用 AI 工具做出可玩的游戏。它连接合作伙伴、参与者、AI 解决方案公司、游戏公司、VC 和发行方。",
        keywords: "AI Game Dev Arena, AI 游戏 jam, AI game jam, AI game development, playable prototype, 独立游戏, 游戏开发活动, 游戏节, AI-native developer",
        ogDescription: "From Player to Developer. 连接合作伙伴、创作者和可玩原型的 AI 原生游戏开发竞技场。",
        twitterDescription: "在限定时间内用 AI 做出可玩游戏的现场开发竞技场。"
      },
      schema: {
        organizationDescription: "AI Game Dev Arena 通过可玩的游戏原型连接 AI 原生游戏创作者、AI 解决方案伙伴、游戏公司、发行方、VC、创作者和媒体。",
        eventDescription: "创作者使用 AI 工具在限定时间内做出可玩游戏原型的现场 AI 原生游戏开发挑战。",
        faq: [
          { name: "AI Game Dev Arena 是什么？", text: "这是一个现场游戏开发挑战，创作者使用 AI 工具在限定时间内做出可玩的游戏原型。" },
          { name: "参与者招募页和合作伙伴介绍页需要分开吗？", text: "早期官网保留共同核心内容，并按阶段调整 CTA 和顶部信息，因此合作伙伴会议和参与者招募都可以从同一页面扩展。" },
          { name: "合作伙伴能获得什么价值？", text: "AI 解决方案公司可以获得真实开发者使用洞察，游戏公司和发行方可以发现 AI 原生创作者与早期原型。" }
        ]
      },
      ui: {
        skipLink: "跳到正文",
        navLabel: "主导航",
        navToggleLabel: "打开菜单",
        languageLabel: "选择语言",
        tickerLabel: "项目关键词",
        videoClose: "关闭视频",
        videoTitle: "Play Video",
        watchPlayVideo: "观看试玩视频",
        watchReference: "观看视频",
        videoButtonAria: "观看 {title} 试玩视频",
        videoImageAlt: "{title} 试玩视频片段",
        videoFrameTitle: "{title} 试玩视频",
        tagDelimiter: " / "
      },
      brand: {
        small: "From Player to Developer"
      },
      nav: [
        { label: "简介", href: "#about" },
        { label: "Season 0", href: "#proof" },
        { label: "作品展示", href: "#showcase" },
        { label: "合作伙伴", href: "#partner" },
        { label: "参与者", href: "#participants" },
        { label: "联系", href: "#contact" }
      ],
      hero: {
        eyebrow: "AI-NATIVE GAME DEVELOPMENT FESTIVAL",
        title: "AI Game Dev Arena",
        lead: "From Player to Developer",
        copy: "一个现场开发竞技场，创作者使用 AI 工具在限定时间内做出可玩的游戏。合作伙伴获得真实制作场景，参与者获得新的作品集舞台。",
        partnerCta: "洽谈合作",
        participantCta: "加入候补名单",
        actionsLabel: "主要操作",
        factsLabel: "Season 0 关键指标",
        facts: [
          { value: "5.5h", label: "Live build sprint" },
          { value: "5", label: "Playable prototypes" },
          { value: "Season 0", label: "Proof of format" }
        ]
      },
      ticker: ["AI GAME JAM", "AI BUILD PIPELINE", "PLAYABLE PROTOTYPES", "CREATOR NETWORK", "TOOL PARTNERS", "SHOWCASE"],
      about: {
        eyebrow: "WHAT THIS IS",
        title: "不只是游戏 Jam，而是展示 AI 时代制作方式的舞台。",
        body: [
          "AI Game Dev Arena 是一个现场挑战，开发者、设计师、策划、学生和独立创作者使用 AI 工具，在短时间内做出可玩的游戏。",
          "合作伙伴可以看到真实开发现场的工具使用洞察，参与者则获得能转化为作品集和职业素材的展示体验。"
        ]
      },
      proof: {
        eyebrow: "SEASON 0 PROOF",
        title: "Season 0 是下一次 Arena 的起点。",
        body: "2026 年 5 月 1 日，参与者在限定时间内做出了可玩的游戏，过程和结果都以视频与展示形式留下。"
      },
      showcase: {
        eyebrow: "WINNING PROTOTYPES",
        title: "大约 5 小时内诞生的可玩游戏。",
        body: "这些真实成果说明，即使制作时间很短，游戏想法也可以变成可以玩的体验。"
      },
      program: {
        eyebrow: "PROGRAM FORMAT",
        title: "从预先导入到作品展示的一条制作循环。",
        body: "参与者把 AI 工具直接应用到游戏制作中，合作伙伴可以在现场看到过程和结果。"
      },
      partnerSection: {
        eyebrow: "FOR PARTNERS",
        title: "把品牌曝光和真实制作体验放在一起。",
        body: "AI 解决方案公司、游戏公司、发行方、VC、教育机构和媒体伙伴，都能在自然的制作语境中与开发者相遇。"
      },
      participantSection: {
        eyebrow: "FOR PARTICIPANTS",
        title: "给想和 AI 一起把游戏做完的人。",
        body: "这里面向开发者、设计师、美术、策划、学生和独立创作者。下一季信息确认后，我们会第一时间通知。",
        cta: "加入参与者候补名单",
        imageAlt: "Season 0 的开发与作品展示现场",
        mailSubject: "AI Game Dev Arena 参与者候补名单"
      },
      mediaSection: {
        eyebrow: "MEDIA & COMMUNITY",
        title: "关注过 Season 0 的人们。",
        body: "开发者社区和游戏媒体频道介绍了 Season 0 的现场、过程和可玩成果。"
      },
      faqSection: {
        eyebrow: "FAQ",
        title: "常见问题。"
      },
      closing: {
        eyebrow: "NEXT SEASON",
        title: "合作伙伴会议和参与兴趣登记已开放。",
        body: "我们正在寻找合作伙伴、赞助方、导师、评委、媒体伙伴和参与者，一起打造下一季 AI Game Dev Arena。",
        partnerCta: "索取合作资料",
        participantCta: "加入候补名单",
        partnerSubject: "AI Game Dev Arena 合作咨询",
        participantSubject: "AI Game Dev Arena 参与者候补名单"
      },
      footer: {
        small: "AI-native game development arena",
        tagline: "一个与 AI 一起创造的新游戏开发竞技场。",
        links: [
          { label: "联系", href: "mailto:aigamedevarena@gmail.com" },
          { label: "合作伙伴", href: "#partner" },
          { label: "参与者", href: "#participants" }
        ]
      },
      stats: [
        { value: "5.5h", label: "AI 辅助现场制作冲刺" },
        { value: "5", label: "获奖可玩原型" },
        { value: "Open", label: "面向多引擎的制作格式" },
        { value: "Media", label: "创作者与记者报道" }
      ],
      gallery: [
        { src: "./assets/images/pic05.webp", alt: "AI Game Dev Arena Season 0 现场参与者正在开发" },
        { src: "./assets/images/pic02.webp", alt: "参与者在现场测试完成的游戏" },
        { src: "./assets/images/pic03.webp", alt: "参与者为评审和展示聚集在一起" },
        { src: "./assets/images/pic06.webp", alt: "放着笔记本和游戏开发画面的开发现场" },
        { src: "./assets/images/pic07.webp", alt: "专注于 AI 游戏开发挑战的参与者" }
      ],
      games: [
        { rank: "1st", title: "守护农作物", clip: "./assets/clips/game-1.webp", videoId: "Oo83e0IOP1k", summary: "保护农作物免受干扰因素侵害的动作防御原型。", tags: ["Defense", "Live build", "AI-assisted"] },
        { rank: "2nd", title: "Bori 和熊农夫", clip: "./assets/clips/game-2.webp", videoId: "U2c7nsVord8", summary: "基于熊农夫世界观的收获型任务游戏。", tags: ["Mission", "Farm", "Character"] },
        { rank: "3rd", title: "Farm Cafe", clip: "./assets/clips/game-3.webp", videoId: "cWqvbGeCfvk", summary: "以食材选择和订单处理为核心的咖啡馆经营原型。", tags: ["Management", "2D", "Casual"] },
        { rank: "4th", title: "农场直送大作战", clip: "./assets/clips/game-4.webp", videoId: "PUunl4T7IxM", summary: "在山地关卡中达成目标数量的配送与收集游戏。", tags: ["Delivery", "Stage", "Arcade"] },
        { rank: "5th", title: "Hay Bunny", clip: "./assets/clips/game-5.webp", videoId: "6oGbuu8b5n8", summary: "以童话视觉和角色互动为核心的互动原型。", tags: ["Story", "Character", "AI art"] }
      ],
      steps: [
        { title: "Pre-onboarding", text: "提前说明 AI 工具、制作环境和提交格式。" },
        { title: "AI production sprint", text: "把辅助代码、美术、声音和策划的 AI 工具接入游戏制作流程。" },
        { title: "Live game build", text: "在限定时间内完成企划、实现、美术、声音和构建。" },
        { title: "Playtest & jury review", text: "以可玩的结果为标准进行评审与反馈。" },
        { title: "Showcase & report", text: "将获奖作品、工具使用、开发者反馈和合作伙伴洞察整理成内容与报告。" }
      ],
      partners: [
        { title: "AI Solution Partner", text: "不止是工具曝光，而是收集真实开发者使用语境、导入反应、卡点和改进需求。" },
        { title: "Game Company / Publisher", text: "通过展示和交流发现 AI 原生创作者与早期游戏原型。" },
        { title: "Creator / Media Partner", text: "用游戏开发社区能理解的语言制作预先教程、评测和现场内容。" },
        { title: "Education Partner", text: "用真实制作成果验证 AI 时代的游戏开发教育模型和课程实验。" },
        { title: "Venue Partner", text: "网吧、电竞空间和会议场地可以成为开发与展示同时发生的舞台。" },
        { title: "VC / Ecosystem Partner", text: "在作品完全成熟之前，近距离观察团队能力、制作速度和解决问题的方式。" }
      ],
      participants: [
        "面向开发者、设计师、美术、策划、学生和独立创作者",
        "适合有 AI 工具经验，或愿意快速实验的创作者",
        "个人或团队参与形式将在下一季格式确认后公布",
        "获奖作品会出现在官网展示和合作伙伴会议资料中"
      ],
      media: [
        { label: "GoraniTV", title: "AI vs 人类游戏开发挑战", text: "记录 Season 0 过程和结果的开发内容。", href: "https://youtu.be/IIA4xy-rt7k" },
        { label: "GoldMetal", title: "5 小时游戏 Jam 做出的作品介绍", text: "直接介绍短时间内完成的游戏的视频。", href: "https://www.youtube.com/watch?v=NFfOzqcTeAo" },
        { label: "GGG", title: "Fake Game Developer 评测", text: "游戏媒体频道对 Season 0 的评测内容。", href: "https://youtu.be/qFahj_e2vjg" }
      ],
      faq: [
        { q: "下一季什么时候举办？", a: "日程和场地确认后，我们会公开参与指南。" },
        { q: "谁可以参加？", a: "我们正在为想做游戏的开发者、设计师、美术、策划、学生和独立创作者准备。" },
        { q: "会做出什么成果？", a: "目标是在限定时间内做出可玩的游戏原型。" },
        { q: "如何进行合作咨询？", a: "合作、赞助、导师、评委和媒体协作都可以通过邮件联系。" }
      ]
    }
  };

  window.AIGDA_LANGUAGES = languages;
  window.AIGDA_LOCALES = locales;
  window.AIGDA_CONTENT = locales.ko;
})();
