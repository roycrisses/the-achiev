export function subjectClass(subject: string) {
  const key = subject.toLowerCase().split(" ")[0];
  const map: Record<string, string> = {
    physics: "subj-physics",
    chemistry: "subj-chemistry",
    mathematics: "subj-mathematics",
    maths: "subj-mathematics",
    biology: "subj-biology",
    zoology: "subj-biology",
    botany: "subj-biology",
    accountancy: "subj-accountancy",
    economics: "subj-economics",
    english: "subj-english",
    computer: "subj-computer",
    business: "subj-accountancy",
  };
  return map[key] ?? "subj-english";
}
