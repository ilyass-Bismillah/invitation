import React from 'react';
import { RsvpSection } from './RsvpSection';

interface ArabicRsvpCardProps {
  onReplayDoors?: () => void;
}

export const ArabicRsvpCard: React.FC<ArabicRsvpCardProps> = ({ onReplayDoors = () => {} }) => {
  return <RsvpSection onReplayDoors={onReplayDoors} />;
};

export default ArabicRsvpCard;
