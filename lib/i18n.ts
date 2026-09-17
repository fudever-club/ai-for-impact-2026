import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  vi: {
    translation: {
      hero: {
        title: "CodeMosaic 2025",
        slogan: "Piece by Piece, Build the Perfect Solution",
        cta: "Đăng ký ngay",
        subtitle: "Cuộc thi Lập trình Học thuật",
        countdown: {
          days: "Ngày",
          hours: "Giờ",
          minutes: "Phút",
          seconds: "Giây",
        },
        teams: "Đội tham gia",
      },
      intro: {
        heading: "Giới thiệu Cuộc thi",
        content:
          'Cuộc thi CodeMosaic là một sân chơi trí tuệ dành cho học sinh, sinh viên và những bạn trẻ đam mê công nghệ thông tin. Với slogan "Piece by Piece, Build the Perfect Solution", cuộc thi hướng đến việc rèn luyện tư duy logic, phát triển kỹ năng giải quyết vấn đề và khuyến khích tinh thần sáng tạo trong lập trình.',
        values: {
          title: "Giá trị",
          items: [
            {
              title: "Học thuật",
              description:
                "Tạo môi trường rèn luyện, nâng cao kỹ năng lập trình, giải thuật, thiết kế hệ thống – những năng lực then chốt của ngành CNTT",
            },
            {
              title: "Cạnh tranh lành mạnh",
              description:
                "Thúc đẩy tinh thần thi đua, khẳng định năng lực bản thân trong cộng đồng sinh viên",
            },
            {
              title: "Xây dựng đội ngũ",
              description:
                "Là sân chơi để phát hiện và đào tạo sinh viên tài năng, chuẩn bị cho các kỳ thi ICPC",
            },
          ],
        },
        purposes: {
          title: "Mục đích",
          items: [
            {
              title: "Khơi gợi niềm đam mê",
              description:
                "Giúp các bạn trẻ rèn luyện tư duy logic, khả năng giải quyết vấn đề và sáng tạo trong lập trình",
            },
            {
              title: "Cọ xát, học hỏi",
              description:
                "Là nơi giao lưu, trao đổi kinh nghiệm giữa những người có chung sở thích, từ đó mở rộng kiến thức và kỹ năng",
            },
            {
              title: "Ứng dụng thực tế",
              description:
                "Các bài toán trong cuộc thi thường gắn liền với những vấn đề thực tiễn, giúp người tham gia rèn luyện kỹ năng phân tích, tối ưu và vận dụng thuật toán",
            },
          ],
        },
        meanings: {
          title: "Ý nghĩa",
          items: [
            "Góp phần nâng cao chất lượng đào tạo CNTT trong nhà trường",
            "Nhiều sinh viên từ sân chơi này có nhiều kiến thức, kinh nghiệm, cọ xát thực tế",
            "Cổ vũ tinh thần học hỏi, hợp tác và hỗ trợ lẫn nhau trong giới trẻ yêu thích lập trình",
            "Tạo cơ hội kết nối giữa sinh viên, giảng viên và doanh nghiệp công nghệ",
          ],
        },
      },
      rules: {
        heading: "Thể lệ & Hình thức thi",
        basicInfo: {
          time: {
            title: "Thời gian",
            text: "Chung kết ngày 18/10/2025, thi trong 4 giờ liên tục (240 phút)",
          },
          location: {
            title: "Địa điểm",
            text: "Sảnh Gamma, Đại học FPT Đà Nẵng",
          },
          participants: {
            title: "Đối tượng",
            text: "Sinh viên thuộc khối ngành Công nghệ Thông tin – Đại học FPT Đà Nẵng",
          },
        },
        format: {
          title: "Hình thức thi đấu",
          team: {
            title: "Thành viên đội",
            text: "Mỗi đội từ 3-5 thành viên",
          },
          equipment: {
            title: "Thiết bị",
            text: "Mỗi đội chỉ sử dụng 1 laptop duy nhất đã được cài đặt sẵn công cụ lập trình và trình duyệt web (Chrome, Firefox, hoặc Edge)",
          },
          backup: {
            title: "Máy dự phòng",
            text: "Khuyến khích mang theo máy dự phòng phòng trường hợp hỏng hóc",
          },
        },
        content: {
          title: "Nội dung đề thi",
          topics: [
            "Sắp xếp",
            "Tìm kiếm",
            "Phương pháp tính",
            "Quy hoạch động",
            "Cây",
            "Lý thuyết đồ thị",
            "Số học",
            "Hình học",
            "Thuật toán tham lam",
            "Lý thuyết trò chơi",
          ],
          advanced:
            "Ngoài ra, có thể xuất hiện các bài toán mở rộng/chuyên sâu gợi ý theo các hướng công nghệ như: Pathfinding (A*, Dijkstra), Grid Map, Obstacle Avoidance, PWM/PID Control, Assignment Strategy, Line-following, Landmark detection, Load Balancing, QR/Color/Tag Recognition, Evolutionary Algorithms (Genetic, Simulated Annealing)",
        },
        scoring: {
          title: "Hình thức chấm điểm",
          text: "Hệ thống tự động chấm bài dựa trên bộ test case ẩn và hiện. Một bài chỉ được tính điểm khi vượt qua toàn bộ test cases. Nếu bất kỳ test nào sai, bài sẽ được tính 0 điểm.",
        },
      },
      timeline: {
        heading: "Timeline Sự kiện",
        events: [
          {
            date: "16/09/2025",
            content: "Phát động và truyền thông cuộc thi",
          },
          {
            date: "20/09 – 10/10/2025",
            content: "Mở cổng đăng ký, nhận đơn tham gia",
          },
          {
            date: "12/10/2025",
            content: "Thi thử & test hệ thống (8h-12h)",
          },
          {
            date: "18/10/2025",
            content: "Chung kết CodeMosaic 2025 (8h-12h)",
            hasDetail: true,
          },
          {
            date: "19/10/2025",
            content: "Công bố kết quả, bế mạc cuộc thi",
          },
        ],
      },
      detailedSchedule: {
        heading: "Lịch trình ngày 18/10/2025",
        buttonText: "Xem chi tiết",
        goodLuck: "Chúc các đội thi đấu thành công!",
        schedule: [
          {
            time: "07h00 - 07h15",
            title: "Đón tiếp thí sinh",
            description: "Đón tiếp thí sinh/người tham dự",
          },
          {
            time: "07h15 - 07h30",
            title: "Chia nhóm",
            description: "Chia nhóm thí sinh",
          },
          {
            time: "07h30 - 07h50",
            title: "Khai mạc",
            description: "Khai mạc cuộc thi CodeMosaic",
            subItems: [
              "Giới thiệu Ban tổ chức",
              "Hướng dẫn thí sinh về quy định cuộc thi"
            ],
          },
          {
            time: "07h50 - 12h00",
            title: "Thi lập trình",
            description: "Tiến hành vòng thi lập trình",
            highlight: true,
          },
          {
            time: "12h00 - 12h15",
            title: "Chấm điểm",
            description: "Ban tổ chức chấm điểm và công bố kết quả",
          },
          {
            time: "12h15 - 12h30",
            title: "Trao giải",
            description: "Trao giải cho đội thắng cuộc",
            highlight: true,
          },
          {
            time: "12h30 - 12h40",
            title: "Bế mạc",
            description: "Bế mạc cuộc thi",
          },
        ],
      },
      prizes: {
        heading: "Giải thưởng",
        first: "Giải Nhất",
        second: "Giải Nhì",
        third: "Giải Ba",
        consolation: "Giải Khuyến khích",
      },
      faq: {
        heading: "Câu hỏi thường gặp",
        questions: [
          {
            question: "Đối tượng tham gia cuộc thi là ai?",
            answer:
              "Cuộc thi CodeMosaic 2025 dành riêng cho sinh viên thuộc khối ngành Công nghệ Thông tin tại Đại học FPT Đà Nẵng. Đây là sân chơi trí tuệ nhằm khơi gợi niềm đam mê lập trình, rèn luyện tư duy logic và kỹ năng giải quyết vấn đề. Dự kiến sự kiện sẽ thu hút khoảng 150 sinh viên tham gia, tạo nên một môi trường cạnh tranh lành mạnh và cơ hội giao lưu, học hỏi giữa những người có cùng đam mê công nghệ.",
          },
          {
            question: "Cách thức đăng ký tham gia như thế nào?",
            answer:
              "Việc đăng ký tham gia CodeMosaic 2025 rất đơn giản và hoàn toàn miễn phí. Các bạn sinh viên chỉ cần đăng ký online thông qua Google Form trong khoảng thời gian từ ngày 20/09/2025 đến 10/10/2025. Ban tổ chức không thu bất kỳ lệ phí nào. Sau khi đăng ký, danh sách dự thi sẽ được chuyển tới Bộ môn Công nghệ thông tin để lọc và lên kế hoạch tổ chức. Thí sinh đăng ký thành công sẽ nhận được thông báo và hướng dẫn chi tiết qua email.",
          },
          {
            question: "Được phép sử dụng ngôn ngữ lập trình nào?",
            answer:
              "Theo chuẩn ICPC Global 2024, cuộc thi hỗ trợ đa dạng các ngôn ngữ lập trình phổ biến bao gồm: C (gcc 14.2.0), C++ (g++ 14.2.0), Java 8 (javac 1.8.0), Java 19 (javac 19.0.2), và Python 3 (3.12.6). Mỗi ngôn ngữ đều được cài đặt với trình biên dịch phù hợp và các tùy chọn tối ưu hóa chuẩn. Thí sinh có thể tự do lựa chọn ngôn ngữ mình thành thạo nhất để giải quyết các bài toán. Hệ thống chấm điểm sẽ tự động biên dịch và kiểm tra code với các test case được chuẩn bị sẵn.",
          },
          {
            question: "Có tổ chức thi thử trước ngày thi không?",
            answer:
              "Có, Ban tổ chức sẽ tổ chức buổi thi thử và test hệ thống vào ngày 12/10/2025, từ 8h đến 12h sáng. Đây là cơ hội quan trọng để các đội tham gia làm quen với giao diện hệ thống thi online, cách thức nộp bài, và quy trình chấm điểm tự động. Trong buổi này, thí sinh sẽ được hướng dẫn chi tiết về cách sử dụng hệ thống, định dạng input/output, và các lưu ý kỹ thuật quan trọng. Ban tổ chức khuyến khích tất cả các đội tham gia buổi thi thử để đảm bảo không gặp bất kỳ khó khăn kỹ thuật nào trong ngày thi chính thức.",
          },
        ],
      },
      competitionFormat: {
        heading: "Hình thức thi đấu",
        duration: {
          title: "Thời gian làm bài",
          text: "Tổng thời gian làm bài: 4 tiếng liên tục (240 phút)",
        },
        team: {
          title: "Thành viên đội",
          text: "Mỗi đội từ 3-5 thành viên",
        },
        equipment: {
          title: "Thiết bị",
          text: "Mỗi đội chỉ sử dụng 1 laptop duy nhất đã được cài đặt sẵn công cụ lập trình và trình duyệt web (Chrome, Firefox, hoặc Edge)",
        },
        backup: {
          title: "Máy dự phòng",
          text: "Khuyến khích mang theo máy dự phòng phòng trường hợp hỏng hóc",
        },
      },
      programmingLanguages: {
        heading: "Ngôn ngữ lập trình hỗ trợ",
        subtitle: "Theo chuẩn ICPC Global 2024",
        tableHeaders: {
          language: "Ngôn ngữ",
          version: "Phiên bản",
          compiler: "Trình biên dịch",
          command: "Lệnh compile",
        },
      },
      scoringSystem: {
        heading: "Quy tắc chấm điểm",
        testing: {
          title: "Hình thức chấm điểm",
          points: [
            "Hệ thống tự động chấm bài dựa trên bộ test case ẩn và hiện",
            "Một bài chỉ được tính điểm khi vượt qua toàn bộ test cases",
            "Nếu bất kỳ test nào sai, bài sẽ được tính 0 điểm",
          ],
        },
        scoring: {
          title: "Tính điểm",
          points: [
            "Mỗi bài đúng toàn bộ test sẽ được 1 điểm",
            "Hệ thống sẽ lấy kết quả tốt nhất trong các lần nộp",
            "Các bài nộp lỗi, sai hoặc không qua đủ test đều không có điểm",
          ],
        },
        ranking: {
          title: "Phân định xếp hạng",
          points: [
            "Các đội cùng điểm sẽ được phân hạng dựa trên tổng thời gian giải quyết",
            "So sánh thời gian, số lần nộp của lần nộp có điểm cuối cùng",
            "Đội có thời gian và số lần nộp ít hơn sẽ xếp hạng cao hơn",
          ],
        },
        results: {
          title: "Xếp hạng và công bố kết quả",
          points: [
            "Đội nào có điểm cao hơn xếp hạng cao hơn",
            "Nếu bằng điểm, đội có tổng thời gian thấp hơn sẽ xếp trên",
            "Scoreboard tổng hợp từ hệ thống là căn cứ duy nhất để BTC công bố giải thưởng",
          ],
        },
        note: {
          title: "Lưu ý quan trọng:",
          text: "Mọi thí sinh tham gia cần đọc kỹ, hiểu, tuân thủ, chuẩn bị sẵn sàng các thể lệ nêu trên. BTC không chịu trách nhiệm với các kết quả sai sót do đội không đọc kỹ quy chế và thể lệ dự thi.",
        },
      },
      organization: {
        heading: "Tổ chức thực hiện",
        roles: {
          approver: "Người phê duyệt",
          reviewer: "Người kiểm tra",
          creator: "Người lập",
        },
        departments: [
          {
            name: "Phòng Hợp tác quốc tế & Phát triển cá nhân",
          },
          {
            name: "Bộ môn CF",
          },
          {
            name: "Phòng hành chính",
          },
          {
            name: "Phòng IT",
          },
        ],
      },
      register: {
        heading: "Đăng ký tham gia",
        description:
          "Nhanh tay đăng ký tham gia CodeMosaic 2025 để không bỏ lỡ cơ hội tranh tài và rinh giải thưởng hấp dẫn!",
        cta: "Đăng ký ngay",
      },
      header: {
        nav: {
          intro: "Giới thiệu",
          rules: "Thể lệ",
          timeline: "Lịch trình",
          prizes: "Giải thưởng",
          faq: "FAQ",
          register: "Đăng ký",
          contact: "Liên hệ",
        },
      },
      footer: {
        university: "FPT University Đà Nẵng",
        department: "ICPDP & Bộ môn Công nghệ Thông tin",
        contact: "Liên hệ",
        followUs: "Theo dõi chúng tôi",
        copyright: "© 2025 CodeMosaic. Mọi quyền bảo lưu.",
      },
    },
  },
  en: {
    translation: {
      hero: {
        title: "CodeMosaic 2025",
        slogan: "Piece by Piece, Build the Perfect Solution",
        cta: "Register Now",
        subtitle: "Academic Programming Contest",
        countdown: {
          days: "Days",
          hours: "Hours",
          minutes: "Minutes",
          seconds: "Seconds",
        },
        teams: "Teams Registered",
      },
      intro: {
        heading: "About CodeMosaic",
        content:
          'CodeMosaic is an intellectual playground for high school students, university students, and young people passionate about information technology. With the slogan "Piece by Piece, Build the Perfect Solution", the contest aims to develop logical thinking, enhance problem-solving skills, and encourage creative spirit in programming.',
        values: {
          title: "Values",
          items: [
            {
              title: "Academic",
              description:
                "Create an environment to practice and improve programming skills, algorithms, system design – the key competencies of IT",
            },
            {
              title: "Healthy Competition",
              description:
                "Promote competitive spirit and affirm personal capabilities within the student community",
            },
            {
              title: "Team Building",
              description:
                "A playground to discover and train talented students, preparing for ICPC competitions",
            },
          ],
        },
        purposes: {
          title: "Purposes",
          items: [
            {
              title: "Ignite Passion",
              description:
                "Help young people develop logical thinking, problem-solving abilities, and creativity in programming",
            },
            {
              title: "Experience and Learning",
              description:
                "A place to exchange experiences among people with common interests, thereby expanding knowledge and skills",
            },
            {
              title: "Practical Application",
              description:
                "Problems in the contest are often linked to real-world issues, helping participants practice analytical, optimization, and algorithm application skills",
            },
          ],
        },
        meanings: {
          title: "Significance",
          items: [
            "Contribute to improving the quality of IT training in schools",
            "Many students from this playground gain knowledge, experience, and practical exposure",
            "Encourage the spirit of learning, cooperation, and mutual support among young programming enthusiasts",
            "Create opportunities for connection between students, lecturers, and technology enterprises",
          ],
        },
      },
      rules: {
        heading: "Rules & Format",
        basicInfo: {
          time: {
            title: "Time",
            text: "Final contest on October 18, 2025, 4 continuous hours (240 minutes)",
          },
          location: {
            title: "Venue",
            text: "Gamma Hall, FPT University Danang",
          },
          participants: {
            title: "Participants",
            text: "Students majoring in Information Technology at FPT University Danang",
          },
        },
        format: {
          title: "Competition Format",
          team: {
            title: "Team Members",
            text: "Each team consists of 3-5 members",
          },
          equipment: {
            title: "Equipment",
            text: "Each team uses only 1 laptop pre-installed with programming tools and web browsers (Chrome, Firefox, or Edge)",
          },
          backup: {
            title: "Backup Machine",
            text: "Teams are encouraged to bring backup machines in case of hardware failure",
          },
        },
        content: {
          title: "Contest Content",
          topics: [
            "Sorting",
            "Searching",
            "Computational Methods",
            "Dynamic Programming",
            "Trees",
            "Graph Theory",
            "Number Theory",
            "Geometry",
            "Greedy Algorithms",
            "Game Theory",
          ],
          advanced:
            "Additionally, advanced problems may appear in areas such as: Pathfinding (A*, Dijkstra), Grid Map, Obstacle Avoidance, PWM/PID Control, Assignment Strategy, Line-following, Landmark detection, Load Balancing, QR/Color/Tag Recognition, Evolutionary Algorithms (Genetic, Simulated Annealing)",
        },
        scoring: {
          title: "Judging Method",
          text: "Automatic judging system based on hidden and visible test cases. A problem is scored only when it passes all test cases. If any test fails, the submission gets 0 points.",
        },
      },
      timeline: {
        heading: "Event Timeline",
        events: [
          {
            date: "Sep 16, 2025",
            content: "Contest announcement and promotion",
          },
          {
            date: "Sep 20 – Oct 10, 2025",
            content: "Registration period open",
          },
          {
            date: "Oct 12, 2025",
            content: "Trial contest & system test (8am-12pm)",
          },
          {
            date: "Oct 18, 2025",
            content: "CodeMosaic 2025 Final Contest (8am-12pm)",
            hasDetail: true,
          },
          {
            date: "Oct 19, 2025",
            content: "Results announcement & closing ceremony",
          },
        ],
      },
      detailedSchedule: {
        heading: "Schedule for October 18, 2025",
        buttonText: "View Details",
        goodLuck: "Good luck to all teams!",
        schedule: [
          {
            time: "07:00 - 07:15",
            title: "Reception",
            description: "Welcome contestants/attendees",
          },
          {
            time: "07:15 - 07:30",
            title: "Team Assignment",
            description: "Assigning teams to contestants",
          },
          {
            time: "07:30 - 07:50",
            title: "Opening Ceremony",
            description: "Opening CodeMosaic Contest",
            subItems: [
              "Introduction of Organizing Committee",
              "Contest rules and regulations briefing"
            ],
          },
          {
            time: "07:50 - 12:00",
            title: "Programming Contest",
            description: "Programming competition in progress",
            highlight: true,
          },
          {
            time: "12:00 - 12:15",
            title: "Judging",
            description: "Organizing committee scores and announces results",
          },
          {
            time: "12:15 - 12:30",
            title: "Award Ceremony",
            description: "Award ceremony for winning teams",
            highlight: true,
          },
          {
            time: "12:30 - 12:40",
            title: "Closing",
            description: "Closing ceremony",
          },
        ],
      },
      prizes: {
        heading: "Prizes",
        first: "First Prize",
        second: "Second Prize",
        third: "Third Prize",
        consolation: "Consolation Prize",
      },
      faq: {
        heading: "FAQ",
        questions: [
          {
            question: "Who can participate?",
            answer:
              "CodeMosaic 2025 is exclusively designed for students majoring in Information Technology at FPT University Danang. This intellectual playground aims to ignite programming passion, cultivate logical thinking, and enhance problem-solving skills. The event is expected to attract approximately 150 students, creating a healthy competitive environment and providing opportunities for networking and learning among peers who share the same passion for technology.",
          },
          {
            question: "How to register?",
            answer:
              "Registration for CodeMosaic 2025 is simple and completely free of charge. Students only need to register online through a Google Form during the period from September 20, 2025 to October 10, 2025. The organizing committee does not charge any registration fees. After registration, the list of contestants will be forwarded to the Department of Information Technology for screening and event planning. Successfully registered participants will receive notifications and detailed instructions via email.",
          },
          {
            question: "What programming languages are allowed?",
            answer:
              "According to ICPC Global 2024 standards, the contest supports a variety of popular programming languages including: C (gcc 14.2.0), C++ (g++ 14.2.0), Java 8 (javac 1.8.0), Java 19 (javac 19.0.2), and Python 3 (3.12.6). Each language is configured with appropriate compilers and standard optimization options. Contestants are free to choose the language they are most proficient in to solve the problems. The automatic judging system will compile and verify the code against pre-prepared test cases.",
          },
          {
            question: "Is there a mock contest prior to the main event?",
            answer:
              "Yes, the organizing committee will conduct a mock contest and system testing session on October 12, 2025, from 8:00 AM to 12:00 PM. This is an important opportunity for participating teams to familiarize themselves with the online contest system interface, submission procedures, and automatic judging process. During this session, contestants will receive detailed instructions on system usage, input/output formats, and important technical notes. The organizing committee strongly encourages all teams to participate in the mock contest to ensure no technical difficulties arise during the official competition day.",
          },
        ],
      },
      competitionFormat: {
        heading: "Competition Format",
        duration: {
          title: "Contest Duration",
          text: "Total contest time: 4 continuous hours (240 minutes)",
        },
        team: {
          title: "Team Members",
          text: "Each team consists of 3-5 members",
        },
        equipment: {
          title: "Equipment",
          text: "Each team uses only 1 laptop pre-installed with programming tools and web browsers (Chrome, Firefox, or Edge)",
        },
        backup: {
          title: "Backup Machine",
          text: "Teams are encouraged to bring backup machines in case of hardware failure",
        },
      },
      programmingLanguages: {
        heading: "Supported Programming Languages",
        subtitle: "According to ICPC Global 2024 standards",
        tableHeaders: {
          language: "Language",
          version: "Version",
          compiler: "Compiler",
          command: "Compile Command",
        },
      },
      scoringSystem: {
        heading: "Scoring Rules",
        testing: {
          title: "Judging Method",
          points: [
            "Automatic judging system based on hidden and visible test cases",
            "A problem is scored only when it passes all test cases",
            "If any test fails, the submission gets 0 points",
          ],
        },
        scoring: {
          title: "Point Calculation",
          points: [
            "Each problem that passes all tests earns 1 point",
            "System takes the best result among all submissions",
            "Failed, incorrect, or incomplete submissions earn no points",
          ],
        },
        ranking: {
          title: "Ranking Determination",
          points: [
            "Teams with the same points are ranked by total solving time",
            "Compare time and submission count of the last scoring submission",
            "Teams with less time and fewer submissions rank higher",
          ],
        },
        results: {
          title: "Ranking and Results",
          points: [
            "Teams with higher points rank higher",
            "If points are equal, teams with lower total time rank higher",
            "The system scoreboard is the only basis for official ranking and prizes",
          ],
        },
        note: {
          title: "Important Note:",
          text: "All participants must read, understand, and comply with the above regulations. The organizing committee is not responsible for errors due to teams not reading the rules carefully.",
        },
      },
      organization: {
        heading: "Implementation Organization",
        roles: {
          approver: "Approver",
          reviewer: "Reviewer",
          creator: "Creator",
        },
        departments: [
          {
            name: "International Cooperation & Personal Development Office",
          },
          {
            name: "CF Department",
          },
          {
            name: "Administrative Office",
          },
          {
            name: "IT Office",
          },
        ],
      },
      register: {
        heading: "Join the Competition",
        description:
          "Register now for CodeMosaic 2025 and don't miss the opportunity to compete and win exciting prizes!",
        cta: "Register Now",
      },
      header: {
        nav: {
          intro: "About",
          rules: "Rules",
          timeline: "Timeline",
          prizes: "Prizes",
          faq: "FAQ",
          register: "Register",
          contact: "Contact",
        },
      },
      footer: {
        university: "FPT University Danang",
        department: "ICPDP & Department of Information Technology",
        contact: "Contact",
        followUs: "Follow Us",
        copyright: "© 2025 CodeMosaic. All rights reserved.",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "vi",
  fallbackLng: "vi",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
