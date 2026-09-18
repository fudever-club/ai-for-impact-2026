import { CompetitionContent } from '../types';

export const viContent: CompetitionContent = {
  locale: 'vi',
  meta: {
    title: 'AI for Impact 2026 | Agentic Innovation Challenge',
    description:
      'Thử thách học thuật quy mô lớn về AI Agent. Từ tư duy lập trình thuật toán đến xây dựng giải pháp AI Agent thực chiến tạo tác động xã hội thực tế.',
    keywords: [
      'AI for Impact',
      'AI Agent',
      'Cuộc thi AI',
      'Harness Engineering',
      'ICPC',
      'Agentic AI',
    ],
  },
  nav: {
    links: [
      { id: 'about', label: 'Về cuộc thi', href: '#about' },
      { id: 'journey', label: 'Hành trình 5 chặng', href: '#journey' },
      { id: 'challenge', label: 'Vòng Tư duy', href: '#challenge' },
      { id: 'themes', label: 'Nhóm chủ đề', href: '#themes' },
      { id: 'evaluation', label: 'Thể lệ & Đánh giá', href: '#evaluation' },
      { id: 'prizes', label: 'Giải thưởng', href: '#prizes' },
      { id: 'faq', label: 'Hỏi đáp', href: '#faq' },
    ],
    registerCta: 'Đăng ký ngay',
  },
  hero: {
    endorsement: 'THỬ THÁCH ĐỔI MỚI SÁNG TẠO AGENTIC AI 2026',
    eyebrow: 'AGENTIC INNOVATION CHALLENGE 2026',
    title: 'AI FOR IMPACT 2026',
    tagline: 'Từ tư duy đến giải pháp tạo tác động',
    subTagline:
      'Chuyển từ "người dùng AI thụ động" sang "nhà kiến tạo giải pháp với AI Agent". Trui rèn tư duy giải thuật chuẩn mực, làm chủ kỹ nghệ harness engineering và xây dựng sản phẩm công nghệ tạo giá trị thực tiễn cho cộng đồng.',
    statusBadge: {
      upcoming: 'Sắp mở cổng đăng ký',
      open: 'Đang mở đơn đăng ký toàn thành phố',
      closed: 'Đã đóng cổng đăng ký',
      finished: 'Cuộc thi đã khép lại',
    },
    daysLeftText: 'Thời hạn đăng ký còn lại',
    registerCta: 'Đăng ký tham gia ngay',
    journeyCta: 'Khám phá 5 chặng thi',
    quickStats: {
      teams: '40–50 Đội thi',
      duration: '7 Tuần thực chiến',
      stages: '5 Chặng bứt phá',
    },
  },
  about: {
    badge: 'TÔN CHỈ CUỘC THI',
    title: 'Chuyển từ "Biết dùng AI" sang "Kiến tạo tác động bằng AI"',
    subtitle:
      'AI for Impact 2026 không tìm kiếm những bản thuyết trình ý tưởng trên giấy hay mã nguồn sao chép. Cuộc thi tìm kiếm những kỹ sư công nghệ bản lĩnh, biết làm chủ và kiểm soát AI Agent một cách an toàn, tin cậy và có trách nhiệm.',
    description: [
      'AI for Impact 2026 mở ra sân chơi học thuật chuyên sâu, đón đầu làn sóng công nghệ mới: Agentic AI và Kỹ nghệ Harness Engineering.',
      'Thí sinh trải qua hành trình tôi luyện toàn diện: khởi đầu bằng bài thi tư duy giải thuật khắt khe theo chuẩn quốc tế, tiếp nối bằng huấn luyện chuyên sâu cùng chuyên gia doanh nghiệp, đối đầu với thử thách sửa lỗi Agent trong môi trường kiểm thử tự động, và bứt phá tại vòng Chung kết với ràng buộc bất ngờ.',
      'Mỗi sản phẩm đều gắn liền với 1 trong 5 nhóm vấn đề cấp thiết của xã hội, có đối tượng thụ hưởng cụ thể và chỉ số đo lường tác động rõ ràng.',
    ],
    pillars: [
      {
        title: 'Nền tảng thuật toán vững chắc',
        description:
          'Thử thách lập trình theo chuẩn mực ICPC Global 2024, trui rèn tư duy logic sắc bén, cấu trúc dữ liệu và khả năng tối ưu hóa thuật toán.',
        icon: 'Code2',
      },
      {
        title: 'Làm chủ Harness Engineering',
        description:
          'Thiết lập rào chắn an toàn (guardrails), điều phối ngữ cảnh (context), kiểm thử tự động và xây dựng cơ chế tự phục hồi khi hệ thống phát sinh sự cố.',
        icon: 'Cpu',
      },
      {
        title: 'Tác động cộng đồng đo lường được',
        description:
          'Sản phẩm đầu ra là MVP vận hành thực tế trên dữ liệu kiểm thử, giải quyết trực diện bài toán của người thụ hưởng với các chỉ số đo lường minh bạch.',
        icon: 'Sparkles',
      },
    ],
  },
  journey: {
    badge: 'HÀNH TRÌNH CUỘC THI',
    title: '5 Chặng thử thách từ Ý tưởng đến Chung kết',
    subtitle:
      'Mỗi chặng thi là một mốc trui rèn năng lực, cung cấp tài nguyên chuẩn mực và đòi hỏi sản phẩm đầu ra cụ thể.',
    schedulePending: 'Lịch thi sẽ được công bố sau khi Ban Tổ chức xác nhận',
    ctaText: 'Xem tài liệu Sổ tay thí sinh chi tiết',
    stages: {
      'stage-1': {
        title: 'Đăng ký & Đề xuất ý tưởng',
        shortTitle: 'Đăng ký & Ý tưởng',
        summary:
          'Các đội đăng ký thành viên qua Google Form và chuẩn bị video đề xuất ý tưởng giải pháp theo hướng dẫn của Ban Tổ chức.',
        output: 'Hồ sơ đội thi + 01 Video ý tưởng ≤ 3 phút (Vấn đề, Giải pháp, Kiến trúc AI, Tác động xã hội).',
      },
      'stage-2': {
        title: 'Vòng loại – Tư duy lập trình',
        shortTitle: 'Thi Tư duy lập trình',
        summary:
          'Thử thách giải thuật {duration} trực tiếp tại trường theo chuẩn ICPC Global 2024. Mỗi đội sử dụng đúng 01 laptop duy nhất. Chấm tự động qua test ẩn/hiện.',
        output: 'Xếp hạng Scoreboard trực tiếp. Ban Giám khảo chọn ra Top {qualifiedTeams} đội xuất sắc nhất bước tiếp.',
      },
      'stage-3': {
        title: 'Chương trình Huấn luyện chuyên sâu',
        shortTitle: 'Training chuyên sâu',
        summary:
          'Chuỗi 3 workshop thực chiến cùng giảng viên và chuyên gia: Kiến trúc & sửa lỗi Agent, Đánh giá – Bảo mật – Tự phục hồi, Thi đấu thử nghiệm (Mock Run).',
        output: 'Bộ 10 test case (8 nghiệp vụ + 2 bảo mật), 1 ca xử lý timeout/retry, báo cáo vết thực thi (trace) và web demo trực tuyến.',
      },
      'stage-4': {
        title: 'Vòng Kỹ thuật – Harness Engineering',
        shortTitle: 'Vòng Kỹ thuật',
        summary:
          'Đối đầu bài toán "Student Support Resolution Agent": Nhận mã nguồn Agent mẫu có 6 lỗi cố ý, tiến hành sửa context/tools, vá lỗ hổng bảo mật và tối ưu vết thực thi (trace).',
        output: 'Điểm chấm tự động (70%) kết hợp phỏng vấn kỹ thuật Engineering Review (30%) để chọn ra Top 15 đội vào Chung kết.',
      },
      'stage-5': {
        title: 'Vòng Chung kết – Build Sprint & Demo Day',
        shortTitle: 'Chung kết & Demo Day',
        summary:
          'Tranh tài trực tiếp với 02 giờ Build Sprint tại chỗ trên nền bản baseline đã đóng băng, tích hợp ràng buộc bổ sung công bố bất ngờ, tiếp nối bằng Demo Day và Lễ Trao giải.',
        output: 'Bộ 4 hạng mục: MVP chạy thực tế, Báo cáo tác động xã hội, Minh chứng dữ liệu & đánh giá AI, Video demo ≤ 3 phút & Slide thuyết trình.',
      },
    },
  },
  programmingChallenge: {
    badge: 'CHẶNG 2: THỬ THÁCH GIẢI THUẬT',
    title: 'Thử thách Tư duy lập trình theo chuẩn Quốc tế',
    subtitle:
      'Vòng thi mở màn hành trình AI for Impact 2026 – thử thách thuật toán chuẩn ICPC Global 2024 dành cho các kỹ sư lập trình bản lĩnh.',
    description:
      'Một AI Agent xuất sắc không thể được xây dựng bởi những kỹ sư thiếu nền tảng thuật toán. Vòng thi kiểm tra trực tiếp khả năng phân tích, giải quyết bài toán phức tạp, tối ưu hóa độ phức tạp thời gian và không gian dưới áp lực thời gian.',
    metaCards: {
      date: 'Ngày thi đấu',
      duration: 'Thời lượng',
      location: 'Địa điểm',
      qualification: 'Chỉ tiêu đi tiếp',
    },
    rulesList: [
      'Thi đấu trực tiếp tại trường, mỗi đội gồm 3–5 thành viên chính thức.',
      'Mỗi đội chỉ được phép sử dụng duy nhất 01 máy tính xách tay trong suốt thời gian thi đấu. Khuyến khích mang thêm 01 máy dự phòng (chỉ được bật khi máy chính gặp sự cố phần cứng có xác nhận của giám thị).',
      'Hệ thống tự động chấm bài trực tuyến dựa trên bộ test case ẩn và hiện. Một bài thi chỉ được tính điểm khi vượt qua trọn vẹn 100% ca kiểm thử.',
      'Bảng xếp hạng Scoreboard thời gian thực là căn cứ duy nhất để xác định các đội giành quyền đi tiếp.',
    ],
    topicsTitle: '10 Chủ đề Thuật toán Cốt lõi',
    topics: [
      'Sắp xếp (Sorting)',
      'Tìm kiếm (Searching)',
      'Phương pháp tính',
      'Quy hoạch động (DP)',
      'Cấu trúc Cây (Trees)',
      'Lý thuyết đồ thị (Graphs)',
      'Số học (Number Theory)',
      'Hình học tính toán',
      'Thuật toán tham lam (Greedy)',
      'Lý thuyết trò chơi (Game Theory)',
    ],
    languagesTitle: 'Ngôn ngữ Lập trình & Trình biên dịch hỗ trợ (ICPC 2024)',
    languages: [
      { name: 'C', version: 'gcc 14.2.0', compiler: 'gcc -std=c99 -Wall -O2 -lm -s' },
      { name: 'C++', version: 'g++ 14.2.0', compiler: 'g++ -std=c++20 -Wall -O2 -lm -s' },
      { name: 'Java 8', version: 'javac 1.8.0', compiler: 'javac8 -encoding UTF-8 -profile compact1' },
      { name: 'Java 19', version: 'javac 19.0.2', compiler: 'javac19 -encoding UTF-8' },
      { name: 'Python 3', version: '3.12.6', compiler: 'python3 -m compileall -q' },
    ],
    handbookCta: 'Xem toàn văn Thể lệ Vòng Tư duy',
  },
  themes: {
    badge: 'LĨNH VỰC BÀI TOÁN',
    title: '5 Nhóm chủ đề kiến tạo tác động',
    subtitle:
      'Mỗi đội thi lựa chọn 01 trong 05 nhóm chủ đề xã hội cấp thiết để giải quyết bằng AI Agent.',
    description:
      'Đề tài không giới hạn ý tưởng sáng tạo, miễn là ứng dụng AI có vai trò cốt lõi và hướng đến đối tượng người dùng cụ thể.',
    items: [
      {
        id: 'edu',
        title: 'Giáo dục & Hỗ trợ học tập',
        description:
          'Trợ lý gia sư AI thích ứng theo năng lực cá nhân, công cụ hỗ trợ giảng viên giải đáp thắc mắc, phân tích tiến độ học tập và xóa bỏ rào cản tiếp cận tri thức.',
        icon: 'GraduationCap',
        examples: ['Gia sư thuật toán thích ứng', 'Trợ giảng tra cứu học liệu và giáo trình thông minh', 'Agent hỗ trợ học tập cho học sinh khiếm thị'],
      },
      {
        id: 'health',
        title: 'Y tế, Sức khỏe & Đời sống',
        description:
          'Trợ lý đồng hành chăm sóc sức khỏe tinh thần học đường, nhắc nhở tuân thủ phác đồ dùng thuốc, hỗ trợ thông tin sơ cứu ban đầu và kết nối cơ sở y tế tin cậy.',
        icon: 'HeartPulse',
        examples: ['Agent đồng hành sức khỏe tinh thần sinh viên', 'Nhắc thuốc và phân tích đơn thông minh', 'Hỗ trợ người cao tuổi tự chăm sóc sức khỏe'],
      },
      {
        id: 'tourism',
        title: 'Du lịch thông minh & Bảo tồn văn hóa',
        description:
          'Hướng dẫn viên AI bản địa hóa chuyên sâu về Đà Nẵng và miền Trung, số hóa di sản văn hóa, tư vấn lộ trình tiếp cận cho người khuyết tật và lan tỏa trải nghiệm ẩm thực bản địa.',
        icon: 'Compass',
        examples: ['Hướng dẫn viên AI du lịch Đà Nẵng đa ngôn ngữ', 'Bảo tồn truyện cổ tích và di sản phi vật thể', 'Lộ trình du lịch xanh và tiếp cận cộng đồng'],
      },
      {
        id: 'environment',
        title: 'Môi trường, Đô thị & Bền vững',
        description:
          'Hệ thống giám sát và cảnh báo sớm điểm ngập úng đô thị theo thời gian thực, tối ưu hóa lộ trình thu gom rác thải, theo dõi chất lượng không khí học đường và tiết kiệm năng lượng.',
        icon: 'Leaf',
        examples: ['Agent cảnh báo điểm ngập úng đô thị thời gian thực', 'Tối ưu hóa hành trình thu gom rác thông minh', 'Theo dõi chất lượng không khí môi trường học đường'],
      },
      {
        id: 'business',
        title: 'Hỗ trợ Doanh nghiệp & Năng suất',
        description:
          'Tự động hóa quy trình vận hành cho doanh nghiệp vừa và nhỏ (SMEs), đối soát chứng từ hóa đơn thông minh, trợ lý chăm sóc khách hàng đa kênh và tối ưu năng suất nội bộ.',
        icon: 'Briefcase',
        examples: ['Agent xử lý và đối soát hóa đơn tự động', 'Hỗ trợ tuyển dụng và sàng lọc hồ sơ tin cậy', 'Trợ lý CSKH đa kênh thông minh'],
      },
    ],
  },
  evaluation: {
    badge: 'CƠ CHẾ ĐÁNH GIÁ',
    title: 'Minh bạch, Công bằng & Dựa trên Thực chứng',
    subtitle:
      'Đánh giá đa chiều, minh bạch dựa trên máy chấm tự động, phỏng vấn kỹ thuật chuyên sâu và năng lực lập trình trực tiếp tại chỗ.',
    weights: [
      {
        stage: 'Vòng 1: Đề xuất Ý tưởng',
        percent: '15%',
        summary: 'Tính cấp thiết của bài toán, tính sáng tạo, mô hình kiến trúc AI và chất lượng video đề xuất 6 câu hỏi cốt lõi.',
      },
      {
        stage: 'Vòng 4: Kỹ thuật – Harness Engineering',
        percent: '15%',
        summary: '70% điểm máy chấm tự động qua bộ test case ẩn + 30% phỏng vấn kỹ thuật (Engineering Review) giải thích trace và bộ test tự viết.',
      },
      {
        stage: 'Vòng 5: Vòng Chung kết & Demo Day',
        percent: '70%',
        summary: 'MVP vận hành thực tế, chiều sâu kỹ thuật AI, 20 điểm đối chiếu Git Diff tại chỗ, tác động xã hội và phản biện trước Hội đồng.',
      },
    ],
    principles: [
      {
        title: 'Chấm điểm bằng Test Case ẩn',
        description:
          'Loại bỏ hoàn toàn cảm tính: Vòng Kỹ thuật được chấm tự động bằng bộ test case ẩn có cùng logic nghiệp vụ nhưng đổi dữ liệu để kiểm tra khả năng xử lý thực tế.',
      },
      {
        title: 'Đánh giá Trace & Quyền tự quyết',
        description:
          'Hội đồng chỉ định ngẫu nhiên 02 vết thực thi (trace) để thí sinh giải thích luồng suy luận của Agent, chứng minh khả năng làm chủ mã nguồn thay vì phụ thuộc công cụ sinh code.',
      },
      {
        title: 'Sản phẩm phải chạy thực tế',
        description:
          'Ban Giám khảo trực tiếp thao tác trên liên kết demo thực tế. Mọi bài thi chỉ dừng lại ở giao diện tĩnh (Figma) hoặc slide mô phỏng mà không có hệ thống hoạt động đều bị chấm 0 điểm sản phẩm.',
      },
    ],
    baselineRuleNotice: {
      title: 'Quy tắc chốt bản nền (Baseline Freeze) – Bắt buộc',
      content:
        'Mốc chốt bản nền và quy trình đối chiếu mã nguồn sẽ được công bố sau khi Ban Tổ chức xác nhận nội dung chính thức.',
    },
    allowedToolsNotice: {
      title: 'Quy định về việc sử dụng AI Coding Tools',
      content:
        'Thí sinh được khuyến khích sử dụng các AI Coding Agent (Cursor, Claude Code, GitHub Copilot). Bắt buộc phải công khai prompt log/agent log và lịch sử commit git rõ ràng. Nghiêm cấm nộp mã nguồn đã hoàn thiện trước cuộc thi hoặc sao chép sản phẩm bên thứ ba.',
    },
  },
  prizes: {
    badge: 'CƠ CẤU GIẢI THƯỞNG',
    title: 'Tôn vinh nỗ lực & Khơi nguồn khởi nghiệp',
    subtitle:
      'Tổng giá trị giải thưởng tiền mặt cùng cơ hội ươm mầm dự án.',
    items: {
      first: {
        title: 'Giải Nhất',
        description: 'Cúp vô địch + Giấy khen + Học bổng ươm tạo dự án',
        badge: 'Quán quân',
      },
      second: {
        title: 'Giải Nhì',
        description: 'Kỷ niệm chương + Giấy khen + Quà tặng công nghệ',
        badge: 'Á quân',
      },
      third: {
        title: 'Giải Ba',
        description: 'Kỷ niệm chương + Giấy khen',
        badge: 'Quý quân',
      },
      impact: {
        title: 'Giải "AI for Impact"',
        description: 'Dành cho sản phẩm có tác động cộng đồng ấn tượng nhất',
        badge: 'Tác động xã hội',
      },
      'best-agent': {
        title: 'Giải "Best Agent Engineering"',
        description: 'Dành cho giải pháp kiến trúc Agent và Harness xuất sắc nhất',
        badge: 'Kỹ thuật xuất sắc',
      },
    },
    additionalBenefits: [
      'Toàn bộ thành viên các đội lọt vào vòng Chung kết được cấp Giấy chứng nhận chính thức.',
      'Cơ hội kết nối thực tập và tuyển dụng trực tiếp với các doanh nghiệp công nghệ hàng đầu tại Đà Nẵng.',
      'Sản phẩm tiềm năng được tài trợ cố vấn để phát triển thành Đề tài Nghiên cứu khoa học (RBL) hoặc Khóa luận Tốt nghiệp (KLTN).',
    ],
  },
  faq: {
    badge: 'GIẢI ĐÁP THẮC MẮC',
    title: 'Câu hỏi thường gặp',
    subtitle: 'Mọi điều bạn cần biết trước khi nộp đơn tham gia cuộc thi',
    moreHelp: 'Bạn còn thắc mắc cần hỗ trợ trực tiếp?',
    contactBtn: 'Tham gia nhóm Zalo hỗ trợ',
    items: [
      {
        id: 'faq-1',
        question: 'Ai có thể đăng ký tham gia AI for Impact 2026?',
        answer:
          'Tất cả sinh viên các trường Đại học, Cao đẳng trên địa bàn Thành phố Đà Nẵng đều có thể đăng ký tham gia. Ưu tiên sinh viên khối ngành Công nghệ Thông tin, Phát triển Phần mềm, Trí tuệ Nhân tạo. Ban Tổ chức đặc biệt khuyến khích các đội có thành viên liên ngành (kết hợp CNTT với Kinh tế, Truyền thông, Thiết kế).',
      },
      {
        id: 'faq-2',
        question: 'Quy mô đội thi là bao nhiêu người? Chưa có đội có đăng ký được không?',
        answer:
          'Mỗi đội thi gồm từ 3 đến 5 thành viên chính thức, trong đó cử ra 01 đội trưởng đại diện liên lạc. Nếu bạn chưa có đội, hãy tham gia nhóm Zalo hỗ trợ của cuộc thi để được hỗ trợ ghép đội với các bạn có cùng chí hướng.',
      },
      {
        id: 'faq-3',
        question: 'Chưa có nhiều kinh nghiệm về AI Agent thì có tham gia được không?',
        answer:
          'Hoàn toàn được! Giai đoạn 3 của cuộc thi có chuỗi 3 buổi Huấn luyện chuyên sâu (Workshop & Training) do các giảng viên và chuyên gia doanh nghiệp hướng dẫn từ gốc: từ hiểu mô hình, viết tool, thiết kế harness cho đến xử lý bảo mật. Bạn chỉ cần có nền tảng lập trình vững vàng.',
      },
      {
        id: 'faq-4',
        question: 'Có được sử dụng các công cụ AI hỗ trợ viết code (Cursor, GitHub Copilot) không?',
        answer:
          'Có! Cuộc thi khuyến khích sinh viên sử dụng các công cụ AI Coding Agent hiện đại để nâng cao năng suất. Tuy nhiên, các đội bắt buộc phải công khai nhật ký sử dụng (prompt log) và commit git minh bạch. Ban Giám khảo sẽ phỏng vấn kỹ thuật để xác minh bạn thực sự hiểu rõ mã nguồn của mình.',
      },
      {
        id: 'faq-5',
        question: 'Quy tắc 1 Laptop ở Vòng 2 (Thi Tư duy lập trình) là như thế nào?',
        answer:
          'Để rèn luyện tinh thần làm việc nhóm và phân chia chiến thuật giải thuật như các kỳ thi quốc tế ICPC, mỗi đội chỉ được sử dụng duy nhất 01 máy tính xách tay trong {duration} thi đấu. Đội được khuyến khích mang thêm 01 máy dự phòng nhưng chỉ được bật khi máy chính gặp sự cố phần cứng có giám thị xác nhận.',
      },
      {
        id: 'faq-6',
        question: 'Vòng Kỹ thuật khác gì so với Vòng Chung kết?',
        answer:
          'Ở Vòng Kỹ thuật, bạn KHÔNG tự làm sản phẩm của mình. Bạn nhận một AI Agent mẫu do BTC chuẩn bị sẵn có các lỗi cố ý, nhiệm vụ là tìm lỗi, sửa lớp điều khiển (harness) và chứng minh bằng dữ liệu. Đến Vòng Chung kết, bạn mới hoàn thiện sản phẩm theo ý tưởng riêng của đội mình.',
      },
      {
        id: 'faq-7',
        question: 'Quy định chốt bản nền (Baseline Freeze) tại Vòng Chung kết hoạt động ra sao?',
        answer:
          'Ban Tổ chức sẽ công bố mốc chốt bản nền và quy trình đối chiếu mã nguồn sau khi nội dung chính thức được xác nhận.',
      },
      {
        id: 'faq-8',
        question: 'Làm thế nào để truy cập Sổ tay thí sinh và Thể lệ đầy đủ?',
        answer:
          'Sổ tay thí sinh và Thể lệ thi đấu sẽ được công bố sau khi nội dung chính thức được xác nhận.',
      },
    ],
  },
  register: {
    badge: 'THAM GIA NGAY',
    title: 'Sẵn sàng bước vào thử thách AI Agent?',
    subtitle:
      'Đăng ký đội thi ngay hôm nay để bước vào hành trình 7 tuần đầy bứt phá.',
    steps: [
      {
        step: '01',
        title: 'Tập hợp đội thi',
        desc: 'Tìm kiếm 3–5 người bạn cùng chí hướng, chọn đội trưởng và đặt tên đội ấn tượng.',
      },
      {
        step: '02',
        title: 'Điền đơn đăng ký',
        desc: 'Hoàn thành mẫu đơn Google Form chính thức với thông tin liên hệ chính xác.',
      },
      {
        step: '03',
        title: 'Gửi video ý tưởng',
        desc: 'Chuẩn bị video ngắn mô tả bài toán và giải pháp dự kiến theo hướng dẫn chính thức.',
      },
    ],
    ctaText: 'Điền form đăng ký tham gia ngay',
    proposalQuestionsCard: {
      badge: 'TIÊU CHUẨN VIDEO Ý TƯỞNG',
      title: '6 Câu hỏi Cốt lõi cho Video Ý tưởng (Chặng 1)',
      subtitle:
        'Hạn chót 23h59 ngày 28/09/2026. Video ≤ 3 phút cần trả lời dứt khoát 6 câu hỏi định hướng sau để Hội đồng Giám khảo đánh giá:',
      questions: [
        {
          id: 'q1',
          order: '01',
          question: 'Vấn đề là gì và ai đang chịu vấn đề đó?',
          intent: 'Xác định cụ thể đối tượng thụ hưởng và nỗi đau thực tế',
          scoringTip:
            'Tránh chọn bài toán chung chung; cần nêu rõ nhóm người dùng mục tiêu và bối cảnh cụ thể mà vấn đề nảy sinh.',
        },
        {
          id: 'q2',
          order: '02',
          question: 'Hôm nay họ đang xoay xở bằng cách nào?',
          intent: 'Phân tích các giải pháp hiện hữu và những điểm nghẽn tồn đọng',
          scoringTip:
            'Chỉ ra hạn chế của quy trình thủ công hoặc công cụ truyền thống mà AI Agent sẽ giải quyết triệt để.',
        },
        {
          id: 'q3',
          order: '03',
          question: 'Agent sẽ làm được những hành động cụ thể nào (cần những công cụ gì)?',
          intent: '[Trọng tâm Kỹ thuật] Liệt kê danh mục công cụ (tools), API và luồng ra quyết định',
          scoringTip:
            'Điểm cộng kỹ thuật: Tránh tuyên bố chung chung "AI tự làm hết", cần liệt kê cụ thể 5–7 công cụ nghiệp vụ hoặc API tích hợp.',
        },
        {
          id: 'q4',
          order: '04',
          question: 'Agent tuyệt đối không được làm gì?',
          intent: '[Trọng tâm An toàn] Thiết lập ranh giới an toàn và rào chắn kiểm soát (Guardrails)',
          scoringTip:
            'Điểm cộng an toàn: Làm rõ các rào chắn nghiệp vụ (bắt buộc xác nhận trước khi ghi dữ liệu, không tự ý sửa đổi hồ sơ).',
        },
        {
          id: 'q5',
          order: '05',
          question: 'Nếu Agent trả lời sai thì hậu quả với người dùng là gì?',
          intent: 'Đánh giá rủi ro vận hành và phương án xử lý sự cố (Graceful Fallback)',
          scoringTip:
            'Trình bày rõ cơ chế chuyển giao cho con người (Human Fallback), cảnh báo mức độ tin cậy và không bao giờ thông báo hoàn thành sai sự thật.',
        },
        {
          id: 'q6',
          order: '06',
          question: 'Lấy dữ liệu ở đâu và dữ liệu đó đáng tin đến mức nào?',
          intent: 'Xác thực độ tin cậy của nguồn dữ liệu và an toàn thông tin',
          scoringTip:
            'Cam kết sử dụng 100% dữ liệu giả lập (Mock Data) an toàn; có giải pháp kỹ thuật tự động sàng lọc văn bản hết hiệu lực.',
        },
      ],
    },
  },
  organizers: {
    badge: 'ĐƠN VỊ TỔ CHỨC',
    title: 'Đơn vị Chỉ đạo & Đăng cai Tổ chức',
    subtitle:
      'Trường Đại học FPT Đà Nẵng khởi xướng, bảo chứng chất lượng học thuật và đăng cai tổ chức cuộc thi AI for Impact 2026.',
  },
  trainingDetails: {
    badge: 'CHƯƠNG TRÌNH HUẤN LUYỆN CHUYÊN SÂU',
    title: '3 Buổi Đào tạo Thực hành Cùng Giảng viên Chuyên môn',
    subtitle:
      'Chặng 3 trang bị tư duy và kỹ năng thực chiến với Harness Engineering, bảo mật Agent và triển khai sản phẩm thực tế.',
    workshops: [
      {
        session: 'Buổi 1',
        dateStr: 'Ngày 07/10',
        title: 'Hiểu và Sửa một AI Agent',
        instructor: 'ThS. Trần Thị Tố Tâm',
        focus:
          'Phân tích sâu 5 lớp kiến trúc: Model – Tools – Agent Loop – Harness – Evaluation. Thực hành gỡ lỗi trên Agent mẫu (Student Support Agent) nhằm nâng baseline tối thiểu 15 điểm phần trăm.',
        deliverables: [
          'Bản vá mã nguồn 2 lỗi đầu tiên của Agent mẫu',
          'Báo cáo đo lường điểm baseline tăng trưởng ≥ 15%',
        ],
      },
      {
        session: 'Buổi 2',
        dateStr: 'Ngày 08/10',
        title: 'Evaluation, Security và Recovery',
        instructor: 'Hội đồng Chuyên môn Kỹ thuật (learnharness.org)',
        focus:
          'Kỹ thuật phòng thủ Prompt Injection, bảo vệ thông tin nhận dạng cá nhân (PII), cơ chế ngắt mạch (Circuit Breaker) khi timeout mạng và cấu trúc hóa vết thực thi (Trace Telemetry).',
        deliverables: [
          '08 Ca kiểm thử nghiệp vụ tự viết',
          '02 Ca kiểm thử bảo mật & prompt injection',
          '01 Ca xử lý timeout/retry tự động',
          '01 Báo cáo vết thực thi (Trace Report) có cấu trúc chuẩn',
        ],
      },
      {
        session: 'Buổi 3',
        dateStr: 'Ngày 09/10',
        title: 'Mock Run & Deployment',
        instructor: 'ThS. Lê Thiện Nhật Quang & Đội ngũ Mentors',
        focus:
          'Tập dượt quy trình nộp bài trên hệ thống chấm tự động; đóng gói container, triển khai web demo lên môi trường thực tế và chuẩn bị kịch bản pitching.',
        deliverables: [
          '01 Bài nộp hợp lệ trên hệ thống chấm thử',
          '01 Bản web demo trực tuyến hoạt động được',
        ],
      },
    ],
    mentoringCheckpoint: {
      dateStr: '21/10 – 22/10/2026',
      title: 'Checkpoint Tư vấn Chuyên sâu 1-1 cho Top 15',
      desc: 'Mỗi đội có 45 phút làm việc trực tiếp cùng Mentor chuyên gia để rà soát kiến trúc, tháo gỡ điểm nghẽn kỹ thuật và hoàn thiện sản phẩm trước ngày Chung kết.',
    },
  },
  stage4Challenge: {
    badge: 'BÀI TOÁN THỰC CHIẾN CHẶNG 4',
    title: 'Thử thách Kỹ thuật Harness Engineering',
    targetAgent: 'Student Support Resolution Agent',
    baselineScore: '~42.5 / 100 điểm',
    description:
      'Mỗi đội tiếp nhận mã nguồn một AI Agent mẫu còn tồn tại 6 lỗi cố ý về nghiệp vụ và bảo mật. Trọng tâm là thiết lập tầng Harness an toàn, sửa lỗi, phát triển bộ kiểm thử tự động và ứng phó sự cố mạng trực tiếp (Live Incident).',
    intentionalFlaws: [
      {
        id: 'flaw-1',
        name: 'Trích dẫn quy chế đã hết hiệu lực',
        risk: 'Agent trả lời dựa trên văn bản cũ, đưa ra thông tin sai lệch về điều kiện học tập và thi cử cho sinh viên.',
        resolution: 'Bổ sung siêu dữ liệu (metadata) thời gian và bộ lọc trạng thái hiệu lực văn bản trước khi truy xuất.',
      },
      {
        id: 'flaw-2',
        name: 'Thiếu bước phê duyệt (Approval Gate) khi ghi dữ liệu',
        risk: 'Agent tự ý tạo đơn phúc tra hoặc điểm danh mà chưa nhận được sự xác nhận dứt khoát từ người dùng.',
        resolution: 'Thiết lập chốt kiểm soát con người (Human-in-the-loop) trước khi kích hoạt các thao tác biến đổi dữ liệu.',
      },
      {
        id: 'flaw-3',
        name: 'Treo vô tận khi công cụ gặp sự cố',
        risk: 'API bên ngoài trả về mã lỗi 500 khiến Agent liên tục gọi lại không hồi kết, làm cạn kiệt ngân sách token.',
        resolution: 'Đặt giới hạn thử lại tối đa (Max Retries = 3), tích hợp ngắt mạch (Circuit Breaker) và cơ chế dự phòng (Fallback).',
      },
      {
        id: 'flaw-4',
        name: 'Rò rỉ dữ liệu cá nhân giữa các phiên tương tác',
        risk: 'Truy xuất chéo thông tin nhạy cảm của người dùng khác trong cùng phiên làm việc hoặc bộ nhớ dùng chung.',
        resolution: 'Ràng buộc chặt chẽ Session ID, che giấu dữ liệu định danh (PII) và cô lập ngữ cảnh bộ nhớ.',
      },
      {
        id: 'flaw-5',
        name: 'Lỗ hổng tiêm lệnh can thiệp (Prompt Injection)',
        risk: 'Đầu vào hiểm độc từ người dùng đánh lừa Agent bỏ qua chỉ thị hệ thống để thực hiện hành vi trái phép.',
        resolution: 'Phân tách tuyệt đối kênh chỉ đạo hệ thống với dữ liệu người dùng, kích hoạt tiền kiểm duyệt qua Guardrails.',
      },
      {
        id: 'flaw-6',
        name: 'Không lưu vết thực thi (Trace) của các bước suy luận',
        risk: 'Không lưu vết bước đi khiến việc gỡ lỗi, kiểm định và phản biện kỹ thuật trở nên bất khả thi.',
        resolution: 'Ghi nhận trọn vẹn Structured JSON Trace cho từng lượt gọi công cụ và biến đổi dữ liệu.',
      },
    ],
    liveIncident: {
      title: 'Tình huống Sự cố Trực tiếp (Live Incident)',
      scenario:
        'Trong lúc thi, Ban Tổ chức sẽ kích hoạt sự cố mạng mô phỏng (API Timeout đồng loạt) để kiểm tra năng lực tự phục hồi của Agent.',
      evaluationCriteria:
        'Agent phải chuyển sang kịch bản dự phòng an toàn (graceful fallback), không bị dừng đột ngột (crash) và chuyển tiếp ticket sang cán bộ hỗ trợ kịp thời.',
    },
  },
  stage5RunOfShow: {
    badge: 'LỊCH TRÌNH NGÀY CHUNG KẾT 31/10',
    title: 'Khung Giờ Thi Đấu Ngày Chung Kết Toàn Quốc',
    subtitle:
      'Nhịp độ thi đấu khẩn trương, minh bạch với điểm nhấn là 02 giờ Build Sprint tại chỗ và chấm đối chiếu Git Diff.',
    timeline: [
      {
        time: '08h00 – 08h10',
        activity: 'Check-in & Khai mạc Vòng Chung kết',
        details: 'Các đội nhận vị trí thi đấu, kết nối mạng và chuẩn bị môi trường lập trình.',
      },
      {
        time: '08h10',
        activity: 'Công bố Ràng buộc Bổ sung Tại chỗ',
        details:
          'Ban Tổ chức công bố đề bài/tính năng mới bất ngờ (nhóm đối tượng người dùng đặc thù hoặc quy tắc dữ liệu mới).',
        highlight: true,
      },
      {
        time: '08h10 – 10h10',
        activity: 'Build Sprint 02 Giờ Liên tục',
        details:
          '120 phút lập trình tại chỗ để tích hợp ràng buộc bổ sung vào bản nền đã chốt từ 28/10. Ban Giám khảo chấm 20 điểm đối chiếu Git Diff!',
        highlight: true,
      },
      {
        time: '10h10',
        activity: 'Code Freeze & Nộp Toàn bộ Hồ sơ',
        details:
          'Đóng băng repository. Nộp GitHub Link, Web Demo, Báo cáo Tác động, Video Demo ≤ 3 phút và Slide thuyết trình.',
      },
      {
        time: '10h10 – 10h30',
        activity: 'Giải lao & Chuẩn bị Sân khấu Demo',
        details: 'Ban Kỹ thuật kiểm tra đường truyền và thiết bị trình chiếu sân khấu.',
      },
      {
        time: '10h30 – 12h00',
        activity: 'Demo Day & Pitching Hội đồng BGK',
        details:
          'Mỗi đội có 08 phút demo sản phẩm trực tiếp + 04 phút chất vấn kỹ thuật sắc bén từ Hội đồng Chuyên môn.',
        highlight: true,
      },
      {
        time: '12h00 – 12h15',
        activity: 'Hội ý Ban Giám khảo & Tổng hợp Điểm',
        details:
          'Hội đồng thư ký tính điểm theo công thức tổng hợp 3 vòng: 15% Vòng 1 + 15% Vòng 2 + 70% Vòng 3.',
      },
      {
        time: '12h15 – 12h45',
        activity: 'Công bố Kết quả, Trao giải & Bế mạc',
        details:
          'Vinh danh Quán quân AI for Impact 2026 và trao các giải thưởng tiền mặt cùng Giấy chứng nhận chính thức.',
        highlight: true,
      },
    ],
  },
  philosophyQuote: {
    quote:
      'Một Agent nói hay mà làm sai thì nguy hiểm hơn một Agent không nói gì. Việc của em không phải là làm cho AI trả lời trôi chảy, mà là làm cho nó chỉ dám khẳng định những điều nó đã kiểm chứng được.',
    subMotto: 'Em sẽ phải làm những gì, và cuối cùng em làm ra cái gì?',
    author: 'Định hướng Cốt lõi – Sổ tay Thí sinh AI for Impact 2026',
  },
  stageComparison: {
    badge: 'PHÂN BIỆT RÕ RÀNG',
    title: 'Hai sản phẩm khác nhau – đừng nhầm lẫn',
    subtitle: 'Điểm khác biệt quan trọng nhất giữa Vòng Kỹ thuật và Vòng Chung kết',
    intro:
      'Ở Vòng Kỹ thuật, thí sinh không xây sản phẩm từ đầu mà nhận một AI Agent do Ban Tổ chức viết sẵn có lỗi cố ý, nhiệm vụ là tìm và sửa nó. Chỉ đến Vòng Chung kết, đội thi mới phát triển sản phẩm riêng của mình.',
    columns: {
      aspect: 'Tiêu chí so sánh',
      technicalRound: 'Vòng Kỹ thuật (17/10)',
      finalRound: 'Vòng Chung kết (31/10)',
    },
    rows: [
      {
        aspect: 'Bài toán',
        technicalRound:
          'Chung cho mọi đội: Agent hỗ trợ sinh viên tra quy chế và xử lý ticket (Student Support Resolution Agent).',
        finalRound: 'Riêng của từng đội, theo ý tưởng và giải pháp đã đăng ký ở Chặng 1.',
      },
      {
        aspect: 'Điểm xuất phát',
        technicalRound:
          'Nhận 01 private repository chạy được nhưng còn ít nhất 6 lỗi cố ý (điểm baseline ~42.5/100).',
        finalRound: 'Bản nền do chính đội chuẩn bị trước tại nhà và chốt lúc 23h59 ngày 28/10.',
      },
      {
        aspect: 'Nhiệm vụ trọng tâm',
        technicalRound:
          'Tìm lỗi, sửa lớp điều khiển (harness) quanh Agent, vá bảo mật, xử lý sự cố API timeout và chứng minh bằng số liệu.',
        finalRound:
          'Trong 02 giờ Build Sprint: hoàn thiện sản phẩm và tích hợp ràng buộc bổ sung công bố bất ngờ tại chỗ.',
      },
      {
        aspect: 'Sản phẩm nộp',
        technicalRound:
          '01 repository đã sửa + tối thiểu 10 ca kiểm thử tự viết + trace report + báo cáo cải thiện 6 chỉ số.',
        finalRound:
          'Bộ 04 hạng mục: Prototype/MVP chạy thực tế + Báo cáo tác động + Minh chứng đánh giá AI + Video demo ≤ 3p & Slide.',
      },
      {
        aspect: 'Hình thức chấm',
        technicalRound:
          '70% máy chấm tự động qua bộ test ẩn + 30% Engineering Review (phỏng vấn giải thích 02 trace ngẫu nhiên).',
        finalRound:
          '100% Hội đồng chấm theo 06 tiêu chí, trong đó 20 điểm dành riêng cho phần thực hiện tại chỗ (đối chiếu git diff).',
      },
      {
        aspect: 'Trọng số điểm',
        technicalRound:
          '15% tổng điểm toàn cuộc thi (Sàng lọc chọn Top 15 đội xuất sắc vào Chung kết).',
        finalRound:
          '70% tổng điểm toàn cuộc thi (Xác định ngôi vị Quán quân và trao giải trực tiếp trong ngày).',
      },
    ],
    conclusion:
      'Vòng Kỹ thuật tồn tại vì một lý do thực tế: nếu chưa từng chữa một Agent hỏng, bạn sẽ không thể biết Agent của mình hỏng ở đâu khi tự xây.',
  },
  agentAnatomy: {
    badge: 'GIẢI PHẪU SẢN PHẨM',
    title: 'Năm lớp kiến trúc AI Agent bắt buộc',
    subtitle:
      'Hầu hết các đội chỉ làm lớp 1 và lớp 2 rồi dừng lại. Điểm số và sự tin cậy nằm ở lớp 4 và lớp 5.',
    analogy:
      'Cách nhớ đơn giản: Model là động cơ, Agent là chiếc xe, còn Harness là vô lăng, phanh, cảm biến, bản đồ và hệ thống kiểm định. Không ai giao xe cho khách khi mới chỉ có động cơ.',
    layers: [
      {
        layerNumber: 1,
        name: 'Model (Động cơ)',
        roleQuestion: 'Ai hiểu và diễn đạt ngôn ngữ?',
        description:
          'Lựa chọn mô hình nền tảng và viết chỉ dẫn hệ thống (system prompt). Ban Tổ chức cấp cùng một định mức quota cho mọi đội.',
        deliverable:
          'Prompt hệ thống chuẩn hóa, cấu hình nhiệt độ (temperature) và định dạng phản hồi.',
      },
      {
        layerNumber: 2,
        name: 'Tools (Công cụ hành động)',
        roleQuestion: 'Agent có thể làm được những hành động gì?',
        description:
          'Xây dựng 5–7 hàm công cụ cụ thể: tra cứu, lấy dữ liệu, tạo bản ghi, chuyển cho con người. Mỗi hàm có đầu vào, đầu ra, quyền hạn và thông báo lỗi rõ ràng.',
        deliverable:
          'Bộ Schema công cụ tường minh, validate tham số đầu vào và xử lý ngoại lệ an toàn.',
      },
      {
        layerNumber: 3,
        name: 'Agent Loop (Vòng lặp quyết định)',
        roleQuestion: 'Agent quyết định bước tiếp theo như thế nào?',
        description:
          'Vòng lặp vận hành: nhận yêu cầu, phân tích ý định, chọn công cụ, đọc kết quả trả về, quyết định bước tiếp theo, kiểm tra và trả lời hoặc chuyển cho con người.',
        deliverable:
          'Cơ chế điều phối đa bước, dừng đúng thời điểm và ngăn chặn vòng lặp vô tận.',
      },
      {
        layerNumber: 4,
        name: 'Harness (Bộ khung bảo vệ & Kiểm soát)',
        roleQuestion: 'Ai giữ cho Agent không làm sai và không phá hỏng dữ liệu?',
        description:
          'Lọc tài liệu hết hiệu lực, chặn prompt injection trong dữ liệu, bắt buộc xác nhận (approval gate) trước khi ghi dữ liệu, giới hạn số lần thử lại (retry), ghi log đầy đủ.',
        deliverable:
          'Rào chắn an toàn (guardrails), cơ chế phục hồi khi timeout và trace report chi tiết.',
      },
      {
        layerNumber: 5,
        name: 'Evaluation (Bộ đánh giá & Đo lường)',
        roleQuestion: 'Làm sao biết Agent chạy đúng và phiên bản mới tốt hơn bản cũ?',
        description:
          'Viết bộ ca kiểm thử tự động (test suite), chạy kiểm định trước và sau khi tối ưu, xuất bảng số liệu so sánh định lượng.',
        deliverable:
          'Tối thiểu 10 ca kiểm thử tự động, bảng so sánh chỉ số và ma trận độ chính xác.',
      },
    ],
    mvpDefinition: {
      badge: 'TIÊU CHUẨN ĐẦU RA',
      title: 'Thế nào là một sản phẩm "Hoạt động được"?',
      description:
        'Hội đồng Giám khảo sẽ trực tiếp thao tác trên liên kết demo của đội. Một sản phẩm được công nhận là hoạt động được khi thỏa mãn đồng thời cả 5 tiêu chí sau:',
      conditions: [
        {
          title: 'Độc lập thao tác',
          description:
            'Người ngoài đội tự mở liên kết và sử dụng được ngay, không cần thành viên ngồi bên cạnh giải thích hay can thiệp.',
        },
        {
          title: 'Tác động dữ liệu thực tế',
          description:
            'Agent thực sự kích hoạt công cụ và làm thay đổi cơ sở dữ liệu, chứ không phải in ra câu trả lời lập trình sẵn.',
        },
        {
          title: 'Chủ động làm rõ khi thiếu dữ kiện',
          description:
            'Khi thông tin đầu vào chưa đủ điều kiện xử lý, Agent chủ động đặt câu hỏi làm rõ thay vì tự tiện suy đoán.',
        },
        {
          title: 'Trung thực khi phát sinh sự cố',
          description:
            'Khi công cụ hoặc API gặp lỗi, Agent tuyệt đối không thông báo "đã hoàn thành" sai sự thật mà phải xử lý ngoại lệ an toàn hoặc chuyển tiếp hỗ trợ.',
        },
        {
          title: 'Dẫn chứng nguồn tin cậy',
          description:
            'Mọi khẳng định về quy chế, số liệu hay chính sách đều phải kèm mã định danh hoặc liên kết tài liệu nguồn còn hiệu lực.',
        },
      ],
    },
    nonProducts: {
      badge: 'CẢNH BÁO MẤT ĐIỂM',
      title: 'Những dạng bài nộp KHÔNG được tính là sản phẩm',
      rules: [
        {
          title: 'Bản thiết kế Figma hoặc ảnh chụp giao diện tĩnh',
          description:
            'Dù giao diện có đẹp và trau chuốt đến đâu, bản vẽ tĩnh không có mã nguồn vận hành luồng nghiệp vụ đều nhận 0 điểm sản phẩm.',
        },
        {
          title: 'Trang web bao bọc (wrapper) gọi thẳng ChatGPT',
          description:
            'Một khung chat đơn thuần chuyển tiếp yêu cầu đến API LLM mà không có công cụ riêng, không có dữ liệu nghiệp vụ và thiếu rào chắn kiểm soát.',
        },
        {
          title: 'Video dàn dựng sẵn mô phỏng',
          description:
            'Video dựng theo kịch bản lý tưởng trong khi hệ thống thực tế không thể truy cập hoặc không thể thao tác.',
        },
        {
          title: 'Hệ thống thiếu bộ kiểm thử tự động',
          description:
            'Sản phẩm chạy được nhưng không có bất kỳ test case tự động nào để chứng minh tính đúng đắn, độ an toàn và khả năng tự phục hồi.',
        },
        {
          title: 'Không có thay đổi so với bản nền 28/10',
          description:
            'Sản phẩm không có bất kỳ dòng code mới nào hoặc không tích hợp ràng buộc bổ sung công bố sáng 31/10 (sẽ hiển thị rõ ràng trên bảng đối chiếu Git Diff).',
        },
      ],
    },
    finalDeliverables: {
      badge: 'HỒ SƠ CHUNG KẾT',
      title: 'Bộ 04 hạng mục nộp bắt buộc kết thúc cuộc thi',
      items: [
        {
          id: 'item-1',
          name: '1. Prototype hoặc MVP hoạt động được',
          specification:
            'AI Agent chạy trọn vẹn luồng nghiệp vụ chính, tích hợp ràng buộc bổ sung công bố sáng 31/10, có dẫn nguồn kiểm chứng.',
          format: 'Link demo trực tuyến truy cập được + Private repository Ban Tổ chức cấp.',
        },
        {
          id: 'item-2',
          name: '2. Báo cáo tác động xã hội (Impact Report)',
          specification:
            'Tài liệu 3–5 trang trả lời: vấn đề là gì, ai là người thụ hưởng, đo bằng chỉ số nào, đã thử nghiệm với bao nhiêu người và kết quả thực nghiệm.',
          format: 'Tệp định dạng PDF tiêu chuẩn.',
        },
        {
          id: 'item-3',
          name: '3. Minh chứng dữ liệu & Quy trình đánh giá AI',
          specification:
            'Nguồn dữ liệu sử dụng, bộ ca kiểm thử tự động của đội, nhật ký tương tác (prompt log / agent log) và bảng điểm định lượng.',
          format: 'Thư mục tài liệu trong repository + Bảng kết quả đối soát.',
        },
        {
          id: 'item-4',
          name: '4. Video demo & Slide thuyết trình',
          specification:
            'Video quay màn hình hệ thống đang chạy thật (thời lượng ≤ 3 phút). Slide súc tích phục vụ 08 phút trình bày và 04 phút phản biện.',
          format: 'Đường dẫn video Google Drive + Tệp trình chiếu Slide (PDF/PPTX).',
        },
      ],
    },
  },
  teamStructure: {
    badge: 'CHIẾN THUẬT ĐỘI HÌNH',
    title: 'Phân vai trong đội thi 4–5 thành viên',
    subtitle:
      'Đội nào để một bạn giỏi nhất gánh vác toàn bộ sẽ gặp rủi ro lớn ở phần Engineering Review, bởi Ban Giám khảo sẽ phỏng vấn độc lập từng thành viên.',
    warningNote:
      'Trong phần Engineering Review và Demo Day, Giám khảo sẽ chỉ định ngẫu nhiên 02 vết thực thi (trace) bất kỳ và đặt câu hỏi chuyên môn tới từng bạn theo đúng vai trò đảm nhiệm.',
    roles: [
      {
        role: '1. Agent & Tools (Kỹ thuật Agent & Công cụ)',
        focus: 'Phát triển các hàm công cụ nghiệp vụ và lập trình vòng lặp ra quyết định (Agent Loop).',
        keyQuestion: '“Vì sao Agent lại chọn gọi công cụ này trước mà không phải công cụ khác?”',
      },
      {
        role: '2. Data & Context (Kỹ sư Dữ liệu & Ngữ cảnh)',
        focus:
          'Thu thập và chuẩn hóa dữ liệu, thiết lập cơ chế truy xuất ngữ cảnh (RAG) và thuật toán sàng lọc quy định hết hiệu lực.',
        keyQuestion:
          '“Số liệu hay quy định này lấy từ nguồn nào, và làm sao bạn chắc chắn văn bản đó còn hiệu lực?”',
      },
      {
        role: '3. Evaluation & Safety (Kiểm thử & Rào chắn An toàn)',
        focus:
          'Xây dựng bộ ca kiểm thử tự động, thiết lập rào chắn bảo vệ (guardrails) và đo lường sự cải thiện của các chỉ số.',
        keyQuestion:
          '“Làm sao bạn chứng minh bằng số liệu rằng phiên bản này vận hành tốt hơn và an toàn hơn bản trước?”',
      },
      {
        role: '4. Product & Impact (Sản phẩm & Tác động Xã hội)',
        focus:
          'Khảo sát nhu cầu người thụ hưởng, hoàn thiện báo cáo tác động, xây dựng kịch bản demo và dẫn dắt phần thuyết trình.',
        keyQuestion:
          '“Ai là người thụ hưởng trực tiếp, và phần nào của hệ thống được đội hoàn thành trong 2 giờ thi sáng nay?”',
      },
    ],
    fifthMemberNote:
      'Nếu đội có 5 thành viên: Thành viên thứ 5 sẽ phụ trách thiết kế giao diện người dùng (UI), tối ưu hóa trải nghiệm tương tác và đóng gói bản web demo trực tuyến.',
    mockDataPrinciple: {
      title: 'Nguyên tắc Bắt buộc: 100% Dữ liệu Giả lập (Mock Data)',
      description:
        'Toàn bộ quá trình phát triển, kiểm thử và demo bắt buộc sử dụng 100% dữ liệu giả lập (mock database). Tuyệt đối không sử dụng thông tin sinh viên thật hoặc can thiệp vào bất kỳ hệ thống nghiệp vụ đang vận hành của Nhà trường.',
    },
  },
  caseStudy: {
    badge: 'KỊCH BẢN THỰC TẾ',
    title: 'Theo chân Đội "Đi Cùng" – Hành trình từ Ý tưởng đến Nghiên cứu',
    subtitle:
      'Hành trình giả định của một đội gồm 4 sinh viên năm 3 lựa chọn chủ đề Du lịch thông minh & Bảo tồn văn hóa.',
    data: {
      teamName: 'Đội Đi Cùng',
      topic: 'Du lịch thông minh & Tiếp cận cộng đồng tại Đà Nẵng',
      targetUsers: 'Khách du lịch dùng xe lăn và người cao tuổi gặp khó khăn khi di chuyển',
      problem:
        'Du khách dùng xe lăn đến Đà Nẵng không biết điểm đến nào thực sự tiếp cận được: có đường dốc không, có thang máy không, nhà vệ sinh có đủ rộng không. Thông tin trên mạng rải rác và không được xác minh.',
      proposal:
        'Xây dựng AI Agent lập lộ trình du lịch chỉ gợi ý các điểm đến đã được kiểm chứng về khả năng tiếp cận, và nói rõ "Chưa có dữ liệu xác minh" với các điểm còn lại thay vì bịa đặt.',
      questions: [
        { q: 'Vấn đề là gì và ai đang chịu vấn đề đó?', isKey: false },
        { q: 'Hôm nay họ đang xoay xở bằng cách nào?', isKey: false },
        {
          q: 'Agent sẽ làm được những hành động cụ thể nào (cần những công cụ gì)?',
          isKey: true,
        },
        { q: 'Agent tuyệt đối không được làm gì?', isKey: true },
        { q: 'Nếu Agent trả lời sai thì hậu quả với người dùng là gì?', isKey: false },
        { q: 'Lấy dữ liệu ở đâu và dữ liệu đó đáng tin đến mức nào?', isKey: false },
      ],
      milestones: [
        {
          stage: 'Chặng 1 (Ý tưởng)',
          action: 'Trả lời 6 câu hỏi và nộp video 3 phút mô tả ranh giới hoạt động của Agent.',
          outcome:
            'Được Hội đồng đánh giá cao vì xác định rõ ranh giới: chỉ khẳng định điều đã kiểm chứng.',
        },
        {
          stage: 'Chặng 2 (Tư duy lập trình)',
          action: '4 bạn cùng giải thuật toán trên 1 laptop duy nhất trong {duration}.',
          outcome: 'Đạt thứ hạng cao trên Scoreboard và lọt vào Top {qualifiedTeams} đội xuất sắc.',
        },
        {
          stage: 'Chặng 3 (Training)',
          action: 'Tham gia 3 buổi training thực hành, sửa 3 lỗi của baseline và nộp bộ kiểm thử.',
          outcome:
            'Nâng điểm Agent mẫu lên hơn 15 điểm phần trăm và có bài tập hợp lệ dự Vòng 4.',
        },
        {
          stage: 'Chặng 4 (Vòng Kỹ thuật)',
          action:
            'Nhận Agent hỏng (42.5/100đ), sửa 6 lỗi theo thứ tự ưu tiên, xử lý Live Incident timeout.',
          outcome:
            'Điểm công khai đạt 91.50/100đ, bảo vệ xuất sắc 2 trace và chính thức lọt Top 15 Chung kết.',
        },
        {
          stage: 'Chặng 5 (Chung kết)',
          action:
            'Chốt bản nền lúc 23h59 ngày 28/10. Sáng 31/10 tích hợp ràng buộc bất ngờ: dữ liệu điểm đến mâu thuẫn và nhóm người cao tuổi.',
          outcome: 'Hoàn thành tích hợp trong 2 giờ, thuyết trình thuyết phục và đạt giải cao chung cuộc.',
        },
      ],
      academicOutcome:
        'Sau cuộc thi, giải pháp được kết nối với giảng viên hướng dẫn để phát triển thành Đề tài Nghiên cứu khoa học (RBL) và Khóa luận Tốt nghiệp.',
    },
  },
  comprehensiveScoring: {
    badge: 'THANG ĐIỂM CHI TIẾT',
    title: 'Cơ cấu Chấm điểm Toàn diện & Minh bạch',
    subtitle:
      'Tổng hòa giữa máy chấm tự động qua test case ẩn, phỏng vấn kỹ thuật và năng lực sprint tại chỗ.',
    formula: 'Tổng điểm = (15% × Vòng Ý tưởng) + (15% × Vòng Kỹ thuật) + (70% × Vòng Chung kết)',
    rounds: [
      {
        roundId: 'round-1',
        title: 'Vòng 1: Đề xuất Ý tưởng & Video',
        weight: '15% tổng điểm',
        totalPoints: 100,
        criteria: [
          {
            name: 'Tính cấp thiết và rõ ràng của vấn đề',
            points: 25,
            description: 'Vấn đề thực tiễn có thật, đối tượng thụ hưởng xác định cụ thể.',
          },
          {
            name: 'Tính sáng tạo và khả thi của giải pháp',
            points: 25,
            description: 'Ý tưởng mới mẻ, phạm vi giải quyết phù hợp với thời gian cuộc thi.',
          },
          {
            name: 'Mức độ ứng dụng AI Agent cốt lõi',
            points: 25,
            description: 'AI đóng vai trò trung tâm xử lý, không phải mô hình gắn thêm cho có.',
          },
          {
            name: 'Tác động xã hội dự kiến',
            points: 15,
            description: 'Có bộ chỉ số đo lường định lượng và phương pháp thu thập minh chứng.',
          },
          {
            name: 'Chất lượng trình bày (Video ≤ 3p)',
            points: 10,
            description: 'Video mạch lạc, đúng cấu trúc 6 câu hỏi, lập luận thuyết phục.',
          },
        ],
      },
      {
        roundId: 'round-4',
        title: 'Vòng 4: Vòng Kỹ thuật (Harness Engineering)',
        weight: '15% tổng điểm',
        totalPoints: 100,
        notes:
          'Điểm Vòng Kỹ thuật = (70% × Chấm tự động test ẩn) + (30% × Engineering Review). Chọn Top 15 đội vào Chung kết.',
        criteria: [
          {
            name: 'Chấm tự động qua bộ ca kiểm thử ẩn (70%)',
            points: 70,
            description:
              'Hoàn thành đúng nghiệp vụ, dẫn chứng quy định còn hiệu lực, approval gate trước khi ghi, chặn injection, tự phục hồi khi timeout, tối ưu chi phí token.',
          },
          {
            name: 'Giải thích 02 Trace do Giám khảo chỉ định (Review)',
            points: 10,
            description:
              'Cả đội phân tích cặn kẽ luồng suy luận, quyết định gọi công cụ và cách xử lý dữ liệu của Agent trong vết thực thi.',
          },
          {
            name: 'Bộ tối thiểu 10 ca kiểm thử tự viết (Review)',
            points: 8,
            description:
              'Độ bao phủ của các ca thuận lợi (happy path), ca biên (edge case), ca phục hồi lỗi và ca bảo mật.',
          },
          {
            name: 'Báo cáo cải thiện chỉ số định lượng (Review)',
            points: 7,
            description:
              'Báo cáo so sánh định lượng 6 chỉ số đo lường trước và sau tối ưu so với bản baseline ban đầu.',
          },
          {
            name: 'Mức độ hiểu sâu và đóng góp của từng thành viên (Review)',
            points: 5,
            description:
              'Mọi thành viên đều nắm vững mã nguồn và luồng vận hành, không phụ thuộc vào một cá nhân duy nhất.',
          },
        ],
      },
      {
        roundId: 'round-5',
        title: 'Vòng 5: Chung kết – Build Sprint 02 Giờ & Demo Day',
        weight: '70% tổng điểm',
        totalPoints: 100,
        notes:
          'Chốt bản nền lúc 23h59 ngày 28/10. Ban Giám khảo có bản đối chiếu git diff để chấm riêng 20 điểm thực hiện tại chỗ.',
        criteria: [
          {
            name: 'Sản phẩm hoạt động được (Prototype/MVP chạy thật)',
            points: 20,
            description:
              'Vận hành mượt mà luồng nghiệp vụ chính trên liên kết trực tuyến, dữ liệu biến đổi thật.',
          },
          {
            name: 'Chiều sâu kỹ thuật AI Agent',
            points: 20,
            description:
              'Điều phối ngữ cảnh thông minh, thiết lập rào chắn an toàn (guardrails), xử lý ngoại lệ và tự phục hồi tin cậy.',
          },
          {
            name: 'Phần thực hiện tại chỗ (Git Diff đối chiếu)',
            points: 20,
            description:
              'Chất lượng mã nguồn viết trong 02 giờ thi và mức độ tích hợp trọn vẹn ràng buộc bổ sung công bố tại chỗ.',
          },
          {
            name: 'Minh chứng dữ liệu và quy trình đánh giá AI',
            points: 15,
            description:
              'Độ tin cậy của nguồn dữ liệu, kết quả chạy test suite và nhật ký tương tác (prompt log / agent log).',
          },
          {
            name: 'Báo cáo tác động và đối tượng thụ hưởng',
            points: 15,
            description:
              'Báo cáo tác động xã hội sâu sắc, có minh chứng khảo sát người dùng hoặc dữ liệu thử nghiệm thực tế.',
          },
          {
            name: 'Demo trực tiếp và phản biện (8p demo + 4p Q&A)',
            points: 10,
            description:
              'Trình diễn lưu loát trên sản phẩm thực tế, trả lời sắc sảo câu hỏi chất vấn chuyên môn của Hội đồng.',
          },
        ],
      },
    ],
    principles: [
      {
        title: 'Chấm bằng Test Case ẩn',
        description:
          'Loại bỏ hoàn toàn gian lận hardcode: Bộ test ẩn có cùng logic nghiệp vụ nhưng thay đổi mã hồ sơ và dữ liệu kiểm thử.',
      },
      {
        title: 'Kiểm chứng Trace độc lập',
        description:
          'Ngăn chặn việc dùng công cụ sinh code mà không hiểu: Giám khảo yêu cầu thí sinh phân tích từng bước suy luận trong vết thực thi.',
      },
      {
        title: 'Đối chiếu Git Diff tại chỗ',
        description:
          'Bảo đảm công bằng tuyệt đối: Giám khảo nhìn thấy từng dòng mã được viết trong 02 giờ thi ngày 31/10.',
      },
    ],
  },
  footer: {
    copyright: '© 2026 AI for Impact. Bản quyền thuộc về Ban Tổ chức.',
    disclaimer:
      'AI for Impact 2026 là một thử thách học thuật về Agentic AI. Toàn bộ thể lệ, chuẩn kỹ thuật và quy chế thi đấu được công bố chính thức trong Sổ tay thí sinh.',
    developerCredit: {
      text: 'Developed by',
      teamName: 'FU-DEVER',
      logoUrl: '/brand/logo-dever.png',
      url: 'https://fudever.com',
    },
    links: {
      handbook: 'Sổ tay Thí sinh & Thể lệ',
      registration: 'Biểu mẫu đăng ký',
      supportGroup: 'Nhóm Zalo hỗ trợ',
      fanpage: 'Fanpage chính thức',
    },
  },
};
