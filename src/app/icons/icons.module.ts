import { NgModule } from "@angular/core";

import { FeatherModule } from "angular-feather";
import {
  Camera,
  Heart,
  Github,
  Trash2,
  AlertCircle,
  Send,
  Moon,
  Sun,
  File,
  Plus,
  Menu,
  BookOpen,
  Bold,
  Italic,
  Code,
  Link,
  CheckSquare,
  List,
  ChevronRight,
  Minus,
  Image,
  Type,
  Circle,
  Book,
  Hash,
  ChevronsRight,
  HardDrive,
  Columns,
  Smile,
  Copy,
  Download,
  Package,
  Loader,
  Save,
  GitMerge,
  Users
} from "angular-feather/icons";

const icons = {
  Camera,
  Heart,
  Github,
  Trash2,
  Send,
  Moon,
  Loader,
  Sun,
  Plus,
  Menu,
  Book,
  BookOpen,
  Bold,
  Italic,
  Smile,
  Copy,
  Download,
  Package,
  Save,
  Code,
  Link,
  CheckSquare,
  HardDrive,
  List,
  ChevronRight,
  Minus,
  Image,
  Type,
  Circle,
  Hash,
  ChevronsRight,
  Columns,
  GitMerge,
  AlertCircle,
  File,
  Users
};

@NgModule({
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule]
})
export class IconsModule { }
