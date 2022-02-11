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

export type Path = {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  length: number;
}

export interface LoaderInterdface {
  loading: boolean;
  startLoad: () => void;
  finishLoad: () => void;
}