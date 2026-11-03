import {
  BookIcon,
  BuildingIcon,
  BriefcaseIcon,
  CarIcon,
  FactoryIcon,
  MaskIcon,
  MedicalIcon,
  PackageIcon,
  PickaxeIcon,
  ScaleIcon,
  ShieldIcon,
  StarIcon,
  TrashIcon,
  TruckIcon,
  UsersIcon,
  WrenchIcon,
} from "@/components/icons";

type Icon = typeof ShieldIcon;

export const pillars = [
  {
    title: "واقعية كاملة",
    text: "أنظمة اقتصادية وقانونية مستوحاة من الحياة الحقيقية تجعل كل قرار له وزن.",
  },
  {
    title: "مجتمع عربي",
    text: "لاعبون من مختلف الدول العربية يجمعهم شغف القصة والتمثيل الجاد.",
  },
  {
    title: "إدارة عادلة",
    text: "فريق إداري نشط يضمن تطبيق القوانين وتجربة ممتعة للجميع.",
  },
];

export type Department = {
  slug: "police" | "ems" | "government";
  name: string;
  en: string;
  short: string;
  intro: string;
  image: string;
  alt: string;
  Icon: Icon;
  responsibilities: { title: string; text: string }[];
  activities: string[];
  participation: { title: string; text: string }[];
};

export const departments: Department[] = [
  {
    slug: "police",
    name: "الشرطة",
    en: "Police Department",
    short: "حفظ الأمن، التحقيقات الجنائية، والدوريات اليومية في أنحاء المدينة.",
    intro:
      "قسم الشرطة هو خط الدفاع الأول عن النظام العام. يتعامل الضباط مع البلاغات اليومية، يحققون في الجرائم، ويحافظون على التوازن بين تطبيق القانون وصناعة قصص رول بلاي ممتعة لجميع الأطراف.",
    image: "/images/police.png",
    alt: "ضباط شرطة بجانب سيارة دورية ليلاً",
    Icon: ShieldIcon,
    responsibilities: [
      { title: "الدوريات وحفظ الأمن", text: "التواجد في الشوارع والأحياء والاستجابة السريعة لأي إخلال بالنظام." },
      { title: "التحقيقات الجنائية", text: "جمع الأدلة، استجواب المشتبه بهم، وبناء القضايا أمام الجهات القضائية." },
      { title: "إدارة المرور", text: "تنظيم حركة السير، التعامل مع الحوادث، وتطبيق قوانين القيادة." },
      { title: "الاستجابة للبلاغات", text: "التعامل مع بلاغات المواطنين وتوجيه الدعم المناسب لكل حالة." },
    ],
    activities: [
      "دوريات راجلة وبالمركبات في أنحاء المدينة",
      "نقاط تفتيش مرورية مؤقتة",
      "مطاردات وعمليات ضبط ضمن قوانين السيرفر",
      "التفاوض في حالات احتجاز الرهائن",
      "كتابة التقارير ومتابعة القضايا",
      "تدريبات دورية للضباط",
    ],
    participation: [
      { title: "اقرأ قوانين القطاع", text: "اطّلع على قوانين السيرفر العامة والإجراءات الخاصة بالشرطة." },
      { title: "قدّم طلبك", text: "يتم التقديم عبر سيرفر الديسكورد في القناة المخصصة للقطاع." },
      { title: "المقابلة والتقييم", text: "يتم تقييم المتقدمين من قبل قيادة القطاع وفق معايير معلنة." },
      { title: "فترة التدريب", text: "يخضع المقبولون لتدريب أساسي قبل بدء العمل الميداني." },
    ],
  },
  {
    slug: "ems",
    name: "الإسعاف والطوارئ",
    en: "Emergency Medical Services",
    short: "الاستجابة السريعة للحوادث، الرعاية الميدانية، وإدارة المستشفى.",
    intro:
      "طاقم الإسعاف والطوارئ هو من يصل أولاً عندما تسوء الأمور. من حوادث الطرق إلى الإصابات الميدانية، يعتمد العالم على المسعفين لإنقاذ الأرواح وإبقاء القصة مستمرة.",
    image: "/images/ems.png",
    alt: "مسعفون يحملون نقالة إلى سيارة إسعاف",
    Icon: MedicalIcon,
    responsibilities: [
      { title: "الاستجابة للطوارئ", text: "التحرك السريع لمواقع الحوادث والبلاغات الطبية في أي مكان من الخريطة." },
      { title: "الرعاية الميدانية", text: "تقديم الإسعافات الأولية وتثبيت حالة المصابين قبل النقل." },
      { title: "إدارة المستشفى", text: "استقبال المرضى ومتابعة العلاج داخل المنشآت الطبية." },
      { title: "التنسيق مع القطاعات", text: "العمل جنباً إلى جنب مع الشرطة في الحوادث والمواقف الحرجة." },
    ],
    activities: [
      "الاستجابة لحوادث الطرق والإصابات",
      "عمليات الإنقاذ في المناطق النائية",
      "رول بلاي طبي داخل المستشفى",
      "مرافقة الفعاليات والأحداث الكبرى",
      "تدريبات على سيناريوهات الطوارئ",
      "توثيق الحالات الطبية",
    ],
    participation: [
      { title: "اقرأ قوانين القطاع", text: "تعرّف على قوانين السيرفر وقواعد العمل الطبي الخاصة بالقطاع." },
      { title: "قدّم طلبك", text: "يتم التقديم عبر سيرفر الديسكورد في القناة المخصصة للقطاع." },
      { title: "المقابلة والتقييم", text: "يتم تقييم المتقدمين من قبل قيادة القطاع وفق معايير معلنة." },
      { title: "فترة التدريب", text: "يتلقى المقبولون تدريباً على الإجراءات الطبية الأساسية." },
    ],
  },
  {
    slug: "government",
    name: "الإدارة الحكومية",
    en: "Government Administration",
    short: "إدارة الشؤون الحكومية والخدمات الإدارية داخل المدينة.",
    intro: "الإدارة الحكومية هي الجهة المعنية بتنظيم الشؤون الإدارية والخدمات الحكومية والتنسيق بين القطاعات داخل مجتمع عرب ريفورجر.",
    image: "/images/government.png",
    alt: "مبنى الإدارة الحكومية في المدينة",
    Icon: BuildingIcon,
    responsibilities: [
      { title: "الشؤون الإدارية", text: "تنظيم المعاملات والإجراءات الحكومية وفق الأنظمة المعتمدة." },
      { title: "خدمة المواطنين", text: "متابعة الطلبات والمعاملات وتوجيهها إلى الجهات المختصة." },
      { title: "التنسيق بين القطاعات", text: "تنسيق الأعمال الإدارية المشتركة بين الجهات الحكومية." },
      { title: "القرارات والتنظيم", text: "متابعة القرارات والإجراءات التنظيمية المعتمدة داخل المدينة." },
    ],
    activities: ["استقبال المعاملات والطلبات", "متابعة الخدمات الحكومية", "التنسيق مع القطاعات", "تنظيم السجلات الإدارية"],
    participation: [
      { title: "اطّلع على المتطلبات", text: "تعرّف على شروط المشاركة التي تعلنها الإدارة." },
      { title: "قدّم طلبك", text: "تابع قناة التقديم المخصصة في الديسكورد الرسمي." },
      { title: "المقابلة والتقييم", text: "يتم تقييم المتقدمين من قبل الجهة المسؤولة." },
    ],
  },
];

export function getDepartment(slug: string) {
  return departments.find((d) => d.slug === slug);
}

export const jobCategories: {
  id: string;
  Icon: Icon;
  en: string;
  name: string;
  text: string;
  tasks: string[];
}[] = [
  {
    id: "mining",
    Icon: PickaxeIcon,
    en: "Mining",
    name: "التعدين",
    text: "استخراج الموارد الخام من المناجم وتوريدها إلى المصانع والتجار.",
    tasks: ["استخراج الموارد", "فرز المواد الخام", "التوريد للمصانع"],
  },
  {
    id: "logistics",
    Icon: PackageIcon,
    en: "Logistics",
    name: "الخدمات اللوجستية",
    text: "إدارة المخازن وتنظيم سلاسل الإمداد بين مواقع الإنتاج والأسواق.",
    tasks: ["إدارة المخازن", "تجهيز الشحنات", "تنظيم الإمداد"],
  },
  {
    id: "waste",
    Icon: TrashIcon,
    en: "Waste Collection",
    name: "جمع النفايات",
    text: "الحفاظ على نظافة المدينة عبر جمع النفايات ونقلها إلى مواقع المعالجة.",
    tasks: ["مسارات الجمع", "نقل النفايات", "مواقع المعالجة"],
  },
  {
    id: "manufacturing",
    Icon: FactoryIcon,
    en: "Manufacturing",
    name: "التصنيع",
    text: "تحويل المواد الخام إلى منتجات تحرك عجلة الاقتصاد في السيرفر.",
    tasks: ["تشغيل خطوط الإنتاج", "معالجة المواد", "تجهيز المنتجات"],
  },
  {
    id: "transport",
    Icon: TruckIcon,
    en: "Transportation",
    name: "النقل",
    text: "نقل البضائع والركاب بين المدن والمناطق وتشغيل خطوط النقل.",
    tasks: ["نقل البضائع", "نقل الركاب", "خطوط بين المدن"],
  },
  {
    id: "other",
    Icon: BriefcaseIcon,
    en: "Other Professions",
    name: "مهن مدنية أخرى",
    text: "المهن القانونية، الميكانيك، المطاعم والمتاجر، وغيرها من الخدمات اليومية.",
    tasks: ["المهن القانونية", "الميكانيك والورش", "المتاجر والخدمات"],
  },
];

export const otherProfessions: { Icon: Icon; name: string; text: string }[] = [
  { Icon: ScaleIcon, name: "المهن القانونية", text: "محامون وموثقون يديرون الجانب القانوني للمدينة." },
  { Icon: WrenchIcon, name: "الميكانيك", text: "صيانة المركبات وتعديلها وإدارة الورش." },
  { Icon: CarIcon, name: "الخدمات العامة", text: "سيارات الأجرة، المطاعم، والمتاجر اليومية." },
];

export const roleplayPaths: {
  Icon: Icon;
  en: string;
  name: string;
  text: string;
  href: string;
}[] = [
  {
    Icon: ShieldIcon,
    en: "Police",
    name: "الشرطة",
    text: "احفظ الأمن، حقق في الجرائم، وكن صوت القانون في المدينة.",
    href: "/departments/police",
  },
  {
    Icon: MedicalIcon,
    en: "EMS",
    name: "الإسعاف والطوارئ",
    text: "أنقذ الأرواح واستجب للحوادث في كل زاوية من الخريطة.",
    href: "/departments/ems",
  },
  {
    Icon: BuildingIcon,
    en: "Government Administration",
    name: "الإدارة الحكومية",
    text: "شارك في تنظيم الشؤون الإدارية والخدمات الحكومية داخل المدينة.",
    href: "/departments/government",
  },
  {
    Icon: UsersIcon,
    en: "Civilian Careers",
    name: "المهن المدنية",
    text: "اعمل في التعدين، النقل، التصنيع وغيرها، وابنِ ثروتك خطوة بخطوة.",
    href: "/jobs",
  },
  {
    Icon: MaskIcon,
    en: "Criminal Roleplay",
    name: "رول بلاي الجريمة",
    text: "اكتب قصصاً مشوقة في العالم السفلي ضمن قوانين واضحة وعادلة.",
    href: "/roleplay#crime",
  },
];

export type NewsCategory = "announcement" | "update" | "event" | "department";

export const newsCategories: { id: NewsCategory | "all"; label: string }[] = [
  { id: "all", label: "الكل" },
  { id: "announcement", label: "إعلانات" },
  { id: "update", label: "تحديثات" },
  { id: "event", label: "فعاليات" },
  { id: "department", label: "القطاعات" },
];

export const newsCategoryLabel: Record<NewsCategory, string> = {
  announcement: "إعلان",
  update: "تحديث",
  event: "فعالية",
  department: "القطاعات",
};

// Sample posts: replace with real announcements when available.
export const newsPosts: {
  id: string;
  category: NewsCategory;
  date: string;
  dateLabel: string;
  title: string;
  excerpt: string;
  image: string;
}[] = [
  {
    id: "police-applications",
    category: "department",
    date: "2026-02-10",
    dateLabel: "10 فبراير 2026",
    title: "فتح باب التقديم على قسم الشرطة",
    excerpt: "بدأ استقبال طلبات الانضمام لقسم الشرطة. تعرف على آلية التقديم عبر سيرفر الديسكورد.",
    image: "/images/police.png",
  },
  {
    id: "economy-update",
    category: "update",
    date: "2026-02-06",
    dateLabel: "6 فبراير 2026",
    title: "تحسينات على نظام التعدين والتصنيع",
    excerpt: "ربط أفضل بين مواقع الاستخراج وخطوط الإنتاج لتجربة اقتصادية أكثر ترابطاً.",
    image: "/images/jobs.png",
  },
  {
    id: "opening-event",
    category: "event",
    date: "2026-02-01",
    dateLabel: "1 فبراير 2026",
    title: "فعالية الافتتاح الكبرى",
    excerpt: "انضم إلينا في أول فعالية رسمية للمجتمع مع سيناريوهات خاصة وأجواء مميزة.",
    image: "/images/civilian.png",
  },
  {
    id: "rules-review",
    category: "announcement",
    date: "2026-01-28",
    dateLabel: "28 يناير 2026",
    title: "مراجعة شاملة لقوانين السيرفر",
    excerpt: "يعمل فريق الإدارة على مراجعة القوانين وتنظيمها في أقسام واضحة قبل الاعتماد النهائي.",
    image: "/images/rules.png",
  },
  {
    id: "ems-training",
    category: "department",
    date: "2026-01-24",
    dateLabel: "24 يناير 2026",
    title: "برنامج تدريبي لطاقم الإسعاف",
    excerpt: "جلسات تدريبية على سيناريوهات الطوارئ والتنسيق الميداني مع القطاعات الأخرى.",
    image: "/images/ems.png",
  },
  {
    id: "map-preview",
    category: "update",
    date: "2026-01-20",
    dateLabel: "20 يناير 2026",
    title: "معاينة أولى لخريطة العالم",
    excerpt: "نشر معاينة توضيحية للخريطة وتصنيفات المواقع بانتظار اعتماد المواقع الرسمية.",
    image: "/images/map.png",
  },
];

export type RuleCategory = {
  id: string;
  en: string;
  title: string;
  Icon: Icon;
  status: "published" | "pending";
  rules?: { q: string; a: string }[];
  topics?: string[];
};

export const ruleCategories: RuleCategory[] = [
  {
    id: "general-roleplay",
    en: "General Roleplay",
    title: "الرول بلاي العام",
    Icon: BookIcon,
    status: "published",
    rules: [
      { q: "الالتزام بالشخصية", a: "يجب البقاء داخل الشخصية طوال فترة اللعب وعدم الخلط بين الواقع والقصة." },
      { q: "احترام الجميع", a: "يمنع منعاً باتاً الإساءة أو العنصرية أو التنمر بأي شكل داخل اللعبة وخارجها." },
      { q: "منع القتل العشوائي (RDM)", a: "لا يُسمح بأي اعتداء دون سبب قصصي واضح ومبرر ضمن الرول بلاي." },
      {
        q: "منع استغلال المعلومات (Meta Gaming)",
        a: "لا يجوز استخدام معلومات حصلت عليها خارج اللعبة لصالح شخصيتك.",
      },
      { q: "قيمة الحياة", a: "تصرف كما لو أن حياة شخصيتك حقيقية، وتجنب المخاطرات غير الواقعية." },
    ],
  },
  {
    id: "crime-hostages",
    en: "Crime & Hostages",
    title: "الجريمة والرهائن",
    Icon: MaskIcon,
    status: "pending",
    topics: ["ضوابط تنفيذ العمليات الإجرامية", "إجراءات احتجاز الرهائن والتفاوض", "الحد الأدنى من التواجد الأمني"],
  },
  {
    id: "combat-looting",
    en: "Combat & Looting",
    title: "الاشتباك والنهب",
    Icon: ShieldIcon,
    status: "pending",
    topics: ["شروط بدء الاشتباك", "ما يُسمح بأخذه بعد الاشتباك", "التعامل مع المصابين"],
  },
  {
    id: "safe-zones",
    en: "Safe Zones & Government",
    title: "المناطق الآمنة والخدمات الحكومية",
    Icon: StarIcon,
    status: "pending",
    topics: ["تحديد المناطق الآمنة", "حماية المنشآت الحكومية", "التعامل مع موظفي القطاعات"],
  },
  {
    id: "jobs-professions",
    en: "Jobs & Professions",
    title: "الوظائف والمهن",
    Icon: BriefcaseIcon,
    status: "pending",
    topics: ["ضوابط العمل في المهن المدنية", "منع استغلال الأنظمة الاقتصادية", "التعامل مع المركبات والمعدات"],
  },
  {
    id: "community",
    en: "Community Rules",
    title: "قوانين المجتمع العامة",
    Icon: UsersIcon,
    status: "pending",
    topics: ["آداب التواصل في الديسكورد", "آلية تقديم الشكاوى", "التعامل مع فريق الإدارة"],
  },
];

export type MapCategory = "police" | "hospital" | "work" | "industry" | "public";

export const mapCategories: { id: MapCategory; label: string; color: string; description: string }[] = [
  { id: "police", label: "مقرات الشرطة", color: "bg-sky-400", description: "مراكز الشرطة ونقاط الانطلاق للدوريات." },
  { id: "hospital", label: "المستشفيات", color: "bg-red-400", description: "المنشآت الطبية ومقرات الإسعاف." },
  { id: "work", label: "أماكن العمل المدنية", color: "bg-olive-bright", description: "مواقع المهن المدنية اليومية." },
  { id: "industry", label: "المناطق الصناعية", color: "bg-accent", description: "المناجم والمصانع ومواقع الإنتاج." },
  { id: "public", label: "المرافق العامة", color: "bg-foreground", description: "المباني الحكومية والخدمات العامة." },
];

// Demonstration markers only. Coordinates are percentages of the preview image, not real server locations.
export const mapMarkers: { id: string; name: string; category: MapCategory; x: number; y: number; desc: string }[] = [
  { id: "pd", name: "مقر الشرطة (توضيحي)", category: "police", x: 44, y: 40, desc: "مثال لموقع مقر الشرطة الرئيسي." },
  { id: "pd-2", name: "مركز شرطة فرعي (توضيحي)", category: "police", x: 70, y: 62, desc: "مثال لمركز دوريات فرعي." },
  { id: "hospital", name: "المستشفى (توضيحي)", category: "hospital", x: 55, y: 47, desc: "مثال لموقع المستشفى المركزي." },
  { id: "clinic", name: "عيادة ميدانية (توضيحي)", category: "hospital", x: 26, y: 58, desc: "مثال لنقطة طبية في الأطراف." },
  { id: "market", name: "السوق المركزي (توضيحي)", category: "work", x: 49, y: 56, desc: "مثال لمنطقة المتاجر والخدمات." },
  { id: "depot", name: "مستودع النقل (توضيحي)", category: "work", x: 74, y: 72, desc: "مثال لمركز الخدمات اللوجستية." },
  { id: "mine", name: "منطقة التعدين (توضيحي)", category: "industry", x: 28, y: 70, desc: "مثال لموقع استخراج الموارد." },
  { id: "factory", name: "المنطقة الصناعية (توضيحي)", category: "industry", x: 66, y: 30, desc: "مثال لموقع المصانع." },
  { id: "city-hall", name: "المبنى الحكومي (توضيحي)", category: "public", x: 40, y: 50, desc: "مثال لموقع الإدارة الحكومية." },
  { id: "station", name: "محطة الحافلات (توضيحي)", category: "public", x: 58, y: 64, desc: "مثال لمرفق نقل عام." },
];
