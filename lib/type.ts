// types.ts
export interface ListItem {
  id: number;
  desc: string;
  icon: React.JSX.Element;
  date: string;
  view?: string; // Optional 'view' property
}

export interface filesItem {
  id: number;
  icon: React.JSX.Element;
  bgColor: boolean;
}

export interface summaryItem {
  id: number;
  name: string;
  desc: string;
}

export interface phasesItem {
  id: number;
  icon: React.JSX.Element;
  desc: string;
  line: boolean;
}
