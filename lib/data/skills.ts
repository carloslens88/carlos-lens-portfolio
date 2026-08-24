export interface SkillGroup {
  id: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  { id: "languages", items: ["Java", "C#", "TypeScript", "JavaScript", "SQL"] },
  { id: "backend", items: ["Spring Boot", ".NET / ASP.NET MVC", "WCF", "Node.js", "Next.js API Routes"] },
  { id: "frontend", items: ["React", "Angular", "Next.js", "Tailwind CSS", "Vanilla JS"] },
  { id: "data", items: ["PostgreSQL", "MySQL", "DynamoDB", "Supabase", "Neon", "Cloudflare D1"] },
  { id: "cloud", items: ["AWS Lambda", "AWS Elastic Beanstalk", "Azure", "Cloudflare Workers", "Cloudflare R2", "Vercel"] },
  { id: "devops", items: ["Docker", "Jenkins", "Drone CI", "Git", "CI/CD Pipelines"] },
  { id: "testing", items: ["JUnit", "Mockito", "TDD", "DDD", "Selenium", "Cucumber", "Postman", "SoapUI"] },
  { id: "leadership", items: ["Engineering Management", "Technical Leadership", "Mentoring & Teaching"] },
];
