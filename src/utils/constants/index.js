import { Icons } from "../../assets";

export const menu = [
  {
    id: "1",
    value: "Gulnur",
    label: "Гулнур",
  },
];

export const ADMIN_SIDEBAR = [
  {
    icon: Icons.PeopleUsers,
    title: "Группы",
    id: "e1",
    url: "groups",
  },
  {
    icon: Icons.PC,
    title: "Курсы",
    id: "e2",
    url: "courses",
  },
  {
    icon: Icons.StudentThree,
    title: "Учителя",
    id: "e3",
    url: "teachers",
  },
  {
    icon: Icons.Students,
    title: "Студенты",
    id: "e4",
    url: "students",
  },
];

export const USER_SIDEBAR = [
  {
    icon: Icons.PC,
    title: "Мои курсы",
    id: "e5",
    url: "my-courses",
  },
];
