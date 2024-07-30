declare module '@headlessui/react' {
    import { ComponentType, ReactNode, HTMLAttributes } from 'react';
  
    export interface DisclosureProps extends HTMLAttributes<HTMLElement> {
      as?: string | ComponentType<any>;
    }
  
    export const Disclosure: ComponentType<DisclosureProps> & {
      Button: ComponentType<HTMLAttributes<HTMLElement>>;
      Panel: ComponentType<HTMLAttributes<HTMLElement>>;
    };
  
    export const DisclosureButton: ComponentType<HTMLAttributes<HTMLElement>>;
    export const DisclosurePanel: ComponentType<HTMLAttributes<HTMLElement>>;
  
    export interface MenuProps extends HTMLAttributes<HTMLElement> {
      as?: string | ComponentType<any>;
    }
  
    export const Menu: ComponentType<MenuProps> & {
      Button: ComponentType<HTMLAttributes<HTMLElement>>;
      Items: ComponentType<HTMLAttributes<HTMLElement>>;
      Item: ComponentType<HTMLAttributes<HTMLElement>>;
    };
  
    export const MenuButton: ComponentType<HTMLAttributes<HTMLElement>>;
    export const MenuItems: ComponentType<HTMLAttributes<HTMLElement>>;
    export const MenuItem: ComponentType<HTMLAttributes<HTMLElement>>;
  }
  