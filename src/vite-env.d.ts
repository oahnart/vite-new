/// <reference types="vite/client" />

declare module "*.svg" {
  const content: React.FC<React.SVGProps<SVGElement>>;
  export default content;
}
declare const __APP_VERSION__: string