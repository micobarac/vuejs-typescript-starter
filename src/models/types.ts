// Store
export interface SidebarState {
  isSidebarVisible: Boolean;
  isSidebarMinimal: Boolean;
  sidebarLinks: SidebarLink[];
}

// Model
export interface SidebarLink {
  name: string,
  icon: string,
  path: string
}