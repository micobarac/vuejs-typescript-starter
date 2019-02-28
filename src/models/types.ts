// Store
export interface SidebarState {
  isSidebarVisible: boolean;
  isSidebarMinimal: boolean;
  sidebarLinks: SidebarLink[];
}

// Model
export interface SidebarLink {
  name: string;
  icon: string;
  path: string;
}
