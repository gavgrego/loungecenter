export {};

declare global {
  interface CustomJwtSessionClaims {
    publicMetadata: {
      stripeCustomerId: string;
    };
    unsafeMetadata: {
      cardSelections: [];
      alliances: [];
      hasPriorityPass: boolean;
    };
    userEmail: string;
  }

  interface UserUnsafeMetadata {
    alliances?: string[] | undefined;
    cardSelections?: string[] | undefined;
    cardSelections: [];
    alliances: [];
    hasPriorityPass?: boolean | undefined;
  }
}

declare module "@tanstack/table-core" {
  interface ColumnMeta {
    // filterType: CustomFilterType | StandardFilterType;
    name?: string;
    center?: boolean;
  }
}
