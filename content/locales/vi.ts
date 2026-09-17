import { CompetitionContent } from '../types';

export const viContent: CompetitionContent = {
  locale: 'vi',
  meta: {
    title: 'AI for Impact 2026 | Agentic Innovation Challenge – Trường Đại học FPT Đà Nẵng',
    description:
      'Cuộc thi học thuật quy mô lớn về AI Agent tại Trường Đại học FPT Đà Nẵng. Từ tư duy lập trình thuật toán đến xây dựng giải pháp AI Agent thực chiến tạo tác động xã hội thực tế.',
    keywords: [
      'AI for Impact',
      'AI Agent',
      'FPT University Da Nang',
      'Cuộc thi AI',
      'Harness Engineering',
      'ICPC',
      'Agentic AI',
      'Đại học FPT Đà Nẵng',
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
    endorsement: 'TRƯỜNG ĐẠI HỌC FPT ĐÀ NẴNG • PHÒNG ICPDP & BỘ MÔN SE, CF',
    eyebrow: 'AGENTIC INNOVATION CHALLENGE 2026',
    title: 'AI FOR IMPACT 2026',
    tagline: 'Từ tư duy đến giải pháp tạo tác động',
    subTagline:
      'Chuyển từ "biết sử dụng AI" sang "kiến tạo tác động bằng AI Agent". Rèn luyện tư duy thuật toán đỉnh cao, làm chủ harness engineering và xây dựng sản phẩm giải quyết bài toán xã hội thực tế.',
    statusBadge: {
      upcoming: 'Sắp mở cổng đăng ký',
      open: 'Đang mở đơn đăng ký toàn thành phố',
      closed: 'Đã đóng cổng đăng ký',
      finished: 'Cuộc thi đã kết thúc tốt đẹp',
    },
    daysLeftText: 'Thời gian còn lại để nộp đơn',
    registerCta: 'Đăng ký đội thi tham gia',
    journeyCta: 'Khám phá 5 chặng thi',
    quickStats: {
      teams: '40–50 Đội thi',
      prizePool: '12.000.000 VNĐ+',
      duration: '7 Tuần thực chiến',
      stages: '5 Chặng bứt phá',
    },
  },
  about: {
    badge: 'TÔN CHỈ CUỘC THI',
    title: 'Chuyển từ "Biết dùng AI" sang "Kiến tạo tác động bằng AI"',
    subtitle:
      'AI for Impact 2026 không tìm kiếm những bài thuyết trình ý tưởng suông hay mã nguồn sao chép. Chúng tôi tìm kiếm những kỹ sư trẻ biết làm chủ AI Agent một cách tin cậy và có trách nhiệm.',
    description: [
      'Trường Đại học FPT Đà Nẵng tổ chức AI for Impact 2026 nhằm tạo sân chơi học thuật chuyên sâu, giúp sinh viên làm quen với làn sóng công nghệ mới nhất: Agentic AI và Harness Engineering.',
      'Thí sinh trải qua hành trình tôi luyện toàn diện: khởi đầu bằng bài thi tư duy giải thuật khắt khe theo chuẩn quốc tế, tiếp nối bằng 3 buổi huấn luyện chuyên sâu cùng chuyên gia doanh nghiệp, đối đầu với thử thách sửa lỗi Agent trong môi trường kiểm thử tự động, và bứt phá tại vòng Chung kết 2 giờ với ràng buộc bất ngờ.',
      'Mỗi sản phẩm đều gắn liền với 1 trong 5 nhóm vấn đề cấp thiết của xã hội, có đối tượng thụ hưởng cụ thể và chỉ số đo lường tác động rõ ràng.',
    ],
    pillars: [
      {
        title: 'Nền tảng thuật toán vững chắc',
        description:
          'Khởi đầu với vòng thi lập trình chuẩn ICPC Global 2024 để sàng lọc tư duy logic, cấu trúc dữ liệu và giải thuật tối ưu.',
        icon: 'Code2',
      },
      {
        title: 'Làm chủ Harness Engineering',
        description:
          'Học cách xây dựng rào chắn an toàn (guardrails), quản lý ngữ cảnh (context), kiểm thử tự động và tự phục hồi khi Agent gặp lỗi.',
        icon: 'Cpu',
      },
      {
        title: 'Tác động cộng đồng đo lường được',
        description:
          'Sản phẩm đầu ra là MVP hoạt động thực tế trên dữ liệu thật, hướng tới người thụ hưởng cụ thể và đo lường bằng số liệu minh bạch.',
        icon: 'Sparkles',
      },
    ],
  },
  journey: {
    badge: 'HÀNH TRÌNH CUỘC THI',
    title: '5 Chặng thử thách từ Ý tưởng đến Chung kết',
    subtitle:
      'Cuộc thi kéo dài gần 7 tuần (14/09 – 31/10/2026). Mỗi chặng thí sinh nhận tài nguyên và hoàn thành sản phẩm đầu ra tương ứng.',
    ctaText: 'Xem tài liệu Sổ tay thí sinh chi tiết',
    stages: [
      {
        id: 'stage-1',
        sequence: 1,
        startDate: '2026-09-14T00:00:00+07:00',
        endDate: '2026-09-23T23:59:00+07:00',
        displayDate: '14/09 – 23/09/2026',
        theme: 'impact',
        title: 'Đăng ký & Đề xuất ý tưởng',
        shortTitle: 'Đăng ký & Ý tưởng',
        summary:
          'Các đội đăng ký thành viên (3–5 người) qua Google Form và gửi video đề xuất ý tưởng giải pháp (≤ 3 phút) trước hạn chót 28/09/2026.',
        output: 'Hồ sơ đội thi + 01 Video ý tưởng ≤ 3 phút (Vấn đề, Giải pháp, Kiến trúc AI, Tác động xã hội).',
      },
      {
        id: 'stage-2',
        sequence: 2,
        startDate: '2026-10-02T08:00:00+07:00',
        endDate: '2026-10-02T12:00:00+07:00',
        displayDate: 'Thứ Sáu, 02/10/2026 (08:00 – 12:00)',
        theme: 'technical',
        title: 'Vòng loại – Tư duy lập trình',
        shortTitle: 'Thi Tư duy lập trình',
        summary:
          'Thử thách giải thuật 240 phút trực tiếp tại trường theo chuẩn ICPC Global 2024. Mỗi đội sử dụng đúng 01 laptop duy nhất. Chấm tự động qua test ẩn/hiện.',
        output: 'Xếp hạng Scoreboard trực tiếp. Ban Giám khảo chọn ra Top 24 đội xuất sắc nhất bước tiếp.',
      },
      {
        id: 'stage-3',
        sequence: 3,
        startDate: '2026-10-07T14:00:00+07:00',
        endDate: '2026-10-09T17:00:00+07:00',
        displayDate: '07/10, 08/10 & 09/10/2026',
        theme: 'training',
        title: 'Giai đoạn Huấn luyện chuyên sâu',
        shortTitle: 'Training chuyên sâu',
        summary:
          '3 buổi Workshop cùng Giảng viên BM SE và chuyên gia doanh nghiệp: Hiểu & sửa Agent baseline, Đánh giá – Bảo mật – Phục hồi, Mock run thử nghiệm.',
        output: '08 test cases, 02 ca bảo mật, 01 ca timeout, báo cáo trace và 01 bản demo trực tuyến truy cập được.',
      },
      {
        id: 'stage-4',
        sequence: 4,
        startDate: '2026-10-17T08:00:00+07:00',
        endDate: '2026-10-17T12:00:00+07:00',
        displayDate: 'Thứ Bảy, 17/10/2026',
        theme: 'technical',
        title: 'Vòng Kỹ thuật – Harness Engineering',
        shortTitle: 'Vòng Kỹ thuật',
        summary:
          'Bài toán "Student Support Resolution Agent". Các đội nhận Agent mẫu còn lỗi, tiến hành sửa context/tools, vá rò rỉ bảo mật và tối ưu trace.',
        output: '70% điểm máy chấm tự động + 30% phỏng vấn Engineering Review. Chọn Top 15 vào Chung kết; chốt bản nền 23:59 ngày 28/10.',
      },
      {
        id: 'stage-5',
        sequence: 5,
        startDate: '2026-10-31T08:00:00+07:00',
        endDate: '2026-10-31T17:00:00+07:00',
        displayDate: 'Thứ Bảy, 31/10/2026',
        theme: 'impact',
        title: 'Vòng Chung kết – Build Sprint 2H & Demo Day',
        shortTitle: 'Chung kết & Demo Day',
        summary:
          'Build Sprint 2 giờ tại chỗ trên nền bản baseline đã chốt, tích hợp ràng buộc bổ sung công bố bất ngờ đầu giờ thi. Chiều cùng ngày là Demo Day và Trao giải.',
        output: 'MVP hoạt động thực tế, báo cáo tác động, minh chứng dữ liệu AI, video demo, slide thuyết trình & Trao giải.',
      },
    ],
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
      dateVal: 'Thứ Sáu, 02/10/2026',
      duration: 'Thời lượng',
      durationVal: '240 phút (08:00 – 12:00)',
      location: 'Địa điểm',
      locationVal: 'Trường Đại học FPT Đà Nẵng',
      qualification: 'Chỉ tiêu đi tiếp',
      qualificationVal: 'Top 24 đội xuất sắc nhất',
    },
    rulesList: [
      'Thi trực tiếp tại trường, mỗi đội từ 3–5 thành viên.',
      'Mỗi đội chỉ sử dụng duy nhất 01 laptop đã cài đặt sẵn công cụ lập trình và trình duyệt web (Chrome, Firefox, Edge). Khuyến khích mang máy dự phòng.',
      'Hệ thống tự động chấm bài trực tuyến dựa trên bộ test case ẩn và hiện. Một bài chỉ được tính điểm khi vượt qua 100% test cases.',
      'Bảng xếp hạng Scoreboard thời gian thực là căn cứ duy nhất để công bố kết quả tuyển chọn vào vòng sau.',
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
          'Trợ lý học tập cá nhân hóa, hệ thống gia sư AI thông minh, hỗ trợ giảng viên chấm bài, định hướng học tập và giải tỏa rào cản tiếp cận giáo dục.',
        icon: 'GraduationCap',
        examples: ['Gia sư thuật toán thích ứng', 'Hệ thống trợ giảng tra cứu giáo trình thông minh', 'Agent hỗ trợ học sinh khiếm thị'],
      },
      {
        id: 'health',
        title: 'Y tế, Sức khỏe & Đời sống',
        description:
          'Hỗ trợ sơ cứu ban đầu, theo dõi sức khỏe tinh thần, quản lý lịch dùng thuốc, kết nối bệnh nhân với cơ sở y tế và nâng cao chất lượng cuộc sống.',
        icon: 'HeartPulse',
        examples: ['Agent đồng hành sức khỏe tinh thần sinh viên', 'Nhắc thuốc và phân tích đơn thông minh', 'Hỗ trợ người cao tuổi tự chăm sóc'],
      },
      {
        id: 'tourism',
        title: 'Du lịch thông minh & Bảo tồn văn hóa',
        description:
          'Hướng dẫn viên du lịch AI bản địa hóa tại Đà Nẵng, số hóa di sản, quảng bá văn hóa miền Trung và hỗ trợ du khách khám phá ẩm thực, lịch sử.',
        icon: 'Compass',
        examples: ['Hướng dẫn viên AI du lịch Đà Nẵng đa ngôn ngữ', 'Bảo tồn truyện cổ tích và di sản phi vật thể', 'Lộ trình du lịch xanh trải nghiệm'],
      },
      {
        id: 'environment',
        title: 'Môi trường, Đô thị & Bền vững',
        description:
          'Phân loại rác thải tự động, tiết kiệm năng lượng tòa nhà, cảnh báo thiên tai ngập úng, quản lý giao thông đô thị và giảm thiểu phát thải carbon.',
        icon: 'Leaf',
        examples: ['Agent cảnh báo điểm ngập úng đô thị thời gian thực', 'Tối ưu hóa hành trình thu gom rác', 'Theo dõi chất lượng không khí học đường'],
      },
      {
        id: 'business',
        title: 'Hỗ trợ Doanh nghiệp & Năng suất',
        description:
          'Tự động hóa quy trình nghiệp vụ cho doanh nghiệp vừa và nhỏ, xử lý hóa đơn, chăm sóc khách hàng đa kênh và tối ưu hóa vận hành nội bộ.',
        icon: 'Briefcase',
        examples: ['Agent xử lý đối soát hóa đơn tự động', 'Hỗ trợ tuyển dụng và sàng lọc CV tin cậy', 'Trợ lý CSKH đa kênh thông minh'],
      },
    ],
  },
  evaluation: {
    badge: 'CƠ CHẾ ĐÁNH GIÁ',
    title: 'Minh bạch, Công bằng & Dựa trên Thực chứng',
    subtitle:
      'Điểm số được tổng hợp từ máy chấm tự động, hội đồng phỏng vấn kỹ thuật và phần thể hiện tại chỗ.',
    weights: [
      {
        stage: 'Vòng 1: Đề xuất Ý tưởng',
        percent: '15%',
        summary: 'Tính cấp thiết của vấn đề, tính sáng tạo, kiến trúc AI dự kiến và chất lượng video đề xuất.',
      },
      {
        stage: 'Vòng 4: Kỹ thuật – Harness Engineering',
        percent: '15%',
        summary: '70% điểm máy chấm qua test cases ẩn + 30% Engineering Review giải thích trace và bộ test tự viết.',
      },
      {
        stage: 'Vòng 5: Vòng Chung kết & Demo Day',
        percent: '70%',
        summary: 'MVP hoạt động thực tế, chiều sâu kỹ thuật AI, 20 điểm phần thực hiện tại chỗ, tác động xã hội và thuyết trình.',
      },
    ],
    principles: [
      {
        title: 'Chấm điểm bằng Test Case ẩn',
        description:
          'Loại bỏ cảm tính: Vòng Kỹ thuật được chấm tự động bằng bộ test case ẩn có cùng logic nghiệp vụ nhưng đổi dữ liệu để kiểm tra khả năng xử lý thực tế.',
      },
      {
        title: 'Đánh giá Trace & Quyền tự quyết',
        description:
          'Hội đồng chỉ định ngẫu nhiên 2 trace để thí sinh giải thích luồng suy nghĩ của Agent, chứng minh nắm vững mã nguồn thay vì phụ thuộc công cụ sinh code.',
      },
      {
        title: 'Sản phẩm phải chạy thực tế',
        description:
          'Ban Giám khảo sẽ tự tay thao tác trên link demo trực tuyến. Những bài thi chỉ có slide mô phỏng mà không có hệ thống hoạt động sẽ bị trừ điểm nặng.',
      },
    ],
    baselineRuleNotice: {
      title: 'Quy tắc chốt bản nền (Baseline Freeze) – Bắt buộc',
      deadline: '23h59 ngày 28/10/2026',
      content:
        'Các đội vào Chung kết được phép chuẩn bị mã nguồn tại nhà nhưng phải đẩy toàn bộ code lên repository của BTC và gắn nhãn baseline trước 23h59 ngày 28/10/2026. Sáng 31/10, BTC công bố ràng buộc bổ sung bất ngờ. Ban Giám khảo sẽ đối chiếu diff code để chấm riêng 20 điểm phần làm tại chỗ.',
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
      'Tổng giá trị giải thưởng tiền mặt cùng cơ hội ươm mầm dự án tại Vườn ươm Khởi nghiệp Đại học FPT.',
    totalPool: 'Tổng giải thưởng tiền mặt: 12.000.000 VNĐ',
    items: [
      {
        id: 'first',
        title: '01 Giải Nhất',
        amount: 5000000,
        currency: 'VNĐ',
        formattedAmount: '5.000.000 VNĐ',
        quantity: 1,
        description: 'Cúp vô địch + Giấy khen ĐH FPT + Học bổng ươm tạo dự án',
        badge: 'Quán quân',
      },
      {
        id: 'second',
        title: '01 Giải Nhì',
        amount: 3000000,
        currency: 'VNĐ',
        formattedAmount: '3.000.000 VNĐ',
        quantity: 1,
        description: 'Kỷ niệm chương + Giấy khen ĐH FPT + Quà tặng công nghệ',
        badge: 'Á quân',
      },
      {
        id: 'third',
        title: '01 Giải Ba',
        amount: 2000000,
        currency: 'VNĐ',
        formattedAmount: '2.000.000 VNĐ',
        quantity: 1,
        description: 'Kỷ niệm chương + Giấy khen ĐH FPT',
        badge: 'Quý quân',
      },
      {
        id: 'impact',
        title: 'Giải "AI for Impact"',
        amount: 1000000,
        currency: 'VNĐ',
        formattedAmount: '1.000.000 VNĐ',
        quantity: 1,
        description: 'Dành cho sản phẩm có tác động cộng đồng ấn tượng nhất',
        badge: 'Tác động xã hội',
      },
      {
        id: 'best-agent',
        title: 'Giải "Best Agent Engineering"',
        amount: 1000000,
        currency: 'VNĐ',
        formattedAmount: '1.000.000 VNĐ',
        quantity: 1,
        description: 'Dành cho giải pháp kiến trúc Agent và Harness xuất sắc nhất',
        badge: 'Kỹ thuật xuất sắc',
      },
    ],
    additionalBenefits: [
      'Toàn bộ thành viên các đội lọt vào vòng Chung kết được cấp Giấy chứng nhận chính thức của Trường Đại học FPT Đà Nẵng.',
      'Cơ hội kết nối thực tập và tuyển dụng trực tiếp với các doanh nghiệp công nghệ hàng đầu tại Đà Nẵng.',
      'Sản phẩm tiềm năng được tài trợ cố vấn để phát triển thành Đề tài Nghiên cứu khoa học (RBL) hoặc Khóa luận Tốt nghiệp (KLTN).',
    ],
  },
  faq: {
    badge: 'GIẢI ĐÁP THẮC MẮC',
    title: 'Câu hỏi thường gặp',
    subtitle: 'Mọi điều bạn cần biết trước khi nộp đơn tham gia cuộc thi',
    moreHelp: 'Bạn còn thắc mắc cần hỗ trợ trực tiếp?',
    contactBtn: 'Liên hệ Ban Tổ chức',
    items: [
      {
        id: 'faq-1',
        question: 'Ai có thể đăng ký tham gia AI for Impact 2026?',
        answer:
          'Tất cả sinh viên các trường Đại học, Cao đẳng trên địa bàn Thành phố Đà Nẵng đều có thể đăng ký tham gia. Ưu tiên sinh viên khối ngành Công nghệ Thông tin, Kỹ thuật Phần mềm, Trí tuệ Nhân tạo. Ban Tổ chức đặc biệt khuyến khích các đội có thành viên liên ngành (kết hợp CNTT với Kinh tế, Truyền thông, Thiết kế).',
      },
      {
        id: 'faq-2',
        question: 'Quy mô đội thi là bao nhiêu người? Chưa có đội có đăng ký được không?',
        answer:
          'Mỗi đội thi gồm từ 3 đến 5 thành viên chính thức, trong đó cử ra 01 đội trưởng đại diện liên lạc. Nếu bạn chưa có đội, hãy tham gia nhóm cộng đồng của cuộc thi hoặc liên hệ fanpage để được hỗ trợ ghép đội với các bạn có cùng chí hướng.',
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
          'Để rèn luyện tinh thần làm việc nhóm và phân chia chiến thuật giải thuật như các kỳ thi quốc tế ICPC, mỗi đội chỉ được sử dụng duy nhất 01 máy tính xách tay trong 240 phút thi đấu. Đội được khuyến khích mang thêm 01 máy dự phòng nhưng chỉ được bật khi máy chính gặp sự cố phần cứng có giám thị xác nhận.',
      },
      {
        id: 'faq-6',
        question: 'Vòng Kỹ thuật khác gì so với Vòng Chung kết?',
        answer:
          'Ở Vòng Kỹ thuật (17/10), bạn KHÔNG tự làm sản phẩm của mình. Bạn nhận một AI Agent mẫu do BTC chuẩn bị sẵn có ít nhất 6 lỗi cố ý, nhiệm vụ là tìm lỗi, sửa lớp điều khiển (harness) và chứng minh bằng dữ liệu. Đến Vòng Chung kết (31/10), bạn mới hoàn thiện sản phẩm theo ý tưởng riêng của đội mình.',
      },
      {
        id: 'faq-7',
        question: 'Quy định chốt bản nền (Baseline Freeze) tại Vòng Chung kết hoạt động ra sao?',
        answer:
          'Vòng Chung kết diễn ra trong 2 giờ liên tục. Để bảo đảm công bằng, các đội phải chốt và đẩy toàn bộ mã nguồn lên repository BTC trước 23h59 ngày 28/10. Khi thi, BTC sẽ đưa ra ràng buộc mới tại chỗ và BGK sẽ so sánh bản diff code giữa bản nền và bản nộp cuối để chấm riêng 20/100 điểm.',
      },
      {
        id: 'faq-8',
        question: 'Làm thế nào để truy cập Sổ tay thí sinh và Thể lệ đầy đủ?',
        answer:
          'Tất cả tài liệu chính thức (Kế hoạch sự kiện, Sổ tay thí sinh, Thể lệ thi đấu) được lưu trữ trên hệ thống tài liệu mở của Ban Tổ chức và gắn link trực tiếp trên thanh điều hướng của website này.',
      },
    ],
  },
  register: {
    badge: 'THAM GIA NGAY',
    title: 'Sẵn sàng bước vào thử thách AI Agent?',
    subtitle:
      'Đăng ký đội thi ngay hôm nay để bước vào hành trình 7 tuần đầy bứt phá tại Trường Đại học FPT Đà Nẵng.',
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
        desc: 'Chuẩn bị video ngắn ≤ 3 phút mô tả bài toán và giải pháp dự kiến trước 28/09.',
      },
    ],
    ctaText: 'Điền form đăng ký tham gia ngay',
    deadlineNotice: 'Hạn chót tiếp nhận đơn đăng ký: 23h59 ngày 23/09/2026',
  },
  organizers: {
    badge: 'ĐƠN VỊ TỔ CHỨC',
    title: 'Ban Chỉ đạo & Hội đồng Chuyên môn',
    subtitle: 'Sự kết hợp giữa Nhà trường, Bộ môn Kỹ thuật và Cộng đồng Công nghệ',
  },
  footer: {
    copyright: '© 2026 AI for Impact. Trường Đại học FPT Đà Nẵng. Bản quyền thuộc về Ban Tổ chức.',
    disclaimer:
      'AI for Impact 2026 là cuộc thi học thuật chính thức do Phòng ICPDP và Bộ môn Kỹ thuật Phần mềm (BM SE), Bộ môn CF - Trường Đại học FPT Đà Nẵng phối hợp tổ chức.',
    links: [
      { label: 'Sổ tay thí sinh', href: 'https://docs.google.com/document/d/e/2PACX-1vT-AIForImpact2026-Handbook/pub' },
      { label: 'Thể lệ cuộc thi', href: 'https://docs.google.com/document/d/e/2PACX-1vT-AIForImpact2026-Rules/pub' },
      { label: 'Biểu mẫu đăng ký', href: 'https://docs.google.com/forms/d/e/1FAIpQLSfWys6lCg430a08f7vWUai4fPlv8EaN966XmC5f5LQbR2fAsA/viewform' },
      { label: 'Fanpage chính thức', href: 'https://www.facebook.com/profile.php?id=61565495577626' },
    ],
  },
};
