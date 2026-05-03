export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      contact_submissions: {
        Row: {
          id: string;
          created_at: string;
          name: string;
          email: string;
          company: string | null;
          phone: string | null;
          service_interest: string | null;
          message: string;
          status: "new" | "read" | "replied";
        };
        Insert: {
          id?: string;
          created_at?: string;
          name: string;
          email: string;
          company?: string | null;
          phone?: string | null;
          service_interest?: string | null;
          message: string;
          status?: "new" | "read" | "replied";
        };
        Update: {
          id?: string;
          created_at?: string;
          name?: string;
          email?: string;
          company?: string | null;
          phone?: string | null;
          service_interest?: string | null;
          message?: string;
          status?: "new" | "read" | "replied";
        };
      };
      job_applications: {
        Row: {
          id: string;
          created_at: string;
          job_id: string;
          full_name: string;
          email: string;
          phone: string | null;
          linkedin_url: string | null;
          cover_letter: string | null;
          resume_url: string | null;
          status: "pending" | "reviewing" | "interview" | "rejected" | "hired";
        };
        Insert: {
          id?: string;
          created_at?: string;
          job_id: string;
          full_name: string;
          email: string;
          phone?: string | null;
          linkedin_url?: string | null;
          cover_letter?: string | null;
          resume_url?: string | null;
          status?: "pending" | "reviewing" | "interview" | "rejected" | "hired";
        };
        Update: {
          id?: string;
          created_at?: string;
          job_id?: string;
          full_name?: string;
          email?: string;
          phone?: string | null;
          linkedin_url?: string | null;
          cover_letter?: string | null;
          resume_url?: string | null;
          status?: "pending" | "reviewing" | "interview" | "rejected" | "hired";
        };
      };
      jobs: {
        Row: {
          id: string;
          created_at: string;
          title: string;
          department: string;
          location: string;
          type: "full-time" | "part-time" | "contract" | "remote";
          description: string;
          requirements: string[];
          is_active: boolean;
        };
        Insert: {
          id?: string;
          created_at?: string;
          title: string;
          department: string;
          location: string;
          type: "full-time" | "part-time" | "contract" | "remote";
          description: string;
          requirements?: string[];
          is_active?: boolean;
        };
        Update: {
          id?: string;
          created_at?: string;
          title?: string;
          department?: string;
          location?: string;
          type?: "full-time" | "part-time" | "contract" | "remote";
          description?: string;
          requirements?: string[];
          is_active?: boolean;
        };
      };
    };
    Views: {};
    Functions: {};
    Enums: {};
  };
}
