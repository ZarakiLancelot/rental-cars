import { Calendar, Car, Heart, NotebookTabs } from "lucide-react";

export const dataGeneralSidebar = [
  {
    icon: Car,
    label: "Cars",
    href: "/dashboard"
  },
  {
    icon: Calendar,
    label: "Cars Reserves",
    href: "/reserves"
  },
  {
    icon: Heart,
    label: "Loved",
    href: "/loved-cars"
  },
];

export const dataAdminSidebar = [
  {
    icon: NotebookTabs,
    label: "Manage your Cars",
    href: "/manage-cars"
  },
  {
    icon: Calendar,
    label: "All reserves",
    href: "/all-reserves"
  }
];