import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Collapsible from 'react-native-collapsible';

import BetterCallSaulQuotesApi from '@component/BetterCallSaulQuotesApi';
import BreakingBadQuotesApi from '@component/BreakingBadQuotesApi';
import DeathNoteQuotesApi from '@component/DeathNoteQuotesApi';
//import LuciferQuotesApi from '@component/LuciferQuotesApi';
//import OnePieceQuotesApi from '@component/OnePieceQuotesApi';
//import StrangerThingsQuotesApi from '@component/StrangerThingsQuotesApi';
//import TheLastOfUsQuotesApi from '@component/TheLastOfUsQuotesApi';

type CollapsedState = {
  betterCallSaul: boolean; 
  breakingBad: boolean;
  deathNote: boolean;
};

export default function App() {
  const [collapsed, setCollapsed] = useState<CollapsedState>({
    betterCallSaul: true,
    breakingBad: true,
    deathNote: true,
  });

  const toggleSection = (section: keyof CollapsedState) => {
    setCollapsed((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => toggleSection('betterCallSaul')}>
        <Text style={styles.header}>Better Call Saul Quotes</Text>
      </TouchableOpacity>
      <Collapsible collapsed={collapsed.betterCallSaul}>
        <BetterCallSaulQuotesApi />
      </Collapsible>

      <TouchableOpacity onPress={() => toggleSection('breakingBad')}>
        <Text style={styles.header}>Breaking Bad Quotes</Text>
      </TouchableOpacity>
      <Collapsible collapsed={collapsed.breakingBad}>
        <BreakingBadQuotesApi />
      </Collapsible>

      <TouchableOpacity onPress={() => toggleSection('deathNote')}>
        <Text style={styles.header}>Death Note Quotes</Text>
      </TouchableOpacity>
      <Collapsible collapsed={collapsed.deathNote}>
        <DeathNoteQuotesApi />
      </Collapsible>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    backgroundColor: '#f0f0f0',
    marginBottom: 5,
  },
});