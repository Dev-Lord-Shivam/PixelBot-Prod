import { FaInstagram, FaYoutube, FaCode } from "react-icons/fa";
import { GrNote } from "react-icons/gr";
import { MdTranslate, MdNote, MdPlagiarism } from "react-icons/md";
import { SiBloglovin } from "react-icons/si";

export const menuData = [
  {
    id: "insta-caption",
    menuicon: <FaInstagram />,
    menuname: "Insta Caption",
    description: "Generate Cool Instagram Captions",
    bgcolor: "mediumvioletred",
    path: "/content",
    sideBarIcon: <FaInstagram color="tomato"/>
  },
  {
    id: "youtube-description",
    menuicon: <FaYoutube />,
    menuname: "Youtube Description",
    description: "Create YouTube description",
    bgcolor: "red.500",
    path: "/content",
    sideBarIcon: <FaYoutube color="red"/>
  },
  {
    id: "paraphrasing",
    menuicon: <GrNote />,
    menuname: "Paraphrasing",
    description: "Increase fluency",
    bgcolor: "green.500",
    path: "/content",
    sideBarIcon: <GrNote color="green"/>
  },
  {
    id: "code-generator",
    menuicon: <FaCode />,
    menuname: "Code Generator",
    description: "Generate Code or Fix Errors",
    bgcolor: "blue.500",
    path: "/content",
    sideBarIcon: <FaCode color="blue"/>
  },
  {
    id: "translator",
    menuicon: <MdTranslate />,
    menuname: "Translator",
    description: "Unlock Languages",
    bgcolor: "gray.500",
    path: "/content",
    sideBarIcon: <MdTranslate />
  },
  {
    id: "summarizer",
    menuicon: <MdNote />,
    menuname: "Summarizer",
    description: "Summarize text",
    bgcolor: "purple.500",
    path: "/content",
    sideBarIcon: <MdNote color="tomato" />
  },
  {
    id: "blogging",
    menuicon: <SiBloglovin />,
    menuname: "Blogging",
    description: "Write Blog With AI",
    bgcolor: "deeppink",
    path: "/content",
    sideBarIcon: <SiBloglovin color="deeppink" />
  },
  {
    id: "plagiarism",
    menuicon: <MdPlagiarism />,
    menuname: "Plagiarism",
    description: "Prevent Plagiarism",
    bgcolor: "orange",
    path: "/content",
    sideBarIcon: <MdPlagiarism color="orange" />
  },
];
