export type ViewStage = 'doors' | 'invitation';

export interface RsvpFormData {
  fullName: string;
  attendance: 'attending' | 'declined';
  guestCount: number;
  companionName?: string;
  dietaryNotes?: string;
  blessingMessage?: string;
  submittedAt?: string;
}

export interface ProgramEvent {
  time: string;
  title: string;
  description: string;
}

// Backward-compatibility aliases
export type ArabicRsvpData = RsvpFormData;
export type OpeningStage = ViewStage;
