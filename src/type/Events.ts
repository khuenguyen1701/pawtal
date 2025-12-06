import { Timestamp } from "firebase/firestore";

export interface EventItem {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;

  date: string;       // "Fri, Sep 19"
  dateISO: string;    // "2025-09-19"

  time: string;       // "14:00"
  place: string;      // "Asbury Hall"
  group: string;      // "Chemistry Department"

  imageURL: string;   // Firebase Storage URL or placeholder

  createdBy: string;  // organization ID
  createdAt: Timestamp;
}