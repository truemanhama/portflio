export interface Skill {
  category: string;
  items: string[];
}

export const skills: Skill[] = [
  {
    category: "Engineering Software",
    items: ["SolidWorks","Fusion 360", "Proteus", "Arduino IDE", "Autodesk Eagle"]
  },
  {
    category: "Programming Languages",
    items: ["Python", "C++", "MATLAB"]
  },
 
  {
    category: "Technical Skills",
    items: ["PCB Design", "3D Printing", "Circuit Design", "Signal Processing", "CNC Programming"]
  },
  {
    category: "Soft Skills",
    items: ["Project Management", "Team Leadership", "Research", "Problem Solving", "Critical Thinking"]
  }
];