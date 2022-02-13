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

export type Points = {
  lat: number,
  lng: number
};

export type PathItem = {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  distance: number;
  favorite: boolean;
  points: Points[];
}

export interface LoaderInterdface {
  loading: boolean;
  startLoad: () => void;
  finishLoad: () => void;
};