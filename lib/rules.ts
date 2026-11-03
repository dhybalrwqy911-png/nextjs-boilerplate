export type RuleSection = { id: string; title: string; rules: string[] };
export type RuleCategory = {
  id: string;
  title: string;
  english: string;
  description: string;
  owner: string | null;
  updatedAt: string | null;
  sections: RuleSection[];
};

// Add only the community's approved rules and responsible team here.
export const ruleCategories: RuleCategory[] = [
  { id: "discord", title: "قوانين الديسكورد", english: "DISCORD", description: "مرجع تنظيم التواصل والمشاركة داخل مجتمع الديسكورد.", owner: null, updatedAt: null, sections: [] },
  { id: "roleplay", title: "قوانين الرول بلاي", english: "ROLEPLAY", description: "مرجع تجربة اللعب والتفاعل والسيناريوهات داخل السيرفر.", owner: null, updatedAt: null, sections: [] },
  { id: "gangs", title: "قوانين العصابات", english: "GANGS", description: "مرجع تنظيم العصابات والأنشطة والسيناريوهات المرتبطة بها.", owner: null, updatedAt: null, sections: [] },
  { id: "police", title: "قوانين الشرطة", english: "POLICE", description: "مرجع الأنظمة والإجراءات الخاصة بقطاع الشرطة.", owner: null, updatedAt: null, sections: [] },
  { id: "ems", title: "قوانين الإسعاف", english: "EMS", description: "مرجع الأنظمة والإجراءات الخاصة بقطاع الإسعاف والطوارئ.", owner: null, updatedAt: null, sections: [] },
  { id: "jobs", title: "قوانين الوظائف", english: "JOBS", description: "مرجع تنظيم الوظائف والمهن المدنية داخل السيرفر.", owner: null, updatedAt: null, sections: [] },
];
