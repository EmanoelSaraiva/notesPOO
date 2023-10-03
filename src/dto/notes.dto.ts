export interface CreatedNotes {
  title: string;
  contentNotes: string;
  userId: string;
}
export interface UpdateNotesDto {
  id: string;
  title?: string;
  contentNotes?: string;
}
