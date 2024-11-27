declare module 'react-native-collapsible' {
  import React from 'react';

  interface CollapsibleProps {
    collapsed: boolean;
    children?: React.ReactNode;
  }

  export default class Collapsible extends React.Component<CollapsibleProps> {}
}