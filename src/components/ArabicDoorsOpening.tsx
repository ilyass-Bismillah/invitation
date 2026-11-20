import React from 'react';
import { MoroccanDoorEntrance } from './MoroccanDoorEntrance';

interface ArabicDoorsOpeningProps {
  onSequenceComplete: () => void;
}

export const ArabicDoorsOpening: React.FC<ArabicDoorsOpeningProps> = ({ onSequenceComplete }) => {
  return <MoroccanDoorEntrance onSequenceComplete={onSequenceComplete} />;
};

export default ArabicDoorsOpening;
