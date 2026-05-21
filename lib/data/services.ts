export type ServiceCard = {
  num: string;
  title: string;
  titleEm?: string;
  description: string;
  slug: string;
};

export type ServiceDetail = {
  num: string;
  slug: string;
  title: string;
  titleHead: string;
  titleEm: string;
  lead: string;
  items: string[];
};

export const serviceNums = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
] as const;

export type ServiceNum = (typeof serviceNums)[number];

export const serviceSlugs: Record<ServiceNum, string> = {
  "01": "medya-reklam",
  "02": "sosyal-medya-yonetimi",
  "03": "icerik-uretimi",
  "04": "seo-organik-buyume",
  "05": "gorsel-tasarim",
  "06": "web-gelistirme",
  "07": "e-ticaret",
  "08": "mailing-crm",
  "09": "ai-otomasyon",
};
