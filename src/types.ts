import { ReactNode } from "react";

export type PropsWithoutChildren = {
  children?: never;
};

export type MessageFormat = {
  id: string;
  values?: Record<string, ReactNode> | undefined;
};

export type maxString = {
  max: string;
};

export type minString = {
  min: string;
};

export type PathItem = {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  length: number;
  favorite: boolean;
}

export interface LoaderInterdface {
  loading: boolean;
  startLoad: () => void;
  finishLoad: () => void;
}