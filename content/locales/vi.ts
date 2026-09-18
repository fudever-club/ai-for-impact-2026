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
      { id: 'journey', label: 'Hành trình 4 chặng', href: '#journey' },
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
      'Chuyển từ "người dùng AI thụ động" sang "kỹ sư phát triển giải pháp với AI Agent". Rèn luyện tư duy thuật toán vững chắc, làm chủ Harness Engineering và kiến tạo sản phẩm công nghệ giải quyết bài toán thật cho cộng đồng.',
    statusBadge: {
      upcoming: 'Sắp mở cổng đăng ký',
      open: 'Đang mở đơn đăng ký toàn thành phố',
      closed: 'Đã đóng cổng đăng ký',
      finished: 'Cuộc thi đã khép lại',
    },
    daysLeftText: 'Thời hạn đăng ký còn lại',
    registerCta: 'Đăng ký tham gia ngay',
    journeyCta: 'Khám phá 4 chặng thi',
    quickStats: {
      teams: '40–50 Đội thi',
      duration: '7 Tuần thực chiến',
      stages: '4 Chặng thử thách',
    },
  },
  about: {
    badge: 'TÔN CHỈ CUỘC THI',
    title: 'Chuyển từ "Biết dùng AI" sang "Kiến tạo tác động bằng AI"',
    subtitle:
      'AI for Impact 2026 không tìm kiếm những bản thuyết trình ý tưởng trên giấy hay mã nguồn sao chép. Cuộc thi tìm kiếm những kỹ sư công nghệ bản lĩnh, biết làm chủ và kiểm soát AI Agent một cách an toàn, tin cậy và có trách nhiệm.',
    description: [
      'AI for Impact 2026 mở ra sân chơi học thuật chuyên sâu, đón đầu làn sóng công nghệ mới: Agentic AI và Harness Engineering.',
      'Thí sinh trải qua hành trình rèn luyện toàn diện: khởi đầu bằng bài thi thuật toán theo chuẩn ICPC quốc tế, tiếp nối bằng chuỗi workshop thực chiến cùng chuyên gia doanh nghiệp, và bứt phá tại vòng Chung kết với thử thách lập trình tích hợp tại chỗ.',
      'Mỗi sản phẩm đều gắn liền với 1 trong 5 nhóm vấn đề cấp thiết của xã hội, có đối tượng thụ hưởng cụ thể và chỉ số đo lường tác động rõ ràng.',
    ],
    pillars: [
      {
        title: 'Nền tảng thuật toán vững chắc',
        description:
          'Thử thách lập trình theo chuẩn mực ICPC Global 2024, rèn luyện tư duy logic sắc bén, cấu trúc dữ liệu và khả năng tối ưu hóa thuật toán.',
        icon: 'Code2',
      },
      {
        title: 'Làm chủ Harness Engineering',
        description:
          'Thiết lập hệ thống Guardrails an toàn, quản lý Context thông minh, kiểm thử tự động và xây dựng cơ chế tự phục hồi khi hệ thống phát sinh sự cố.',
        icon: 'Cpu',
      },
      {
        title: 'Tác động cộng đồng đo lường được',
        description:
          'Sản phẩm đầu ra là bản thử nghiệm chạy thật (MVP) trên dữ liệu kiểm thử, giải quyết trực diện bài toán của người thụ hưởng với các chỉ số đo lường minh bạch.',
        icon: 'Sparkles',
      },
    ],
  },
  journey: {
    badge: 'HÀNH TRÌNH CUỘC THI',
    title: '4 Chặng thử thách từ Ý tưởng đến Chung kết',
    subtitle:
      'Mỗi chặng thi là một mốc trui rèn năng lực, cung cấp tài nguyên chuẩn mực và đòi hỏi sản phẩm đầu ra cụ thể.',
    schedulePending: 'Lịch thi sẽ được công bố sau khi Ban Tổ chức xác nhận',
    ctaText: 'Xem tài liệu Sổ tay thí sinh chi tiết',
    stages: {
      'stage-1': {
        title: 'Đăng ký & Đề xuất Ý tưởng',
        shortTitle: 'Đăng ký & Ý tưởng',
        summary:
          'Các đội đăng ký thành viên qua biểu mẫu trực tuyến và hoàn thiện hồ sơ đề xuất giải pháp theo hướng dẫn của Ban Tổ chức.',
        output: 'Hồ sơ đội thi + Bản mô tả đề xuất ý tưởng giải pháp (Vấn đề, Giải pháp, Kiến trúc AI, Tác động xã hội).',
      },
      'stage-2': {
        title: 'Vòng loại – Tư duy Thuật toán',
        shortTitle: 'Thi Thuật toán',
        summary:
          'Thử thách giải thuật {duration} trực tiếp tại trường theo chuẩn ICPC Global 2024. Mỗi đội sử dụng đúng 01 máy tính duy nhất, chấm tự động qua bộ test ẩn và công khai.',
        output: 'Xếp hạng Scoreboard trực tiếp. Ban Giám khảo chọn ra Top {qualifiedTeams} đội xuất sắc nhất bước tiếp.',
      },
      'stage-3': {
        title: 'Chương trình Huấn luyện Thực chiến',
        shortTitle: 'Workshop & Mentoring',
        summary:
          'Chuỗi 3 workshop thực chiến cùng giảng viên và chuyên gia: Kiến trúc & Gỡ lỗi Agent, Đánh giá – Bảo mật – Tự phục hồi, Thi đấu thử nghiệm (Mock Run).',
        output: 'Bộ 10 test cases (8 ca nghiệp vụ + 2 ca bảo mật), kịch bản xử lý timeout/retry, Trace log và bản web demo chạy thực tế.',
      },
      'stage-4': {
        title: 'Vòng Chung kết – Build Sprint & Demo Day',
        shortTitle: 'Chung kết & Demo Day',
        summary:
          'Tranh tài trực tiếp với 02 giờ Build Sprint tại chỗ trên nền mã nguồn đã chuẩn bị trước, tích hợp yêu cầu bổ sung công bố bất ngờ, tiếp nối bằng Demo Day và Lễ Trao giải.',
        output: 'Bộ 4 hạng mục: MVP chạy thực tế, Báo cáo tác động xã hội, Minh chứng dữ liệu & đánh giá AI, Slide thuyết trình & Demo trực tiếp.',
      },
    },
  },
  programmingChallenge: {
    badge: 'CHẶNG 2: THỬ THÁCH THUẬT TOÁN',
    title: 'Thử thách Tư duy Thuật toán theo chuẩn Quốc tế',
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
      'Mỗi đội chỉ được phép sử dụng duy nhất 01 máy tính trong suốt thời gian thi đấu. Khuyến khích mang thêm 01 máy dự phòng (chỉ được bật khi máy chính gặp sự cố phần cứng có xác nhận của giám thị).',
      'Hệ thống tự động chấm bài trực tuyến dựa trên bộ test case ẩn và công khai. Một bài thi chỉ được tính điểm khi vượt qua trọn vẹn 100% test case.',
      'Bảng xếp hạng thời gian thực (Scoreboard) là căn cứ duy nhất để xác định các đội giành quyền đi tiếp.',
    ],
    topicsTitle: '10 Chủ đề Thuật toán Cốt lõi (Chuẩn ICPC)',
    topics: [
      'Sắp xếp (Sorting)',
      'Tìm kiếm (Searching)',
      'Phương pháp số & Giải thuật tính toán',
      'Quy hoạch động (Dynamic Programming)',
      'Cấu trúc Cây (Trees)',
      'Lý thuyết đồ thị (Graphs)',
      'Số học (Number Theory)',
      'Hình học tính toán (Computational Geometry)',
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
    title: 'Minh bạch, Công bằng & Đánh giá trên Sản phẩm Thật',
    subtitle:
      'Đánh giá đa chiều, minh bạch dựa trên máy chấm tự động, phỏng vấn kỹ thuật chuyên sâu và năng lực lập trình trực tiếp tại chỗ.',
    weights: [
      {
        stage: 'Chặng 1: Đề xuất Ý tưởng',
        percent: '30%',
        summary: 'Tính cấp thiết của bài toán, tính sáng tạo, mô hình kiến trúc AI cốt lõi và tiềm năng tác động xã hội.',
      },
      {
        stage: 'Chặng 4: Chung kết & Demo Day',
        percent: '70%',
        summary: 'Sản phẩm chạy thực tế, chiều sâu kỹ thuật AI Agent, 20 điểm lập trình tại chỗ qua Git Diff, tác động xã hội và phản biện trước Hội đồng.',
      },
    ],
    principles: [
      {
        title: 'Chấm tự động bằng Test Case chuẩn ICPC',
        description:
          'Loại bỏ hoàn toàn cảm tính: Vòng loại Thuật toán được chấm tự động bằng hệ thống test case ẩn và công khai theo chuẩn ICPC quốc tế.',
      },
      {
        title: 'Kiểm tra Trace Log & Năng lực Làm chủ Hệ thống',
        description:
          'Ban Giám khảo chỉ định ngẫu nhiên 02 Trace logs để thí sinh giải thích luồng suy luận và gọi tools của Agent, chứng minh đội thi thực sự làm chủ mã nguồn thay vì chỉ phụ thuộc vào AI sinh code.',
      },
      {
        title: 'Sản phẩm phải chạy thực tế',
        description:
          'Ban Giám khảo trực tiếp thao tác và kiểm tra qua link demo chạy thật. Mọi bài nộp chỉ dừng lại ở bản vẽ tĩnh (Figma) hoặc slide mô phỏng mà không có hệ thống hoạt động thực tế đều bị tính 0 điểm sản phẩm.',
      },
    ],
    baselineRuleNotice: {
      title: 'Quy định khóa mã nguồn Baseline (Baseline Freeze)',
      content:
        'Thời hạn khóa mã nguồn Baseline và quy trình đối chiếu Git Diff tại chỗ sẽ được công bố sau khi Ban Tổ chức xác nhận nội dung chính thức.',
    },
    allowedToolsNotice: {
      title: 'Quy định về việc sử dụng AI Coding Tools',
      content:
        'Thí sinh được tự do sử dụng các công cụ AI hỗ trợ lập trình (Cursor, Claude Code, GitHub Copilot). Bắt buộc phải lưu lại Prompt log và lịch sử commit Git minh bạch. Nghiêm cấm nộp mã nguồn đã hoàn thiện trước cuộc thi hoặc sao chép sản phẩm của bên thứ ba.',
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
        badge: 'Top 3',
      },
      impact: {
        title: 'Giải "AI for Impact"',
        description: 'Dành cho sản phẩm có tác động cộng đồng ấn tượng nhất',
        badge: 'Tác động xã hội',
      },
      'best-agent': {
        title: 'Giải "Best Agent Engineering"',
        description: 'Dành cho giải pháp có kiến trúc AI Agent và Harness Engineering xuất sắc nhất',
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
          'Hoàn toàn được! Ở Chặng 3, cuộc thi có chuỗi 3 buổi Huấn luyện thực chiến (Workshop & Training) do các giảng viên và chuyên gia doanh nghiệp hướng dẫn từ gốc: từ hiểu mô hình LLM, xây dựng công cụ (Tools), thiết kế hệ thống kiểm soát (Harness) cho đến bảo mật và đánh giá hiệu năng. Bạn chỉ cần có nền tảng lập trình cơ bản.',
      },
      {
        id: 'faq-4',
        question: 'Có được sử dụng các công cụ AI hỗ trợ viết code (Cursor, GitHub Copilot) không?',
        answer:
          'Có! Cuộc thi khuyến khích sinh viên sử dụng các công cụ AI Coding Agent hiện đại để nâng cao năng suất. Tuy nhiên, các đội bắt buộc phải lưu lại Prompt log và lịch sử commit Git minh bạch. Ban Giám khảo sẽ phỏng vấn kỹ thuật để xác minh bạn thực sự hiểu rõ mã nguồn của mình.',
      },
      {
        id: 'faq-5',
        question: 'Quy tắc 1 Laptop ở Vòng 2 (Thi Tư duy lập trình) là như thế nào?',
        answer:
          'Để rèn luyện tinh thần làm việc nhóm và phân chia chiến thuật giải thuật như các kỳ thi quốc tế ICPC, mỗi đội chỉ được sử dụng duy nhất 01 máy tính xách tay trong {duration} thi đấu. Đội được khuyến khích mang thêm 01 máy dự phòng nhưng chỉ được bật khi máy chính gặp sự cố phần cứng có giám thị xác nhận.',
      },
      {
        id: 'faq-6',
        question: 'Vòng Chung kết diễn ra như thế nào?',
        answer:
          'Tại Vòng Chung kết (Chặng 4), các đội thi thực hiện 02 giờ Build Sprint trực tiếp tại chỗ để tích hợp yêu cầu bổ sung bất ngờ từ Ban Tổ chức trên nền mã nguồn đã chuẩn bị trước, sau đó thuyết trình và demo sản phẩm trực tiếp trước Hội đồng Giám khảo.',
      },
      {
        id: 'faq-7',
        question: 'Quy định khóa mã nguồn Baseline (Baseline Freeze) tại Vòng Chung kết hoạt động ra sao?',
        answer:
          'Thời hạn khóa mã nguồn Baseline và quy trình đối chiếu Git Diff tại chỗ sẽ được Ban Tổ chức công bố chính thức theo hướng dẫn của Sổ tay thí sinh.',
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
        title: 'Hoàn thiện hồ sơ đăng ký',
        desc: 'Điền đầy đủ thông tin đội thi và nộp hồ sơ mô tả ý tưởng giải pháp theo hướng dẫn chính thức.',
      },
    ],
    ctaText: 'Điền form đăng ký tham gia ngay',
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
      'Chặng 3 trang bị tư duy và kỹ năng thực chiến về Harness Engineering, bảo mật hệ thống và triển khai sản phẩm thực tế.',
    workshops: [
      {
        session: 'Buổi 1',
        dateStr: 'Ngày 07/10',
        title: 'Hiểu và Hoàn thiện một AI Agent',
        instructor: 'ThS. Trần Thị Tố Tâm',
        focus:
          'Phân tích 5 lớp kiến trúc: Model – Tools – Agent Loop – Harness – Evaluation. Thực hành gỡ lỗi trên Agent mẫu (Student Support Agent) nhằm nâng độ chính xác tối thiểu 15% so với Baseline.',
        deliverables: [
          'Bản vá mã nguồn cho 2 lỗi đầu tiên của Agent mẫu',
          'Báo cáo đo lường độ chính xác tăng trưởng ≥ 15%',
        ],
      },
      {
        session: 'Buổi 2',
        dateStr: 'Ngày 08/10',
        title: 'Evaluation, Security & Recovery',
        instructor: 'Hội đồng Chuyên môn Kỹ thuật (learnharness.org)',
        focus:
          'Kỹ thuật phòng thủ Prompt Injection, bảo mật dữ liệu PII, thiết lập cơ chế Circuit Breaker và xuất Trace log chuẩn mực.',
        deliverables: [
          '08 Test cases kiểm thử nghiệp vụ tự viết',
          '02 Test cases phòng chống Prompt Injection',
          '01 Kịch bản tự động xử lý timeout/retry',
          '01 Báo cáo Trace log chuẩn hóa',
        ],
      },
      {
        session: 'Buổi 3',
        dateStr: 'Ngày 09/10',
        title: 'Mock Run & Triển khai Demo',
        instructor: 'ThS. Lê Thiện Nhật Quang & Đội ngũ Mentors',
        focus:
          'Thi đấu thử nghiệm (Mock Run) trên hệ thống chấm tự động; đóng gói container, triển khai bản web demo trực tuyến và chuẩn bị Pitching.',
        deliverables: [
          '01 Bài nộp hợp lệ trên hệ thống chấm thử',
          '01 Bản web demo trực tuyến hoạt động thực tế',
        ],
      },
    ],
    mentoringCheckpoint: {
      dateStr: '21/10 – 22/10/2026',
      title: 'Buổi Cố vấn Chuyên sâu 1-1 (Mentoring Checkpoint)',
      desc: 'Mỗi đội có 45 phút trao đổi trực tiếp cùng chuyên gia để rà soát kiến trúc, tháo gỡ điểm nghẽn kỹ thuật và hoàn thiện sản phẩm trước thềm Chung kết.',
    },
  },
  stage4RunOfShow: {
    badge: 'LỊCH TRÌNH NGÀY CHUNG KẾT 31/10',
    title: 'Khung Giờ Thi Đấu Ngày Chung Kết (Chặng 4)',
    subtitle:
      'Lịch trình thi đấu rõ ràng với điểm nhấn là 02 giờ lập trình tại chỗ (Build Sprint) và chấm điểm đối chiếu Git Diff.',
    timeline: [
      {
        time: '08h00 – 08h10',
        activity: 'Check-in & Khai mạc Vòng Chung kết',
        details: 'Các đội nhận vị trí thi đấu, kết nối mạng và chuẩn bị môi trường lập trình.',
      },
      {
        time: '08h10',
        activity: 'Công bố Yêu cầu Bổ sung Tại chỗ',
        details:
          'Ban Tổ chức công bố tính năng/ràng buộc mới bất ngờ (nhóm đối tượng người dùng đặc thù hoặc quy tắc dữ liệu mới).',
        highlight: true,
      },
      {
        time: '08h10 – 10h10',
        activity: 'Build Sprint 02 Giờ Liên tục',
        details:
          '120 phút lập trình tại chỗ để tích hợp tính năng bổ sung vào mã nguồn đã chuẩn bị trước. Ban Giám khảo chấm riêng 20 điểm dựa trên phần code mới (Git Diff)!',
        highlight: true,
      },
      {
        time: '10h10',
        activity: 'Code Freeze & Nộp Toàn bộ Hồ sơ',
        details:
          'Khóa mã nguồn (Code Freeze). Nộp link GitHub, liên kết Web Demo, Báo cáo tác động, Minh chứng đánh giá AI và Slide thuyết trình.',
      },
      {
        time: '10h10 – 10h30',
        activity: 'Giải lao & Chuẩn bị Sân khấu Demo',
        details: 'Ban Kỹ thuật kiểm tra đường truyền và thiết bị trình chiếu sân khấu.',
      },
      {
        time: '10h30 – 12h00',
        activity: 'Demo Day & Thuyết trình Trước Hội đồng',
        details:
          'Mỗi đội có 08 phút demo sản phẩm trực tiếp + 04 phút trả lời chất vấn chuyên môn từ Hội đồng Giám khảo.',
        highlight: true,
      },
      {
        time: '12h00 – 12h15',
        activity: 'Hội ý Ban Giám khảo & Tổng hợp Điểm',
        details:
          'Hội đồng Thư ký và Ban Giám khảo tổng hợp kết quả đánh giá theo quy chế thi.',
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

  agentAnatomy: {
    badge: 'GIẢI PHẪU SẢN PHẨM',
    title: 'Năm lớp kiến trúc AI Agent bắt buộc',
    subtitle:
      'Hầu hết các đội chỉ làm lớp 1 và lớp 2 rồi dừng lại. Điểm số và sự tin cậy nằm ở lớp 4 và lớp 5.',
    analogy:
      'Cách hình dung đơn giản: Model là động cơ, Agent là chiếc xe, còn Harness là toàn bộ hệ thống vô lăng, phanh, cảm biến, bản đồ và kiểm định an toàn. Không ai đưa xe cho người dùng khi mới chỉ có một cỗ động cơ.',
    layers: [
      {
        layerNumber: 1,
        name: 'Model (Động cơ AI)',
        roleQuestion: 'Bộ não nào hiểu và xử lý ngôn ngữ?',
        description:
          'Lựa chọn mô hình ngôn ngữ lớn (LLM) và thiết kế System Prompt. Ban Tổ chức cấp cùng một định mức quota cho mọi đội.',
        deliverable:
          'System Prompt chuẩn hóa, cấu hình Temperature và định dạng dữ liệu đầu ra.',
      },
      {
        layerNumber: 2,
        name: 'Tools (Công cụ hành động)',
        roleQuestion: 'Agent có thể thực hiện những thao tác gì?',
        description:
          'Xây dựng 5–7 hàm công cụ cụ thể: tra cứu thông tin, đọc dữ liệu, tạo bản ghi mới, gửi yêu cầu tới con người. Mỗi hàm cần định nghĩa rõ tham số đầu vào, kết quả trả về và cách bắt lỗi.',
        deliverable:
          'Khai báo công cụ rõ ràng (Tool Schema), kiểm tra hợp lệ dữ liệu và xử lý ngoại lệ an toàn.',
      },
      {
        layerNumber: 3,
        name: 'Agent Loop (Chu trình suy luận & hành động)',
        roleQuestion: 'Agent quyết định bước đi tiếp theo như thế nào?',
        description:
          'Vòng lặp vận hành: tiếp nhận yêu cầu, phân tích ý định, chọn công cụ thích hợp, đọc kết quả trả về, quyết định bước tiếp theo, tự kiểm tra và phản hồi người dùng hoặc chuyển cho con người.',
        deliverable:
          'Cơ chế điều phối multi-step, dừng đúng lúc và chống lặp vô tận.',
      },
      {
        layerNumber: 4,
        name: 'Harness (Hệ thống kiểm soát & bảo vệ)',
        roleQuestion: 'Bộ phận nào đảm bảo Agent không nói sai và không phá hỏng dữ liệu?',
        description:
          'Lọc thông tin hết hạn, phòng chống Prompt Injection, thiết lập Approval Gate trước khi ghi dữ liệu quan trọng, giới hạn Retry và lưu Trace log đầy đủ.',
        deliverable:
          'Hệ thống Guardrails, cơ chế Circuit Breaker tự phục hồi và báo cáo Trace log chi tiết.',
      },
      {
        layerNumber: 5,
        name: 'Evaluation (Bộ đo lường & Đánh giá)',
        roleQuestion: 'Làm sao để biết Agent chạy đúng và phiên bản mới tốt hơn bản cũ?',
        description:
          'Xây dựng bộ kịch bản kiểm thử tự động (Test Suite), chạy kiểm tra trước và sau mỗi lần sửa đổi, tổng hợp bảng số liệu so sánh định lượng.',
        deliverable:
          'Tối thiểu 10 test cases tự động, bảng so sánh chỉ số đo lường và độ chính xác của Agent.',
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
            'Người ngoài đội tự mở liên kết demo và trải nghiệm được ngay, không cần thành viên ngồi bên cạnh hướng dẫn hay can thiệp.',
        },
        {
          title: 'Tác động dữ liệu thực tế',
          description:
            'Agent thực sự kích hoạt công cụ (Tools) và làm thay đổi cơ sở dữ liệu, chứ không phải in ra câu trả lời lập trình sẵn.',
        },
        {
          title: 'Chủ động hỏi lại khi thiếu thông tin',
          description:
            'Khi thông tin đầu vào chưa đủ điều kiện xử lý, Agent chủ động đặt câu hỏi làm rõ với người dùng thay vì tự tiện suy đoán.',
        },
        {
          title: 'Trung thực khi phát sinh sự cố',
          description:
            'Khi công cụ hoặc API gặp lỗi, Agent tuyệt đối không báo "thành công" giả tạo mà phải xử lý lỗi an toàn hoặc chuyển tiếp tới con người.',
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
          title: 'Bản thiết kế giao diện tĩnh (Figma hoặc ảnh chụp)',
          description:
            'Dù giao diện có đẹp và trau chuốt đến đâu, bản thiết kế tĩnh không có mã nguồn vận hành luồng nghiệp vụ đều nhận 0 điểm sản phẩm.',
        },
        {
          title: 'Giao diện vỏ bọc (wrapper) chỉ gọi thẳng ChatGPT',
          description:
            'Một khung chat đơn thuần chuyển tiếp yêu cầu đến API LLM mà không có công cụ riêng, không có dữ liệu nghiệp vụ và thiếu rào chắn kiểm soát.',
        },
        {
          title: 'Video mô phỏng dàn dựng sẵn',
          description:
            'Video dựng theo kịch bản lý tưởng trong khi hệ thống thực tế không thể truy cập hoặc không thể thao tác.',
        },
        {
          title: 'Hệ thống thiếu bộ kiểm thử tự động',
          description:
            'Sản phẩm chạy được nhưng không có bất kỳ test case tự động nào để chứng minh tính đúng đắn, độ an toàn và khả năng tự phục hồi.',
        },
        {
          title: 'Không có thay đổi so với mã nguồn Baseline đã chốt',
          description:
            'Sản phẩm không có bất kỳ dòng code mới nào hoặc không tích hợp yêu cầu bổ sung công bố sáng 31/10 (thể hiện rõ ràng qua Git Diff đối chiếu với Baseline).',
        },
      ],
    },
    finalDeliverables: {
      badge: 'HỒ SƠ CHUNG KẾT',
      title: 'Bộ 04 hạng mục nộp bắt buộc kết thúc cuộc thi',
      items: [
        {
          id: 'item-1',
          name: '1. Bản chạy thật (Prototype hoặc MVP hoạt động được)',
          specification:
            'AI Agent chạy trọn vẹn luồng nghiệp vụ chính, tích hợp yêu cầu bổ sung công bố sáng 31/10, có dẫn nguồn kiểm chứng.',
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
            'Nguồn dữ liệu sử dụng, bộ Test Suite tự động của đội, Trace log, Prompt log và bảng điểm định lượng.',
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
      'Đội nào để một thành viên gánh vác toàn bộ sẽ gặp rủi ro lớn ở phần phỏng vấn kỹ thuật, bởi Ban Giám khảo sẽ trao đổi độc lập với từng bạn.',
    warningNote:
      'Trong phần phỏng vấn kỹ thuật và Demo Day, Giám khảo sẽ chỉ định ngẫu nhiên 02 Trace logs bất kỳ và đặt câu hỏi chuyên môn tới từng bạn theo đúng vai trò đảm nhiệm.',
    roles: [
      {
        role: '1. Kỹ sư Agent & Tích hợp Công cụ (Agent & Tools)',
        focus: 'Phát triển các hàm công cụ nghiệp vụ và lập trình chu trình suy luận của Agent (Agent Loop).',
        keyQuestion: '“Vì sao Agent lại chọn gọi công cụ này trước mà không phải công cụ khác?”',
      },
      {
        role: '2. Kỹ sư Dữ liệu & Ngữ cảnh (Data & Context)',
        focus:
          'Thu thập và chuẩn hóa dữ liệu, thiết lập hệ thống tra cứu tài liệu (RAG) và thuật toán sàng lọc quy định hết hiệu lực.',
        keyQuestion:
          '“Số liệu hay quy định này lấy từ nguồn nào, và làm sao bạn chắc chắn văn bản đó còn hiệu lực?”',
      },
      {
        role: '3. Kỹ sư Kiểm thử & An toàn (Evaluation & Safety)',
        focus:
          'Xây dựng bộ Test Suite tự động, thiết lập Guardrails an toàn và đo lường sự cải thiện của các chỉ số.',
        keyQuestion:
          '“Làm sao bạn chứng minh bằng số liệu rằng phiên bản này vận hành tốt hơn và an toàn hơn bản trước?”',
      },
      {
        role: '4. Quản lý Sản phẩm & Tác động (Product & Impact)',
        focus:
          'Khảo sát nhu cầu người thụ hưởng, hoàn thiện báo cáo tác động, xây dựng kịch bản demo và dẫn dắt phần Pitching.',
        keyQuestion:
          '“Ai là người thụ hưởng trực tiếp, và phần nào của hệ thống được đội hoàn thành trong 2 giờ thi sáng nay?”',
      },
    ],
    fifthMemberNote:
      'Nếu đội có 5 thành viên: Thành viên thứ 5 sẽ phụ trách thiết kế giao diện (UI/UX), tối ưu hóa trải nghiệm tương tác và đóng gói bản web demo trực tuyến.',
    mockDataPrinciple: {
      title: 'Nguyên tắc Bắt buộc: 100% Mock Data (Dữ liệu Giả lập)',
      description:
        'Toàn bộ quá trình phát triển, kiểm thử và demo bắt buộc sử dụng 100% Mock Data (dữ liệu giả lập). Tuyệt đối không sử dụng thông tin sinh viên thật hoặc can thiệp vào bất kỳ hệ thống nghiệp vụ đang vận hành của Nhà trường.',
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
          action: 'Hoàn thiện hồ sơ đề xuất giải pháp, phân tích rõ bài toán thực tế và kiến trúc AI Agent.',
          outcome:
            'Được Hội đồng đánh giá cao vì xác định rõ ranh giới an toàn: chỉ khẳng định những thông tin đã được kiểm chứng.',
        },
        {
          stage: 'Chặng 2 (Tư duy lập trình)',
          action: '4 bạn cùng giải thuật toán trên 1 máy tính duy nhất trong {duration}.',
          outcome: 'Đạt thứ hạng cao trên Scoreboard và lọt vào Top {qualifiedTeams} đội xuất sắc.',
        },
        {
          stage: 'Chặng 3 (Training)',
          action: 'Tham gia 3 buổi workshop thực hành, làm chủ kiến trúc Agent và nộp bộ kiểm thử mẫu.',
          outcome:
            'Làm chủ kỹ thuật kiểm soát Agent (Harness Engineering) và chuẩn bị sẵn sàng mã nguồn cho Chung kết.',
        },
        {
          stage: 'Chặng 4 (Chung kết)',
          action:
            'Chuẩn bị mã nguồn dự thi chu đáo. Sáng 31/10 tích hợp yêu cầu bất ngờ: dữ liệu điểm đến mâu thuẫn và nhóm du khách cao tuổi.',
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
      'Kết hợp giữa máy chấm tự động qua test case, phỏng vấn kỹ thuật trực tiếp và năng lực lập trình tại chỗ.',
    formula: 'Tổng điểm = (30% × Vòng Ý tưởng) + (70% × Vòng Chung kết)',
    rounds: [
      {
        roundId: 'round-1',
        title: 'Chặng 1: Đề xuất Ý tưởng',
        weight: '30% tổng điểm',
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
            name: 'Chất lượng hồ sơ đề xuất giải pháp',
            points: 10,
            description: 'Hồ sơ mạch lạc, phân tích cấu trúc rõ ràng, lập luận thuyết phục.',
          },
        ],
      },
      {
        roundId: 'round-4',
        title: 'Chặng 4: Chung kết – Build Sprint 02 Giờ & Demo Day',
        weight: '70% tổng điểm',
        totalPoints: 100,
        notes:
          'Ban Giám khảo có bản đối chiếu git diff để chấm riêng 20 điểm thực hiện tại chỗ trong 02 giờ Build Sprint.',
        criteria: [
          {
            name: 'Sản phẩm hoạt động được (Prototype/MVP chạy thật)',
            points: 20,
            description:
              'Vận hành mượt mà luồng nghiệp vụ chính trên liên kết trực tuyến, dữ liệu biến đổi thật.',
          },
          {
            name: 'Chiều sâu kỹ thuật AI Agent & Harness',
            points: 20,
            description:
              'Điều phối Context thông minh, thiết lập Guardrails an toàn, xử lý ngoại lệ và tự phục hồi tin cậy.',
          },
          {
            name: 'Phần lập trình tại chỗ (Chấm qua Git Diff)',
            points: 20,
            description:
              'Chất lượng mã nguồn viết trong 02 giờ thi và mức độ tích hợp trọn vẹn yêu cầu bổ sung công bố tại chỗ.',
          },
          {
            name: 'Minh chứng dữ liệu và quy trình đánh giá AI',
            points: 15,
            description:
              'Độ tin cậy của nguồn dữ liệu, kết quả chạy Test Suite và nhật ký minh bạch (Trace log / Prompt log).',
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
        title: 'Chấm tự động bằng Test Case chuẩn ICPC',
        description:
          'Loại bỏ hoàn toàn gian lận hardcode: Hệ thống chấm trực tuyến tự động qua bộ test ẩn và công khai theo chuẩn quốc tế.',
      },
      {
        title: 'Kiểm chứng Mã nguồn & Nhật ký Hoạt động',
        description:
          'Minh bạch quy trình phát triển: Giám khảo thẩm định Prompt log, lịch sử commit Git và năng lực làm chủ hệ thống của thí sinh.',
      },
      {
        title: 'Đối chiếu Git Diff tại chỗ',
        description:
          'Bảo đảm công bằng tuyệt đối: Giám khảo nhìn thấy từng dòng mã được viết trong 02 giờ thi sáng 31/10 qua Git Diff đối chiếu với Baseline.',
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
