import { Calendar, Car, Heart, NotebookTabs } from "lucide-react";

export const dataGeneralSidebar = [
  {
    icon: Car,
    label: "Cars",
    href: "/dashboard"
  },
  {
    icon: Calendar,
    label: "Reserved Cars",
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
    href: "dashboard/admin/cars-manager"
  },
  {
    icon: Calendar,
    label: "All reservations",
    href: "/all-reserves"
  }
];
