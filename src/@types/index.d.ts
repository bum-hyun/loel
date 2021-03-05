/// <reference path="./import-png.d.ts" />
/// <reference path="./header.d.ts" />
/// <reference path="./post.d.ts" />
/// <reference path="./category.d.ts" />

interface ICodeSyntaxHighlight extends toastui.PluginInfo, toastui.Plugin {}

interface IParams {
  category?: string;
  id?: string;
}

interface IIcon {
  width?: number;
  height?: number;
  color?: string;
}

interface ExtendProps {
  authority: boolean;
  authenticated: (state: boolean) => void;
}
